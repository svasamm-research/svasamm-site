import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { BUSINESS } from "@/lib/site";
import { TEAM, WORK } from "@/lib/team";
import { JOBS } from "@/lib/jobs";

// The people behind Svasamm (15 Oct 2026): how we work, then a card per person that turns
// over on hover or focus to show a few words about them, and a last "You?" card to /jobs.
// The turn is CSS only (.tm-* in globals.css); with reduced motion it fades instead.
const initials = (n: string) => n.split(" ").filter(Boolean).map((w) => w[0]).slice(0, 2).join("");

export const metadata: Metadata = {
  title: { absolute: "Our Team — the People Behind Svasamm | Svasamm" },
  description: "The people who build, test and sell Svasamm's software for rice mills, CA firms, hospitals and payroll — and how we work, in our office in Hooghly, West Bengal.",
  alternates: { canonical: "/team" },
  robots: { index: true, follow: true },
};

export default function Team() {
  const ld = {
    "@context": "https://schema.org", "@type": "Organization", name: BUSINESS.legalName, url: "https://svasamm.com",
    founder: TEAM.filter((t) => t.role === "Co-Founder").map((t) => ({ "@type": "Person", name: t.name })),
    employee: TEAM.map((t) => ({ "@type": "Person", name: t.name, jobTitle: t.role })),
  };
  return (
    <>
      <JsonLd data={[ld]} />
      <SiteHeader active="about" />
      <main id="main" className="flex-1">
        <section className="pp-hero-wash" style={{ borderBottom: "1px solid var(--sv-line)" }}>
          <div className="sv-wrap" style={{ padding: "64px 24px 48px", maxWidth: 900 }}>
            <div className="sv-eyebrow">Our team</div>
            <h1 style={{ margin: "0 0 14px" }}>The people behind Svasamm</h1>
            <p className="sv-muted" style={{ fontSize: 18, lineHeight: 1.6, margin: 0, maxWidth: "56ch" }}>{WORK.intro}</p>
          </div>
        </section>

        <section style={{ padding: "56px 0 24px" }}>
          <div className="sv-wrap" style={{ maxWidth: 960 }}>
            <div className="sv-eyebrow">How we work</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 16, marginTop: 10 }}>
              {WORK.points.map((p) => (
                <div key={p.title} className="sv-card" style={{ padding: 22 }}>
                  <h2 style={{ fontSize: 17, margin: "0 0 8px" }}>{p.title}</h2>
                  <p className="sv-muted" style={{ fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "40px 0 88px" }}>
          <div className="sv-wrap" style={{ maxWidth: 960 }}>
            <div className="sv-eyebrow">The team</div>
            <div className="tm-grid">
              {TEAM.map((t) => (
                <div key={t.name} className="tm-card" tabIndex={0} aria-label={`${t.name}, ${t.role}. ${t.words}`}>
                  <div className="tm-inner">
                    <div className="tm-face sv-card">
                      {t.photo ? (
                        <img src={t.photo} alt="" width={150} height={150} loading="lazy" className="tm-photo" />
                      ) : (
                        <span aria-hidden="true" className="tm-photo tm-initials">{initials(t.name)}</span>
                      )}
                      <h2 style={{ fontSize: 19, margin: "0 0 4px" }}>{t.name}</h2>
                      <div className="tm-role">{t.role}</div>
                    </div>
                    <div className="tm-face tm-back sv-card" aria-hidden="true">
                      <p style={{ fontSize: 16, lineHeight: 1.6, margin: "0 0 14px" }}>“{t.words}”</p>
                      <div style={{ fontWeight: 600 }}>{t.name}</div>
                      <div className="tm-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
              <Link href="/jobs" className="tm-card tm-you" data-evt="Team You Click">
                <div className="tm-face sv-card" style={{ position: "relative" }}>
                  <span aria-hidden="true" className="tm-photo tm-initials tm-dashed">You?</span>
                  <h2 style={{ fontSize: 19, margin: "0 0 4px" }}>Your name here</h2>
                  <div className="tm-role">{JOBS.length} open {JOBS.length === 1 ? "role" : "roles"}</div>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12, fontWeight: 500, color: "var(--sv-brand)" }}>
                    See the openings <Icon name="ph-arrow-right" size={15} />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
