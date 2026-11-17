// Single lookup for every article, whatever module it came from.
//
// `lib/articles.ts` is AUTO-GENERATED from the design package's .dc.html prototypes.
// `lib/digital-articles.ts` is hand-authored, because Svasamm Digital for Healthcare has no
// prototype to extract from. Merging here means routing and the sitemap never need to know
// there are two sources — add a future source in this file only.
import { ARTICLE_BY_SLUG as GENERATED } from "./articles";
import { DIGITAL_ARTICLE_BY_SLUG } from "./digital-articles";
import { SCHOOLS_ARTICLE_BY_SLUG } from "./schools-articles";
import { RICE_MILL_ARTICLE_BY_SLUG } from "./rice-mill-articles";
import { WHY_ARTICLE_BY_SLUG } from "./why-articles";
import { FOOD_ARTICLE_BY_SLUG } from "./food-articles";
import { PEOPLE_ARTICLE_BY_SLUG } from "./people-articles";
import type { Article } from "./types";

const HAND_AUTHORED: Record<string, Article> = {
  ...DIGITAL_ARTICLE_BY_SLUG,
  ...SCHOOLS_ARTICLE_BY_SLUG,
  ...RICE_MILL_ARTICLE_BY_SLUG,
  ...WHY_ARTICLE_BY_SLUG,
  ...FOOD_ARTICLE_BY_SLUG,
  ...PEOPLE_ARTICLE_BY_SLUG,
};

// A hand-authored article may REPLACE a generated one at the same URL (17 Nov 2026: People's
// "hrms-for-manufacturing"). Generated keys end in ".html" and hand-authored ones do not, so both
// would be exported and the build fails on the clash (EEXIST). The generated one is dropped.
const REPLACED = (key: string) => key.endsWith(".html") && key.slice(0, -5) in HAND_AUTHORED;

export const ARTICLE_BY_SLUG: Record<string, Article> = {
  ...Object.fromEntries(Object.entries(GENERATED).filter(([key]) => !REPLACED(key))),
  ...HAND_AUTHORED,
};
