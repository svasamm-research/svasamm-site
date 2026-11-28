import Link from "next/link";
import { Icon } from "./Icon";
import { toRoute } from "@/lib/routes";
import { WHYS } from "@/lib/home";

const CONTACT = toRoute("Contact.dc.html");
const SOLUTIONS = toRoute("Solutions.dc.html");
const MILLINGO = toRoute("Millingo.dc.html");
const PEOPLE = toRoute("HRMS.dc.html");
const ERP = toRoute("ERP.dc.html");
const T4SUITE = "https://t4suite.com";

// The same four statements as the home page's "Why Svasamm" — one source, lib/home.ts.
const VALUES = WHYS;

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
          <p style={{ fontFamily: "var(--sv-mono)", fontSize: 13, color: "var(--sv-ink-3)", margin: 0 }}>Svasamm Research Pvt Ltd · Founded 2024 · Konnagar, West Bengal</p>
        </div>
      </section>

      <section style={{ padding: "48px 0 8px" }}>
        <div className="sv-wrap" style={{ maxWidth: 820 }}>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--sv-ink-2)", margin: "0 0 16px" }}>Svasamm Research Pvt Ltd is a software company based in Nabagram, Konnagar, in Hooghly, West Bengal. We build vertical ERPs and business platforms for Indian operations — systems that carry an industry&apos;s workflow, terminology and compliance inside them, instead of generic tools that have to be bent to fit.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--sv-ink-2)", margin: "0 0 14px" }}>Founded in April 2024 by Mithun K. Singh, Svasamm grew out of close work with businesses whose real processes never fit off-the-shelf software — rice mills running government custom-milling cycles, hospitals and clinics, and manufacturers selling through distributor networks. That is why our flagship products are vertical: <Link href={toRoute("Millingo.dc.html")} className="pp-link" style={{ color: "var(--sv-brand)" }}>Millingo</Link> for rice mills, <a href="https://lucoze.com" target="_blank" rel="noopener" className="pp-link" style={{ color: "var(--sv-brand)" }}>Lucoze</a> for healthcare, and a <Link href={toRoute("DMS.dc.html")} className="pp-link" style={{ color: "var(--sv-brand)" }}>distributor management system</Link> for OEM channels — alongside the platform modules every operation needs: Svasamm People for HR and payroll, ERP, CRM and service desk.</p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--sv-ink-2)", margin: "0 0 8px" }}>Being rooted in West Bengal means we understand state-specific procurement and compliance first-hand — from e-Paddy and CMR obligations across the eastern belt to Indian GST — and we deploy pan-India and for global teams, on our infrastructure or yours.</p>
        </div>
      </section>

      <section style={{ padding: "24px 0 8px" }}>
        <div className="sv-wrap" style={{ maxWidth: 820 }}>
          <div className="sv-eyebrow">What we build</div>
          <h2 style={{ fontSize: 28, margin: "0 0 14px" }}>One platform, a product for each kind of work</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--sv-ink-2)", margin: "0 0 14px" }}>
            Our products share one platform, Svasamm One: one login, one set of records for people, parties and documents, and one set of books underneath. A rice mill, a CA firm and a hospital each get a product made for how they work, and none of them has to keep a second package beside it.
          </p>
          <ul style={{ fontSize: 16, lineHeight: 1.7, color: "var(--sv-ink-2)", margin: "0 0 14px", paddingLeft: 22 }}>
            <li><Link href={MILLINGO}>Millingo</Link> for rice mills: paddy and custom milling, yield and recovery, by-products and government obligations such as CMR.</li>
            <li><a href={T4SUITE}>T4Suite</a> for CA and compliance firms: clients, jobs, deadlines, time and billing.</li>
            <li><Link href={PEOPLE}>Svasamm People</Link> for payroll and attendance: punches, shifts, leave, PF, ESI, professional tax and TDS.</li>
            <li><Link href={ERP}>ERP</Link> for traders, manufacturers and services firms: the books, GST, stock and purchase.</li>
            <li>CRM, a document management and dealer system, and a service desk for teams that need them on the same platform.</li>
          </ul>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--sv-ink-2)", margin: "0 0 8px" }}>
            Every product is built for the Indian rules it will meet: GST, TDS, PF, ESI and professional tax, and the procurement and custom-milling cycles of the states we work in. Where a rule differs by state or season, it is set for your state during onboarding, never fixed in the software.
          </p>
        </div>
      </section>

      <section style={{ padding: "24px 0 8px" }}>
        <div className="sv-wrap" style={{ maxWidth: 820 }}>
          <div className="sv-eyebrow">How a rollout goes</div>
          <h2 style={{ fontSize: 28, margin: "0 0 14px" }}>We walk your floor before we set anything up</h2>
          <ol style={{ fontSize: 16, lineHeight: 1.7, color: "var(--sv-ink-2)", margin: "0 0 14px", paddingLeft: 22 }}>
            <li><strong>Walk it.</strong> We spend time at your gate, stores, office or counter, and write down how work and money actually move.</li>
            <li><strong>Load your masters.</strong> Items, parties, staff and opening balances, cleaned and imported from your spreadsheets or your current books.</li>
            <li><strong>Run a month in parallel.</strong> You see the same month in both systems before you switch.</li>
            <li><strong>Set up what is yours.</strong> Anything particular to your business, such as your stages, shifts, rates or approvals, is set up for you during onboarding.</li>
            <li><strong>Stay close.</strong> The people who build the software answer your questions in the first weeks.</li>
          </ol>
        </div>
      </section>

      <section style={{ padding: "24px 0 8px" }}>
        <div className="sv-wrap" style={{ maxWidth: 820 }}>
          <div className="sv-eyebrow">What we will not do</div>
          <h2 style={{ fontSize: 28, margin: "0 0 14px" }}>We say plainly what the software does</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--sv-ink-2)", margin: "0 0 8px" }}>
            We are a small company and we do not publish figures we cannot back, such as client counts or promised savings. A feature is described as working only when it works. Our pricing for T4Suite is on the <Link href="/pricing">pricing page</Link>; for other products we quote after we have seen what you run. Our <Link href="/privacy">privacy policy</Link>, <Link href="/terms">terms</Link> and <Link href="/refund-policy">refund policy</Link> say what happens to your data and your money in plain words.
          </p>
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
