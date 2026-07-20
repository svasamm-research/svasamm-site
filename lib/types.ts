// Content types — shaped to the planned Sanity schemas (README §Content model) so the
// in-repo data can be migrated to Sanity later without touching components.

export type Seo = {
  metaTitle: string;
  metaDescription: string;
  canonical: string; // absolute https://svasamm.com/pages/*.html
  ogType: "website" | "article";
  ogTitle?: string;
  ogDescription?: string;
};

export type Faq = { q: string; a: string };

export type Feature = { icon: string; title: string; body: string };

export type Tier = {
  name: string;
  for: string;
  items: string[];
  cta: string;
  featured?: boolean;
  featuredLabel?: string;   // badge text; defaults to "Most popular" in ProductPage
};

// A single link in a product's Resources block or an article's Related list.
export type ResourceLink = { title: string; href: string; note?: string };

export type ResourceColumn = { heading: string; icon: string; links: ResourceLink[] };
export type ProductResources = {
  title: string;
  intro: string;
  grid: string; // CSS grid-template-columns from the prototype
  columns: ResourceColumn[];
};

export type Product = {
  id: string; // pid, e.g. "millingo"
  name: string;
  badge: string;
  tagline: string;
  blurb: string;
  ctaPrimary: string;
  featuresTitle: string;
  features: Feature[];
  tiers?: Tier[];
  tiersTitle?: string;
  builtFor: string[];
  resources?: ProductResources;
  faqs: Faq[];
  cta: { title: string; body: string; primary: string; secondary?: string };
  seo: Seo;
  jsonLd: object[]; // verbatim schema blocks from the prototype helmet
};

// Article prose blocks — mirror Article.dc.html norm(): p | note | list | table.
export type ListItem = string | { b?: string; t?: string };
export type Block =
  | { type: "p"; h?: string; text: string }
  | { type: "note"; h?: string; text: string }
  | { type: "list"; h?: string; items: ListItem[] }
  | { type: "table"; h?: string; cols: string[]; rows: string[][] };

export type ArticleType = "guide" | "industry" | "state" | "compare";

export type Article = {
  slug: string; // canonical file key, e.g. "custom-milled-rice-cmr-process"
  type: ArticleType;
  parentProduct: string; // pid, e.g. "millingo"
  eyebrow: string;
  title: string;
  byline: string; // e.g. "Mithun K. Singh, Founder"
  intro: string;
  sections: Block[];
  faqs: Faq[];
  related: ResourceLink[];
  // Article CTA band: heading + body, a primary link to the parent product, and a fixed
  // "Book a free consultation" → Contact (rendered by the component).
  cta: { title: string; body: string; productHref: string; productLabel: string };
  seo: Seo;
  jsonLd: object[];
};
