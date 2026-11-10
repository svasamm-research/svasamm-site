import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { HOME_PRODUCTS } from "@/lib/home";
import { ONE } from "@/lib/site";

// A 404 with ways forward (Mithun, 10 Nov 2026): say plainly the page is not here, then offer the
// site's main doors — the Svasamm One products from the same list as the home page, then the
// guides, pricing and contact. The 404 walk in tests/e2e/svasamm.spec.ts follows every one.
const DOORS = [
  ...HOME_PRODUCTS.filter((p) => ONE[p.id]).map((p) => ({ href: p.href, title: p.name, body: p.short, fill: ONE[p.id].fill })),
  { href: "/resources", title: "Guides", body: "CMR, milling recovery, GST and payroll", fill: undefined },
  { href: "/pricing", title: "Pricing", body: "What each product costs", fill: undefined },
  { href: "/pages/contact.html", title: "Talk to us", body: "A short walkthrough with the people who build it", fill: undefined },
];

// Branded 404. Without this file, Next's built-in not-found boundary renders its own
// "404: This page could not be found." title alongside the root layout's default title,
// producing two <title> tags in out/404.html. Owning this route replaces that boundary.
export const metadata: Metadata = {
  title: { absolute: "Page not found | Svasamm" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" data-404 className="flex-1" style={{ display: "grid", placeItems: "center", padding: "88px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: "56em", width: "100%" }}>
          <div className="tag tag-outline" style={{ marginBottom: 20 }}>404</div>
          <h1 style={{ fontSize: 42, lineHeight: 1.08, letterSpacing: "-.025em", margin: "0 0 16px", color: "var(--sv-ink)" }}>This page isn&apos;t here</h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--sv-ink-2)", margin: "0 0 30px" }}>It may have moved, or the link has a typo. One of these is probably what you were after.</p>
          <ul role="list" style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, textAlign: "left" }}>
            {DOORS.map((d) => (
              <li key={d.href}>
                <Link href={d.href} className="sv-card" style={{ display: "flex", flexDirection: "column", gap: 4, height: "100%", padding: "16px 18px", textDecoration: "none", ...(d.fill && { borderTop: `3px solid ${d.fill}` }) }}>
                  <strong style={{ color: "var(--sv-ink)", fontSize: 16 }}>{d.title} →</strong>
                  <span style={{ color: "var(--sv-ink-2)", fontSize: 14 }}>{d.body}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/" style={{ color: "var(--sv-brand)", fontWeight: 600 }}>← Back to the home page</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
