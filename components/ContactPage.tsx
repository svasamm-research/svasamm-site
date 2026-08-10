import Link from "next/link";
import { Icon } from "./Icon";
import ContactForm from "./ContactForm";

// Contact page body — ports Contact.dc.html onto the --sv-* design system. Left column is
// static contact info (sv-card detail rows with sv-chip icons); the form on the right is the
// client island (owns its own sv-card wrapper).
export default function ContactPage() {
  return (
    <section
      style={{
        borderBottom: "1px solid var(--sv-line)",
        background:
          "radial-gradient(56% 74% at 8% 0%, var(--sv-brand-50), transparent 60%), linear-gradient(180deg, #fbfcfe 0%, var(--sv-bg) 76%)",
      }}
    >
      <div className="sv-wrap" style={{ padding: "22px 24px 0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            fontSize: 13.5,
            color: "var(--sv-ink-3)",
          }}
        >
          <Link href="/" style={{ color: "var(--sv-ink-2)" }}>
            Home
          </Link>
          <Icon name="ph-caret-right" size={14} />
          <span style={{ color: "var(--sv-ink)" }}>Contact</span>
        </div>
      </div>
      <div
        className="sv-wrap pp-two"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          padding: "48px 24px 80px",
          alignItems: "start",
        }}
      >
        <div>
          <span className="sv-tag sv-tag-brand" style={{ marginBottom: 20 }}>
            Get started
          </span>
          <h1 style={{ margin: "0 0 18px", fontSize: 46, maxWidth: "17ch" }}>
            Tell us what you run. We&apos;ll show you the fit.
          </h1>
          <p
            className="sv-muted"
            style={{
              fontSize: 17.5,
              lineHeight: 1.62,
              margin: "0 0 34px",
              maxWidth: "48ch",
            }}
          >
            A short walkthrough with the people who build the software — not a
            sales script. We&apos;ll map your workflow to a product and be
            honest about where it fits.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a
              href="mailto:query@svasamm.com"
              className="sv-card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "16px 18px",
                color: "var(--sv-ink)",
              }}
            >
              <span className="sv-chip sv-chip-sm">
                <Icon name="ph-envelope-simple" size={18} />
              </span>
              <span>
                <span
                  style={{
                    display: "block",
                    fontSize: 12.5,
                    color: "var(--sv-ink-3)",
                  }}
                >
                  Email
                </span>
                <span style={{ fontWeight: 500 }}>query@svasamm.com</span>
              </span>
            </a>
            <a
              href="tel:+919007793575"
              className="sv-card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "16px 18px",
                color: "var(--sv-ink)",
              }}
            >
              <span className="sv-chip sv-chip-sm">
                <Icon name="ph-phone" size={18} />
              </span>
              <span>
                <span
                  style={{
                    display: "block",
                    fontSize: 12.5,
                    color: "var(--sv-ink-3)",
                  }}
                >
                  Phone
                </span>
                <span style={{ fontWeight: 500 }}>+91 90077 93575</span>
              </span>
            </a>
            <div
              className="sv-card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "16px 18px",
                color: "var(--sv-ink)",
              }}
            >
              <span className="sv-chip sv-chip-sm">
                <Icon name="ph-map-pin" size={18} />
              </span>
              <span>
                <span
                  style={{
                    display: "block",
                    fontSize: 12.5,
                    color: "var(--sv-ink-3)",
                  }}
                >
                  Office
                </span>
                <span style={{ fontWeight: 500 }}>
                  Nabagram, Konnagar, Hooghly, WB 712246
                </span>
              </span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
