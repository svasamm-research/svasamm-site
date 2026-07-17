// SEO + JSON-LD for the two non-product/article pages that live under /pages/*.html
// (Solutions and Contact). Copied verbatim from the prototype wrapper helmets.
import type { Seo } from "./types";

export type CorePage = { kind: "solutions" | "contact"; seo: Seo; jsonLd: object[] };

export const CORE_BY_SLUG: Record<string, CorePage> = {
  "services.html": {
    kind: "solutions",
    seo: {
      metaTitle: "Solutions — Vertical ERPs & Platform Modules | Svasamm",
      metaDescription: "Every Svasamm product in one place: Millingo rice-mill ERP, Lucoze healthcare HIMS, distributor management, and platform modules — ERP, HRMS, CRM, service desk and loan management.",
      canonical: "https://svasamm.com/pages/services.html",
      ogType: "website",
      ogTitle: "Solutions | Svasamm",
      ogDescription: "Purpose-built vertical ERPs and horizontal platform modules for Indian operations.",
    },
    jsonLd: [],
  },
  "contact.html": {
    kind: "contact",
    seo: {
      metaTitle: "Contact Svasamm — Book a Product Walkthrough",
      metaDescription: "Tell us what you run and we'll show you the fit. Book a walkthrough with the team that builds Svasamm's software. Email query@svasamm.com or call +91 91471 44638.",
      canonical: "https://svasamm.com/pages/contact.html",
      ogType: "website",
      ogTitle: "Contact Svasamm",
      ogDescription: "Book a product walkthrough with the people who build the software.",
    },
    jsonLd: [
      { "@context": "https://schema.org", "@type": "ContactPage", name: "Contact Svasamm", url: "https://svasamm.com/pages/contact.html", mainEntity: { "@type": "Organization", name: "Svasamm Research Pvt Ltd", email: "query@svasamm.com", telephone: "+91-91471-44638", address: { "@type": "PostalAddress", streetAddress: "Nabagram, Konnagar", addressLocality: "Hooghly", addressRegion: "West Bengal", postalCode: "712246", addressCountry: "IN" } } },
    ],
  },
};
