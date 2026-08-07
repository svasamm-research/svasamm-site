import type { Metadata } from "next";
import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductFilter from "@/components/ProductFilter";
import JsonLd from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { HOME_PRODUCTS, REGIONS, WHYS, HOME_JSONLD } from "@/lib/home";
import { toRoute } from "@/lib/routes";

const SOLUTIONS = toRoute("Solutions.dc.html");
const CONTACT = toRoute("Contact.dc.html");
const vertical = HOME_PRODUCTS.filter((p) => p.kind === "vertical");

export const metadata: Metadata = {
  title: { absolute: "Vertical ERPs for Rice Mills, Hospitals & Distributors | Svasamm" },
  description:
    "Svasamm Research builds vertical ERPs and business platforms — Millingo rice-mill ERP, Lucoze healthcare HIMS, distributor management, ERP, HRMS, CRM and service desk. API-first, self-hostable, India-first.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Svasamm",
    title: "Svasamm — Vertical ERPs & Business Software",
    description: "Purpose-built vertical ERPs and platform modules for Indian operations. Millingo, Lucoze, DMS and more.",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Svasamm — vertical ERPs & business platforms" }],
  },
};

// Home — ports Svasamm.dc.html. Everything server-rendered except the product filter island.
export default function Home() {
  return (
    <>
      <JsonLd data={HOME_JSONLD} />
      <SiteHeader active="home" />
      <main id="main" className="flex-1">
        {/* HERO */}
        <section className="pp-glow sv-hero" style={{ borderBottom: "1px solid var(--color-divider)" }}>
          <HeroBackground slug="home" />
          <div className="pp-wrap sv-hero-content" style={{ padding: "76px 24px 84px" }}>
            <div style={{ maxWidth: "56ch" }}>
              <div className="tag tag-outline" style={{ marginBottom: 22 }}>Svasamm Research Pvt Ltd · India</div>
              <h1 style={{ fontSize: 52, lineHeight: 1.06, letterSpacing: "-.025em", margin: "0 0 20px", color: "var(--color-text)", maxWidth: "16ch" }}>Business software that fits how your operation actually runs.</h1>
              <p style={{ fontSize: 17.5, lineHeight: 1.6, color: "var(--color-neutral-300)", maxWidth: "34em", margin: "0 0 30px" }}>Svasamm builds vertical ERPs and business platforms — running rice mills, hospitals and distributor networks. API-first, self-hostable, and configured to your workflow instead of forcing you into someone else&apos;s.</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 34 }}>
                <Link href={SOLUTIONS} className="btn btn-primary btn-large" style={{ fontSize: 15, padding: "11px 22px" }}>Explore solutions <Icon name="ph-arrow-right" weight="bold" style={{ fontSize: 14 }} /></Link>
                <Link href={CONTACT} className="btn btn-secondary btn-large" style={{ fontSize: 15, padding: "11px 22px" }}>Book a walkthrough</Link>
              </div>
              <div style={{ display: "flex", gap: 30, flexWrap: "wrap" }}>
                {[["Workflow-native", "Built per industry"], ["Self-hostable", "Your infra or ours"], ["India-first", "GST · ABDM · CMR"]].map(([t, s]) => (
                  <div key={t}>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 15, color: "var(--color-text)" }}>{t}</div>
                    <div style={{ fontSize: 12.5, color: "var(--color-neutral-500)" }}>{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS (filter island) */}
        <section id="products" style={{ padding: "88px 0" }}>
          <div className="pp-wrap">
            <ProductFilter products={HOME_PRODUCTS} />
          </div>
        </section>

        {/* VERTICAL SPOTLIGHT */}
        <section style={{ padding: "80px 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-divider)", borderBottom: "1px solid var(--color-divider)" }}>
          <div className="pp-wrap">
            <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>Vertical products</div>
            <h2 style={{ fontSize: 34, letterSpacing: "-.02em", margin: "0 0 8px", color: "var(--color-text)" }}>Built for a single industry, not bent to fit</h2>
            <p style={{ fontSize: 16, color: "var(--color-neutral-300)", margin: "0 0 36px", maxWidth: "44em" }}>Generic ERPs are configured until they almost work. Our vertical products ship with the workflow, terminology and compliance of the industry already inside.</p>
            <div className="sv-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18 }}>
              {vertical.map((p) => {
                const inner = (
                  <>
                    <div style={{ height: 132, position: "relative", display: "grid", placeItems: "center", background: "radial-gradient(120% 120% at 30% 0%, var(--color-accent-800), var(--color-bg) 78%)", borderBottom: "1px solid var(--color-neutral-800)" }}>
                      <Icon name={p.icon} style={{ fontSize: 46, color: "var(--color-accent-200)" }} />
                      <span className="tag tag-accent" style={{ position: "absolute", top: 12, left: 12, fontSize: 9 }}>{p.badge}</span>
                    </div>
                    <div style={{ padding: 20, display: "flex", flexDirection: "column", flex: 1 }}>
                      <h3 style={{ fontSize: 19, margin: "0 0 6px", color: "var(--color-text)" }}>{p.name}</h3>
                      <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--color-neutral-400)", flex: 1, margin: "0 0 16px" }}>{p.long}</p>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 500, fontSize: 13.5, color: "var(--color-accent)" }}>{p.cta} <Icon name={p.ctaIcon} weight="bold" style={{ fontSize: 13 }} /></span>
                    </div>
                  </>
                );
                const st: React.CSSProperties = { display: "flex", flexDirection: "column", borderRadius: 16, overflow: "hidden", background: "var(--color-bg)", border: "1px solid var(--color-neutral-800)" };
                return p.external
                  ? <a key={p.id} href={p.href} target="_blank" rel="noopener" className="sv-card-hover" style={st}>{inner}</a>
                  : <Link key={p.id} href={p.href} className="sv-card-hover" style={st}>{inner}</Link>;
              })}
            </div>
          </div>
        </section>

        {/* REGIONS */}
        <section id="regions" style={{ padding: "88px 0" }}>
          <div className="pp-wrap sv-two" style={{ display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: 52, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>Where we work</div>
              <h2 style={{ fontSize: 34, letterSpacing: "-.02em", margin: "0 0 14px", color: "var(--color-text)" }}>Rooted in West Bengal, deploying across India</h2>
              <p style={{ fontSize: 16, color: "var(--color-neutral-300)", margin: "0 0 22px" }}>Headquartered in Konnagar, Hooghly, we understand state-specific procurement and compliance first-hand — from West Bengal e-Paddy to CMR obligations across the eastern belt — and deploy pan-India and for global teams.</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 16px", borderRadius: 12, background: "var(--color-surface)", border: "1px solid var(--color-neutral-800)" }}>
                <Icon name="ph-map-pin" style={{ fontSize: 22, color: "var(--color-accent-300)" }} />
                <div><div style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text)" }}>Nabagram, Konnagar</div><div style={{ fontSize: 12.5, color: "var(--color-neutral-500)" }}>Hooghly, West Bengal 712246</div></div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {REGIONS.map((r) => (
                <div key={r.name} style={{ padding: 18, borderRadius: 13, background: "var(--color-surface)", border: "1px solid var(--color-neutral-800)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 16, color: "var(--color-text)" }}>{r.name}</span>
                    <span className={`tag ${r.tagClass}`} style={{ fontSize: 9 }}>{r.status}</span>
                  </div>
                  <p style={{ fontSize: 12.5, lineHeight: 1.5, color: "var(--color-neutral-400)", margin: 0 }}>{r.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section id="why" style={{ padding: "84px 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-divider)" }}>
          <div className="pp-wrap">
            <div style={{ textAlign: "center", maxWidth: "42em", margin: "0 auto 44px" }}>
              <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>Why Svasamm</div>
              <h2 style={{ fontSize: 34, letterSpacing: "-.02em", margin: "0 0 12px", color: "var(--color-text)" }}>Engineered for teams that evaluate carefully</h2>
              <p style={{ fontSize: 16, color: "var(--color-neutral-300)", margin: 0 }}>No black boxes and no per-seat traps — the properties technical buyers actually check.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 18 }}>
              {WHYS.map((w) => (
                <div key={w.title} style={{ padding: 24, borderRadius: 14, background: "var(--color-bg)", border: "1px solid var(--color-neutral-800)" }}>
                  <Icon name={w.icon} style={{ fontSize: 28, color: "var(--color-accent-300)" }} />
                  <h3 style={{ fontSize: 17, margin: "16px 0 8px", color: "var(--color-text)" }}>{w.title}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--color-neutral-400)", margin: 0 }}>{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section style={{ padding: "88px 0" }}>
          <div className="pp-wrap">
            <div className="pp-glow" style={{ border: "1px solid var(--color-neutral-800)", borderRadius: 20, padding: "52px 40px", textAlign: "center", background: "var(--color-surface)" }}>
              <h2 style={{ fontSize: 32, letterSpacing: "-.02em", margin: "0 0 12px", color: "var(--color-text)" }}>Tell us what you run. We&apos;ll show you the fit.</h2>
              <p style={{ fontSize: 16, color: "var(--color-neutral-300)", margin: "0 auto 26px", maxWidth: "36em" }}>A short walkthrough with the people who build the software — not a sales script. We&apos;ll map your workflow to a product and be honest about where it fits.</p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <Link href={CONTACT} className="btn btn-primary btn-large" style={{ fontSize: 15, padding: "11px 24px" }}>Book a walkthrough <Icon name="ph-arrow-right" weight="bold" style={{ fontSize: 14 }} /></Link>
                <Link href={SOLUTIONS} className="btn btn-secondary btn-large" style={{ fontSize: 15, padding: "11px 24px" }}>Browse all solutions</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
