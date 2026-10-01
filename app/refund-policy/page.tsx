import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Refund and Cancellation Policy | Svasamm" },
  description: "How subscriptions to software sold by Svasamm Research Pvt Ltd, including T4Suite, are billed, cancelled and refunded.",
  alternates: { canonical: "/refund-policy" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Refund and Cancellation Policy | Svasamm", url: "/refund-policy", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Svasamm — vertical ERPs & business platforms" }] },
};

// Text as written in HANDOFF-pricing-and-billing-policies.md (T4Suite session, 1 Oct 2026).
// Must agree with the Privacy Policy ("Data in our software": 30 days, then deleted) and the
// subscription terms in /terms. Change all three together.
export default function RefundPolicy() {
  const mail = <a href={`mailto:${BUSINESS.billingEmail}`}>{BUSINESS.billingEmail}</a>;
  return (
    <LegalPage title="Refund and cancellation policy" updated="1 October 2026">
      <p>This policy applies to subscriptions to software sold by {BUSINESS.legalName} (&quot;Svasamm&quot;, &quot;we&quot;), including T4Suite. Our subscriptions are sold to businesses and professional firms.</p>

      <h2>How billing works</h2>
      <p>Subscriptions are billed in advance, monthly or yearly, at the price shown when you subscribe, plus GST. We issue a GST tax invoice for every charge. If you pay by automatic debit (UPI Autopay, bank e-mandate or card), the subscription renews at the end of each period, and you are notified before each debit as the payment rules require.</p>

      <h2>Cancelling</h2>
      <p>You can cancel at any time by writing to {mail} or through your account manager. Cancellation takes effect at the end of the period you have already paid for. You keep full access until then, and you will not be charged again. You can also cancel the automatic-debit mandate from your UPI app or bank. Please tell us as well, so we can close the subscription cleanly.</p>

      <h2>When we refund</h2>
      <p>We refund in full:</p>
      <ul>
        <li>a charge made twice for the same period;</li>
        <li>a charge made after you cancelled, where your cancellation reached us before the renewal date;</li>
        <li>any amount charged above the price of your plan (we refund the difference).</li>
      </ul>
      <p>If money left your account but the payment failed, your bank or our payment processor reverses it automatically, within the timelines set by the Reserve Bank of India.</p>

      <h2>When we do not refund</h2>
      <p>Apart from the cases above, we do not refund a period that has already started, or unused time, users or entities within it. Moving to a smaller plan takes effect from your next period.</p>

      <h2>How to ask for a refund</h2>
      <p>Write to {mail} within 30 days of the charge, quoting the invoice number. We reply within 2 working days. An approved refund is paid to the original payment method within 7 working days of approval, with a GST credit note against the invoice.</p>

      <h2>If a payment is missed</h2>
      <p>We will remind you. If a renewal remains unpaid <strong>7 days</strong> after it falls due, your account becomes <strong>read-only</strong>: you can still sign in, see and export everything, but you cannot add or change records until the payment is made. <strong>We never delete your data because a payment is late.</strong></p>

      <h2>After your subscription ends</h2>
      <p>Your data stays available to view and export for <strong>30 days</strong>. After that it is deleted as described in our <a href="/privacy">Privacy Policy</a>, except records we are required by law to keep (such as tax invoices).</p>

      <h2>Price changes</h2>
      <p>Price changes apply only from your next renewal, and we tell you at least <strong>30 days</strong> before.</p>

      <h2>Questions and grievances</h2>
      <p>Grievance officer: <strong>{BUSINESS.grievanceOfficer}</strong>, {BUSINESS.legalName}, {BUSINESS.registeredAddress} · {mail} · <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}>{BUSINESS.phone}</a>. We acknowledge a grievance within 48 hours and aim to resolve it within one month.</p>
    </LegalPage>
  );
}
