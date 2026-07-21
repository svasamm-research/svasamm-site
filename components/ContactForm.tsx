"use client";

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

import { useState } from "react";
import { Icon } from "./IconClient";
import { CONTACT_ENDPOINT } from "@/lib/site";

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
];

const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const ERR = "#e88";

// Contact form island. Client-side validation + success state, matching the prototype.
// ponytail: submit only shows the success state — no backend yet. Wire a Route Handler
// (POST → email query@svasamm.com) when the form goes live.
export default function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", company: "", product: PRODUCT_OPTIONS[0], message: "" });
  const [website, setWebsite] = useState(""); // honeypot — real users never fill this
  const [touched, setTouched] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);
  const [sentName, setSentName] = useState("");

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF((prev) => ({ ...prev, [k]: e.target.value }));

  const errName = touched && !f.name.trim();
  const errEmail = touched && !validEmail(f.email);
  const errMsg = touched && f.message.trim().length < 3;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    setFailed(false);
    if (!f.name.trim() || !validEmail(f.email) || f.message.trim().length < 3) return;

    // Only claim success once the enquiry is actually sent. Without a configured endpoint the
    // form keeps its old optimistic behaviour so previews aren't broken before it's wired up.
    if (CONTACT_ENDPOINT) {
      setSending(true);
      try {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...f, website }),
        });
        if (!res.ok) throw new Error(String(res.status));
      } catch {
        setSending(false);
        setFailed(true);
        return;
      }
      setSending(false);
    }

    setSentName(f.name.trim().split(" ")[0]);
    setSent(true);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "generate_lead", { form: "contact", interest: f.product, page_location: location.href });
    }
  }

  function reset() {
    setF({ name: "", email: "", company: "", product: PRODUCT_OPTIONS[0], message: "" });
    setWebsite("");
    setTouched(false);
    setSent(false);
    setFailed(false);
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
          {/* Honeypot: off-screen, hidden from users and assistive tech; bots fill it. */}
          <div aria-hidden style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
            <label>Leave this field empty
              <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
            </label>
          </div>
          {failed && (
            <span style={{ fontSize: 12.5, color: ERR }}>
              Something went wrong sending your message. Please email us directly at{" "}
              <a href="mailto:query@svasamm.com" style={{ color: "var(--color-accent-300)" }}>query@svasamm.com</a>.
            </span>
          )}
          <button type="submit" disabled={sending} className="btn btn-primary btn-block" style={{ fontSize: 15, padding: 11, opacity: sending ? 0.7 : 1 }}>
            {sending ? "Sending…" : "Request a walkthrough"} <Icon name="ph-arrow-right" weight="bold" style={{ fontSize: 14 }} />
          </button>
        </form>
      )}
    </div>
  );
}
