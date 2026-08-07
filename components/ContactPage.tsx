import Link from "next/link";
import { Icon } from "./Icon";
import ContactForm from "./ContactForm";

// Contact page body — ports Contact.dc.html. Left column is static contact info; the form
// on the right is the client island.
export default function ContactPage() {
  return (
    <section
      className="pp-glow"
      style={{ borderBottom: "1px solid var(--color-divider)" }}
    >
      <div className="pp-wrap" style={{ padding: "30px 24px 0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12.5,
            color: "var(--color-neutral-500)",
          }}
        >
          <Link href="/" style={{ color: "var(--color-neutral-400)" }}>
            Home
          </Link>
          <Icon name="ph-caret-right" style={{ fontSize: 11 }} />
          <span style={{ color: "var(--color-text)" }}>Contact</span>
        </div>
      </div>
      <div
        className="pp-wrap pp-two"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 52,
          padding: "44px 24px 72px",
          alignItems: "start",
        }}
      >
        <div>
          <div className="tag tag-outline" style={{ marginBottom: 20 }}>
            Get started
          </div>
          <h1
            style={{
              fontSize: 42,
              lineHeight: 1.08,
              letterSpacing: "-.025em",
              margin: "0 0 16px",
              color: "var(--color-text)",
            }}
          >
            Tell us what you run. We&apos;ll show you the fit.
          </h1>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--color-neutral-300)",
              margin: "0 0 30px",
            }}
          >
            A short walkthrough with the people who build the software — not a
            sales script. We&apos;ll map your workflow to a product and be
            honest about where it fits.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <a
              href="mailto:query@svasamm.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: "var(--color-text)",
              }}
            >
              <span className="sv-chip">
                <Icon name="ph-envelope-simple" style={{ fontSize: 19 }} />
              </span>
              <span>
                <span
                  style={{
                    display: "block",
                    fontSize: 12,
                    color: "var(--color-neutral-500)",
                  }}
                >
                  Email
                </span>
                query@svasamm.com
              </span>
            </a>
            <a
              href="tel:+919007793575"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: "var(--color-text)",
              }}
            >
              <span className="sv-chip">
                <Icon name="ph-phone" style={{ fontSize: 19 }} />
              </span>
              <span>
                <span
                  style={{
                    display: "block",
                    fontSize: 12,
                    color: "var(--color-neutral-500)",
                  }}
                >
                  Phone
                </span>
                +91 90077 93575
              </span>
            </a>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: "var(--color-text)",
              }}
            >
              <span className="sv-chip">
                <Icon name="ph-map-pin" style={{ fontSize: 19 }} />
              </span>
              <span>
                <span
                  style={{
                    display: "block",
                    fontSize: 12,
                    color: "var(--color-neutral-500)",
                  }}
                >
                  Office
                </span>
                Nabagram, Konnagar, Hooghly, WB 712246
              </span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
