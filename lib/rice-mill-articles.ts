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
    byline: "By Mithun K. Singh, Co-Founder, Svasamm Research · 8 October 2026",
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
        text: "Under the new policy, **millers who have delivered up to 90% of the rice from the paddy allotted to them in 2025-26 are eligible to receive fresh paddy** for milling. Before, a mill had to finish last season's delivery first. The reason is storage: the **state's 280 LMT of foodgrain storage was reported full**, so rice from 2025-26 could not move out fast enough for mills to clear their dues on time.",
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
        text: "**Eligibility for fresh paddy now turns on one number**: how much of last season's rice you have delivered. The portal will tell you that figure eventually. A mill that keeps its own book of every allotment and delivery knows it first — which lots are still pending, how many tonnes stand between it and 90%, and whether the rice that is ready can be delivered before the deadline.",
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
      { title: "Release orders in Punjab", href: "/pages/punjab-release-order-paddy-allotment.html" },
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
          jobTitle: "Co-Founder",
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
    byline: "By Mithun K. Singh, Co-Founder, Svasamm Research · 28 July 2026",
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
        text: "**The prescribed moisture limit for paddy is 17%**. But paddy — especially in a wet kharif — often arrives at 22–27% moisture, and has to be dried down to roughly 13% before it can be milled. That drying removes water weight the OTR never accounted for. The physics is simple: wetter paddy in means less rice weight out, and the out-turn slips from 67% toward the low 60s.",
      },
      {
        type: "note",
        text: "Moisture limits and out-turn rates are re-notified each marketing season and can differ by state and paddy grade — always work from the current KMS notification, and treat any single out-turn figure as indicative, not a fixed rule.",
      },
      {
        type: "p",
        h: "How the gap becomes a dispute",
        text: "**This is where millers get hurt.** The agency sees a number below the OTR and issues a shortfall notice. You know the real cause was moisture, not diversion — but “I dried wet paddy” is hard to prove after the fact without the intake readings, the drying record and the milled output tied together, batch by batch. A verbal explanation rarely wins against a spreadsheet that only shows the shortfall.",
      },
      {
        type: "p",
        h: "The fix isn't more milling — it's evidence",
        text: "You can't change the physics of wet paddy. **What you can change is whether you can prove what happened.** The millers who defend shortfalls successfully are the ones who can show, per lot: the moisture at intake, what it was dried to before milling, the paddy-in and rice-out for that batch, and the resulting out-turn next to the norm. With that trail, a shortfall stops being an accusation and becomes an accounting fact you can stand behind.",
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
          jobTitle: "Co-Founder",
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
  {
    slug: "up-paddy-procurement-cmr-2026-27",
    type: "guide",
    parentProduct: "millingo",
    eyebrow: "Uttar Pradesh · KMS 2026-27",
    title: "Uttar Pradesh Paddy Procurement and CMR 2026-27: Dates, Agencies and What the Mill Must Keep",
    byline: "By Mithun K. Singh, Co-Founder, Svasamm Research · 14 October 2026",
    intro:
      "Uttar Pradesh's cabinet approved the paddy procurement policy for Kharif Marketing Season 2026-27 in early October, with buying in western UP opening this month and eastern UP from 1 November. For a mill doing custom milling, the season is set by four facts — the price, the windows, the agencies and the bags — and decided by one record: how much of the state's paddy it holds, and how much rice it still owes. Here is what has been announced, with sources, and what is not yet published.",
    sections: [
      {
        type: "table",
        h: "What has been announced for 2026-27",
        cols: ["", "2026-27", "Source"],
        rows: [
          ["Paddy MSP — common / Grade A", "₹2,441 / ₹2,461 a quintal (₹72 more than 2025-26)", "Union cabinet (CCEA), May 2026"],
          ["Buying in western UP", "From mid-October 2026 (reported as 12 and as 15 Oct) to 15 Feb 2027", "Kisan India, UNI, 9 Oct 2026"],
          ["Buying in eastern UP", "1 Nov 2026 to 28 Feb 2027", "Kisan India, UNI, 9 Oct 2026"],
          ["Target", "65 lakh tonnes, at about 4,500 centres (62 lakh tonnes bought last season)", "Kisan India 9 Oct; Whalesbook 13 Oct 2026"],
          ["Buying agencies", "PCF, PCU, UPSS, Mandi Parishad, FPOs, FPCs, NCCF and NAFED", "Kisan India, 9 Oct 2026"],
          ["Farmer payment", "Through PFMS, reported within 48 hours; AgriStack Farmer ID avoids a second registration", "Whalesbook, 13 Oct 2026"],
          ["Bags", "₹200 crore sanctioned for 40,000 bales of jute bags for procurement and CMR", "Patrika, 23 Aug 2026"],
        ],
      },
      {
        type: "note",
        text: "Two figures disagree in the reporting: the western UP start date (12 or 15 October) and the target (65 lakh tonnes in state reports, a lower central figure elsewhere). **The government order on fcs.up.gov.in is the authority** — read it before acting on either.",
      },
      {
        type: "list",
        h: "Not yet published for 2026-27 (14 October 2026)",
        items: [
          { b: "The milling charge and delivery incentive", t: "— in 2025-26 a reported ₹35 a quintal for rice at the named depot within 15 days, ₹30 within 25 days (one secondary source)." },
          { b: "The out-turn, FRK and delivery depot", t: "— which depot, FCI's or the state's, and the blending terms for fortified rice." },
          { b: "Security from millers and the CMR deadline", t: "— the bank guarantee or other security, and the last date for delivery." },
        ],
      },
      {
        type: "p",
        h: "What changed from 2025-26",
        text: "Last season's policy, approved on 26 September 2025, bought at ₹2,369 and ₹2,389 through six agencies including FCI and the Food Department's own marketing wing, at about 3,300 centres against a 60 lakh tonne target. This season the list is eight agencies, with farmer producer organisations, NCCF and NAFED in and FCI and the marketing wing not named; the centres rise to about 4,500. **More agencies means a mill may hold the state's paddy for more than one of them in the same season** — each with its own account to settle.",
      },
      {
        type: "list",
        h: "What a UP mill should keep, agency by agency",
        items: [
          { b: "Paddy received per agency and per centre", t: "— each lot's weight and moisture at the mill gate, against what the centre dispatched." },
          { b: "Rice owed per agency", t: "— paddy received times the out-turn the order fixes, less rice already accepted at the depot." },
          { b: "Bags in and bags out", t: "— the state's jute bags are counted separately from the mill's own stock." },
          { b: "Two seasons apart", t: "— 2025-26 rice still owed kept separate from 2026-27 paddy arriving." },
          { b: "Delivery dates", t: "— if the 2025-26 pattern holds, the day a lot reaches the depot decides the incentive it earns." },
        ],
      },
      {
        type: "p",
        h: "Where the portal stops and your books start",
        text: "Farmer registration and procurement run through fcs.up.gov.in, and payments through PFMS. That is the government's record of what it bought. The mill's own record is what it holds and owes — per agency, per season, per bag — and that is the record an officer asks for at the end of the season.",
      },
    ],
    faqs: [
      { q: "When does paddy procurement start in UP in 2026-27?", a: "In western UP from mid-October 2026 (reported as 12 and 15 October) to 15 February 2027; in eastern UP from 1 November 2026 to 28 February 2027." },
      { q: "What is the paddy MSP for 2026-27?", a: "₹2,441 a quintal for common paddy and ₹2,461 for Grade A, ₹72 more than in 2025-26." },
      { q: "Which agencies buy paddy in UP in 2026-27?", a: "PCF, PCU, UPSS, Mandi Parishad, farmer producer organisations and companies, NCCF and NAFED, as reported on 9 October 2026." },
      { q: "What is the milling charge for CMR in UP for 2026-27?", a: "Not published as of 14 October 2026. Read the government order on fcs.up.gov.in." },
    ],
    related: [
      { title: "Rice-mill software for Uttar Pradesh", href: "/pages/rice-mill-software-uttar-pradesh.html" },
      { title: "Custom Milled Rice (CMR): the complete process", href: "Guide-CMR.dc.html" },
      { title: "Millingo — rice-mill ERP", href: "Millingo.dc.html" },
    ],
    cta: {
      title: "What does your mill owe, agency by agency?",
      body: "Send last season's paddy received and rice delivered per agency — we will show you your position and how Millingo keeps it current as this season's paddy arrives. Free, no obligation.",
      productHref: "Millingo.dc.html",
      productLabel: "Explore Millingo",
    },
    seo: {
      metaTitle: "UP Paddy Procurement & CMR 2026-27: Dates, Agencies, MSP | Millingo",
      metaDescription:
        "Uttar Pradesh paddy procurement 2026-27: MSP ₹2,441, western and eastern UP windows, the eight agencies, jute bags — and what a CMR mill should keep, agency by agency.",
      canonical: "https://svasamm.com/pages/up-paddy-procurement-cmr-2026-27.html",
      ogType: "article",
      ogTitle: "UP paddy procurement and CMR 2026-27, for rice millers",
      ogDescription:
        "Dates, agencies, MSP and bags for UP's 2026-27 season, what is not yet published, and the records a CMR mill should keep.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Uttar Pradesh Paddy Procurement and CMR 2026-27: Dates, Agencies and What the Mill Must Keep",
        description:
          "UP's 2026-27 paddy procurement — MSP, windows, agencies, bags — what is not yet published, and the records a CMR mill should keep.",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Co-Founder",
          worksFor: { "@type": "Organization", name: "Svasamm Research Pvt Ltd" },
        },
        publisher: { "@type": "Organization", name: "Svasamm" },
        datePublished: "2026-10-14",
        dateModified: "2026-10-14",
        mainEntityOfPage: "https://svasamm.com/pages/up-paddy-procurement-cmr-2026-27.html",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" },
          { "@type": "ListItem", position: 2, name: "Millingo - Rice Mill ERP", item: "https://svasamm.com/pages/millingo.html" },
          { "@type": "ListItem", position: 3, name: "UP paddy procurement and CMR 2026-27", item: "https://svasamm.com/pages/up-paddy-procurement-cmr-2026-27.html" },
        ],
      },
    ],
  },
  {
    slug: "punjab-release-order-paddy-allotment",
    type: "guide",
    parentProduct: "millingo",
    eyebrow: "Punjab · KMS 2026-27",
    title: "Release Orders in Punjab: How Paddy Reaches a Mill Beyond Its Own Mandi",
    byline: "By Mithun K. Singh, Co-Founder, Svasamm Research · 14 October 2026",
    intro:
      "A Punjab rice mill gets government paddy two ways: its own linked share from the mandis it is attached to, and extra paddy lifted under a release order — the department's permission to take paddy from somewhere else. With 2025-26 rice still being delivered and the 2026-27 crop arriving, which of the two a mill is working on, and against which season, is the record that decides its next allotment. Here is how release orders have worked, with each rule dated, because the 2026-27 terms are not yet public.",
    sections: [
      {
        type: "p",
        h: "Linked paddy and release-order paddy",
        text: "Each season a mill is linked online to mandis, and the paddy bought there by the state agencies — Pungrain, Markfed, Punsup and the Punjab State Warehousing Corporation — is stored at the mill for custom milling. That linked share is the mill's own entitlement. **A release order (RO) lets a mill lift further paddy, often from another mandi or district, for a per-tonne fee.** District officers are expected to supply mills in their own area first and only then consider release orders that send paddy to mills elsewhere.",
      },
      {
        type: "table",
        h: "What has been reported, year by year",
        cols: ["Season", "What changed", "Source"],
        rows: [
          ["2018-19", "Free paddy decided by last season's performance; 5% bank guarantee on the paddy's cost; small mills up to 5,000 t exempt from the guarantee", "The Tribune, 31 Aug 2018; Hindustan Times, 26 Sep 2018"],
          ["2020-21", "Allotment, RO applications, the RO fee and security deposits moved onto the online portal", "Global Agriculture report"],
          ["2024-25", "Mills linked to mandis online and paddy allotted under the RO scheme; RO fee cut from ₹75 to ₹15 a tonne; a lien on land records replaced the bank guarantee for storage above 5,000 MT", "The Tribune, 9 and 22 Oct 2024; PTI, 5 Oct 2024"],
          ["2025-26", "After the floods, ROs taking Majha's paddy (Amritsar, Tarn Taran, Gurdaspur, Pathankot) to other districts were stopped", "The Tribune, 27 Oct 2025"],
          ["2026-27", "Policy of 5 Sep 2026: the state is one unit for milling and delivery; a mill that delivered 90% of its 2025-26 rice is eligible for fresh paddy", "Punjab policy memo, 5 Sep 2026; The Tribune, 5 Sep 2026"],
        ],
      },
      {
        type: "note",
        text: "The 2026-27 release-order fee, the free-paddy formula and the security per tonne **had not been published when this was written (14 October 2026)**. The figures above are from the seasons named. Read the current notification on the Anaaj Kharid portal before acting on any of them.",
      },
      {
        type: "p",
        h: "Why 2026-27 is a tight season for allotment",
        text: "On 2 October 2026 the Chief Minister wrote to the Union food minister that **only 99.50 of 105.64 LMT of 2025-26 rice — 94% — had been delivered by 29 September**, that about 17 LMT of 2026-27 wheat was still lying in rice mills and mandi yards, and that millers might not come forward for allotment and storage of the new paddy. Peak arrivals were expected around 10 October. In a season like this, **the mills that can show their delivery position quickly are the ones the department can rely on**.",
      },
      {
        type: "list",
        h: "What a mill should keep per release order",
        items: [
          { b: "The RO itself", t: "— its number, date, the agency, the mandi or district the paddy comes from, and the quantity." },
          { b: "Lifting against it", t: "— each lorry's weight at the mill, so what was lifted can be set against what was ordered." },
          { b: "Linked and RO paddy kept apart", t: "— the same agency, different terms; mixing them hides which quantity is behind." },
          { b: "Two seasons side by side", t: "— 2025-26 rice still owed, counted separately from 2026-27 paddy arriving, because the 90% line is measured on the old season." },
          { b: "Fees and security", t: "— the RO fee paid and the security or lien behind the paddy stored." },
        ],
      },
      {
        type: "p",
        h: "Where the portal stops and your books start",
        text: "Registration, FRK letters, allotment and RO applications run through anaajkharid.in, and grain movement is tracked through its apps. The portal is the government's record. A mill also needs its own: which lorry carried which RO's paddy, how much of each season's rice is still owed, and what milling those lots actually yielded — so it knows where it stands before an officer tells it.",
      },
    ],
    faqs: [
      {
        q: "What is a release order (RO) in Punjab paddy allotment?",
        a: "The food department's order letting a mill lift government paddy beyond its own linked share, often from another mandi or district, for a per-tonne fee. Since 2020-21 RO applications and fees have run through the Anaaj Kharid portal.",
      },
      {
        q: "What is the release-order fee in Punjab?",
        a: "It was cut from ₹75 to ₹15 a tonne in October 2024. The 2026-27 fee had not been published on 14 October 2026; check the current notification.",
      },
      {
        q: "Can a Punjab mill get fresh paddy in 2026-27 with 2025-26 rice still pending?",
        a: "Yes, if it has delivered 90% of the rice due from its 2025-26 paddy — the rule in the policy of 5 September 2026.",
      },
    ],
    related: [
      { title: "Punjab Custom Milling Policy 2026-27: what changed", href: "/pages/punjab-custom-milling-policy-2026-27.html" },
      { title: "Custom Milled Rice (CMR): the complete process", href: "Guide-CMR.dc.html" },
      { title: "Millingo — rice-mill ERP", href: "Millingo.dc.html" },
    ],
    cta: {
      title: "Where does your mill stand, season by season?",
      body: "Send your linked and RO paddy and your 2025-26 deliveries — we will show you your position against the 90% line, and how Millingo keeps it current lorry by lorry. Free, no obligation.",
      productHref: "Millingo.dc.html",
      productLabel: "Explore Millingo",
    },
    seo: {
      metaTitle: "Punjab Release Order (RO) Paddy Allotment for Millers | Millingo",
      metaDescription:
        "How Punjab allots paddy to rice mills under release orders: linked vs RO paddy, the fee, security, what changed each season to 2026-27, and what a mill should record.",
      canonical: "https://svasamm.com/pages/punjab-release-order-paddy-allotment.html",
      ogType: "article",
      ogTitle: "Release orders in Punjab: how paddy reaches a mill",
      ogDescription:
        "Linked paddy, release-order paddy, the fee and security — dated season by season — and what a Punjab mill should keep per RO.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Release Orders in Punjab: How Paddy Reaches a Mill Beyond Its Own Mandi",
        description:
          "How Punjab allots paddy to rice mills under release orders, dated season by season to 2026-27, and what a mill should record per RO.",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Co-Founder",
          worksFor: { "@type": "Organization", name: "Svasamm Research Pvt Ltd" },
        },
        publisher: { "@type": "Organization", name: "Svasamm" },
        datePublished: "2026-10-14",
        dateModified: "2026-10-14",
        mainEntityOfPage: "https://svasamm.com/pages/punjab-release-order-paddy-allotment.html",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" },
          { "@type": "ListItem", position: 2, name: "Millingo - Rice Mill ERP", item: "https://svasamm.com/pages/millingo.html" },
          { "@type": "ListItem", position: 3, name: "Release orders in Punjab", item: "https://svasamm.com/pages/punjab-release-order-paddy-allotment.html" },
        ],
      },
    ],
  },
];

export const RICE_MILL_ARTICLE_BY_SLUG: Record<string, Article> =
  Object.fromEntries(RICE_MILL_ARTICLES.map((a) => [a.slug, a]));
