import Link from "next/link";
import { Icon } from "./Icon";
import FaqAccordion from "./FaqAccordion";
import { toRoute } from "@/lib/routes";
import type { Product } from "@/lib/types";

const CONTACT = toRoute("Contact.dc.html");
const SOLUTIONS = toRoute("Solutions.dc.html");

// Reusable product-page body. Mirrors prototypes/ProductPage.dc.html. Server-rendered
// except the FAQ accordion (client island). SEO/JSON-LD live on the route, not here.
export default function ProductPage({ product: d }: { product: Product }) {
  return (
    <div>
      {/* Hero */}
      <section className="pp-glow" style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <div className="pp-wrap" style={{ padding: "30px 24px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "var(--color-neutral-500)" }}>
            <Link href="/" style={{ color: "var(--color-neutral-400)" }}>Home</Link>
            <Icon name="ph-caret-right" style={{ fontSize: 11 }} />
            <Link href={SOLUTIONS} style={{ color: "var(--color-neutral-400)" }}>Solutions</Link>
            <Icon name="ph-caret-right" style={{ fontSize: 11 }} />
            <span style={{ color: "var(--color-text)" }}>{d.name}</span>
          </div>
        </div>
        <div className="pp-wrap pp-hero" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 48, alignItems: "center", padding: "48px 24px 64px" }}>
          <div>
            <div className="tag tag-outline" style={{ marginBottom: 20 }}>{d.badge}</div>
            <h1 style={{ fontSize: 44, lineHeight: 1.08, letterSpacing: "-.025em", margin: "0 0 18px", color: "var(--color-text)" }}>{d.tagline}</h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--color-neutral-300)", maxWidth: "36em", margin: "0 0 28px" }}>{d.blurb}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href={CONTACT} className="btn btn-primary btn-large" style={{ fontSize: 15, padding: "11px 22px" }}>{d.ctaPrimary}</Link>
              <a href="#pp-features" className="btn btn-secondary btn-large" style={{ fontSize: 15, padding: "11px 22px" }}>See capabilities</a>
            </div>
          </div>
          <div style={{ border: "1px solid var(--color-neutral-800)", borderRadius: 16, background: "var(--color-surface)", boxShadow: "var(--shadow-lg)", padding: 20 }}>
            <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 14 }}>{d.statTitle}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {d.stats.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px", borderRadius: 10, background: "var(--color-bg)", border: "1px solid var(--color-neutral-800)" }}>
                  <span style={{ fontSize: 13, color: "var(--color-neutral-400)" }}>{s.label}</span>
                  <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 16, color: s.color ?? "var(--color-text)" }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="pp-features" style={{ padding: "80px 0" }}>
        <div className="pp-wrap">
          <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>Capabilities</div>
          <h2 style={{ fontSize: 32, letterSpacing: "-.02em", margin: "0 0 32px", color: "var(--color-text)" }}>{d.featuresTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18 }}>
            {d.features.map((f, i) => (
              <div key={i} style={{ display: "flex", gap: 14, padding: 20, borderRadius: 13, background: "var(--color-surface)", border: "1px solid var(--color-neutral-800)" }}>
                <span style={{ width: 40, height: 40, flex: "none", borderRadius: 10, display: "grid", placeItems: "center", background: "var(--color-accent-900)", color: "var(--color-accent-300)" }}>
                  <Icon name={f.icon} style={{ fontSize: 21 }} />
                </span>
                <div>
                  <h3 style={{ fontSize: 15.5, margin: "0 0 5px", color: "var(--color-text)" }}>{f.title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--color-neutral-400)", margin: 0 }}>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers (optional) */}
      {d.tiers && d.tiers.length > 0 && (
        <section style={{ padding: "80px 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-divider)", borderBottom: "1px solid var(--color-divider)" }}>
          <div className="pp-wrap">
            <div style={{ textAlign: "center", marginBottom: 38 }}>
              <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>Tiers</div>
              <h2 style={{ fontSize: 32, letterSpacing: "-.02em", margin: 0, color: "var(--color-text)" }}>{d.tiersTitle}</h2>
            </div>
            <div className="pp-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18 }}>
              {d.tiers.map((t, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", padding: 26, borderRadius: 16, background: "var(--color-bg)", border: `1px solid ${t.featured ? "var(--color-accent)" : "var(--color-neutral-800)"}`, position: "relative" }}>
                  {t.featured && <span className="tag tag-accent" style={{ position: "absolute", top: -10, left: 26, fontSize: 9 }}>Most popular</span>}
                  <h3 style={{ fontSize: 20, margin: "0 0 6px", color: "var(--color-text)" }}>{t.name}</h3>
                  <p style={{ fontSize: 13, color: "var(--color-neutral-400)", margin: "0 0 18px", minHeight: 40 }}>{t.for}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 9, flex: 1 }}>
                    {t.items.map((it, j) => (
                      <div key={j} style={{ display: "flex", gap: 9, fontSize: 13, color: "var(--color-neutral-300)", lineHeight: 1.4 }}>
                        <Icon name="ph-check" weight="bold" style={{ fontSize: 14, color: "var(--color-accent-300)", flex: "none", marginTop: 2 }} />{it}
                      </div>
                    ))}
                  </div>
                  <Link href={CONTACT} className={`btn ${t.featured ? "btn-primary" : "btn-secondary"} btn-block`} style={{ marginTop: 22 }}>{t.cta}</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Built for */}
      <section style={{ padding: "64px 0 40px" }}>
        <div className="pp-wrap">
          <h2 style={{ fontSize: 24, margin: "0 0 18px", color: "var(--color-text)" }}>Built for</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {d.builtFor.map((b, i) => (
              <span key={i} className="tag tag-neutral" style={{ fontSize: 12.5, padding: "6px 14px" }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Resources (optional) */}
      {d.resources && (
        <section style={{ padding: "16px 0 56px" }}>
          <div className="pp-wrap">
            <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>Resources</div>
            <h2 style={{ fontSize: 28, letterSpacing: "-.02em", margin: "0 0 8px", color: "var(--color-text)" }}>{d.resources.title}</h2>
            <p style={{ fontSize: 15, color: "var(--color-neutral-300)", margin: "0 0 30px", maxWidth: "44em" }}>{d.resources.intro}</p>
            <div className="pp-two" style={{ display: "grid", gridTemplateColumns: d.resources.grid, gap: 26 }}>
              {d.resources.columns.map((col, i) => (
                <div key={i}>
                  <div style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: 14 }}>{col.heading}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                    {col.links.map((g, j) => (
                      <Link key={j} href={toRoute(g.href)} className="pp-link" style={{ display: "flex", gap: 9, fontSize: 13.5, lineHeight: 1.4 }}>
                        <Icon name={col.icon} style={{ color: "var(--color-accent-300)", flex: "none", marginTop: 2 }} />{g.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section style={{ padding: "24px 0 80px" }}>
        <div className="pp-wrap" style={{ maxWidth: 820 }}>
          <h2 style={{ fontSize: 28, letterSpacing: "-.02em", margin: "0 0 22px", color: "var(--color-text)" }}>Frequently asked questions</h2>
          <FaqAccordion faqs={d.faqs} />
        </div>
      </section>

      {/* CTA band */}
      <section style={{ padding: "0 0 88px" }}>
        <div className="pp-wrap">
          <div className="pp-glow" style={{ border: "1px solid var(--color-neutral-800)", borderRadius: 20, padding: "52px 40px", textAlign: "center", background: "var(--color-surface)" }}>
            <h2 style={{ fontSize: 30, letterSpacing: "-.02em", margin: "0 0 12px", color: "var(--color-text)" }}>{d.cta.title}</h2>
            <p style={{ fontSize: 16, color: "var(--color-neutral-300)", margin: "0 auto 26px", maxWidth: "34em" }}>{d.cta.body}</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href={CONTACT} className="btn btn-primary btn-large" style={{ fontSize: 15, padding: "11px 24px" }}>{d.cta.primary}</Link>
              <Link href={SOLUTIONS} className="btn btn-secondary btn-large" style={{ fontSize: 15, padding: "11px 24px" }}>{d.cta.secondary ?? "Back to all solutions"}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
