import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { BUSINESS } from "@/lib/site";

// The people behind Svasamm (15 Oct 2026). Names and roles as Mithun gave them; no bios
// until each person writes their own. A person without a photo shows their initials —
// add `photo` (a square image in public/team/) when one arrives.
const TEAM: { name: string; role: string; photo?: string }[] = [
  { name: "Mithun Kumar Singh", role: "Co-Founder", photo: "/team/mithun-kumar-singh.webp" },
  { name: "Amrita Kushwaha", role: "Co-Founder" },
  { name: "Manish Sharma", role: "Sales Manager", photo: "/team/manish-sharma.webp" },
  { name: "Shreyosi Mondal", role: "QA Engineer" },
  { name: "Aman Singh", role: "Developer" },
  { name: "Tanya Malhotra", role: "HR Consultant" },
];
const initials = (n: string) => n.split(" ").filter(Boolean).map((w) => w[0]).slice(0, 2).join("");

export const metadata: Metadata = {
  title: { absolute: "Our Team — the People Behind Svasamm | Svasamm" },
  description: "The people who build, test and sell Svasamm's software for rice mills, CA firms, hospitals and payroll — from Hooghly, West Bengal.",
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
            <p className="sv-muted" style={{ fontSize: 18, lineHeight: 1.6, margin: 0, maxWidth: "52ch" }}>
              A small team in Hooghly, West Bengal, building software for the way Indian businesses actually work.
            </p>
          </div>
        </section>
        <section style={{ padding: "56px 0 88px" }}>
          <div className="sv-wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24, maxWidth: 960 }}>
            {TEAM.map((t) => (
              <div key={t.name} className="sv-card" style={{ padding: 24, textAlign: "center" }}>
                {t.photo ? (
                  <img src={t.photo} alt={t.name} width={160} height={160} loading="lazy"
                    style={{ width: 160, height: 160, borderRadius: "50%", objectFit: "cover", margin: "0 auto 18px", display: "block" }} />
                ) : (
                  <span aria-hidden="true" style={{ width: 160, height: 160, borderRadius: "50%", margin: "0 auto 18px", display: "grid", placeItems: "center",
                    background: "var(--sv-brand-50)", border: "1px solid var(--sv-brand-100)", color: "var(--sv-brand)", fontSize: 44, fontWeight: 600 }}>
                    {initials(t.name)}
                  </span>
                )}
                <h2 style={{ fontSize: 19, margin: "0 0 4px" }}>{t.name}</h2>
                <div style={{ fontFamily: "var(--sv-mono)", fontSize: 13, color: "var(--sv-ink-3)" }}>{t.role}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
