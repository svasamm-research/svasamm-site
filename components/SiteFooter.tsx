import Link from "next/link";
import Image from "next/image";
import { PRODUCTS, ONE, INDUSTRIES, BUSINESS } from "@/lib/site";

const head: React.CSSProperties = {
  fontFamily: "var(--sv-mono)",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: ".09em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,.66)",
  marginBottom: 18,
};

export default function SiteFooter() {
  return (
    <footer style={{ background: "var(--sv-navy)", color: "#fff", padding: "64px 0 32px" }}>
      <div className="sv-wrap">
        <div className="grid grid-cols-2 mob:[grid-template-columns:1.4fr_1fr_1fr_1fr_1fr]" style={{ gap: 44 }}>
          <div>
            <div className="flex items-center" style={{ gap: 10, marginBottom: 18 }}>
              <Image src="/assets/logo-svasamm.svg" alt="Svasamm" width={32} height={32} style={{ borderRadius: 7 }} />
              <span style={{ fontWeight: 600, fontSize: 20, letterSpacing: "-.02em", color: "#fff" }}>Svasamm</span>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "rgba(255,255,255,.82)", margin: "0 0 18px", maxWidth: "32ch" }}>
              {BUSINESS.legalName} builds vertical ERPs and business platforms for rice mills, hospitals, distributor networks and more.
            </p>
            <p style={{ fontFamily: "var(--sv-mono)", fontSize: 12.5, color: "rgba(255,255,255,.66)", margin: 0, lineHeight: 1.6 }}>
              {BUSINESS.addressShort[0]}
              <br />
              {BUSINESS.addressShort[1]}
            </p>
            <div className="flex flex-col" style={{ gap: 6, marginTop: 14, fontSize: 14 }}>
              <a href={`mailto:${BUSINESS.email}`} className="svf-link">{BUSINESS.email}</a>
              <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} className="svf-link">{BUSINESS.phone}</a>
            </div>
          </div>

          {[
            { h: "Industries", links: INDUSTRIES.map((i) => ({ name: i.name, href: i.href, external: i.external })) },
            { h: "Svasamm One", links: PRODUCTS.filter((p) => ONE[p.id]) },
            { h: "Also built", links: PRODUCTS.filter((p) => !ONE[p.id]) },
            {
              h: "Company",
              links: [
                { name: "About", href: "/pages/about.html" },
                { name: "Our team", href: "/team" },
                { name: "Jobs", href: "/jobs" },
                { name: "Contact", href: "/pages/contact.html" },
                { name: "All solutions", href: "/pages/services.html" },
                { name: "Guides", href: "/resources" },
                { name: "Pricing", href: "/pricing" },
              ],
            },
          ].map((col) => (
            <div key={col.h}>
              <div style={head}>{col.h}</div>
              <div className="flex flex-col" style={{ gap: 12 }}>
                {col.links.map((l: { name: string; href: string; external?: boolean }) =>
                  l.external ? (
                    <a key={l.name} href={l.href} target="_blank" rel="noopener" className="svf-link">{l.name}</a>
                  ) : (
                    <Link key={l.name} href={l.href} className="svf-link">{l.name}</Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: "rgba(255,255,255,.14)", margin: "44px 0 22px" }} />
        <div
          className="flex justify-between items-center flex-wrap"
          style={{ gap: 14, fontSize: 13, color: "rgba(255,255,255,.66)" }}
        >
          <span className="flex flex-wrap" style={{ gap: "6px 22px" }}>
            <span>© 2026 {BUSINESS.legalName}</span>
            <span style={{ fontFamily: "var(--sv-mono)", fontSize: 12 }}>GSTIN {BUSINESS.gstin}</span>
            <span style={{ fontFamily: "var(--sv-mono)", fontSize: 12 }}>CIN {BUSINESS.cin}</span>
          </span>
          <div className="flex items-center flex-wrap" style={{ gap: 22 }}>
            <Link href="/pricing" className="svf-link" style={{ fontSize: 13 }}>Pricing</Link>
            <Link href="/refund-policy" className="svf-link" style={{ fontSize: 13 }}>Refund and cancellation</Link>
            <Link href="/shipping-policy" className="svf-link" style={{ fontSize: 13 }}>Shipping and delivery</Link>
            <Link href="/privacy" className="svf-link" style={{ fontSize: 13 }}>Privacy Policy</Link>
            <Link href="/terms" className="svf-link" style={{ fontSize: 13 }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
