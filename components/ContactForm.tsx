"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (
      event: string,
      opts?: { props?: Record<string, string> },
    ) => void;
  }
}

import { useEffect, useState } from "react";
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

// Product-page CTAs pass ?solution=<product-id>; this maps it to the matching option so the
// dropdown pre-selects. Home/Solutions CTAs omit the param → stays "Not sure yet".
const SOLUTION_BY_ID: Record<string, string> = {
  millingo: "Millingo — Rice Mill ERP",
  lucoze: "Lucoze — Healthcare HIMS",
  dms: "DMS — Distributor Management",
  erp: "ERP System",
  hrms: "HRMS",
  crm: "CRM Platform",
  "service-desk": "Service Desk",
  "digital-healthcare": "Svasamm Digital for Healthcare",
  "digital-schools": "Svasamm Digital for Schools",
};

// Contact-form backend: API Gateway HTTP API → Lambda → SES. Handler + runbook: aws/contact-form/.
// (Function URLs are blocked by the AWS-org guardrail, so we front the Lambda with API Gateway.)
// While empty, submit falls back to an error state pointing at query@svasamm.com (never a silent
// fake-success). Public URL — safe to commit; the browser calls it directly.
const CONTACT_ENDPOINT: string =
  "https://p5ld0swl76.execute-api.us-east-1.amazonaws.com/";

const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const ERR = "#b42318"; // design's .ct-err red
// Ports the design's inline .ct-err rule (not a global class).
const errStyle = {
  fontSize: 12.5,
  color: ERR,
  marginTop: 5,
  display: "block" as const,
};

// Contact form island. Client-side validation, then POST to the SES-backed endpoint.
export default function ContactForm() {
  const [f, setF] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: PRODUCT_OPTIONS[0],
  });
  const [website, setWebsite] = useState(""); // honeypot — real users leave this empty
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [sent, setSent] = useState(false);
  const [sentName, setSentName] = useState("");

  // Pre-select "Which solution?" from ?solution=<product-id> set by product-page CTAs.
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("solution");
    const opt = id ? SOLUTION_BY_ID[id] : undefined;
    if (opt) setF((prev) => ({ ...prev, product: opt }));
  }, []);

  const set =
    (k: keyof typeof f) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setF((prev) => ({ ...prev, [k]: e.target.value }));

  const validPhone = (v: string) => v.replace(/\D/g, "").length >= 8;
  const errName = touched && !f.name.trim();
  const errEmail = touched && !validEmail(f.email);
  const errPhone = touched && !validPhone(f.phone);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!f.name.trim() || !validEmail(f.email) || !validPhone(f.phone)) return;
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
          phone: f.phone.trim(),
          product: f.product,
          source: "svasamm-contact",
          website, // honeypot
        }),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setSentName(f.name.trim().split(" ")[0]);
      setSent(true);
      window.gtag?.("event", "generate_lead", {
        form: "contact",
        interest: f.product,
        page_location: location.href,
      });
      // Dual-emit to Plausible (cookieless, consent-independent). "Lead Submitted" must be added
      // as a Goal in the Plausible dashboard to show up (pageviews are automatic).
      window.plausible?.("Lead Submitted", {
        props: { interest: f.product || "unspecified" },
      });
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setF({
      name: "",
      email: "",
      company: "",
      phone: "",
      product: PRODUCT_OPTIONS[0],
    });
    setWebsite("");
    setTouched(false);
    setStatus("idle");
    setSent(false);
  }

  return (
    <div className="sv-card" style={{ padding: 30, boxShadow: "var(--sv-sh-3)" }}>
      {sent ? (
        <div style={{ textAlign: "center", padding: "40px 12px" }}>
          <span
            className="sv-chip"
            style={{
              width: 60,
              height: 60,
              margin: "0 auto 20px",
              background: "var(--sv-teal-50)",
              borderColor: "var(--sv-teal-50)",
              color: "var(--sv-teal)",
            }}
          >
            <Icon name="ph-check" size={30} />
          </span>
          <h2 style={{ fontSize: 23, margin: "0 0 10px" }}>Thanks, {sentName}</h2>
          <p
            className="sv-muted"
            style={{ fontSize: 15, margin: "0 0 24px" }}
          >
            We&apos;ve got your details. We&apos;ll call you within one business
            day to understand what you need.
          </p>
          <button onClick={reset} className="sv-btn sv-btn-secondary">
            Send another
          </button>
        </div>
      ) : (
        <form
          onSubmit={submit}
          style={{ display: "flex", flexDirection: "column", gap: 17 }}
          noValidate
        >
          {/* honeypot — hidden from people, bots fill it and the server drops the submit */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            style={{
              position: "absolute",
              left: "-9999px",
              width: 1,
              height: 1,
              opacity: 0,
            }}
          />
          <div
            className="pp-two"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 17 }}
          >
            <div className="sv-field">
              <label htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                className="sv-input"
                value={f.name}
                onChange={set("name")}
                placeholder="Your name"
                aria-invalid={errName || undefined}
                aria-describedby={errName ? "cf-name-err" : undefined}
              />
              {errName && (
                <span id="cf-name-err" role="alert" style={errStyle}>
                  Please enter your name
                </span>
              )}
            </div>
            <div className="sv-field">
              <label htmlFor="cf-email">Work email</label>
              <input
                id="cf-email"
                className="sv-input"
                type="email"
                value={f.email}
                onChange={set("email")}
                placeholder="you@company.com"
                aria-invalid={errEmail || undefined}
                aria-describedby={errEmail ? "cf-email-err" : undefined}
              />
              {errEmail && (
                <span id="cf-email-err" role="alert" style={errStyle}>
                  Enter a valid email
                </span>
              )}
            </div>
          </div>
          <div
            className="pp-two"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 17 }}
          >
            <div className="sv-field">
              <label htmlFor="cf-phone">Phone</label>
              <input
                id="cf-phone"
                className="sv-input"
                type="tel"
                value={f.phone}
                onChange={set("phone")}
                placeholder="+91 9XXXXXXXXX"
                aria-invalid={errPhone || undefined}
                aria-describedby={errPhone ? "cf-phone-err" : undefined}
              />
              {errPhone && (
                <span id="cf-phone-err" role="alert" style={errStyle}>
                  Enter a number we can call you on
                </span>
              )}
            </div>
            <div className="sv-field">
              <label htmlFor="cf-company">Company / operation</label>
              <input
                id="cf-company"
                className="sv-input"
                value={f.company}
                onChange={set("company")}
                placeholder="e.g. rice mill, school, hospital"
              />
            </div>
          </div>
          <div className="sv-field">
            <label htmlFor="cf-product">Which solution?</label>
            <select
              id="cf-product"
              className="sv-input"
              value={f.product}
              onChange={set("product")}
            >
              {PRODUCT_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
          {status === "error" && (
            <span role="alert" style={{ fontSize: 13, color: ERR }}>
              Sorry — that didn&apos;t send. Please email us at{" "}
              <a
                href="mailto:query@svasamm.com"
                style={{
                  color: "var(--sv-ink)",
                  textDecoration: "underline",
                }}
              >
                query@svasamm.com
              </a>
              .
            </span>
          )}
          <button
            type="submit"
            className="sv-btn sv-btn-primary sv-btn-block sv-btn-lg"
            disabled={status === "sending"}
            style={{ opacity: status === "sending" ? 0.6 : 1 }}
          >
            {status === "sending" ? (
              "Sending…"
            ) : (
              <>
                Request a walkthrough <Icon name="ph-arrow-right" size={17} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
