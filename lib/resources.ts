// What the Resources hub and an article's "related" cards know about every article
// (15 Oct 2026, ported from lucoze-website's blog pattern). One place derives the
// category, the read time and the date, so the hub and the article never disagree.
import { ARTICLE_BY_SLUG } from "./article-registry";
import type { Article, Block } from "./types";
import { toRoute } from "./routes";

// A category is the product an article serves. Order = the order of the chips.
export const CATEGORIES: { key: string; label: string; products: string[] }[] = [
  { key: "rice-mills", label: "Rice mills & CMR", products: ["millingo"] },
  { key: "payroll", label: "Payroll & HR", products: ["hrms"] },
  { key: "why", label: "Why Svasamm", products: ["platform"] },
  { key: "healthcare", label: "Healthcare marketing", products: ["digital-healthcare"] },
  { key: "schools", label: "School marketing", products: ["digital-schools"] },
  { key: "business", label: "Distribution, ERP & CRM", products: ["dms", "erp", "crm", "service-desk"] },
];
const CATEGORY_OF = Object.fromEntries(CATEGORIES.flatMap((c) => c.products.map((p) => [p, c])));

// Articles from the first, generated set carry no date; they went live with the site.
const SITE_LAUNCH = "2026-07-16";

const text = (b: Block): string => {
  const parts: string[] = [];
  const any = b as Record<string, unknown>;
  for (const k of ["h", "text"]) if (typeof any[k] === "string") parts.push(any[k] as string);
  if (Array.isArray(any.items)) for (const i of any.items as { b?: string; t?: string }[]) parts.push(`${i.b ?? ""} ${i.t ?? ""}`);
  if (Array.isArray(any.rows)) for (const r of any.rows as string[][]) parts.push(r.join(" "));
  return parts.join(" ");
};

export type Card = { slug: string; href: string; title: string; excerpt: string; category: string; categoryLabel: string; minutes: number; date: string };

export function cardOf(a: Article): Card {
  const words = [a.intro, ...a.sections.map(text), ...a.faqs.map((f) => `${f.q} ${f.a}`)].join(" ").split(/\s+/).length;
  const ld = a.jsonLd.find((b) => "datePublished" in b) as { datePublished?: string } | undefined;
  const cat = CATEGORY_OF[a.parentProduct] ?? CATEGORIES[CATEGORIES.length - 1];
  const excerpt = a.intro.length > 190 ? a.intro.slice(0, a.intro.lastIndexOf(" ", 185)) + "…" : a.intro;
  return {
    slug: a.slug, href: `/pages/${a.slug}.html`, title: a.title, excerpt, category: cat.key, categoryLabel: cat.label,
    minutes: Math.max(2, Math.round(words / 200)), date: ld?.datePublished ?? SITE_LAUNCH,
  };
}

export const ALL_CARDS: Card[] = Object.values(ARTICLE_BY_SLUG).map(cardOf)
  .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));

/** Three cards to read next: the article's own related links first, then its category, newest first. */
export function relatedCards(a: Article, n = 3): Card[] {
  const own = a.related.map((r) => toRoute(r.href).match(/\/pages\/([^/]+)\.html$/)?.[1]).filter((s): s is string => !!s && s !== a.slug);
  const picked = own.map((s) => ALL_CARDS.find((c) => c.slug === s)).filter((c): c is Card => !!c);
  const cat = cardOf(a).category;
  for (const c of ALL_CARDS) if (picked.length < n && c.slug !== a.slug && c.category === cat && !picked.includes(c)) picked.push(c);
  return picked.slice(0, n);
}

/** A heading's anchor, for the "In this post" list. */
export const anchor = (h: string) => h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
