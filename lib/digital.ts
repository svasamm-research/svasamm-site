// Svasamm Digital — healthcare digitisation service, modelled as a solution so it renders
// through the shared ProductPage and appears everywhere the other solutions do.
// Spec: docs/superpowers/specs/2026-07-19-svasamm-digital-service-design.md
//
// HARD GUARDRAILS (spec §8/§9) — do not violate when editing this file:
//   - No prices. The CTA is always "Request a proposal".
//   - No case studies, testimonials, client logos or result metrics (there are no clients yet).
//   - No promises of patient volume, revenue or clinical outcomes — describe work delivered.
//   - Svasamm is a provider TO healthcare: never emit MedicalOrganization/Physician for it.
//
// FAQPage schema is NOT built here — lib/products.ts appends it from `faqs` for every
// solution. Adding it here would duplicate it.
import { SITE_URL } from "./site";
import type { Product } from "./types";

export const DIGITAL_PRODUCT: Product = {
  id: "digital",
  name: "Svasamm Digital",
  badge: "Svasamm Digital · Healthcare",
  tagline: "Digital presence for healthcare, done properly",
  blurb:
    "Websites, Google Business Profile, local SEO and marketing built specifically for clinics, nursing homes and small hospitals across West Bengal and East India. Fixed scope, we take only a small number of clients, and category exclusivity in your catchment — we won't take your direct competitor.",
  ctaPrimary: "Request a proposal",
  featuresTitle: "What the engagement covers",
  features: [
    { icon: "ph-desktop", title: "A website built for the facility", body: "Services, departments, doctors, timings and directions — structured the way patients actually look for them, and easy for your staff to keep current." },
    { icon: "ph-map-pin", title: "Google Business Profile", body: "Set up or claimed, categories and services filled in properly, hours and photos correct — the listing most patients see before they ever reach your site." },
    { icon: "ph-map-trifold", title: "Local SEO & NAP consistency", body: "On-page optimisation for the searches your catchment actually makes, and your name, address and phone made consistent across the listings that carry them." },
    { icon: "ph-file-text", title: "Schema & AI visibility", body: "Structured data so search engines and AI assistants can read what your facility is, where it is and what it treats — increasingly how patients find care." },
    { icon: "ph-chart-bar", title: "Monthly reporting", body: "On Growth and Full, a plain-language monthly report of the work done and what local ranking and traffic look like. No dashboard to log into." },
    { icon: "ph-handshake", title: "Category exclusivity", body: "One client per facility category per catchment. If a direct competitor inside your catchment approaches us, we decline — and it is written into the agreement." },
  ],
  tiersTitle: "Three fixed tiers — scope published, price quoted per facility",
  tiers: [
    {
      name: "Foundation",
      for: "One-time build. Get the facility properly online, findable and correctly represented.",
      items: [
        "Website build",
        "Google Business Profile setup & optimisation",
        "On-page and local SEO",
        "Schema markup and GEO / AI-visibility setup",
        "NAP consistency across listings",
      ],
      cta: "Request a proposal",
    },
    {
      name: "Growth",
      for: "Foundation, then kept active every month.",
      items: [
        "Everything in Foundation",
        "Google Business Profile posts",
        "One content piece per month",
        "Monthly local ranking & traffic report",
        "Ongoing on-page optimisation",
        "Help setting up review generation",
      ],
      cta: "Request a proposal",
      featured: true,
      featuredLabel: "Recommended",
    },
    {
      name: "Full",
      for: "Growth, plus paid acquisition and social handled for you.",
      items: [
        "Everything in Growth",
        "Google Ads management",
        "Meta Ads management",
        "Social media management",
      ],
      cta: "Request a proposal",
    },
  ],
  builtFor: [
    "Clinics",
    "Nursing homes",
    "Small hospitals",
    "Diagnostic centres",
    "Multi-doctor practices",
    "West Bengal & East India",
  ],
  faqs: [
    {
      q: "Will you work with my competitor?",
      a: "No. You get category exclusivity in your catchment — we won't take your direct competitor. One client per facility category per catchment (roughly a 5–8 km radius, or a pincode cluster where density is high), and it is written into the agreement. If a direct competitor inside that catchment approaches us, we decline. This applies to Svasamm Digital services only — it never applies to Lucoze, our hospital management software, which any facility can buy.",
    },
    {
      q: "Why does exclusivity matter for local search?",
      a: "Local and map results are heavily proximity-driven, so two facilities several kilometres apart largely serve different searchers and there is no real conflict. The genuine conflict is narrow — two direct competitors in the same catchment chasing the same queries — and exclusivity removes it entirely rather than quietly working both sides.",
    },
    {
      q: "How long does it take?",
      a: "Foundation typically goes live about four weeks after we have your content and Google Business Profile access — that handover starts the clock, not the contract date. Growth and Full then run as a monthly cycle from the month after launch. The most common delay is Google Business Profile verification, which Google controls and can take days or weeks. We don't quote when rankings or enquiries will move: that depends on your market and your competition, so we report what was done each month instead.",
    },
    {
      q: "What exactly is included in each tier?",
      a: "Each tier has a fixed, published inclusion list — Foundation, Growth and Full are set out in full on this page. We do not custom-quote scope: you pick the tier that fits, and what you get is what is listed.",
    },
    {
      q: "What does it cost?",
      a: "We don't publish prices. Pricing is set per client against the tier you choose and the size of the facility, so we quote it in a written proposal after a short conversation. Request a proposal and we'll come back with the scope and the number together.",
    },
    {
      q: "What do you need from us?",
      a: "Ownership of (or access to) your Google Business Profile, your correct name, address and phone details, your list of services and doctors, any photographs you want used, and one person who can approve copy. Where we need clinical wording checked, we send it to you for sign-off — we do not write medical claims on your behalf.",
    },
    {
      q: "Do you only work with healthcare?",
      a: "Yes, for this service. We work with clinics, nursing homes and small hospitals — the specialist assets that make this work (healthcare schema, listing categories, medical advertising rules, local search in East India) only compound inside one vertical. We take a small number of clients and serve them properly rather than working at volume.",
    },
    {
      q: "How is this different from Lucoze?",
      a: "Lucoze is our hospital management software (HIMS/EMR) — a product a facility runs day to day. Svasamm Digital is a service: your web presence, local search and marketing. They are separate, and using one does not require the other.",
    },
  ],
  cta: {
    title: "Tell us about your facility",
    body: "Send us your facility type and location. We'll check your catchment is open, then come back with the tier that fits, what it includes, and the price — in writing.",
    primary: "Request a proposal",
  },
  seo: {
    metaTitle: "Healthcare Digital Marketing & Clinic SEO in West Bengal | Svasamm Digital",
    metaDescription:
      "Websites, Google Business Profile, local SEO and digital marketing for clinics, nursing homes and small hospitals in West Bengal and East India. Fixed tiers, category exclusivity in your catchment. Request a proposal.",
    canonical: `${SITE_URL}/pages/digital.html`,
    ogType: "website",
    ogTitle: "Svasamm Digital — healthcare digitisation",
    ogDescription:
      "Website, Google Business Profile, local SEO and marketing for clinics, nursing homes and small hospitals. Category exclusivity in your catchment.",
  },
  // ACCURACY GUARDRAIL (spec §7.6): `audience` says who we serve; the provider stays a plain
  // Organization. Never add MedicalOrganization/Physician/Hospital for Svasamm itself.
  // No hasOfferCatalog/Offer: prices are deliberately unpublished, so we would emit
  // price-less Offers — validation noise for no gain. Tiers are visible on the page.
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Svasamm Digital — healthcare digitisation",
      serviceType: "Digital marketing and web development for healthcare facilities",
      description:
        "Website build, Google Business Profile setup and optimisation, local SEO, schema and AI-visibility, and ongoing digital marketing for clinics, nursing homes and small hospitals.",
      provider: {
        "@type": "Organization",
        name: "Svasamm Research Pvt Ltd",
        url: SITE_URL,
        email: "query@svasamm.com",
        telephone: "+91-91471-44638",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Nabagram, Konnagar",
          addressLocality: "Hooghly",
          addressRegion: "West Bengal",
          postalCode: "712246",
          addressCountry: "IN",
        },
      },
      areaServed: [
        { "@type": "State", name: "West Bengal" },
        { "@type": "Country", name: "India" },
      ],
      audience: { "@type": "BusinessAudience", name: "Clinics, nursing homes and small hospitals" },
      url: `${SITE_URL}/pages/digital.html`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/pages/services.html` },
        { "@type": "ListItem", position: 3, name: "Svasamm Digital", item: `${SITE_URL}/pages/digital.html` },
      ],
    },
  ],
};
