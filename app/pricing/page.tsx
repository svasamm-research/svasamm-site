import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { BUSINESS, PRODUCTS } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Svasamm Pricing: T4Suite from ₹99 a User, Others on Request" },
  description: "Subscription prices for software sold by Svasamm Research Pvt Ltd. T4Suite from ₹99 per user a month, plus GST; other products priced on request.",
  alternates: { canonical: "/pricing" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Svasamm Pricing: T4Suite from ₹99 a User, Others on Request", url: "/pricing", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Svasamm — vertical ERPs & business platforms" }] },
};

// T4Suite's figures come from docs/console/pricing.md in the platform repo (Mithun, 31 Oct 2026) and
// match t4suite.com/pricing: change both together. Shown here as well for the payment provider's review
// (Mithun, 5 Nov 2026). Every other product is read from PRODUCTS, so a product added to the site menu
// is never missing from this page.
const T4SUITE = [
  { tier: "Free trial", monthly: "₹0 for 90 days", yearly: "None", covers: "2 users, 1 entity; no WhatsApp, document storage or client portal" },
  { tier: "Starter", monthly: "₹99", yearly: "₹990", covers: "Every feature, unlimited entities" },
  { tier: "Growth", monthly: "₹149", yearly: "₹1,490", covers: "Every feature, unlimited entities, more WhatsApp messages" },
  { tier: "Scale", monthly: "₹199", yearly: "₹1,990", covers: "Every feature, unlimited entities, the most WhatsApp messages" },
  { tier: "Enterprise", monthly: "Custom", yearly: "Custom", covers: "Set per firm" },
];

export default function Pricing() {
  const others = PRODUCTS.filter((p) => p.name !== "T4Suite");
  return (
    <LegalPage title="Pricing" updated="5 November 2026" kicker="Pricing">
      <p>{BUSINESS.legalName} sells software subscriptions to businesses and professional firms. Subscriptions are billed in advance, monthly or yearly.</p>

      <h2>T4Suite</h2>
      <p>Practice management for CA and compliance firms. Priced per user with no minimum. Every paid plan has every feature, and a free trial starts with a call.</p>
      <div className="lg-table-wrap">
        <table className="lg-table">
          <thead>
            <tr><th>Plan</th><th>Per user a month</th><th>Per user a year</th><th>Covers</th></tr>
          </thead>
          <tbody>
            {T4SUITE.map((r) => (
              <tr key={r.tier}><td><strong>{r.tier}</strong></td><td>{r.monthly}</td><td>{r.yearly}</td><td>{r.covers}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Paying yearly gives you two months free. Full details on <a href="https://t4suite.com/pricing">t4suite.com/pricing</a>.</p>

      <h2>Other products</h2>
      <p>Pricing on request. <Link href="/pages/contact.html">Contact us</Link> and we will send a quotation.</p>
      <ul>
        {others.map((p) =>
          p.external ? (
            <li key={p.id}><a href={p.href}>{p.name}</a> — pricing on request</li>
          ) : (
            <li key={p.id}><Link href={p.href}>{p.name}</Link> — pricing on request</li>
          )
        )}
      </ul>

      <h2>Tax and invoices</h2>
      <p>All prices exclude 18% GST. A GST tax invoice is issued for every charge.</p>

      <h2>Cancelling and refunds</h2>
      <p>See our <Link href="/refund-policy">Refund and cancellation policy</Link> and the <Link href="/terms#subscriptions">subscription terms</Link>.</p>
    </LegalPage>
  );
}
