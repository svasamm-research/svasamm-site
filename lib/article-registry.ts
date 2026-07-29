// Single lookup for every article, whatever module it came from.
//
// `lib/articles.ts` is AUTO-GENERATED from the design package's .dc.html prototypes.
// `lib/digital-articles.ts` is hand-authored, because Svasamm Digital for Healthcare has no
// prototype to extract from. Merging here means routing and the sitemap never need to know
// there are two sources — add a future source in this file only.
import { ARTICLE_BY_SLUG as GENERATED } from "./articles";
import { DIGITAL_ARTICLE_BY_SLUG } from "./digital-articles";
import { RICE_MILL_ARTICLE_BY_SLUG } from "./rice-mill-articles";
import type { Article } from "./types";

export const ARTICLE_BY_SLUG: Record<string, Article> = {
  ...GENERATED,
  ...DIGITAL_ARTICLE_BY_SLUG,
  ...RICE_MILL_ARTICLE_BY_SLUG,
};
