import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/site";

// Google Play asks for this URL separately from the privacy policy: an app with accounts
// must offer a web page where somebody can ask for their account to be deleted. The words
// match the "Deleting your account" section of /privacy — change both together.
export const metadata: Metadata = {
  title: { absolute: "Delete Your Account | Svasamm" },
  description: "How to ask for your Svasamm One account and personal details to be deleted.",
  alternates: { canonical: "/delete-account" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Delete Your Account | Svasamm", url: "/delete-account", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Svasamm — vertical ERPs & business platforms" }] },
};

export default function DeleteAccount() {
  return (
    <LegalPage title="Delete your account" updated="1 October 2026" kicker="Your account">
      <p>Your Svasamm One account belongs to your organisation, so the quickest way is to ask your organisation&apos;s administrator.</p>
      <p>You can also email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> from your work email, asking for your account to be deleted. We confirm with your organisation, then delete your login and personal details within <strong>30 days</strong>.</p>
      <p>Records your organisation is legally required to keep, such as invoices, stay with your organisation and are no longer linked to your login.</p>
      <p>More about what we keep and why is in our <Link href="/privacy">Privacy Policy</Link>.</p>
    </LegalPage>
  );
}
