import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import Analytics from "@/components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Svasamm — Vertical ERPs & business platforms",
    template: "%s | Svasamm",
  },
  description:
    "Svasamm Research builds vertical ERPs and business platforms — Millingo rice-mill ERP, Lucoze healthcare HIMS, a DMS for OEMs, plus ERP, HRMS, CRM, Service Desk and Loan modules.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-bg text-text flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
