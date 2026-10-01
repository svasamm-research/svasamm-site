import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { BUSINESS, PRODUCTS } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Pricing | Svasamm" },
  description: "Subscription prices for software sold by Svasamm Research Pvt Ltd. T4Suite from ₹600 a month or ₹5,999 a year, plus GST; other products priced on request.",
  alternates: { canonical: "/pricing" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Pricing | Svasamm", url: "/pricing", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Svasamm — vertical ERPs & business platforms" }] },
};

// T4Suite prices decided by Mithun, 30 Sep – 1 Oct 2026, and the same figures as
// t4suite.com/pricing — change both together. Limits only in v1: every tier has every
// feature. Every other product is read from PRODUCTS, so a product added to the site menu
// is never missing from this page.
const T4SUITE = [
  { tier: "Starter", yearly: "₹5,999", monthly: "₹600", limits: "Up to 5 users, 1 entity" },
  { tier: "Growth", yearly: "₹11,999", monthly: "₹1,200", limits: "Up to 15 users, several entities" },
  { tier: "Firm", yearly: "Custom", monthly: "Custom", limits: "More users, on-premise storage, quoted per firm" },
];

export default function Pricing() {
  const others = PRODUCTS.filter((p) => p.name !== "T4Suite");
  return (
    <LegalPage title="Pricing" updated="1 October 2026" kicker="Pricing">
      <p>{BUSINESS.legalName} sells software subscriptions to businesses and professional firms. Subscriptions are billed in advance, monthly or yearly.</p>

      <h2>T4Suite</h2>
      <p>Practice management for CA and compliance firms. Every plan includes every feature; the plans differ only in how many users and legal entities they cover.</p>
      <div className="lg-table-wrap">
        <table className="lg-table">
          <thead>
            <tr><th>Plan</th><th>Yearly</th><th>Monthly</th><th>Covers</th></tr>
          </thead>
          <tbody>
            {T4SUITE.map((r) => (
              <tr key={r.tier}><td><strong>{r.tier}</strong></td><td>{r.yearly}</td><td>{r.monthly}</td><td>{r.limits}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Paying yearly costs about two months less than paying monthly. Full details on <a href="https://t4suite.com/pricing">t4suite.com/pricing</a>.</p>

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
