export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { PRODUCT_BY_SLUG } from "@/lib/products";
import { ARTICLE_BY_SLUG } from "@/lib/article-registry";
import { CORE_BY_SLUG } from "@/lib/pages";
import { JOURNEY_BY_SLUG } from "@/lib/journeys";
import { SITE_URL } from "@/lib/site";

// All indexable routes: home + legal + every /pages/*.html (products, articles, Solutions,
// Contact). Canonicals come straight from each record's SEO, so the sitemap can't drift
// from the pages themselves.
//
// lastmod is what makes a re-submitted sitemap mean anything: Google recrawls pages whose date
// moved. It was one fixed "2026-07-16" for every page until 13 Oct 2026, so resubmitting after
// a release told Google nothing had changed. A page's date is the later of its own
// dateModified (articles carry one in their JSON-LD) and SITE_CHANGED.
//
// ⛔ BUMP SITE_CHANGED when a release changes what EVERY page shows — the header, the footer,
// the shared closing box. Do not bump it for a change to one page: that page's own date moves.
const SITE_CHANGED = "2026-10-15"; // v0.9: Resources hub, contents list and related cards on every guide

const later = (a: string, b?: string) => (b && b > a ? b : a);
const modifiedOf = (jsonLd: object[]) =>
  (jsonLd.find((b) => "dateModified" in b) as { dateModified?: string } | undefined)?.dateModified;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ...Object.values(PRODUCT_BY_SLUG).map((p) => ({ url: p.seo.canonical, lastModified: SITE_CHANGED })),
    ...Object.values(ARTICLE_BY_SLUG).map((a) => ({ url: a.seo.canonical, lastModified: later(SITE_CHANGED, modifiedOf(a.jsonLd)) })),
    ...Object.values(CORE_BY_SLUG).map((c) => ({ url: c.seo.canonical, lastModified: SITE_CHANGED })),
    ...Object.values(JOURNEY_BY_SLUG).map((j) => ({ url: j.seo.canonical, lastModified: SITE_CHANGED })),
  ];

  return [
    { url: `${SITE_URL}/`, lastModified: SITE_CHANGED, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/resources`, lastModified: SITE_CHANGED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/team`, lastModified: SITE_CHANGED, changeFrequency: "monthly", priority: 0.5 },
    ...pages.map((p) => ({ ...p, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${SITE_URL}/privacy`, lastModified: "2026-10-01", changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: "2026-10-01", changeFrequency: "yearly", priority: 0.3 },
    // Billing pages the payment provider (Cashfree) reviews before approving the account.
    { url: `${SITE_URL}/pricing`, lastModified: "2026-10-01", changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/refund-policy`, lastModified: "2026-10-01", changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/shipping-policy`, lastModified: "2026-10-01", changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/delete-account`, lastModified: "2026-10-01", changeFrequency: "yearly", priority: 0.2 },
  ];
}
