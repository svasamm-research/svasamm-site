import Link from "next/link";
import Image from "next/image";
import { PRODUCTS, BUSINESS } from "@/lib/site";

const kicker: React.CSSProperties = { fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-neutral-500)", marginBottom: 14 };

export default function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--color-divider)", background: "var(--color-bg)", padding: "56px 0 30px" }}>
      <div className="mx-auto px-6" style={{ maxWidth: 1180 }}>
        <div className="grid grid-cols-2 gap-9 mob:[grid-template-columns:1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5" style={{ marginBottom: 14 }}>
              <Image src="/assets/logo-svasamm.svg" alt="Svasamm" width={30} height={30} style={{ borderRadius: 8 }} />
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 18, color: "var(--color-text)" }}>Svasamm</span>
            </div>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--color-neutral-400)", margin: "0 0 12px", maxWidth: "26em" }}>
              {BUSINESS.legalName} builds vertical ERPs and business platforms for rice mills, hospitals, distributor networks and more.
            </p>
            <p style={{ fontSize: 12.5, color: "var(--color-neutral-500)", margin: 0 }}>Nabagram, Konnagar, Hooghly, WB 712246</p>
          </div>

          <div>
            <div style={kicker}>Products</div>
            <div className="flex flex-col gap-[9px]">
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
            <div style={kicker}>Company</div>
            <div className="flex flex-col gap-[9px]">
              <Link href="/pages/services.html" className="svf-link">All solutions</Link>
              <Link href="/pages/about.html" className="svf-link">About</Link>
              <Link href="/#why" className="svf-link">Why Svasamm</Link>
              <Link href="/#regions" className="svf-link">Regions</Link>
              <Link href="/pages/contact.html" className="svf-link">Contact</Link>
            </div>
          </div>

          <div>
            <div style={kicker}>Reach us</div>
            <div className="flex flex-col gap-[9px]">
              <a href={`mailto:${BUSINESS.email}`} className="svf-link">{BUSINESS.email}</a>
              <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} className="svf-link">{BUSINESS.phone}</a>
            </div>
          </div>
        </div>

        <div className="hr" />
        <div className="flex justify-between items-center flex-wrap gap-2.5" style={{ fontSize: 12.5, color: "var(--color-neutral-500)" }}>
          <span>© 2026 {BUSINESS.legalName}. All rights reserved.</span>
          <div className="flex items-center flex-wrap" style={{ gap: 18 }}>
            <Link href="/privacy" className="svf-link" style={{ fontSize: 12.5 }}>Privacy Policy</Link>
            <Link href="/terms" className="svf-link" style={{ fontSize: 12.5 }}>Terms of Service</Link>
            <span>API-first · Self-hostable · India-first</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
