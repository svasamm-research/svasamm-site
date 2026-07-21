"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "./IconClient";
import type { HomeProduct } from "@/lib/home";

type Filter = "all" | "vertical" | "platform";
const OPTS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "vertical", label: "Vertical" },
  { key: "platform", label: "Platform" },
];

// Home "Our solutions" grid with a client-side All/Vertical/Platform filter (the only
// island in this section). Cards mirror Svasamm.dc.html.
export default function ProductFilter({ products }: { products: HomeProduct[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? products : products.filter((p) => p.kind === filter);

  return (
    <>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 34 }}>
        <div style={{ maxWidth: "38em" }}>
          <div style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12 }}>Our solutions</div>
          <h2 style={{ fontSize: 36, letterSpacing: "-.02em", margin: "0 0 12px", color: "var(--color-text)" }}>One platform, purpose-built products</h2>
          <p style={{ fontSize: 16, color: "var(--color-neutral-300)", margin: 0 }}>Deep vertical systems for specific industries, plus the platform modules every operation needs. Filter to find yours.</p>
        </div>
        <div className="seg" role="tablist">
          {OPTS.map((o) => (
            <label key={o.key} className="seg-opt">
              <input type="radio" name="pf" checked={filter === o.key} onChange={() => setFilter(o.key)} />
              {o.label}
            </label>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(275px,1fr))", gap: 18 }}>
        {shown.map((p) => {
          const inner = (
            <>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{ width: 44, height: 44, borderRadius: 11, display: "grid", placeItems: "center", background: "var(--color-accent-900)", color: "var(--color-accent-300)" }}>
                  <Icon name={p.icon} style={{ fontSize: 23 }} />
                </span>
                <span className={`tag ${p.tagClass}`} style={{ fontSize: 10 }}>{p.tag}</span>
              </div>
              <h3 style={{ fontSize: 18, margin: "0 0 7px", color: "var(--color-text)" }}>{p.name}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--color-neutral-400)", flex: 1, margin: "0 0 16px" }}>{p.blurb}</p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: 13.5, color: "var(--color-accent)" }}>
                {p.cta} <Icon name={p.ctaIcon} weight="bold" style={{ fontSize: 13 }} />
              </span>
            </>
          );
          const cls = "sv-card-hover";
          const style: React.CSSProperties = { display: "flex", flexDirection: "column", padding: 22, borderRadius: 14, background: "var(--color-surface)", border: "1px solid var(--color-neutral-800)" };
          return p.external ? (
            <a key={p.id} href={p.href} target="_blank" rel="noopener" className={cls} style={style}>{inner}</a>
          ) : (
            <Link key={p.id} href={p.href} className={cls} style={style}>{inner}</Link>
          );
        })}
      </div>
    </>
  );
}
