// Hand-authored rice-mill articles that have no .dc.html prototype (the extractor is gone;
// lib/articles.ts is the frozen generated set). New Millingo cluster content lives here and is
// merged in lib/article-registry.ts — same pattern as lib/digital-articles.ts. Shaped to `Article`.
import type { Article } from "./types";

export const RICE_MILL_ARTICLES: Article[] = [
  {
    slug: "cmr-out-turn-shortfall-moisture",
    type: "guide",
    parentProduct: "millingo",
    eyebrow: "Rice Mill Guide",
    title:
      "Why CMR Out-Turn Drops Below 67%: Moisture, Drying & Defending the Shortfall",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 28 July 2026",
    intro:
      "A miller under CMR must return 67 kg of raw rice (or 68 kg parboiled) for every 100 kg of paddy — the prescribed out-turn ratio. When paddy arrives wet, above the 17% moisture limit, drying it down for milling removes weight, so the actual out-turn can fall toward 62%. That gap is what triggers a shortfall notice — and this guide explains why it happens and how to defend it with data.",
    sections: [
      {
        type: "p",
        h: "The out-turn ratio is a hard line",
        text: "Under Custom Milled Rice (CMR), the paddy isn't yours — a state agency or FCI hands it to you to mill and you return the rice. The out-turn ratio (OTR) fixes how much: 67% for raw rice, 68% for parboiled. Return less and, on paper, you owe the shortfall — regardless of why it happened.",
      },
      {
        type: "p",
        h: "Why moisture quietly eats your out-turn",
        text: "The prescribed moisture limit for paddy is 17%. But paddy — especially in a wet kharif — often arrives at 22–27% moisture, and has to be dried down to roughly 13% before it can be milled. That drying removes water weight the OTR never accounted for. The physics is simple: wetter paddy in means less rice weight out, and the out-turn slips from 67% toward the low 60s.",
      },
      {
        type: "note",
        text: "Moisture limits and out-turn rates are re-notified each marketing season and can differ by state and paddy grade — always work from the current KMS notification, and treat any single out-turn figure as indicative, not a fixed rule.",
      },
      {
        type: "p",
        h: "How the gap becomes a dispute",
        text: "This is where millers get hurt. The agency sees a number below the OTR and issues a shortfall notice. You know the real cause was moisture, not diversion — but “I dried wet paddy” is hard to prove after the fact without the intake readings, the drying record and the milled output tied together, batch by batch. A verbal explanation rarely wins against a spreadsheet that only shows the shortfall.",
      },
      {
        type: "p",
        h: "The fix isn't more milling — it's evidence",
        text: "You can't change the physics of wet paddy. What you can change is whether you can prove what happened. The millers who defend shortfalls successfully are the ones who can show, per lot: the moisture at intake, what it was dried to before milling, the paddy-in and rice-out for that batch, and the resulting out-turn next to the norm. With that trail, a shortfall stops being an accusation and becomes an accounting fact you can stand behind.",
      },
      {
        type: "list",
        h: "What a defensible CMR record captures per lot",
        items: [
          {
            b: "Moisture at intake",
            t: "— dated, at the gate, before anything else.",
          },
          {
            b: "Drying step",
            t: "— what the lot was brought down to before milling.",
          },
          {
            b: "Paddy in / rice out",
            t: "— the actual weights for that specific batch.",
          },
          {
            b: "Out-turn vs norm",
            t: "— computed against the 67% / 68% obligation, automatically.",
          },
        ],
      },
      {
        type: "p",
        h: "How Millingo helps here",
        text: "Millingo is built for the CMR world, so it records moisture at intake, the drying step and the paddy-in/rice-out for every lot, then computes out-turn against the norm automatically. When a shortfall notice arrives, you're not reconstructing months of registers — you have the batch-level evidence ready. Millingo doesn't change your yield; it gives you the record to explain and defend it.",
      },
    ],
    faqs: [
      {
        q: "What is the out-turn ratio for CMR?",
        a: "67% for raw rice and 68% for parboiled rice, per 100 kg of paddy — the rice a miller must return to the government agency. Rates are re-notified each season and can vary by state.",
      },
      {
        q: "Why does CMR out-turn fall below 67%?",
        a: "Most often, high paddy moisture. Paddy above the 17% limit — often 22–27% in a wet season — must be dried to about 13% before milling, and that lost water weight pulls the out-turn down toward the low 60s.",
      },
      {
        q: "Can a miller claim a shortfall due to moisture?",
        a: "Millers do attribute shortfalls to moisture drying, but the claim holds only with evidence: dated intake moisture, the drying record, and batch-level paddy-in/rice-out. Without that trail it is hard to defend.",
      },
      {
        q: "How do I avoid CMR shortfall penalties?",
        a: "You cannot change wet-paddy physics, but you can keep a defensible, lot-level record — intake moisture, drying and out-turn against the norm — so a shortfall is documented and explainable rather than assumed to be diversion.",
      },
    ],
    related: [
      {
        title: "Custom Milled Rice (CMR): the complete process",
        href: "Guide-CMR.dc.html",
      },
      {
        title: "How to calculate rice-mill yield & milling recovery",
        href: "Guide-YieldRecovery.dc.html",
      },
      { title: "Millingo — rice-mill ERP", href: "Millingo.dc.html" },
    ],
    cta: {
      title: "Get a free out-turn shortfall review",
      body: "Tell us where your out-turn is landing and we'll walk through what's driving the shortfall — moisture, drying, variety — and how Millingo records moisture and per-lot out-turn as you work, so you can defend a notice with batch-level evidence. Free, no obligation.",
      productHref: "Millingo.dc.html",
      productLabel: "Explore Millingo",
    },
    seo: {
      metaTitle:
        "Why CMR Out-Turn Drops Below 67%: Moisture & Shortfall Explained | Millingo",
      metaDescription:
        "High paddy moisture drives CMR out-turn below the 67% norm and triggers shortfall notices. Why it happens — and how to document and defend the shortfall with data.",
      canonical:
        "https://svasamm.com/pages/cmr-out-turn-shortfall-moisture.html",
      ogType: "article",
      ogTitle: "Why CMR Out-Turn Drops Below 67% — Moisture & the Shortfall",
      ogDescription:
        "How high paddy moisture lowers your CMR out-turn, why it becomes a shortfall dispute, and how to defend it with a lot-level record.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "Why CMR Out-Turn Drops Below 67%: Moisture, Drying & Defending the Shortfall",
        description:
          "Why high paddy moisture lowers CMR out-turn below the 67% norm, and how to document and defend the shortfall.",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "Svasamm Research Pvt Ltd",
          },
        },
        publisher: { "@type": "Organization", name: "Svasamm" },
        datePublished: "2026-07-28",
        dateModified: "2026-07-28",
        mainEntityOfPage:
          "https://svasamm.com/pages/cmr-out-turn-shortfall-moisture.html",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://svasamm.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Millingo - Rice Mill ERP",
            item: "https://svasamm.com/pages/millingo.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "CMR Out-Turn & Shortfall",
            item: "https://svasamm.com/pages/cmr-out-turn-shortfall-moisture.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the out-turn ratio for CMR?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "67% for raw rice and 68% for parboiled rice, per 100 kg of paddy, re-notified each season and varying by state.",
            },
          },
          {
            "@type": "Question",
            name: "Why does CMR out-turn fall below 67%?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most often high paddy moisture: paddy above the 17% limit must be dried to about 13% before milling, and the lost water weight pulls out-turn down toward the low 60s.",
            },
          },
          {
            "@type": "Question",
            name: "Can a miller claim a shortfall due to moisture?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, but only with evidence — dated intake moisture, the drying record, and batch-level paddy-in/rice-out. Without that trail it is hard to defend.",
            },
          },
          {
            "@type": "Question",
            name: "How do I avoid CMR shortfall penalties?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Keep a defensible lot-level record — intake moisture, drying and out-turn against the norm — so a shortfall is documented and explainable rather than assumed to be diversion.",
            },
          },
        ],
      },
    ],
  },
];

export const RICE_MILL_ARTICLE_BY_SLUG: Record<string, Article> =
  Object.fromEntries(RICE_MILL_ARTICLES.map((a) => [a.slug, a]));
