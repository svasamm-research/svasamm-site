import Link from "next/link";
import { Icon } from "./Icon";
import { toRoute } from "@/lib/routes";

const CONTACT = toRoute("Contact.dc.html");
const SOLUTIONS = toRoute("Solutions.dc.html");

const VALUES = [
  { icon: "ph-sliders-horizontal", title: "Built per industry", body: "We start from how an industry actually works — its workflow, terminology and compliance — and build that in, rather than bending a generic tool to fit." },
  { icon: "ph-hard-drives", title: "Self-hostable", body: "Run on your own infrastructure or ours. Your operational data stays where you decide it should." },
  { icon: "ph-plugs-connected", title: "API-first", body: "Every module speaks REST, so it integrates with what you already run instead of replacing it." },
  { icon: "ph-flag", title: "India-first", body: "GST, ABDM and CMR handled inside the product — because compliance here is not an afterthought." },
];

// About / Company page — verified facts only (no fabricated metrics). Founder byline is
// an E-E-A-T signal. Ported onto the --sv-* design system to match the other core pages.
export default function AboutPage() {
  return (
    <>
      <section style={{ borderBottom: "1px solid var(--sv-line)" }}>
        <div className="sv-wrap" style={{ padding: "30px 24px 0", maxWidth: 860 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--sv-mono)", fontSize: 12, color: "var(--sv-ink-3)" }}>
            <Link href="/" style={{ color: "var(--sv-ink-3)" }}>Home</Link>
            <Icon name="ph-caret-right" size={11} />
            <span style={{ color: "var(--sv-ink-2)" }}>About</span>
          </div>
        </div>
        <div className="sv-wrap" style={{ padding: "40px 24px 56px", maxWidth: 860 }}>
          <span className="sv-tag sv-tag-brand" style={{ marginBottom: 20 }}>About Svasamm</span>
          <h1 style={{ fontSize: 42, margin: "0 0 14px" }}>Vertical software, built where the work happens</h1>
          <p style={{ fontFamily: "var(--sv-mono)", fontSize: 13, color: "var(--sv-ink-3)", margin: 0 }}>Svasamm Research Pvt Ltd · Founded 2022 · Konnagar, West Bengal</p>
        </div>
      </section>

      <section style={{ padding: "48px 0 8px" }}>
        <div className="sv-wrap" style={{ maxWidth: 820 }}>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--sv-ink-2)", margin: "0 0 16px" }}>Svasamm Research Pvt Ltd is a software company based in Nabagram, Konnagar, in Hooghly, West Bengal. We build vertical ERPs and business platforms for Indian operations — systems that carry an industry&apos;s workflow, terminology and compliance inside them, instead of generic tools that have to be bent to fit.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--sv-ink-2)", margin: "0 0 14px" }}>Founded in 2022 by Mithun K. Singh, Svasamm grew out of close work with businesses whose real processes never fit off-the-shelf software — rice mills running government custom-milling cycles, hospitals and clinics, and manufacturers selling through distributor networks. That is why our flagship products are vertical: <Link href={toRoute("Millingo.dc.html")} className="pp-link" style={{ color: "var(--sv-brand)" }}>Millingo</Link> for rice mills, <a href="https://lucoze.com" target="_blank" rel="noopener" className="pp-link" style={{ color: "var(--sv-brand)" }}>Lucoze</a> for healthcare, and a <Link href={toRoute("DMS.dc.html")} className="pp-link" style={{ color: "var(--sv-brand)" }}>distributor management system</Link> for OEM channels — alongside the platform modules every operation needs: ERP, HRMS, CRM and service desk.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--sv-ink-2)", margin: "0 0 8px" }}>Being rooted in West Bengal means we understand state-specific procurement and compliance first-hand — from e-Paddy and CMR obligations across the eastern belt to Indian GST — and we deploy pan-India and for global teams, on our infrastructure or yours.</p>
        </div>
      </section>

      <section style={{ padding: "24px 0 24px" }}>
        <div className="sv-wrap" style={{ maxWidth: 820 }}>
          <div className="sv-eyebrow">How we work</div>
          <h2 style={{ fontSize: 28, margin: "0 0 20px" }}>How we build</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 18 }}>
            {VALUES.map((v) => (
              <div key={v.title} className="sv-card" style={{ padding: 24 }}>
                <span className="sv-chip">
                  <Icon name={v.icon} size={22} />
                </span>
                <h3 style={{ fontSize: 17, margin: "16px 0 7px" }}>{v.title}</h3>
                <p className="sv-muted" style={{ fontSize: 14, lineHeight: 1.55, margin: 0 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "24px 0 88px" }}>
        <div className="sv-wrap" style={{ maxWidth: 820 }}>
          <div className="sv-field-deep" style={{ padding: "56px 44px", textAlign: "center" }}>
            <h2 style={{ margin: "0 0 12px" }}>Work with the people who build it</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,.72)", margin: "0 auto 26px", maxWidth: "34em" }}>Tell us what you run and we&apos;ll show you the fit — or tell you honestly if we&apos;re not it.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href={CONTACT} className="sv-btn sv-btn-inv sv-btn-lg">Talk to us</Link>
              <Link href={SOLUTIONS} className="sv-btn sv-btn-inv-outline sv-btn-lg">Browse solutions</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
