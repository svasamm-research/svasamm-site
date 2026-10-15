"use client";

import { useState } from "react";
import type { Job } from "@/lib/jobs";
import { CONTACT_ENDPOINT } from "./ContactForm";

// /jobs: department chips, the openings, and one application form that opens over the page.
// The form posts { kind: "job", …, resume } to the contact-form Lambda, which mails it to
// work@svasamm.com with the résumé attached (aws/contact-form/index.mjs `apply`). Its limits
// are checked here first so a visitor learns at once, not after the upload: PDF/DOC/DOCX,
// under 3.5 MB. Counted as "Job Apply Opened" and "Job Application Submitted" { location: job id }.
const MAX_BYTES = 3.5 * 1024 * 1024;
const OK_EXT = ["pdf", "doc", "docx"];

function track(name: string, job: string) {
  const props = { site: "svasamm.com", page: location.pathname, location: job };
  window.plausible?.(name, { props });
  window.gtag?.("event", name.toLowerCase().replace(/[^a-z0-9]+/g, "_"), props);
}

export default function JobsBoard({ jobs, departments }: { jobs: Job[]; departments: string[] }) {
  const [dept, setDept] = useState("All");
  const [open, setOpen] = useState<Job | null>(null);
  const shown = jobs.filter((j) => dept === "All" || j.department === dept);
  const chip = (d: string, n: number) => (
    <button key={d} type="button" className="sv-res-chip" data-on={dept === d ? "" : undefined} aria-pressed={dept === d} onClick={() => setDept(d)}>
      {d} <span style={{ opacity: 0.6 }}>{n}</span>
    </button>
  );
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingBottom: 22, borderBottom: "1px solid var(--sv-line)", marginBottom: 28 }}>
        {chip("All", jobs.length)}
        {departments.map((d) => chip(d, jobs.filter((j) => j.department === d).length))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {shown.map((j) => (
          <article key={j.id} id={j.id} className="sv-card" style={{ padding: 28, scrollMarginTop: 90 }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <span className="sv-tag sv-tag-brand">{j.department}</span>
              <span style={{ fontFamily: "var(--sv-mono)", fontSize: 12, color: "var(--sv-ink-3)" }}>{j.type}</span>
            </div>
            <h2 style={{ fontSize: 24, margin: "0 0 10px" }}>{j.title}</h2>
            <p className="sv-muted" style={{ fontSize: 16, lineHeight: 1.6, margin: "0 0 16px", maxWidth: "62ch" }}>{j.summary}</p>
            <details style={{ marginBottom: 18 }}>
              <summary style={{ cursor: "pointer", fontWeight: 500, color: "var(--sv-brand)", fontSize: 15 }}>What you would do</summary>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginTop: 14 }}>
                <div>
                  <div className="sv-eyebrow" style={{ marginBottom: 8 }}>The work</div>
                  <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7, fontSize: 15 }}>{j.duties.map((d) => <li key={d}>{d}</li>)}</ul>
                </div>
                <div>
                  <div className="sv-eyebrow" style={{ marginBottom: 8 }}>We are looking for</div>
                  <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7, fontSize: 15 }}>{j.lookingFor.map((d) => <li key={d}>{d}</li>)}</ul>
                </div>
              </div>
            </details>
            <button type="button" className="sv-btn sv-btn-primary" onClick={() => { setOpen(j); track("Job Apply Opened", j.id); }}>
              Apply for this role
            </button>
          </article>
        ))}
      </div>
      {open && <ApplyForm job={open} onClose={() => setOpen(null)} />}
    </>
  );
}

