"use client";

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

import { useState } from "react";
import { Icon } from "./IconClient";

const PRODUCT_OPTIONS = [
  "Not sure yet — help me choose",
  "Millingo — Rice Mill ERP",
  "Lucoze — Healthcare HIMS",
  "DMS — Distributor Management",
  "ERP System",
  "HRMS",
  "CRM Platform",
  "Service Desk",
  "Svasamm Digital for Healthcare",
  "Svasamm Digital for Schools",
];

// Contact-form backend: API Gateway HTTP API → Lambda → SES. Handler + runbook: aws/contact-form/.
// (Function URLs are blocked by the AWS-org guardrail, so we front the Lambda with API Gateway.)
// While empty, submit falls back to an error state pointing at query@svasamm.com (never a silent
// fake-success). Public URL — safe to commit; the browser calls it directly.
const CONTACT_ENDPOINT: string = "https://p5ld0swl76.execute-api.us-east-1.amazonaws.com/";

const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const ERR = "#e88";

// Contact form island. Client-side validation, then POST to the SES-backed endpoint.
export default function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", company: "", product: PRODUCT_OPTIONS[0], message: "" });
  const [website, setWebsite] = useState(""); // honeypot — real users leave this empty
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [sent, setSent] = useState(false);
  const [sentName, setSentName] = useState("");

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF((prev) => ({ ...prev, [k]: e.target.value }));

  const errName = touched && !f.name.trim();
  const errEmail = touched && !validEmail(f.email);
  const errMsg = touched && f.message.trim().length < 3;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!f.name.trim() || !validEmail(f.email) || f.message.trim().length < 3) return;
    setStatus("sending");
    try {
      if (!CONTACT_ENDPOINT) throw new Error("endpoint not configured");
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.name.trim(),
          email: f.email.trim(),
          company: f.company.trim(),
          product: f.product,
          message: f.message.trim(),
          source: "svasamm-contact",
          website, // honeypot
        }),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setSentName(f.name.trim().split(" ")[0]);
      setSent(true);
      window.gtag?.("event", "generate_lead", { form: "contact", interest: f.product, page_location: location.href });
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setF({ name: "", email: "", company: "", product: PRODUCT_OPTIONS[0], message: "" });
    setWebsite("");
    setTouched(false);
    setStatus("idle");
    setSent(false);
  }

  return (
    <div style={{ padding: 28, borderRadius: 16, background: "var(--color-surface)", border: "1px solid var(--color-neutral-800)", boxShadow: "var(--shadow-md)" }}>
      {sent ? (
        <div style={{ textAlign: "center", padding: "36px 12px" }}>
          <div style={{ width: 60, height: 60, borderRadius: "50%", display: "grid", placeItems: "center", margin: "0 auto 18px", background: "var(--color-accent-900)", color: "var(--color-accent-200)" }}>
            <Icon name="ph-check" weight="bold" style={{ fontSize: 30 }} />
          </div>
          <h2 style={{ fontSize: 21, margin: "0 0 8px", color: "var(--color-text)" }}>Thanks, {sentName}</h2>
          <p style={{ fontSize: 14, color: "var(--color-neutral-400)", margin: "0 0 20px" }}>Your message is in. We&apos;ll reply to your email within one business day.</p>
          <button onClick={reset} className="btn btn-secondary">Send another</button>
        </div>
      ) : (
        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 15 }} noValidate>
          {/* honeypot — hidden from people, bots fill it and the server drops the submit */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
          />
          <div className="ct-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 15 }}>
            <div className="field">
              <label>Name</label>
              <input className="input" value={f.name} onChange={set("name")} placeholder="Your name" />
              {errName && <span style={{ fontSize: 11, color: ERR }}>Please enter your name</span>}
            </div>
            <div className="field">
              <label>Work email</label>
              <input className="input" type="email" value={f.email} onChange={set("email")} placeholder="you@company.com" />
              {errEmail && <span style={{ fontSize: 11, color: ERR }}>Enter a valid email</span>}
            </div>
          </div>
          <div className="field">
            <label>Company / operation</label>
            <input className="input" value={f.company} onChange={set("company")} placeholder="e.g. rice mill, hospital, distributor" />
          </div>
          <div className="field">
            <label>Which solution?</label>
            <select className="input" value={f.product} onChange={set("product")}>
              {PRODUCT_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div className="field">
            <label>What are you trying to solve?</label>
            <textarea className="input" value={f.message} onChange={set("message")} placeholder="A sentence or two about your workflow" />
            {errMsg && <span style={{ fontSize: 11, color: ERR }}>Tell us a little about your needs</span>}
          </div>
          {status === "error" && (
            <span style={{ fontSize: 13, color: ERR }}>
              Sorry — that didn&apos;t send. Please email us at{" "}
              <a href="mailto:query@svasamm.com" style={{ color: "var(--color-text)", textDecoration: "underline" }}>
                query@svasamm.com
              </a>
              .
            </span>
          )}
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={status === "sending"}
            style={{ fontSize: 15, padding: 11, opacity: status === "sending" ? 0.6 : 1 }}
          >
            {status === "sending" ? (
              "Sending…"
            ) : (
              <>
                Request a walkthrough <Icon name="ph-arrow-right" weight="bold" style={{ fontSize: 14 }} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
