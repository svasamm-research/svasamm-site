import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ResourcesGrid from "@/components/ResourcesGrid";
import { ALL_CARDS, CATEGORIES } from "@/lib/resources";

// Every guide on the site in one place (15 Oct 2026) — svasamm.com had 57 articles and no
// index; they were reachable only from the Resources menu and product pages.
export const metadata: Metadata = {
  title: { absolute: "Guides for Rice Mills, Payroll and Indian Business Software | Svasamm" },
  description:
    "Svasamm's guides: custom milled rice and state procurement, payroll and statutory compliance, healthcare and school marketing, and how our software is built.",
  alternates: { canonical: "/resources" },
  robots: { index: true, follow: true },
};

export default function Resources() {
  return (
    <>
      <SiteHeader active="resources" />
      <main id="main" className="flex-1">
        <section className="pp-hero-wash" style={{ borderBottom: "1px solid var(--sv-line)" }}>
          <div className="sv-wrap" style={{ padding: "64px 24px 48px" }}>
            <div className="sv-eyebrow">Resources</div>
            <h1 style={{ margin: "0 0 14px", maxWidth: "20ch" }}>Guides written for the people who run the work</h1>
            <p className="sv-muted" style={{ fontSize: 18, lineHeight: 1.6, maxWidth: "52ch", margin: 0 }}>
              Custom milled rice and each state&apos;s procurement, payroll and statutory filing, and how our
              software is built — every figure dated and sourced.
            </p>
          </div>
        </section>
        <section style={{ padding: "40px 0 88px" }}>
          <div className="sv-wrap">
            <ResourcesGrid cards={ALL_CARDS} categories={CATEGORIES.map(({ key, label }) => ({ key, label }))} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