function ApplyForm({ job, onClose }: { job: Job; onClose: () => void }) {
  const [f, setF] = useState({ name: "", email: "", phone: "", note: "", website: "" });
  const [file, setFile] = useState<File | null>(null);
  const [tried, setTried] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const ext = file?.name.toLowerCase().split(".").pop() ?? "";
  const problems = {
    name: !f.name.trim() && "Your name, please.",
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) && "An email address we can reply to.",
    phone: f.phone.replace(/\D/g, "").length < 8 && "A phone number with at least 8 digits.",
    file: !file ? "Attach your résumé." : !OK_EXT.includes(ext) ? "A PDF, DOC or DOCX, please." : file.size > MAX_BYTES ? "Keep it under 3.5 MB." : false,
  };
  const ok = !Object.values(problems).some(Boolean);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setTried(true);
    if (!ok || !file) return;
    setState("sending");
    try {
      const data = await new Promise<string>((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(String(r.result).split(",")[1] ?? "");
        r.onerror = () => rej(r.error);
        r.readAsDataURL(file);
      });
      const resp = await fetch(CONTACT_ENDPOINT, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "job", position: job.title, ...f, resume: { name: file.name, data } }),
      });
      const body = await resp.json().catch(() => ({}));
      if (!resp.ok) throw new Error(body.error || `status ${resp.status}`);
      setState("sent");
      track("Job Application Submitted", job.id);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "");
      setState("error");
    }
  }

  const field = (id: keyof typeof f, label: string, type = "text") => (
    <div className="sv-field">
      <label htmlFor={`ap-${id}`}>{label}</label>
      <input id={`ap-${id}`} type={type} className="sv-input" value={f[id]} onChange={set(id)}
        aria-invalid={tried && !!problems[id as keyof typeof problems]} aria-describedby={`ap-${id}-err`} />
      {tried && problems[id as keyof typeof problems] && <span id={`ap-${id}-err`} role="alert" style={{ color: "#b42318", fontSize: 13 }}>{problems[id as keyof typeof problems]}</span>}
    </div>
  );

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="ap-title" onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(11,27,43,.45)", display: "grid", placeItems: "center", padding: 16 }}>
      <div className="sv-card" style={{ width: "min(560px, 100%)", maxHeight: "90vh", overflowY: "auto", padding: 28, background: "var(--sv-surface)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start", marginBottom: 6 }}>
          <h2 id="ap-title" style={{ fontSize: 22, margin: 0 }}>Apply: {job.title}</h2>
          <button type="button" onClick={onClose} aria-label="Close" style={{ border: 0, background: "none", fontSize: 22, cursor: "pointer", color: "var(--sv-ink-3)" }}>×</button>
        </div>
        <p className="sv-muted" style={{ fontSize: 14, margin: "0 0 20px" }}>{job.department} · {job.type}</p>
        {state === "sent" ? (
          <div role="status">
            <p style={{ fontSize: 16, lineHeight: 1.6 }}>Thank you, {f.name.split(" ")[0]}. Your application has reached us — we read every one and reply by email.</p>
            <button type="button" className="sv-btn sv-btn-secondary" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={f.website} onChange={set("website")}
              style={{ position: "absolute", left: -9999, width: 1, height: 1 }} />
            {field("name", "Your name")}
            {field("email", "Email", "email")}
            {field("phone", "Phone", "tel")}
            <div className="sv-field">
              <label htmlFor="ap-file">Résumé (PDF, DOC or DOCX, under 3.5 MB)</label>
              <input id="ap-file" type="file" accept=".pdf,.doc,.docx" className="sv-input" onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                aria-invalid={tried && !!problems.file} />
              {tried && problems.file && <span role="alert" style={{ color: "#b42318", fontSize: 13 }}>{problems.file}</span>}
            </div>
            <div className="sv-field">
              <label htmlFor="ap-note">Anything you would like us to know (optional)</label>
              <textarea id="ap-note" className="sv-input" rows={4} value={f.note} onChange={set("note")} />
            </div>
            {state === "error" && (
              <p role="alert" style={{ color: "#b42318", fontSize: 14, margin: 0 }}>
                {serverError || "It did not send."} You can also email your résumé to work@svasamm.com.
              </p>
            )}
            <button type="submit" className="sv-btn sv-btn-primary" disabled={state === "sending"}>
              {state === "sending" ? "Sending…" : "Send application"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
