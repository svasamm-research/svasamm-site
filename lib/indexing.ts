// Pages that stay live for anyone sent a link, but are kept OUT of Google: `noindex` on the page
// and absent from the sitemap. Both read this one list, so they cannot disagree (a noindex page
// still listed in the sitemap asks Google to index what we told it not to).
//
// Svasamm Digital for Healthcare — Mithun, 10 Nov 2026: stopped as a search effort. Its pages had
// 41% of svasamm.com's impressions at position ~61 and never a click, and Svasamm is a product
// company now (the Business Profile decision of 9 Nov). docs/seo-operating-plan.md in web-dev.
//
// Svasamm Digital for Schools — Mithun, 10 Nov 2026, the same day and for the same reason.
import { DIGITAL_ARTICLE_BY_SLUG } from "./digital-articles";
import { SCHOOLS_ARTICLE_BY_SLUG } from "./schools-articles";

export const NOT_INDEXED: ReadonlySet<string> = new Set([
  "digital-healthcare.html",
  ...Object.keys(DIGITAL_ARTICLE_BY_SLUG),
  "digital-schools.html",
  ...Object.keys(SCHOOLS_ARTICLE_BY_SLUG),
]);

/** "https://svasamm.com/pages/x.html" or "x.html" -> whether Google should be kept away from it. */
export const isIndexed = (urlOrSlug: string) => !NOT_INDEXED.has(urlOrSlug.split("/").pop() ?? "");
