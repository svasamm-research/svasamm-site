"use client";

import { useState } from "react";
import Link from "next/link";
import type { Card } from "@/lib/resources";

// The Resources hub's chips, sort and cards — the one interactive part of /resources.
// Ported from lucoze-website's blog index. Every card is also in the server HTML, so a
// crawler and a visitor without JavaScript see all of them.
export default function ResourcesGrid({ cards, categories }: { cards: Card[]; categories: { key: string; label: string }[] }) {
  const [cat, setCat] = useState("all");
  const [sort, setSort] = useState<"new" | "az">("new");
  const shown = cards
    .filter((c) => cat === "all" || c.category === cat)
    .sort((a, b) => (sort === "az" ? a.title.localeCompare(b.title) : b.date.localeCompare(a.date) || a.title.localeCompare(b.title)));
  const chip = (key: string, label: string, n: number) => (
    <button
      key={key}
      type="button"
      onClick={() => setCat(key)}
      aria-pressed={cat === key}
      className="sv-res-chip"
      data-on={cat === key ? "" : undefined}
    >
      {label} <span style={{ opacity: 0.6 }}>{n}</span>
    </button>
  );
  return (
    <>
      {/* Chips wrap among themselves; the sort keeps its place at the end of the first line. */}
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 12, paddingBottom: 22, borderBottom: "1px solid var(--sv-line)", marginBottom: 28 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, flex: "1 1 520px" }}>
          {chip("all", "All", cards.length)}
          {categories.map((c) => chip(c.key, c.label, cards.filter((x) => x.category === c.key).length))}
        </div>
        <label style={{ flex: "none", display: "inline-flex", alignItems: "center" }}>
          <span className="sr-only">Sort</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as "new" | "az")} className="sv-input" style={{ width: "auto", padding: "5px 10px", fontSize: 13.5 }}>
            <option value="new">Newest first</option>
            <option value="az">A–Z</option>
          </select>
        </label>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
        {shown.map((c) => (
          <Link key={c.slug} href={c.href} className="sv-card sv-card-i" data-evt="Resource Click" data-evt-loc={c.slug}
            style={{ padding: 26, display: "flex", flexDirection: "column", gap: 12, color: "var(--sv-ink)" }}>
            <span className="sv-eyebrow" style={{ margin: 0 }}>{c.categoryLabel}</span>
            <h2 style={{ fontSize: 20, lineHeight: 1.3, margin: 0 }}>{c.title}</h2>
            <p className="sv-muted" style={{ fontSize: 14.5, lineHeight: 1.6, margin: 0, flex: 1 }}>{c.excerpt}</p>
            <span style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--sv-line)", paddingTop: 14,
              fontFamily: "var(--sv-mono)", fontSize: 12, color: "var(--sv-ink-3)" }}>
              <span>Mithun K. Singh</span>
              <span>{c.minutes} min read</span>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
