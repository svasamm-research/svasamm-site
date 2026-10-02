import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service | Svasamm" },
  description: "The terms governing your use of svasamm.com and subscriptions to software sold by Svasamm Research Pvt Ltd, including T4Suite.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Terms of Service | Svasamm", url: "/terms", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Svasamm — vertical ERPs & business platforms" }] },
};

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="1 October 2026">
      <p>These terms govern your use of svasamm.com and subscriptions to software sold by Svasamm Research Pvt Ltd (&quot;Svasamm&quot;, &quot;we&quot;, &quot;us&quot;), including T4Suite. By using this website, or by subscribing, you agree to these terms. Where a separate written agreement is signed for a product, that agreement also applies, and it prevails if the two differ.</p>

      <h2>Use of the website</h2>
      <ul>
        <li>You may browse and use the site for lawful, informational and evaluation purposes.</li>
        <li>You agree not to disrupt the site, attempt unauthorised access, or use it to infringe others&apos; rights.</li>
        <li>Information you submit through enquiry forms must be accurate and yours to provide.</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>The website content, product names (including T4Suite, Millingo and Lucoze), logos and design are owned by Svasamm or its licensors and are protected by law. You may not copy, reproduce or reuse them without written permission, except for personal, non-commercial reference.</p>

      <h2>Information, prices and offers</h2>
      <p>Descriptions and capabilities shown on this site are for information and may change. Prices for software subscriptions are those shown on our <Link href="/pricing">Pricing page</Link> when you subscribe. Products marked &quot;pricing on request&quot;, and any custom work, are subject to a written proposal and agreement.</p>

      <h2 id="subscriptions">Software subscriptions</h2>
      <ol>
        <li><strong>Who they are for.</strong> Our subscriptions are sold to businesses and professional firms. The person subscribing confirms that they act for that business.</li>
        <li><strong>Your account.</strong> You are responsible for who you give access to, and for keeping passwords private.</li>
        <li><strong>Your data is yours.</strong> We process it only to provide the service, as our <Link href="/privacy">Privacy Policy</Link> describes, and in line with India&apos;s Digital Personal Data Protection Act, 2023. You can export it at any time.</li>
        <li><strong>Professional and statutory work stays yours.</strong> The software helps you prepare tasks, invoices, returns and payroll figures. You remain responsible for checking them and for anything filed with a government authority.</li>
        <li><strong>Availability.</strong> We work to keep the service available and to fix faults quickly, but we do not promise uninterrupted service unless agreed in writing.</li>
        <li><strong>Billing, cancellation, refunds and late payment</strong> are as set out in our <Link href="/refund-policy">Refund and cancellation policy</Link>.</li>
        <li><strong>Acceptable use.</strong> No unlawful use, no attempt to break security, and no attempt to access other customers&apos; data.</li>
        <li><strong>Liability.</strong> To the extent the law allows, our total liability for any claim is limited to the fees you paid us in the 12 months before the claim. We are not liable for indirect losses, such as lost profit.</li>
        <li><strong>Changes to these terms.</strong> We give at least 30 days&apos; notice of any change that affects paid subscriptions.</li>
        <li><strong>Governing law.</strong> As below: the laws of India, with courts at Hooghly, West Bengal.</li>
      </ol>

      <h2>Disclaimers</h2>
      <p>The website is provided &quot;as is&quot; without warranties of any kind, to the extent permitted by law. We do not warrant that the site will be uninterrupted or error-free, or that information on it is complete or current.</p>

      <h2>Limitation of liability</h2>
      <p>To the maximum extent permitted by law, Svasamm is not liable for any indirect, incidental or consequential loss arising from use of this website. Nothing in these terms limits liability that cannot be limited under applicable law.</p>

      <h2>Third-party links</h2>
      <p>The site may link to third-party sites (for example lucoze.com and t4suite.com). We are not responsible for the content or practices of sites we do not operate; their own terms and privacy policies apply.</p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India, with courts at Hooghly, West Bengal having jurisdiction, subject to applicable law.</p>

      <h2>Contact</h2>
      <p>{BUSINESS.legalName}, {BUSINESS.registeredAddress}. GSTIN {BUSINESS.gstin} · CIN {BUSINESS.cin}. Email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> · Phone <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}>{BUSINESS.phone}</a>.</p>
    </LegalPage>
  );
}
