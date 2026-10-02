import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Svasamm" },
  description: "How Svasamm Research Pvt Ltd collects, uses, keeps and protects information across svasamm.com, its software subscriptions and the Svasamm One app.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Privacy Policy | Svasamm", url: "/privacy", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Svasamm — vertical ERPs & business platforms" }] },
};

// Must agree with the Refund and cancellation policy (data kept 30 days after a
// subscription ends, then deleted) and with the Svasamm One app's Play Store "Data
// safety" form. If either changes, this page changes in the same commit.
export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="1 October 2026">
      <p>{BUSINESS.legalName} (&quot;Svasamm&quot;, &quot;we&quot;, &quot;us&quot;) operates svasamm.com and sells the software products described on it, including T4Suite, and the Svasamm One app. This policy explains what information we collect, why, how long we keep it, and the choices you have.</p>

      <h2>Information we collect</h2>
      <ul>
        <li><strong>Information you give us.</strong> Your name, work email, phone number, company / operation, and the details you enter when you request a walkthrough or contact us.</li>
        <li><strong>Billing information.</strong> When your business subscribes: the business name, address and GSTIN we invoice, and a record of each invoice and payment. Payments are processed by our payment provider, Cashfree Payments. We do not see or store your full card, UPI or bank credentials.</li>
        <li><strong>Usage data.</strong> Standard log data such as IP address, browser type, pages viewed and referring page, collected to keep the site and our software secure and to understand what is useful.</li>
        <li><strong>Cookies.</strong> Essential cookies for site function and, where enabled, privacy-respecting analytics. You can control cookies through your browser.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to your enquiry and schedule and conduct product walkthroughs.</li>
        <li>To provide the software your business subscribes to, and to invoice and collect payment for it.</li>
        <li>To maintain and improve the website and our products.</li>
        <li>To send you information you requested, and occasional relevant updates you can opt out of.</li>
        <li>To meet legal, tax and regulatory obligations.</li>
      </ul>

      <h2>Legal basis &amp; sharing</h2>
      <p>We process your information to take steps at your request, to perform our contract with your business, and for our legitimate interest in running and improving our business. We do not sell your personal data. We share it only with service providers who help us operate — for example hosting, email, payment processing (Cashfree Payments) and app notifications (Google Firebase) — under confidentiality obligations, and where the law requires it.</p>

      <h2>Data in our software</h2>
      <p>The records your organisation keeps in our software — clients, tasks, time, invoices, documents, staff details and the like — belong to your organisation. We process them only to provide the service, on your organisation&apos;s instructions and in line with India&apos;s Digital Personal Data Protection Act, 2023. Your organisation can export them at any time.</p>
      <p>We keep them for as long as your subscription runs. A late payment never causes deletion: an unpaid account becomes read-only, and everything stays available to view and export. When a subscription ends, the data stays available to view and export for <strong>30 days</strong>; after that we delete it, except records we are required by law to keep, such as tax invoices. See our <Link href="/refund-policy">Refund and cancellation policy</Link>.</p>

      <h2 id="svasamm-one">The Svasamm One app</h2>
      <p>Svasamm One is the phone app for the products your organisation uses on Svasamm, such as T4Suite and Svasamm People. Your organisation creates your account; you sign in with your work email.</p>
      <p><strong>What the app handles</strong></p>
      <ul>
        <li><strong>Your account:</strong> your name, your work email, and the roles your organisation gives you.</li>
        <li><strong>Your work:</strong> the records you and your colleagues enter, such as tasks, clients, time, invoices, documents and attendance. These belong to your organisation, and only people it gives access to can see them.</li>
        <li><strong>A notification token:</strong> if you allow notifications, your phone gives the app a token so we can tell you about your work (for example, a task assigned to you). Notifications are delivered through Google&apos;s Firebase Cloud Messaging; the token and the notification&apos;s short text pass through Google for that purpose only.</li>
        <li><strong>Your sign-in:</strong> your session is kept in your phone&apos;s secure storage (the Keystore on Android), never in ordinary app storage.</li>
      </ul>
      <p><strong>What it does not do</strong></p>
      <ul>
        <li>It does not read your location, contacts, photos, microphone or camera.</li>
        <li>It contains no advertising and no third-party analytics, and it does not sell or share your data for advertising.</li>
      </ul>
      <p><strong>Security:</strong> everything the app sends travels encrypted (HTTPS).</p>

      <h2 id="delete-account">Deleting your account</h2>
      <p>Your account belongs to your organisation, so the quickest way is to ask your organisation&apos;s administrator. You can also email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> from your work email, asking for your account to be deleted. We confirm with your organisation, then delete your login and personal details within 30 days. Records your organisation is legally required to keep, such as invoices, stay with your organisation and are no longer linked to your login. The steps are also on our <Link href="/delete-account">account deletion page</Link>.</p>

      <h2>Retention &amp; security</h2>
      <p>We keep enquiry information only as long as needed for the purpose it was collected and for legitimate business and legal records, then delete or anonymise it. Subscription data follows the rule in &quot;Data in our software&quot; above. We apply reasonable technical and organisational safeguards.</p>

      <h2>Your rights</h2>
      <p>You may request access to, correction of, or deletion of your personal information, and object to certain processing. To exercise any of these, contact us at <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.</p>

      <h2>Grievance officer</h2>
      <p>{BUSINESS.grievanceOfficer}, {BUSINESS.legalName}, {BUSINESS.registeredAddress}. Email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>. We acknowledge a grievance within 48 hours and aim to resolve it within one month.</p>

      <h2>Contact</h2>
      <p>{BUSINESS.legalName}, {BUSINESS.registeredAddress}. GSTIN {BUSINESS.gstin} · CIN {BUSINESS.cin}. Email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> · Phone <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}>{BUSINESS.phone}</a>.</p>
    </LegalPage>
  );
}
