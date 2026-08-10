import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service | Svasamm" },
  description: "The terms governing your use of svasamm.com and its enquiry services, operated by Svasamm Research Pvt Ltd.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Terms of Service | Svasamm", url: "/terms", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Svasamm — vertical ERPs & business platforms" }] },
};

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" updated="16 July 2026">
      <p>These terms govern your use of svasamm.com and the information and enquiry services offered on it, operated by Svasamm Research Pvt Ltd (&quot;Svasamm&quot;, &quot;we&quot;, &quot;us&quot;). By using this website you agree to these terms. Use of any Svasamm product is additionally governed by the separate agreement signed for that product.</p>

      <h2>Use of the website</h2>
      <ul>
        <li>You may browse and use the site for lawful, informational and evaluation purposes.</li>
        <li>You agree not to disrupt the site, attempt unauthorised access, or use it to infringe others&apos; rights.</li>
        <li>Information you submit through enquiry forms must be accurate and yours to provide.</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>The website content, product names (including Millingo and Lucoze), logos and design are owned by Svasamm or its licensors and are protected by law. You may not copy, reproduce or reuse them without written permission, except for personal, non-commercial reference.</p>

      <h2>Enquiries &amp; no offer</h2>
      <p>Descriptions, capabilities and tiers shown on this site are for information and may change without notice. They are not a binding offer, quotation or warranty. Any engagement is subject to a written proposal and agreement.</p>

      <h2>Disclaimers</h2>
      <p>The website is provided &quot;as is&quot; without warranties of any kind, to the extent permitted by law. We do not warrant that the site will be uninterrupted or error-free, or that information is complete or current.</p>

      <h2>Limitation of liability</h2>
      <p>To the maximum extent permitted by law, Svasamm is not liable for any indirect, incidental or consequential loss arising from use of this website. Nothing in these terms limits liability that cannot be limited under applicable law.</p>

      <h2>Third-party links</h2>
      <p>The site may link to third-party sites (for example lucoze.com). We are not responsible for the content or practices of those sites; their own terms and privacy policies apply.</p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India, with courts at Hooghly, West Bengal having jurisdiction, subject to applicable law.</p>

      <h2>Contact</h2>
      <p>Svasamm Research Pvt Ltd, Nabagram, Konnagar, Hooghly, West Bengal 712246, India. Email <a href="mailto:query@svasamm.com">query@svasamm.com</a> · Phone <a href="tel:+919007793575">+91 90077 93575</a>.</p>
      <p style={{ marginTop: 22, fontSize: 13, color: "var(--sv-ink-3)" }}>This template is a starting point and not legal advice. Please have your final terms reviewed by a qualified professional before publishing.</p>
    </LegalPage>
  );
}
