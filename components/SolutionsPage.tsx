import Link from "next/link";
import HeroBackground from "./HeroBackground";
import { Icon } from "./Icon";
import { HOME_PRODUCTS, type HomeProduct } from "@/lib/home";
import { toRoute } from "@/lib/routes";

const CONTACT = toRoute("Contact.dc.html");
const vertical = HOME_PRODUCTS.filter((p) => p.kind === "vertical");
const platform = HOME_PRODUCTS.filter((p) => p.kind === "platform");

function ProductAnchor({ p, children, className, style }: { p: HomeProduct; children: React.ReactNode; className: string; style: React.CSSProperties }) {
  return p.external
    ? <a href={p.href} target="_blank" rel="noopener" className={className} style={style}>{children}</a>
    : <Link href={p.href} className={className} style={style}>{children}</Link>;
}

// Solutions page body — ports Solutions.dc.html. Reuses the shared home product list.
export default function SolutionsPage() {
  return (
    <>
      <section className="pp-glow sv-hero" style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <HeroBackground slug="services" />
        <div className="pp-wrap sv-hero-content" style={{ padding: "30px 24px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "var(--color-neutral-500)" }}>
            <Link href="/" style={{ color: "var(--color-neutral-400)" }}>Home</Link>
            <Icon name="ph-caret-right" style={{ fontSize: 11 }} />
            <span style={{ color: "var(--color-text)" }}>Solutions</span>
          </div>
        </div>
        <div className="pp-wrap sv-hero-content" style={{ padding: "40px 24px 56px", maxWidth: 760 }}>
          <div className="tag tag-outline" style={{ marginBottom: 20 }}>All solutions</div>
          <h1 style={{ fontSize: 44, lineHeight: 1.08, letterSpacing: "-.025em", margin: "0 0 16px", color: "var(--color-text)" }}>Every Svasamm product, in one place</h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--color-neutral-300)", margin: 0 }}>Vertical products carry an entire industry&apos;s workflow inside; platform modules are the horizontal systems every operation runs. Open any of them for the full detail.</p>
        </div>
      </section>

      {/* Vertical products */}
      <section style={{ padding: "56px 0 32px" }}>
        <div className="pp-wrap">
          <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 18 }}>Vertical products</div>
          <div className="sv-two" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 18 }}>
            {vertical.map((p) => (
              <ProductAnchor key={p.id} p={p} className="sv-card-hover" style={{ display: "flex", flexDirection: "column", padding: 24, borderRadius: 14, background: "var(--color-surface)", border: "1px solid var(--color-neutral-800)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                  <span style={{ width: 48, height: 48, flex: "none", borderRadius: 12, display: "grid", placeItems: "center", background: "var(--color-accent-900)", color: "var(--color-accent-300)" }}><Icon name={p.icon} style={{ fontSize: 25 }} /></span>
                  <div><h2 style={{ fontSize: 19, margin: 0, color: "var(--color-text)" }}>{p.name}</h2><span className="tag tag-accent" style={{ fontSize: 9, marginTop: 5 }}>{p.badge}</span></div>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--color-neutral-400)", flex: 1, margin: "0 0 18px" }}>{p.blurb}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: 14, color: "var(--color-accent)" }}>{p.cta} <Icon name={p.ctaIcon} weight="bold" style={{ fontSize: 13 }} /></span>
              </ProductAnchor>
            ))}
          </div>
        </div>
      </section>

      {/* Platform modules */}
      <section style={{ padding: "24px 0 56px" }}>
        <div className="pp-wrap">
          <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 18 }}>Platform modules</div>
          <div className="sv-two" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(275px,1fr))", gap: 18 }}>
            {platform.map((p) => (
              <ProductAnchor key={p.id} p={p} className="sv-card-hover" style={{ display: "flex", flexDirection: "column", padding: 22, borderRadius: 14, background: "var(--color-surface)", border: "1px solid var(--color-neutral-800)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <span style={{ width: 44, height: 44, borderRadius: 11, display: "grid", placeItems: "center", background: "var(--color-accent-900)", color: "var(--color-accent-300)" }}><Icon name={p.icon} style={{ fontSize: 23 }} /></span>
                  <span className="tag tag-outline" style={{ fontSize: 10 }}>Platform</span>
                </div>
                <h2 style={{ fontSize: 18, margin: "0 0 7px", color: "var(--color-text)" }}>{p.name}</h2>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--color-neutral-400)", flex: 1, margin: "0 0 16px" }}>{p.blurb}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: 13.5, color: "var(--color-accent)" }}>{p.cta} <Icon name="ph-arrow-right" weight="bold" style={{ fontSize: 13 }} /></span>
              </ProductAnchor>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section style={{ padding: "20px 0 88px" }}>
        <div className="pp-wrap">
          <div className="pp-glow" style={{ border: "1px solid var(--color-neutral-800)", borderRadius: 20, padding: "44px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 28, flexWrap: "wrap", background: "var(--color-surface)" }}>
            <div style={{ maxWidth: "34em" }}><h2 style={{ fontSize: 26, letterSpacing: "-.02em", margin: "0 0 8px", color: "var(--color-text)" }}>Not sure which fits?</h2><p style={{ fontSize: 15, color: "var(--color-neutral-300)", margin: 0 }}>Describe your operation and we&apos;ll point you to the right product — or tell you honestly if we&apos;re not the fit.</p></div>
            <Link href={CONTACT} className="btn btn-primary btn-large" style={{ fontSize: 15, padding: "11px 24px" }}>Talk to us <Icon name="ph-arrow-right" weight="bold" style={{ fontSize: 14 }} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
