import Link from "next/link";
import Image from "next/image";
import { PRODUCTS, BUSINESS } from "@/lib/site";

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
        <div className="grid grid-cols-2 mob:[grid-template-columns:1.5fr_1fr_1fr_1fr]" style={{ gap: 44 }}>
          <div>
            <div className="flex items-center" style={{ gap: 10, marginBottom: 18 }}>
              <Image src="/assets/logo-svasamm.svg" alt="Svasamm" width={32} height={32} style={{ borderRadius: 7 }} />
              <span style={{ fontWeight: 600, fontSize: 20, letterSpacing: "-.02em", color: "#fff" }}>Svasamm</span>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "rgba(255,255,255,.82)", margin: "0 0 18px", maxWidth: "32ch" }}>
              {BUSINESS.legalName} builds vertical ERPs and business platforms for rice mills, hospitals, distributor networks and more.
            </p>
            <p style={{ fontFamily: "var(--sv-mono)", fontSize: 12.5, color: "rgba(255,255,255,.66)", margin: 0, lineHeight: 1.6 }}>
              Nabagram, Konnagar
              <br />
              Hooghly, West Bengal 712246
            </p>
          </div>

          <div>
            <div style={head}>Products</div>
            <div className="flex flex-col" style={{ gap: 12 }}>
              {PRODUCTS.map((p) =>
                p.external ? (
                  <a key={p.id} href={p.href} target="_blank" rel="noopener" className="svf-link">{p.name}</a>
                ) : (
                  <Link key={p.id} href={p.href} className="svf-link">{p.name}</Link>
                )
              )}
            </div>
          </div>

          <div>
            <div style={head}>Company</div>
            <div className="flex flex-col" style={{ gap: 12 }}>
              <Link href="/pages/services.html" className="svf-link">All solutions</Link>
              <Link href="/pages/about.html" className="svf-link">About</Link>
              <Link href="/pages/contact.html" className="svf-link">Contact</Link>
            </div>
          </div>

          <div>
            <div style={head}>Reach us</div>
            <div className="flex flex-col" style={{ gap: 12 }}>
              <a href={`mailto:${BUSINESS.email}`} className="svf-link">{BUSINESS.email}</a>
              <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} className="svf-link">{BUSINESS.phone}</a>
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: "rgba(255,255,255,.14)", margin: "44px 0 22px" }} />
        <div
          className="flex justify-between items-center flex-wrap"
          style={{ gap: 14, fontSize: 13, color: "rgba(255,255,255,.66)" }}
        >
          <span>© 2026 {BUSINESS.legalName}. All rights reserved.</span>
          <div className="flex items-center flex-wrap" style={{ gap: 22 }}>
            <Link href="/privacy" className="svf-link" style={{ fontSize: 13 }}>Privacy Policy</Link>
            <Link href="/terms" className="svf-link" style={{ fontSize: 13 }}>Terms of Service</Link>
            <span style={{ fontFamily: "var(--sv-mono)", fontSize: 12 }}>API-first · Self-hostable · India-first</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
