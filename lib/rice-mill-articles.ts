// Hand-authored rice-mill articles that have no .dc.html prototype (the extractor is gone;
// lib/articles.ts is the frozen generated set). New Millingo cluster content lives here and is
// merged in lib/article-registry.ts — same pattern as lib/digital-articles.ts. Shaped to `Article`.
import type { Article } from "./types";

export const RICE_MILL_ARTICLES: Article[] = [
  {
    slug: "punjab-custom-milling-policy-2026-27",
    type: "guide",
    parentProduct: "millingo",
    eyebrow: "Punjab · KMS 2026-27",
    title: "Punjab Custom Milling Policy 2026-27: What Changed for Rice Millers",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 8 October 2026",
    intro:
      "Punjab's cabinet approved the Custom Milling Policy for Kharif 2026-27 on 5 September 2026. The change most millers will feel: a mill that has delivered 90% of the rice due from its 2025-26 paddy can take fresh paddy this season, instead of first clearing every last tonne. Here is what changed, why the state did it, and what it asks of a mill's own records.",
    sections: [
      {
        type: "p",
        h: "What the cabinet approved",
        text: "On 5 September 2026 the Punjab cabinet approved three policies for the 2026-27 paddy season together: the Punjab Custom Milling Policy for Kharif 2026-27, the Punjab Foodgrains Transportation Policy 2027, and the Punjab Foodgrains Labour & Cartage Policy 2027. The milling policy is the one that decides which mills get paddy, and on what terms.",
      },
      {
        type: "p",
        h: "The 90% rule",
        text: "Under the new policy, millers who have delivered up to 90% of the rice from the paddy allotted to them in 2025-26 are eligible to receive fresh paddy for milling. Before, a mill had to finish last season's delivery first. The reason is storage: the state's 280 LMT of foodgrain storage was reported full, so rice from 2025-26 could not move out fast enough for mills to clear their dues on time.",
      },
      {
        type: "table",
        h: "The numbers behind it",
        cols: ["", "Figure", "Source"],
        rows: [
          ["Punjab's foodgrain storage", "280 LMT, reported full", "The Tribune, 5 Sep 2026"],
          ["2025-26 rice delivery deadline", "Extended to 31 Oct 2026 (normally 31 March)", "The Tribune, 5 Sep 2026"],
          ["2025-26 CMR due", "105.64 LMT", "The Tribune, 3 Oct 2026"],
          ["2025-26 CMR delivered by end-September", "99.50 LMT — 94%", "The Tribune, 3 Oct 2026"],
          ["2026-27 paddy procurement target", "About 180 LMT of 185 LMT produced", "The Tribune, 5 Sep 2026"],
          ["Peak paddy arrivals", "Expected around 10 October", "The Tribune, 3 Oct 2026"],
        ],
      },
      {
        type: "p",
        h: "How paddy reaches a mill in Punjab",
        text: "Paddy is bought in the mandis by the state agencies — Pungrain, Markfed, Punsup and the Punjab State Warehousing Corporation — and stored at eligible rice mills for custom milling. Allotment is online: since the 2024-25 policy, mills are linked to mandis on the state's portal and paddy is allotted under the release-order (RO) scheme. Miller registration and FRK letters run through the Anaaj Kharid portal, and the movement of grain is monitored through Anaaj Kharid, the Vaahan application and vehicle tracking.",
      },
      {
        type: "note",
        text: "This is a summary of the government's announcements and of reporting on them, dated above. The policy text itself is the Department of Food, Civil Supplies & Consumer Affairs, Punjab's — read the current notification before acting on any figure here.",
      },
      {
        type: "list",
        h: "What the 90% line asks of your records",
        items: [
          { b: "Per allotment, per agency", t: "— paddy received, rice due at the out-turn ratio, rice delivered and accepted, and the share delivered." },
          { b: "The date of each delivery", t: "— 31 October 2026 is the extended deadline for 2025-26 rice." },
          { b: "Two seasons side by side", t: "— 2025-26 rice still owed while 2026-27 paddy is arriving, stacked and counted separately." },
          { b: "FRK", t: "— the fortified rice kernels blended into each delivery, against the letters issued on the portal." },
        ],
      },
      {
        type: "p",
        h: "Why a mill should know its own figure",
        text: "Eligibility for fresh paddy now turns on one number: how much of last season's rice you have delivered. The portal will tell you that figure eventually. A mill that keeps its own book of every allotment and delivery knows it first — which lots are still pending, how many tonnes stand between it and 90%, and whether the rice that is ready can be delivered before the deadline.",
      },
      {
        type: "p",
        h: "Where Millingo fits",
        text: "Millingo keeps a mill's own record of the CMR cycle: each allotment, the paddy received against it, the rice delivered, and the out-turn against the norm, lot by lot. It does not replace Anaaj Kharid, and it does not file anything on the portal — the portal remains the government's record. Millingo is the mill's own book, so the 90% figure, the pending lots and the deadline are in front of you before anyone asks.",
      },
      {
        type: "list",
        h: "Sources",
        items: [
          { b: "The Tribune, 5 September 2026", t: "— “Punjab's new policy for millers: Deliver 90% rice from 2025-26, be eligible for fresh paddy batch”." },
          { b: "The Tribune, 3 October 2026", t: "— “Punjab CM Bhagwant Mann seeks urgent clearance of stocks ahead of paddy arrivals”." },
          { b: "The Tribune, 9 October 2024", t: "— “Cabinet gives nod to online allocation of paddy to millers” (the 2024-25 policy)." },
          { b: "The Tribune, 29 July 2022", t: "— “Punjab cabinet nod to tech-driven rice milling policy” (agencies and monitoring)." },
          { b: "anaajkharid.in", t: "— Punjab's procurement portal: miller registration and FRK letters." },
        ],
      },
    ],
    faqs: [
      {
        q: "What is Punjab's 90% rule for rice millers in 2026-27?",
        a: "Under the Punjab Custom Milling Policy for Kharif 2026-27, approved on 5 September 2026, a miller who has delivered up to 90% of the rice due from the paddy allotted in 2025-26 is eligible to receive fresh paddy for milling.",
      },
      {
        q: "What is the deadline for delivering 2025-26 custom milled rice in Punjab?",
        a: "It was extended to 31 October 2026, from the usual 31 March, because the state's foodgrain storage was full.",
      },
      {
        q: "How is paddy allotted to rice mills in Punjab?",
        a: "Online. Mills are linked to mandis on the state's portal and paddy is allotted under the release-order (RO) scheme; miller registration and FRK letters run through the Anaaj Kharid portal.",
      },
      {
        q: "Does Millingo connect to the Anaaj Kharid portal?",
        a: "No. Anaaj Kharid remains the government's record. Millingo is the mill's own book of allotments, deliveries and out-turn, so the mill knows where it stands before the portal or an inspector tells it.",
      },
    ],
    related: [
      { title: "Custom Milled Rice (CMR): the complete process", href: "Guide-CMR.dc.html" },
      { title: "Why CMR out-turn drops below 67%", href: "/pages/cmr-out-turn-shortfall-moisture.html" },
      { title: "Millingo — rice-mill ERP", href: "Millingo.dc.html" },
    ],
    cta: {
      title: "Where does your mill stand against 90%?",
      body: "Tell us your 2025-26 allotments and deliveries and we will walk through where you stand, and how Millingo keeps that figure current as you deliver. Free, no obligation.",
      productHref: "Millingo.dc.html",
      productLabel: "Explore Millingo",
    },
    seo: {
      metaTitle: "Punjab Custom Milling Policy 2026-27: What Changed | Millingo",
      metaDescription:
        "Punjab's 2026-27 milling policy lets mills that delivered 90% of 2025-26 rice take fresh paddy. The rule, the deadline, the figures, and what to track.",
      canonical: "https://svasamm.com/pages/punjab-custom-milling-policy-2026-27.html",
      ogType: "article",
      ogTitle: "Punjab Custom Milling Policy 2026-27: the 90% rule for millers",
      ogDescription:
        "What Punjab's 2026-27 custom milling policy changed, why storage forced it, and what a mill should track to stay eligible for fresh paddy.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Punjab Custom Milling Policy 2026-27: What Changed for Rice Millers",
        description:
          "Punjab's 2026-27 custom milling policy, the 90% delivery rule for fresh paddy, the extended 2025-26 deadline, and what a mill should track.",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Founder",
          worksFor: { "@type": "Organization", name: "Svasamm Research Pvt Ltd" },
        },
        publisher: { "@type": "Organization", name: "Svasamm" },
        datePublished: "2026-10-08",
        dateModified: "2026-10-08",
        mainEntityOfPage: "https://svasamm.com/pages/punjab-custom-milling-policy-2026-27.html",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" },
          { "@type": "ListItem", position: 2, name: "Millingo - Rice Mill ERP", item: "https://svasamm.com/pages/millingo.html" },
          { "@type": "ListItem", position: 3, name: "Punjab Custom Milling Policy 2026-27", item: "https://svasamm.com/pages/punjab-custom-milling-policy-2026-27.html" },
        ],
      },
    ],
  },
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
