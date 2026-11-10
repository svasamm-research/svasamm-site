// A guide's "product moment": one short box, placed right after the section where the reader
// meets the problem the product solves, not only at the foot of the page.
//
// Why (web-dev docs/seo-operating-plan.md, 10 Nov 2026): the rice-mill guides brought ~80 visits
// in 28 days and no demo request; the only requests came from millingo.html. Each guide had one
// product link, in the closing card, which most readers never reach.
//
// `after` is the heading of the section the box follows, word for word (the build fails if a
// heading is renamed and the box would silently vanish — tests/e2e/svasamm.spec.ts). Each line
// claims only what that guide's own closing card already says Millingo does.
// When the boxes last changed: the sitemap gives each such guide this date as its lastmod at
// least, so a resubmitted sitemap tells Google the page moved.
export const MOMENTS_CHANGED = "2026-11-10";

export type ProductMoment = { after: string; text: string };

// Keyed by the article's slug (Article.slug: no ".html").
export const PRODUCT_MOMENTS: Record<string, ProductMoment> = {
  "punjab-custom-milling-policy-2026-27": {
    after: "What the 90% line asks of your records",
    text: "Millingo keeps your delivered share against allotted paddy current as each lot is delivered, so you see the 90% line during the season, not after it.",
  },
  "punjab-release-order-paddy-allotment": {
    after: "What a mill should keep per release order",
    text: "Millingo keeps linked and release-order paddy apart and your position current lorry by lorry, so each release order's figures are ready when they are asked for.",
  },
  "up-paddy-procurement-cmr-2026-27": {
    after: "What a UP mill should keep, agency by agency",
    text: "Millingo keeps paddy received and rice delivered per agency current as this season's paddy arrives, so what you owe each agency is one look away.",
  },
  "custom-milled-rice-cmr-process": {
    after: "Where mills lose money and fall out of compliance",
    text: "Millingo tracks out-turn lot by lot against the 67% norm, so a shortfall surfaces the day it happens instead of at reconciliation.",
  },
  "rice-mill-yield-recovery": {
    after: "How to measure it accurately (not guess it)",
    text: "Millingo tracks yield per lot, machine and shift as you mill — head rice, broken, bran and husk — so recovery is a measured figure, not a guess.",
  },
  "gst-for-rice-mills": {
    after: "By-products: each has its own treatment",
    text: "Millingo carries the right HSN and rate per item, tells pre-packaged from loose sales, and books by-products separately, so the invoice is right the first time.",
  },
};
