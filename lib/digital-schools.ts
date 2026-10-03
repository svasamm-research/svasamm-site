// Svasamm Digital for Schools — education digitisation service, modelled as a solution so it
// renders through the shared ProductPage and appears everywhere the other solutions do.
// Parallel to lib/digital.ts (healthcare). Second vertical of the Svasamm Digital service arm.
//
// HARD GUARDRAILS (mirror the healthcare service) — do not violate when editing this file:
//   - No prices. The CTA is always "Request a proposal".
//   - No case studies, testimonials, client logos or result metrics (there are no clients yet).
//   - No promises of admission numbers, enrolment or ranking outcomes — describe work delivered.
//   - Svasamm is a provider TO schools: never emit EducationalOrganization/School for it; the
//     provider stays a plain Organization.
//
// FAQPage schema is NOT built here — lib/products.ts appends it from `faqs` for every solution.
import { SITE_URL } from "./site";
import type { Product } from "./types";

export const DIGITAL_SCHOOLS_PRODUCT: Product = {
  id: "digital-schools",
  name: "Svasamm Digital for Schools",
  badge: "Svasamm Digital · Schools",
  tagline: "Found by parents before admissions open",
  blurb:
    "Not a build-and-disappear website. We get your school, pre-school or coaching institute properly online, then keep working every month — watching what parents actually search in Search Console, Analytics and Plausible, targeting the long-tail keywords you can realistically win, and adapting as Google changes — so your organic presence compounds instead of going stale, and it is strong before the admission season, not scrambled together when applications open. West Bengal and East India, a small number of clients, category exclusivity in your catchment.",
  ctaPrimary: "Request a proposal",
  featuresTitle: "What we do for the school, month by month",
  features: [
    { icon: "ph-chart-line-up", title: "Kept current through the whole admission cycle", body: "A school's year has a shape: enquiries build long before applications open, then fall away once the class is full. On Growth and Full we work to that shape — the class and board pages, the photographs and the Google profile brought up to date ahead of the season, and the quieter months used to add the pages parents will be searching for next year." },
    { icon: "ph-chart-bar", title: "What parents searched last month", body: "Every month we read which board, class and locality searches found the school, what parents looked at on the Google profile, and which admission enquiries came from search rather than word of mouth. The next month's work follows from that, not from a guess about what parents might want." },
    { icon: "ph-funnel", title: "Long-tail keyword strategy", body: "We find the specific, winnable searches your catchment makes — by board, class and locality ('best CBSE school in [area]', 'playschool near [locality]') — and build the pages that answer them, rather than chasing head terms the big directories already own." },
    { icon: "ph-shield-check", title: "Built on what a parent checks", body: "Google changes how it ranks often. What it keeps rewarding is what a parent checks anyway: the board and classes stated plainly, real photographs of the real campus, a complete Google profile and genuine reviews from parents. We build those, and look at the data after every update rather than chasing a trick the next one removes." },
    { icon: "ph-desktop", title: "A website built for the school", body: "Boards, classes, curriculum, facilities, fees process and the admission enquiry — structured the way parents actually look for them, and easy for your office to keep current." },
    { icon: "ph-map-pin", title: "Google Business Profile", body: "Set up or claimed, categories and details filled in properly, hours and real photos correct — the listing most parents see before they ever reach your site." },
    { icon: "ph-map-trifold", title: "Board, class and locality, readable by search and AI", body: "On-page optimisation for the searches your catchment makes, name-address-phone consistent across every listing, and structured data so search engines and AI assistants can read which board, classes and area your school covers." },
    { icon: "ph-handshake", title: "Category exclusivity", body: "One school per catchment. If a competing school inside that catchment approaches us, we decline — and it is written into the agreement." },
  ],
  tiersTitle: "Three fixed tiers — scope published, price quoted per school",
  tiers: [
    {
      name: "Foundation",
      for: "One-time build. Get the school properly online, findable and correctly represented before the admission season.",
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
      for: "Foundation, then kept active every month through the admission cycle.",
      items: [
        "Everything in Foundation",
        "Google Business Profile posts",
        "One content piece per month",
        "Monthly local ranking & enquiry report",
        "Ongoing on-page optimisation",
        "Help setting up review generation",
      ],
      cta: "Request a proposal",
      featured: true,
    },
    {
      name: "Full",
      for: "Growth, plus paid admissions campaigns and social handled for you.",
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
    "Schools (K-12)",
    "Pre-schools & playschools",
    "Coaching & tuition institutes",
    "Boarding & residential schools",
    "Skill & vocational institutes",
    "West Bengal & East India",
  ],
  // Content cluster (lib/schools-articles.ts). Hrefs are plain routes — toRoute() passes
  // anything starting with "/" straight through.
  resources: {
    title: "Guides & honest comparisons",
    intro: "In-depth, indexable pages for the questions school owners and administrators actually search — each is its own page for search & AI discovery.",
    grid: "1.4fr 1fr",
    columns: [
      {
        heading: "School digital guides", icon: "ph-file-text", links: [
          { title: "School admissions digital marketing: what actually fills seats", href: "/pages/school-admissions-digital-marketing.html" },
          { title: "School SEO in West Bengal: how parents actually find a school", href: "/pages/school-seo-west-bengal.html" },
          { title: "School website design: what a school site actually needs", href: "/pages/school-website-design.html" },
          { title: "Google Business Profile for schools", href: "/pages/google-business-profile-for-schools.html" },
        ],
      },
      {
        heading: "Compare", icon: "ph-scales", links: [
          { title: "Svasamm Digital vs hiring in-house", href: "/pages/digital-schools-vs-in-house.html" },
          { title: "Svasamm Digital vs a general digital agency", href: "/pages/digital-schools-vs-general-agency.html" },
        ],
      },
    ],
  },
  faqs: [
    {
      q: "Do you build the school website and then leave?",
      a: "No. The website is where it starts. On Growth and Full we work on the school every month: reading which board and class searches found you, adding pages for the questions parents keep asking, keeping the Google profile's photographs, hours and posts current, and helping you ask parents for honest reviews. A school's presence stays strong when someone looks after it through the year, and fades when nobody does — so the monthly work is the real service, not the website on its own.",
    },
    {
      q: "What happens to the school's visibility when Google changes its rules?",
      a: "We avoid anything a single update can undo. The school ranks on what parents already check: clear board and class information, real photographs, an accurate Google profile and genuine reviews from parents. Those have held through every change Google has made, so we strengthen them, and we look at the school's numbers after each major update and adjust. We will not promise a ranking on a date, because nobody can honestly do that.",
    },
    {
      q: "Will you work with a competing school nearby?",
      a: "No. You get category exclusivity in your catchment — we won't take a directly competing school. One school per catchment (roughly the area Google's nearby results draw from), and it is written into the agreement. If a competing school inside that catchment approaches us, we decline. This applies to Svasamm Digital services only.",
    },
    {
      q: "Why only one school per catchment?",
      a: "Parents choose a school close to home, and Google's local results follow distance closely, so two schools a few kilometres apart mostly reach different families. The real conflict is two schools in the same catchment competing for the same 'best school near me' searches. We would be working against one client for the other, so we take only one.",
    },
    {
      q: "When should a school start, given the admission season?",
      a: "Earlier than most schools think. Admissions searches build for months before enrolment, so the local presence, website and reviews want to be in place well ahead of the season — not started the month applications open. Foundation typically goes live about four weeks after we have your content and Google Business Profile access, so plan that lead time in. We don't quote when enquiries will move: that depends on your area and competition, so we report what was done each month instead.",
    },
    {
      q: "What exactly is included in each tier?",
      a: "Each tier has a fixed, published inclusion list — Foundation, Growth and Full are set out in full on this page. We do not custom-quote scope: you pick the tier that fits, and what you get is what is listed.",
    },
    {
      q: "What does it cost?",
      a: "We don't publish prices. Pricing is set per client against the tier you choose and the size of the school, so we quote it in a written proposal after a short conversation. Request a proposal and we'll come back with the scope and the number together.",
    },
    {
      q: "What do you need from us?",
      a: "Ownership of (or access to) your Google Business Profile, your correct name, address and phone details, your board affiliation and class structure, the admission process, any photographs you want used, and one person who can approve copy. We do not invent affiliations or results — anything factual about the school is checked with you before it goes live.",
    },
    {
      q: "Do you only work with schools?",
      a: "For this service line, we work with schools, pre-schools and coaching institutes. Svasamm Digital also runs a separate healthcare service line; the two do not overlap in a catchment. We take a small number of clients per vertical and serve them properly rather than working at volume.",
    },
    {
      q: "How is this different from your software products?",
      a: "Svasamm Research also builds software (like Lucoze, our hospital management system, and Millingo). Svasamm Digital is a service — your web presence, local search and admissions marketing. They are separate, and using one does not require the other.",
    },
  ],
  cta: {
    title: "Tell us about your school",
    body: "Send us your school type, board and location. We'll check your catchment is open, then come back with the tier that fits, what it includes, and the price — in writing.",
    primary: "Request a proposal",
  },
  seo: {
    metaTitle: "School Digital Marketing & Admissions SEO in West Bengal | Svasamm Digital",
    metaDescription:
      "Websites, Google Business Profile, local SEO and admissions marketing for schools, pre-schools and coaching institutes in West Bengal and East India. Fixed tiers, category exclusivity in your catchment. Request a proposal.",
    canonical: `${SITE_URL}/pages/digital-schools.html`,
    ogType: "website",
    ogTitle: "Svasamm Digital for Schools",
    ogDescription:
      "Website, Google Business Profile, local SEO and admissions marketing for schools, pre-schools and coaching institutes. Category exclusivity in your catchment.",
  },
  // ACCURACY GUARDRAIL: `audience` says who we serve; the provider stays a plain Organization.
  // Never add EducationalOrganization/School for Svasamm itself. No hasOfferCatalog/Offer:
  // prices are deliberately unpublished. Tiers are visible on the page.
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Svasamm Digital for Schools",
      serviceType: "Digital marketing and web development for schools and educational institutes",
      description:
        "Website build, Google Business Profile setup and optimisation, local SEO, schema and AI-visibility, and ongoing admissions marketing for schools, pre-schools and coaching institutes.",
      provider: {
        "@type": "Organization",
        name: "Svasamm Research Pvt Ltd",
        url: SITE_URL,
        email: "query@svasamm.com",
        telephone: "+91-90077-93575",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Flat b06-09-05, Grand City, Grand One, Tower 6, Vivekananda Road, Daspara, Nabagram Colony",
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
      audience: { "@type": "BusinessAudience", name: "Schools, pre-schools and coaching institutes" },
      url: `${SITE_URL}/pages/digital-schools.html`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/pages/services.html` },
        { "@type": "ListItem", position: 3, name: "Svasamm Digital for Schools", item: `${SITE_URL}/pages/digital-schools.html` },
      ],
    },
  ],
};
