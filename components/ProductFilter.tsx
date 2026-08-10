"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "./IconClient";
import type { HomeProduct } from "@/lib/home";

type Filter = "all" | "vertical" | "platform" | "service";
const OPTS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "vertical", label: "Vertical" },
  { key: "platform", label: "Platform" },
  { key: "service", label: "Services" },
];

// Map the data's legacy tag classes to the --sv-* signal tags.
const svTag = (cls: string) =>
  cls.includes("accent")
    ? "sv-tag-brand"
    : cls.includes("outline")
      ? "sv-tag-outline"
      : "sv-tag";

// Home "Our solutions" grid with a client-side All/Vertical/Platform/Services filter (the only
// island in this section). Cards mirror the Products section of Svasamm.dc.html.
export default function ProductFilter({
  products,
}: {
  products: HomeProduct[];
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const shown =
    filter === "all" ? products : products.filter((p) => p.kind === filter);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 28,
          flexWrap: "wrap",
          marginBottom: 36,
        }}
      >
        <div style={{ maxWidth: "54ch" }}>
          <div className="sv-eyebrow">Our solutions</div>
          <h2 style={{ margin: "0 0 14px" }}>
            One platform, purpose-built products
          </h2>
          <p
            className="sv-muted"
            style={{ fontSize: 17, margin: 0 }}
          >
            Deep vertical systems for specific industries, plus the platform
            modules every operation needs. Filter to find yours.
          </p>
        </div>
        <div className="sv-seg" role="tablist">
          {OPTS.map((o) => (
            <label key={o.key} className="sv-seg-opt">
              <input
                type="radio"
                name="pf"
                checked={filter === o.key}
                onChange={() => setFilter(o.key)}
              />
              {o.label}
            </label>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))",
          gap: 20,
        }}
      >
        {shown.map((p) => {
          const inner = (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: 20,
                }}
              >
                <span className="sv-chip">
                  <Icon name={p.icon} size={22} />
                </span>
                <span className={`sv-tag ${svTag(p.tagClass)}`}>{p.tag}</span>
              </div>
              <h3 style={{ margin: "0 0 8px" }}>{p.name}</h3>
              <p
                className="sv-muted"
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  flex: 1,
                  margin: "0 0 18px",
                }}
              >
                {p.blurb}
              </p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  fontSize: 14.5,
                  fontWeight: 500,
                  color: "var(--sv-brand)",
                }}
              >
                {p.cta} <Icon name={p.ctaIcon} size={15} />
              </span>
            </>
          );
          const st: React.CSSProperties = {
            display: "flex",
            flexDirection: "column",
            padding: 26,
            color: "var(--sv-ink)",
          };
          return p.external ? (
            <a
              key={p.id}
              href={p.href}
              target="_blank"
              rel="noopener"
              className="sv-card sv-card-i"
              style={st}
            >
              {inner}
            </a>
          ) : (
            <Link
              key={p.id}
              href={p.href}
              className="sv-card sv-card-i"
              style={st}
            >
              {inner}
            </Link>
          );
        })}
      </div>
    </>
  );
}
