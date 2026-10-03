import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Shipping and Delivery Policy | Svasamm" },
  description: "Svasamm sells software subscriptions only. Nothing is shipped: access is delivered online within one working day of payment.",
  alternates: { canonical: "/shipping-policy" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Shipping and Delivery Policy | Svasamm", url: "/shipping-policy", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Svasamm — vertical ERPs & business platforms" }] },
};

export default function ShippingPolicy() {
  return (
    <LegalPage title="Shipping and delivery policy" updated="1 October 2026">
      <p>We sell software subscriptions only; nothing is shipped.</p>
      <p>Access is delivered online: your account is activated, and the sign-in details sent to the email address you gave us, within <strong>1 working day</strong> of your first payment being confirmed.</p>
      <p>If you have not received access within that time, write to <a href={`mailto:${BUSINESS.billingEmail}`}>{BUSINESS.billingEmail}</a>.</p>
    </LegalPage>
  );
}
