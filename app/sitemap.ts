export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { PRODUCT_BY_SLUG } from "@/lib/products";
import { ARTICLE_BY_SLUG } from "@/lib/article-registry";
import { CORE_BY_SLUG } from "@/lib/pages";
import { SITE_URL } from "@/lib/site";

// All indexable routes: home + legal + every /pages/*.html (products, articles, Solutions,
// Contact). Canonicals come straight from each record's SEO, so the sitemap can't drift
// from the pages themselves.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-07-16";
  const canonicals = [
    ...Object.values(PRODUCT_BY_SLUG).map((p) => p.seo.canonical),
    ...Object.values(ARTICLE_BY_SLUG).map((a) => a.seo.canonical),
    ...Object.values(CORE_BY_SLUG).map((c) => c.seo.canonical),
  ];

  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    ...canonicals.map((url) => ({ url, lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${SITE_URL}/privacy`, lastModified: "2026-10-01", changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: "2026-10-01", changeFrequency: "yearly", priority: 0.3 },
    // Billing pages the payment provider (Cashfree) reviews before approving the account.
    { url: `${SITE_URL}/pricing`, lastModified: "2026-10-01", changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/refund-policy`, lastModified: "2026-10-01", changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/shipping-policy`, lastModified: "2026-10-01", changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/delete-account`, lastModified: "2026-10-01", changeFrequency: "yearly", priority: 0.2 },
  ];
}
