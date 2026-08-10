import Link from "next/link";
import { Icon } from "./Icon";
import FaqAccordion from "./FaqAccordion";
import { toRoute } from "@/lib/routes";
import type { Product } from "@/lib/types";

const CONTACT = toRoute("Contact.dc.html");
const SOLUTIONS = toRoute("Solutions.dc.html");
// Product-page contact CTAs carry the product id so the contact form pre-selects "Which solution?".
const CONTACT_FOR = (id: string) =>
  `${CONTACT}?solution=${encodeURIComponent(id)}`;

// Mono figcaption under the framed hero photo (ports ProductPage.dc.html capMap).
const HERO_CAPTION: Record<string, string> = {
  millingo: "Rice milling, in operation",
  dms: "Across the distributor & OEM channel",
  erp: "One connected system",
  hrms: "Your workforce, handled",
  crm: "Relationships that close",
  "service-desk": "Support, on time",
};

// Reusable product-page body. Ports prototypes/ProductPage.dc.html onto the --sv-*
// design system (real .sv-card surfaces, framed hero photo on a brand-50 wash, navy
// CTA band). Server-rendered except the FAQ accordion. SEO/JSON-LD live on the route.
export default function ProductPage({ product: d }: { product: Product }) {
  const caption = HERO_CAPTION[d.id] ?? "";
  return (
    <div>
      {/* Hero — brand-50 wash + framed photo */}
      <section
        className="pp-hero-wash"
        style={{ borderBottom: "1px solid var(--sv-line)" }}
      >
        <div className="sv-wrap" style={{ padding: "22px 24px 0" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--sv-mono)",
              fontSize: 12,
              color: "var(--sv-ink-3)",
            }}
          >
            <Link href="/" style={{ color: "var(--sv-ink-3)" }}>
              Home
            </Link>
            <Icon name="ph-caret-right" size={11} />
            <Link href={SOLUTIONS} style={{ color: "var(--sv-ink-3)" }}>
              Solutions
            </Link>
            <Icon name="ph-caret-right" size={11} />
            <span style={{ color: "var(--sv-ink-2)" }}>{d.name}</span>
          </div>
        </div>
        <div className="sv-wrap pp-hero" style={{ padding: "52px 24px 72px" }}>
          <div>
            <span
              className="sv-tag sv-tag-brand"
              style={{ marginBottom: 22 }}
            >
              {d.badge}
            </span>
            <h1 style={{ maxWidth: "15ch", margin: "0 0 18px" }}>
              {d.tagline}
            </h1>
            <p
              className="sv-muted"
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                maxWidth: "38ch",
                margin: "0 0 30px",
              }}
            >
              {d.blurb}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link
                href={CONTACT_FOR(d.id)}
                className="sv-btn sv-btn-primary sv-btn-lg"
              >
                {d.ctaPrimary}
              </Link>
              <a
                href="#pp-features"
                className="sv-btn sv-btn-secondary sv-btn-lg"
              >
                See capabilities
              </a>
            </div>
          </div>
          <figure
            className="sv-card"
            style={{
              padding: 10,
              boxShadow: "var(--sv-sh-3)",
              overflow: "hidden",
            }}
          >
            {/* Same-origin licensed photo per product; all 6 product ids have one. */}
            <img
              src={`/hero/${d.id}.webp`}
              alt=""
              loading="eager"
              style={{
                width: "100%",
                aspectRatio: "4 / 3",
                objectFit: "cover",
                borderRadius: "var(--sv-r)",
              }}
            />
            <figcaption
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 8px 4px",
                fontFamily: "var(--sv-mono)",
                fontSize: 12,
                color: "var(--sv-ink-3)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--sv-teal)",
                  flex: "none",
                }}
              />
              {caption}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Capabilities */}
      <section id="pp-features" style={{ padding: "88px 0" }}>
        <div className="sv-wrap">
          <div className="sv-eyebrow">Capabilities</div>
          <h2 style={{ margin: "0 0 32px" }}>{d.featuresTitle}</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 18,
            }}
          >
            {d.features.map((f, i) => (
              <div
                key={i}
                className="sv-card"
                style={{ display: "flex", gap: 16, padding: 24 }}
              >
                <span className="sv-chip sv-chip-sm">
                  <Icon name={f.icon} size={19} />
                </span>
                <div>
                  <h3 style={{ fontSize: 17, margin: "0 0 5px" }}>{f.title}</h3>
                  <p
                    className="sv-muted"
                    style={{ fontSize: 14, lineHeight: 1.55, margin: 0 }}
                  >
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for */}
      <section style={{ padding: "16px 0 48px" }}>
        <div className="sv-wrap">
          <h2 style={{ fontSize: 24, margin: "0 0 18px" }}>Built for</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {d.builtFor.map((b, i) => (
              <span
                key={i}
                className="sv-tag sv-tag-outline"
                style={{
                  fontSize: 13,
                  padding: "7px 14px",
                  textTransform: "none",
                  letterSpacing: 0,
                  fontFamily: "var(--sv-font)",
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Resources (optional) */}
      {d.resources && (
        <section style={{ padding: "16px 0 72px" }}>
          <div className="sv-wrap">
            <div className="sv-card" style={{ padding: 36 }}>
              <div className="sv-eyebrow">Resources</div>
              <h2 style={{ fontSize: 28, margin: "0 0 8px" }}>
                {d.resources.title}
              </h2>
              <p
                className="sv-muted"
                style={{ fontSize: 15, margin: "0 0 30px", maxWidth: "44em" }}
              >
                {d.resources.intro}
              </p>
              <div
                className="pp-two"
                style={{
                  display: "grid",
                  gridTemplateColumns: d.resources.grid,
                  gap: 26,
                }}
              >
                {d.resources.columns.map((col, i) => (
                  <div key={i}>
                    <div
                      style={{
                        fontFamily: "var(--sv-mono)",
                        fontSize: 11,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        color: "var(--sv-ink-3)",
                        marginBottom: 14,
                      }}
                    >
                      {col.heading}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 11,
                      }}
                    >
                      {col.links.map((g, j) => (
                        <Link
                          key={j}
                          href={toRoute(g.href)}
                          className="pp-reslink"
                        >
                          <Icon
                            name={col.icon}
                            size={17}
                            style={{
                              color: "var(--sv-brand)",
                              flex: "none",
                              marginTop: 2,
                            }}
                          />
                          {g.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tiers (optional) */}
      {d.tiers && d.tiers.length > 0 && (
        <section
          style={{
            padding: "88px 0",
            background: "var(--sv-bg-subtle)",
            borderTop: "1px solid var(--sv-line)",
            borderBottom: "1px solid var(--sv-line)",
          }}
        >
          <div className="sv-wrap">
            <div style={{ marginBottom: 38 }}>
              <div className="sv-eyebrow">Tiers</div>
              <h2 style={{ margin: 0 }}>{d.tiersTitle}</h2>
            </div>
            <div
              className="pp-two"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 18,
              }}
            >
              {d.tiers.map((t, i) => (
                <div
                  key={i}
                  className="sv-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 30,
                    position: "relative",
                    borderColor: t.featured
                      ? "var(--sv-brand-300)"
                      : "var(--sv-line)",
                    boxShadow: t.featured ? "var(--sv-sh-2)" : "var(--sv-sh-1)",
                  }}
                >
                  {t.featured && (
                    <span
                      className="sv-tag sv-tag-brand"
                      style={{ position: "absolute", top: -11, left: 30 }}
                    >
                      {t.featuredLabel ?? "Most popular"}
                    </span>
                  )}
                  <h3 style={{ fontSize: 21, margin: "0 0 6px" }}>{t.name}</h3>
                  <p
                    className="sv-muted"
                    style={{ fontSize: 14, margin: "0 0 20px", minHeight: 42 }}
                  >
                    {t.for}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 11,
                      flex: 1,
                    }}
                  >
                    {t.items.map((it, j) => (
                      <div
                        key={j}
                        style={{
                          display: "flex",
                          gap: 10,
                          fontSize: 14,
                          color: "var(--sv-ink-2)",
                          lineHeight: 1.45,
                        }}
                      >
                        <Icon
                          name="ph-check"
                          size={15}
                          style={{
                            color: "var(--sv-brand)",
                            flex: "none",
                            marginTop: 2,
                          }}
                        />
                        {it}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={CONTACT_FOR(d.id)}
                    className={`sv-btn ${t.featured ? "sv-btn-primary" : "sv-btn-secondary"} sv-btn-block`}
                    style={{ marginTop: 28 }}
                  >
                    {t.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section style={{ padding: "88px 0 72px" }}>
        <div className="sv-wrap" style={{ maxWidth: 880 }}>
          <h2 style={{ fontSize: 28, margin: "0 0 22px" }}>
            Frequently asked questions
          </h2>
          <FaqAccordion faqs={d.faqs} />
        </div>
      </section>

      {/* CTA band — navy deep field */}
      <section style={{ padding: "0 0 88px" }}>
        <div className="sv-wrap">
          <div
            className="sv-field-deep"
            style={{ padding: "64px 48px", textAlign: "center" }}
          >
            <h2 style={{ margin: "0 0 12px" }}>{d.cta.title}</h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,.72)",
                margin: "0 auto 28px",
                maxWidth: "34em",
              }}
            >
              {d.cta.body}
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                href={CONTACT_FOR(d.id)}
                className="sv-btn sv-btn-inv sv-btn-lg"
              >
                {d.cta.primary}
              </Link>
              <Link
                href={SOLUTIONS}
                className="sv-btn sv-btn-inv-outline sv-btn-lg"
              >
                {d.cta.secondary ?? "Back to all solutions"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
