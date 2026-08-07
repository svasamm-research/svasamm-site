import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

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
      <main id="main" className="flex-1" style={{ display: "grid", placeItems: "center", padding: "88px 24px" }}>
        <div style={{ textAlign: "center", maxWidth: "34em" }}>
          <div className="tag tag-outline" style={{ marginBottom: 20 }}>404</div>
          <h1 style={{ fontSize: 42, lineHeight: 1.08, letterSpacing: "-.025em", margin: "0 0 16px", color: "var(--color-text)" }}>Page not found</h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--color-neutral-300)", margin: "0 0 30px" }}>The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <Link href="/" className="btn btn-primary btn-large" style={{ fontSize: 15, padding: "11px 22px" }}>Back to home</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
