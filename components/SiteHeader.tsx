"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "./IconClient";
import { PRODUCTS, type NavProduct } from "@/lib/site";

const vertical = PRODUCTS.filter((p) => p.category === "vertical");
const platform = PRODUCTS.filter((p) => p.category === "platform");
const service = PRODUCTS.filter((p) => p.category === "service");

function ProductLink({
  p,
  className,
  style,
  children,
}: {
  p: NavProduct;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  if (p.external) {
    return (
      <a href={p.href} target="_blank" rel="noopener" className={className} style={style}>
        {children}
      </a>
    );
  }
  return (
    <Link href={p.href} className={className} style={style}>
      {children}
    </Link>
  );
}

export default function SiteHeader({ active = "" }: { active?: string }) {
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);

  const solActive = mega || active === "solutions" || active === "products";
  const neutral300 = "var(--color-neutral-300)";
  const accent = "var(--color-accent)";

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "color-mix(in srgb, var(--color-bg) 88%, transparent)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--color-divider)",
      }}
    >
      <div className="mx-auto flex items-center gap-5 px-6" style={{ maxWidth: 1180, height: 64 }}>
        <Link href="/" className="flex items-center gap-[11px]">
          <Image src="/assets/logo.svg" alt="Svasamm" width={34} height={34} style={{ borderRadius: 9 }} priority />
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 19, letterSpacing: "-.01em", color: "var(--color-text)" }}>
            Svasamm
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden mob:flex items-center gap-[26px] ml-[14px]">
          <div className="relative" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
            <button
              onClick={(e) => { e.preventDefault(); setMega((v) => !v); }}
              className="inline-flex items-center gap-1.5 border-0 bg-transparent cursor-pointer py-2"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: 14, color: solActive ? accent : neutral300 }}
              aria-expanded={mega}
            >
              Solutions
              <Icon name="ph-caret-down" weight="bold" size={12} style={{ transition: "transform .2s ease", transform: mega ? "rotate(180deg)" : "rotate(0deg)" }} />
            </button>
            {mega && (
              <div
                className="svh-mega grid"
                style={{ position: "absolute", top: "100%", left: -16, width: 660, padding: 20, background: "var(--color-surface)", border: "1px solid var(--color-neutral-800)", borderRadius: 14, boxShadow: "var(--shadow-lg)", gridTemplateColumns: "1fr 1fr", gap: 26 }}
              >
                <div>
                  <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: accent, marginBottom: 12 }}>Vertical products</div>
                  <div className="flex flex-col gap-1">
                    {vertical.map((p) => (
                      <ProductLink key={p.id} p={p} className="svh-mega-item flex gap-3 p-2.5" style={{ borderRadius: 9 }}>
                        <span className="flex-none grid place-items-center" style={{ width: 34, height: 34, borderRadius: 8, background: "var(--color-accent-900)", color: "var(--color-accent-300)" }}>
                          <Icon name={p.icon} size={18} />
                        </span>
                        <span className="block">
                          <span className="block" style={{ fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: 14, color: "var(--color-text)" }}>{p.name}{p.external ? " ↗" : ""}</span>
                          <span className="block" style={{ fontSize: 12, color: "var(--color-neutral-500)", lineHeight: 1.4 }}>{p.desc}</span>
                        </span>
                      </ProductLink>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: accent, marginBottom: 12 }}>Platform modules</div>
                  <div className="grid grid-cols-2 gap-1">
                    {platform.map((p) => (
                      <ProductLink key={p.id} p={p} className="svh-mega-item flex items-center gap-[9px]" style={{ padding: "9px 10px", borderRadius: 9 }}>
                        <Icon name={p.icon} size={17} style={{ color: "var(--color-accent-300)" }} />
                        <span style={{ fontSize: 13, color: "var(--color-text)" }}>{p.name}</span>
                      </ProductLink>
                    ))}
                  </div>
                  <Link href="/pages/services.html" className="inline-flex items-center gap-1.5 mt-3.5" style={{ fontSize: 13, fontWeight: 500, color: accent }}>
                    View all solutions <Icon name="ph-arrow-right" weight="bold" size={12} />
                  </Link>
                </div>
                <div style={{ gridColumn: "1 / -1", borderTop: "1px solid var(--color-divider)", paddingTop: 16 }}>
                  <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: accent, marginBottom: 12 }}>Services</div>
                  <div className="flex flex-col gap-1">
                    {service.map((p) => (
                      <ProductLink key={p.id} p={p} className="svh-mega-item flex gap-3 p-2.5" style={{ borderRadius: 9 }}>
                        <span className="flex-none grid place-items-center" style={{ width: 34, height: 34, borderRadius: 8, background: "var(--color-accent-900)", color: "var(--color-accent-300)" }}>
                          <Icon name={p.icon} size={18} />
                        </span>
                        <span className="block">
                          <span className="block" style={{ fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: 14, color: "var(--color-text)" }}>{p.name}{p.external ? " ↗" : ""}</span>
                          <span className="block" style={{ fontSize: 12, color: "var(--color-neutral-500)", lineHeight: 1.4 }}>{p.desc}</span>
                        </span>
                      </ProductLink>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/#regions" className="svh-link" style={{ fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: 14 }}>Regions</Link>
          <Link href="/#why" className="svh-link" style={{ fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: 14 }}>Why Svasamm</Link>
          <Link href="/pages/contact.html" style={{ fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: 14, color: active === "contact" ? accent : neutral300 }}>Contact</Link>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Link href="/pages/contact.html" className="btn btn-primary hidden mob:inline-flex" style={{ fontSize: 13.5 }}>Talk to us</Link>
          <button className="mob:hidden grid place-items-center border-0 bg-transparent cursor-pointer" style={{ color: "var(--color-text)", width: 40, height: 40 }} aria-label="Menu" onClick={() => setMobile((v) => !v)}>
            <Icon name={mobile ? "ph-x" : "ph-list"} size={24} />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {mobile && (
        <div className="mob:hidden flex flex-col gap-1.5" style={{ borderTop: "1px solid var(--color-divider)", background: "var(--color-bg)", padding: "16px 24px 22px" }}>
          <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: accent, margin: "6px 0 4px" }}>Products</div>
          {PRODUCTS.map((p) => (
            <ProductLink key={p.id} p={p} className="flex items-center gap-[11px]" style={{ padding: "9px 0", color: "var(--color-text)", fontSize: 15 }}>
              <Icon name={p.icon} size={19} style={{ color: "var(--color-accent-300)" }} />
              {p.name}{p.external ? " ↗" : ""}
            </ProductLink>
          ))}
          <div className="hr" />
          <Link href="/pages/services.html" style={{ padding: "9px 0", color: "var(--color-text)", fontSize: 15 }}>All solutions</Link>
          <Link href="/#regions" style={{ padding: "9px 0", color: "var(--color-text)", fontSize: 15 }}>Regions</Link>
          <Link href="/#why" style={{ padding: "9px 0", color: "var(--color-text)", fontSize: 15 }}>Why Svasamm</Link>
          <Link href="/pages/contact.html" className="btn btn-primary btn-block" style={{ marginTop: 10 }}>Talk to us</Link>
        </div>
      )}
    </header>
  );
}
