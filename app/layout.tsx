import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import Analytics from "@/components/Analytics";

// Svasamm design system typography (IBM Plex). Exposed as CSS vars that both
// nocturne.css (--font-plex) and svasamm.css (--sv-font, remapped in globals.css) use.
const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Svasamm — Vertical ERPs & business platforms",
    template: "%s | Svasamm",
  },
  description:
    "Svasamm Research builds vertical ERPs and business platforms — Millingo rice-mill ERP, Lucoze healthcare HIMS, a DMS for OEMs, plus ERP, HRMS, CRM and Service Desk modules.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "Svasamm",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Svasamm — vertical ERPs & business platforms" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plex.variable} ${plexMono.variable} antialiased`}>
      <body className="min-h-screen bg-bg text-text flex flex-col">
        <a className="sv-skip" href="#main">Skip to content</a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
