import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Svasamm" },
  description: "How Svasamm Research Pvt Ltd collects, uses, and protects your information across svasamm.com and its products.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Privacy Policy | Svasamm", url: "/privacy", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Svasamm — vertical ERPs & business platforms" }] },
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="16 July 2026">
      <p>Svasamm Research Pvt Ltd (&quot;Svasamm&quot;, &quot;we&quot;, &quot;us&quot;) operates svasamm.com and the software products described on it. This policy explains what information we collect, why, and the choices you have. It applies to this website and to product enquiries; product deployments are additionally governed by the agreement signed with each customer.</p>

      <h2>Information we collect</h2>
      <ul>
        <li><strong>Information you give us.</strong> Your name, work email, phone number, company / operation, and the details you enter when you request a walkthrough or contact us.</li>
        <li><strong>Usage data.</strong> Standard log data such as IP address, browser type, pages viewed and referring page, collected to keep the site secure and understand what&apos;s useful.</li>
        <li><strong>Cookies.</strong> Essential cookies for site function and, where enabled, privacy-respecting analytics. You can control cookies through your browser.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to your enquiry and schedule and conduct product walkthroughs.</li>
        <li>To provide, maintain and improve the website and our products.</li>
        <li>To send you information you requested, and occasional relevant updates you can opt out of.</li>
        <li>To meet legal, tax and regulatory obligations.</li>
      </ul>

      <h2>Legal basis &amp; sharing</h2>
      <p>We process your information to take steps at your request and for our legitimate interest in running and improving our business. We do not sell your personal data. We share it only with service providers who help us operate (for example hosting and email), under confidentiality obligations, and where required by law.</p>

      <h2>Data retention &amp; security</h2>
      <p>We keep enquiry information only as long as needed for the purpose it was collected and for legitimate business and legal records, then delete or anonymise it. We apply reasonable technical and organisational safeguards; our products are self-hostable, so for deployed systems your operational data can reside on infrastructure you control.</p>

      <h2>Your rights</h2>
      <p>You may request access to, correction of, or deletion of your personal information, and object to certain processing. To exercise any of these, contact us at <a href="mailto:query@svasamm.com">query@svasamm.com</a>.</p>

      <h2>Contact</h2>
      <p>Svasamm Research Pvt Ltd, Nabagram, Konnagar, Hooghly, West Bengal 712246, India. Email <a href="mailto:query@svasamm.com">query@svasamm.com</a> · Phone <a href="tel:+919007793575">+91 90077 93575</a>.</p>
      <p style={{ marginTop: 22, fontSize: 13, color: "var(--color-neutral-500)" }}>This template is a starting point and not legal advice. Please have your final policy reviewed against DPDP Act, 2023 and any other applicable law before publishing.</p>
    </LegalPage>
  );
}
