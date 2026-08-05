// AUTO-GENERATED from prototypes/Article.dc.html + each article's wrapper helmet
// (scratchpad/extract-articles.mjs). Content verbatim from the redesign; JSON-LD copied
// from the wrapper helmets. Shaped to `Article` for a later Sanity migration. Do not
// hand-edit — re-run the extractor.
import type { Article } from "./types";

export const ARTICLES: Article[] = [
  {
    slug: "custom-milled-rice-cmr-process",
    type: "guide",
    parentProduct: "millingo",
    eyebrow: "Rice Mill Guide",
    title:
      "Custom Milled Rice (CMR) Explained: The Complete Process for Millers",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 14 July 2026",
    intro:
      "CMR (Custom Milled Rice) is the rice a mill produces from government-procured paddy and returns to FCI or a state agency at a fixed out-turn ratio — 67% for raw rice, 68% for parboiled, per 100 kg of paddy. The miller doesn't own the paddy; they earn a milling charge. This guide explains the CMR process end to end: what you must deliver, the season schedule, how it differs by state, and where mills lose money.",
    sections: [
      {
        type: "p",
        h: "What is Custom Milled Rice (CMR)?",
        text: "Under CMR, the government — through the Food Corporation of India (FCI) and state agencies — buys paddy from farmers at the Minimum Support Price (MSP) and gives that paddy to selected private rice mills to mill on its behalf. The miller does not own the paddy; it mills the government's paddy and delivers finished rice back into the central pool, earning milling charges (and keeping by-products, subject to state rules).",
      },
      {
        type: "p",
        text: "This is fundamentally different from open-market milling, where the mill buys its own paddy and sells its own rice. Under CMR you handle someone else's grain against a strict obligation — so tracking allotment, milling and delivery accurately is not optional.",
      },
      {
        type: "p",
        h: "The miller's core obligation: 67% + 1% FRK",
        text: "For Kharif Marketing Season (KMS) 2024–25, a miller must deliver 67% rice against the total paddy allotted, of which 1% must be Fortified Rice Kernels (FRK). In plain terms: for every 100 quintals of paddy you receive, you owe 67 quintals of rice back to the pool.",
      },
      {
        type: "note",
        text: "Obligation and out-turn rates are re-notified every marketing season and can differ by state and paddy grade — always work from the current KMS notification, not last year's.",
      },
      {
        type: "p",
        h: "The delivery schedule",
        text: "CMR delivery is staged across the season so the government receives rice steadily. For KMS 2024–25 the schedule ran roughly:",
      },
      {
        type: "table",
        cols: ["By end of", "Cumulative rice to be delivered"],
        rows: [
          ["November", "15%"],
          ["December", "40% (a further 25%)"],
          ["January", "65% (a further 25%)"],
          ["February", "90% (a further 25%)"],
          ["15 March", "100% (final 10%)"],
        ],
      },
      {
        type: "p",
        text: "Missing a milestone risks penalties and affects future allotment, so mills need a live view of 'delivered vs due' at every checkpoint — not a spreadsheet reconciled after the fact.",
      },
      {
        type: "p",
        h: "How CMR differs by state",
        text: "The CMR concept is national, but procurement runs through state portals and agencies, and the rules differ in the detail:",
      },
      {
        type: "list",
        items: [
          {
            b: "West Bengal —",
            t: "procurement via the e-Paddy portal (epaddy.wb.gov.in), with agencies such as WBECSC and BENFED.",
          },
          {
            b: "Uttar Pradesh —",
            t: "procurement through the Food & Civil Supplies Department (fcs.up.gov.in), using biometric E-PoP devices at purchase centres.",
          },
          {
            b: "Odisha —",
            t: "procurement operated through OSCSC.",
          },
          {
            b: "Bihar —",
            t: "PACS-based procurement via esahkari.bihar.gov.in with the SFC.",
          },
        ],
      },
      {
        type: "list",
        h: "Where mills lose money and fall out of compliance",
        items: [
          {
            b: "Allotment vs delivery drift —",
            t: "losing track of exactly how much paddy was allotted, milled, and delivered against each memo.",
          },
          {
            b: "Out-turn shortfall —",
            t: "real recovery below the assumed rate, quietly funded by the miller.",
          },
          {
            b: "The 7.1 / out-turn reconciliation —",
            t: "the final settlement that ties allotted paddy to delivered rice and by-products; errors here trigger recovery notices.",
          },
          {
            b: "Security deposit & physical verification —",
            t: "staying audit-ready against stock checks.",
          },
        ],
      },
      {
        type: "p",
        h: "Who's who in CMR procurement",
        text: "A miller deals with several bodies, and it helps to know which does what. The Food Corporation of India (FCI) owns the central pool the rice ultimately feeds. State agencies and co-operative societies run the farmer-side purchase and the miller-side delivery. In West Bengal, for example, farmers sell through primary societies — PACS, PAMS, LAMPS, SHGs and FPOs — while millers deliver their finished CMR to state agencies such as WBECSC, BENFED, CONFED, NAFED and PBAMCL. Every state has its own equivalent set of bodies. Knowing which agency issues your allotment memo and which one receives your rice is the difference between a clean delivery and a rejected consignment.",
      },
      {
        type: "p",
        h: "How a miller is registered and allotted paddy",
        text: "Before any paddy moves, a mill must be registered with the state procurement system — in West Bengal that is done online at procurement.wbfood.in, capturing the mill's location, capacity and miller details. Once registered and empanelled, the mill receives paddy against allotment memos through the season. Each memo is a specific quantity of paddy tied to a specific rice-delivery obligation. So the discipline the whole season rests on is simple to state and hard to do by hand: for every memo, know exactly how much paddy came in, how much rice has gone back, and how much is still owed.",
      },
      {
        type: "p",
        h: "Milling charges: how the miller actually earns",
        text: "This is the point most people outside the trade miss. Under CMR the miller never owns the grain and is not paid for the rice. The miller is paid a milling charge for converting the government's paddy into rice, sometimes topped up by a state incentive. The by-products — bran, husk and broken rice, subject to each state's rules — are usually the miller's to sell, and for many mills that by-product income is the real margin. The economics of a CMR mill are therefore not 'buy low, sell high'; they are 'hit the out-turn, control costs, and monetise the by-products' — which is exactly why measuring recovery to the batch matters.",
      },
      {
        type: "p",
        h: "Gunny bags and delivery logistics",
        text: "CMR is delivered in the bags the agency specifies, and the bag itself is accounted for. In West Bengal the delivery agency (WBECSC) arranges the jute gunny bags, and millers must deliver CMR in those supplied bags — so empty-bag receipts and returns become their own small ledger that has to reconcile alongside the rice. Multiply a per-bag discrepancy across a season's tonnage and this 'bardana' accounting stops being trivial. A mill that tracks bag issue, fill and return against each delivery avoids the awkward end-of-season gap where the bag count doesn't match the rice count.",
      },
      {
        type: "p",
        h: "The out-turn reconciliation, in plain terms",
        text: "At the close, every kilogram has to tie out: paddy allotted equals rice delivered at the out-turn rate, plus the accounted-for by-products, plus any recorded process loss. This final reconciliation — millers often refer to it by its form number — is where a season's worth of small gaps surface at once. If your registers were kept lot by lot as the season ran, it is an afternoon's work; if they weren't, it is weeks of reconstruction under a recovery-notice deadline. The reconciliation doesn't create the shortfall — it reveals one that was building invisibly all season.",
      },
      {
        type: "note",
        text: "Raw vs parboiled changes the number. The out-turn obligation is 67 kg of raw rice or 68 kg of parboiled rice per 100 kg of paddy. Parboiling improves milling recovery and grain strength, which is one reason much of the CMR pool in eastern India is parboiled — but it adds soaking and steaming steps with their own moisture and energy costs to track.",
      },
      {
        type: "list",
        h: "What happens if a mill falls short",
        items: [
          {
            b: "You fund the shortfall —",
            t: "rice you couldn't recover from the paddy still has to be delivered, so it comes out of your own stock or pocket at market rates.",
          },
          {
            b: "Recovery notices —",
            t: "the reconciliation triggers a demand for the value of undelivered rice, often with interest.",
          },
          {
            b: "Security deposit at risk —",
            t: "the deposit lodged to secure the allotment can be adjusted against dues.",
          },
          {
            b: "Reduced future allotment —",
            t: "a poor delivery record affects how much paddy — and therefore how much milling-charge income — you're given next season.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is Custom Milled Rice (CMR)?",
        a: "CMR is rice a miller produces from government-supplied paddy. A state agency or FCI procures paddy from farmers at MSP and hands it to selected mills, which mill it and return finished rice to the central pool for milling charges.",
      },
      {
        q: "How much rice must a miller deliver under CMR?",
        a: "For KMS 2024–25, 67% rice against allotted paddy, including 1% Fortified Rice Kernels (FRK), delivered on a staged schedule. The exact rate and dates are notified each season and vary by state.",
      },
      {
        q: "What is FRK in CMR?",
        a: "Fortified Rice Kernels — rice kernels enriched with micronutrients (iron, folic acid, B12) blended into delivered rice (1% for KMS 2024–25) as part of the government fortification programme.",
      },
      {
        q: "Who does a miller deliver CMR to?",
        a: "Into the central pool, but operationally to a state agency or co-operative — in West Bengal, bodies such as WBECSC, BENFED, CONFED, NAFED or PBAMCL. FCI owns the pool the rice feeds; the state agency issues allotments and receives deliveries.",
      },
      {
        q: "Does the miller get paid for CMR rice?",
        a: "No. The miller is paid a milling charge (sometimes with a state incentive) for converting government paddy into rice, and usually keeps the by-products to sell. They never own or sell the rice itself.",
      },
    ],
    related: [
      {
        title: "How to calculate rice-mill yield & milling recovery",
        href: "Guide-YieldRecovery.dc.html",
      },
      {
        title: "Why CMR out-turn drops below 67% (moisture & shortfall)",
        href: "Guide-CMRShortfall.dc.html",
      },
      {
        title: "Rice-mill software for West Bengal (e-Paddy & CMR)",
        href: "State-WestBengal.dc.html",
      },
      {
        title: "Millingo — rice-mill ERP",
        href: "Millingo.dc.html",
      },
    ],
    cta: {
      title: "Get a free CMR out-turn review",
      body: "Send us a season's paddy-in and rice-out for a few lots and we'll show you where your out-turn is leaking against the 67% norm — and how Millingo tracks it lot by lot, so a shortfall surfaces daily instead of at reconciliation. No cost, no obligation.",
      productHref: "Millingo.dc.html",
      productLabel: "Explore Millingo",
    },
    seo: {
      metaTitle:
        "Custom Milled Rice (CMR) Explained: Process, 67% Obligation & FRK for Millers | Millingo",
      metaDescription:
        "A rice miller's guide to Custom Milled Rice (CMR): how the process works, the 67% rice + 1% FRK obligation, delivery schedule, state portals, and reconciliation.",
      canonical:
        "https://svasamm.com/pages/custom-milled-rice-cmr-process.html",
      ogType: "article",
      ogTitle: "Custom Milled Rice (CMR) Explained",
      ogDescription:
        "How the CMR process works for millers: obligations, delivery schedule, state portals, and reconciliation.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "Custom Milled Rice (CMR) Explained: Process, 67% Obligation & FRK for Millers",
        description: "How the CMR process works for millers.",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "Svasamm Research Pvt Ltd",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Svasamm",
        },
        datePublished: "2026-07-14",
        dateModified: "2026-08-04",
        mainEntityOfPage:
          "https://svasamm.com/pages/custom-milled-rice-cmr-process.html",
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
            name: "Custom Milled Rice (CMR)",
            item: "https://svasamm.com/pages/custom-milled-rice-cmr-process.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Custom Milled Rice (CMR)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "CMR is rice a miller produces from government-supplied paddy. A state agency or FCI procures paddy from farmers at MSP and hands it to selected mills, which mill it and return finished rice to the central pool for milling charges.",
            },
          },
          {
            "@type": "Question",
            name: "How much rice must a miller deliver under CMR?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For KMS 2024-25, 67% rice against allotted paddy, including 1% Fortified Rice Kernels (FRK), delivered on a staged schedule. The exact rate and dates are notified each season and vary by state.",
            },
          },
          {
            "@type": "Question",
            name: "What is FRK in CMR?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Fortified Rice Kernels - rice enriched with micronutrients (iron, folic acid, B12) blended into delivered rice (1% for KMS 2024-25).",
            },
          },
          {
            "@type": "Question",
            name: "Who does a miller deliver CMR to?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Into the central pool, but operationally to a state agency or co-operative - in West Bengal, bodies such as WBECSC, BENFED, CONFED, NAFED or PBAMCL. FCI owns the pool the rice feeds; the state agency issues allotments and receives deliveries.",
            },
          },
          {
            "@type": "Question",
            name: "Does the miller get paid for CMR rice?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. The miller is paid a milling charge (sometimes with a state incentive) for converting government paddy into rice, and usually keeps the by-products to sell. They never own or sell the rice itself.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "rice-mill-yield-recovery",
    type: "guide",
    parentProduct: "millingo",
    eyebrow: "Rice Mill Guide",
    title: "Rice Mill Yield & Milling Recovery: How to Calculate It",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 14 July 2026",
    intro:
      "Milling recovery — the out-turn ratio — is how much sellable rice you get from paddy: under government procurement it's a fixed 67% for raw rice and 68% for parboiled, per 100 kg of paddy. It is also the single number that decides whether a mill makes money — a one-percent gain on thousands of quintals is real profit, and a one-percent unexplained loss is money walking out of the gate. Here is how to calculate yield and recovery, what a good figure is, and why tracking it per batch is where mills find their margin.",
    sections: [
      {
        type: "p",
        h: 'What "recovery" actually means',
        text: "Milling recovery is the share of your paddy input that comes out as sellable rice. There are two figures every miller should track, and they are not the same:",
      },
      {
        type: "list",
        items: [
          {
            b: "Total milling recovery —",
            t: "all milled rice (whole + broken) as a percentage of paddy.",
          },
          {
            b: "Head rice recovery —",
            t: "only the whole, unbroken grains as a percentage of paddy. Head rice sells for far more than broken, so this is your quality number.",
          },
        ],
      },
      {
        type: "p",
        text: "The difference between the two is your broken-rice percentage. A mill can have healthy total recovery but poor head-rice if the paddy is over-dried or machines are misadjusted — and it quietly loses money on every batch.",
      },
      {
        type: "note",
        h: "The formulas",
        text: "Total milling recovery (%) = (total white rice output ÷ paddy input) × 100.   Head rice recovery (%) = (whole-grain rice output ÷ paddy input) × 100.",
      },
      {
        type: "p",
        h: "A worked example",
        text: "Feed 1,000 kg of paddy into a milling run and collect the output:",
      },
      {
        type: "table",
        cols: ["Output", "Weight", "As % of paddy"],
        rows: [
          ["Head (whole) rice", "620 kg", "62% (head rice recovery)"],
          ["Broken rice", "60 kg", "6%"],
          ["Total milled rice", "680 kg", "68% (total recovery)"],
          ["Bran", "80 kg", "8%"],
          ["Husk", "200 kg", "20%"],
          ["Moisture loss / dust", "40 kg", "4%"],
        ],
      },
      {
        type: "p",
        text: "Here total recovery is 68% and head rice is 62% — a broken-rice gap of 6%. The by-products (bran, husk, broken) are not waste; they are a second revenue stream to account for separately.",
      },
      {
        type: "list",
        h: "What is a good recovery?",
        items: [
          {
            b: "Total milled rice recovery:",
            t: "67–72% on clean, correctly conditioned non-basmati paddy.",
          },
          {
            b: "Head rice recovery:",
            t: "60–66%.",
          },
          "Poorly fissured, cracked, or over-dried paddy can pull total yield below 60% — a large, avoidable loss.",
        ],
      },
      {
        type: "p",
        text: "Under CMR, millers must deliver a fixed out-turn (67% for KMS 2024–25). If your actual recovery runs below the assumed rate, you absorb the shortfall — which is exactly why measuring real recovery matters.",
      },
      {
        type: "list",
        h: "How to measure it accurately (not guess it)",
        items: [
          {
            b: "Run a controlled test batch",
            t: "of a known, precisely weighed quantity (100 kg is practical) of a single paddy variety.",
          },
          {
            b: "Weigh every output stream:",
            t: "head rice, broken, bran, husk, and the balance.",
          },
          {
            b: "Record moisture and variety —",
            t: "the same machine gives very different recovery on 17% vs 22% moisture paddy.",
          },
          {
            b: "Compare planned vs actual",
            t: "extraction per run, broken down by machine, shift, operator and lot.",
          },
        ],
      },
      {
        type: "list",
        h: "What drives recovery up or down",
        items: [
          {
            b: "Moisture at milling —",
            t: "paddy milled too wet or too dry both cost you. The practical milling window is roughly 13–14% moisture; over-dried grain fractures and turns head rice into broken.",
          },
          {
            b: "Paddy variety and grade —",
            t: "long-slender, coarse and parboiled paddies all mill differently. A recovery figure only means something against a known variety.",
          },
          {
            b: "Fissured or cracked grain —",
            t: "cracks from sun-drying or rough handling show up as breakage in the whitener, not in the paddy weight — so the loss is invisible until the head-rice number drops.",
          },
          {
            b: "Machine adjustment —",
            t: "worn rubber rolls on the sheller and an over-aggressive whitener quietly shave head rice off every batch.",
          },
          {
            b: "Degree of milling —",
            t: "polishing harder gives whiter rice but lower yield; there is a real trade-off between appearance and out-turn.",
          },
          {
            b: "Foreign matter —",
            t: "stones, straw and immature grain inflate the paddy weight, so real recovery looks worse than it is unless intake is cleaned and graded first.",
          },
        ],
      },
      {
        type: "p",
        h: "The by-products are a second P&L",
        text: "Recovery is only half the money. Every 100 kg of paddy also yields roughly 8% bran and 20% husk, and those are revenue, not waste. Bran is sold to solvent-extraction plants for rice-bran oil; husk is burned as boiler fuel (many parboiling mills are effectively self-powered on their own husk) or sold for power and board-making; broken rice has its own market in breweries, food processing and feed. A mill that books bran, husk and broken as separate stock with their own sales — rather than lumping them into a vague 'by-product' line — often finds a surprising share of its margin sitting there. Under-measuring by-products is as expensive as under-measuring rice.",
      },
      {
        type: "p",
        h: "Head rice versus broken: the price gap is the point",
        text: "Head rice and broken rice can differ substantially in price, so the split between them matters as much as the total. A mill can hit a healthy 68% total recovery and still lose money if too much of it is broken — because the same tonnage sold as broken fetches materially less than whole grain. That is why head-rice recovery, not just total recovery, is the number to defend. Chasing a whiter, harder-polished grain can nudge total recovery down while lifting the head-rice share and the average selling price — which is the trade-off worth measuring rather than guessing.",
      },
      {
        type: "p",
        h: "Why a per-batch number beats a seasonal average",
        text: "A single season-end recovery figure tells you almost nothing you can act on. The useful question is which variety, which shift, which machine and which moisture band are dragging the average — and that only shows up if recovery is captured batch by batch. Track it per lot and a 2% gap stops being a mystery you absorb and becomes a specific cause you can fix: a drier that's running too hot, a sheller due for new rolls, a supplier whose paddy carries more foreign matter than the intake ticket admits.",
      },
    ],
    faqs: [
      {
        q: "What is a good milling recovery for a rice mill?",
        a: "On clean, correctly moisturised paddy, expect 67–72% total milled rice recovery and 60–66% head rice. Below 60% total usually signals moisture, fissuring, or machine-adjustment problems.",
      },
      {
        q: "How do you calculate paddy-to-rice conversion ratio?",
        a: "Total recovery (%) = (total white rice ÷ paddy input) × 100. So 1,000 kg paddy yielding 680 kg rice is 68%.",
      },
      {
        q: "Why is my head rice recovery low even when total recovery looks fine?",
        a: "A good total with low head rice means a high broken-rice share — usually over-dried or cracked paddy, or milling adjustment. Since head rice sells for much more than broken, this quietly erodes margin.",
      },
      {
        q: "How do moisture and drying affect milling recovery?",
        a: "Both extremes cost you. Paddy milled too wet mills poorly; paddy over-dried fractures and turns head rice into broken. The practical milling window is roughly 13–14% moisture — outside it, real recovery drops even on a well-adjusted machine.",
      },
      {
        q: "Are rice-mill by-products worth accounting separately?",
        a: "Yes. Bran (~8%) and husk (~20%) together are close to a third of every quintal of paddy, and both are real revenue — bran to solvent extractors for oil, husk as boiler fuel or for power. Booking them as separate stock and sales, rather than a vague 'by-product' line, often recovers a meaningful share of margin.",
      },
    ],
    related: [
      {
        title: "Custom Milled Rice (CMR): the complete process",
        href: "Guide-CMR.dc.html",
      },
      {
        title: "Why CMR out-turn drops below 67% (moisture & shortfall)",
        href: "Guide-CMRShortfall.dc.html",
      },
      {
        title: "By-product accounting: bran, husk & broken rice",
        href: "Guide-ByproductAccounting.dc.html",
      },
      {
        title: "Millingo — rice-mill ERP",
        href: "Millingo.dc.html",
      },
    ],
    cta: {
      title: "Get a free milling-recovery review",
      body: "Share a test batch's numbers — paddy in, head rice, broken, bran, husk — and we'll break down where your recovery is slipping and what it's costing you, plus how Millingo tracks yield per lot, machine and shift automatically. Free, no obligation.",
      productHref: "Millingo.dc.html",
      productLabel: "Explore Millingo",
    },
    seo: {
      metaTitle:
        "Rice Mill Yield & Milling Recovery: How to Calculate It (Formula + Examples) | Millingo",
      metaDescription:
        "Learn how to calculate rice milling recovery and paddy-to-rice conversion, what a good yield is (67-72%), head rice vs broken, and how to track recovery per batch.",
      canonical: "https://svasamm.com/pages/rice-mill-yield-recovery.html",
      ogType: "article",
      ogTitle: "Rice Mill Yield & Milling Recovery: How to Calculate It",
      ogDescription:
        "How to calculate rice milling recovery and paddy-to-rice conversion, and how to track it per batch.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Rice Mill Yield & Milling Recovery: How to Calculate It",
        description:
          "How to calculate rice milling recovery and track it per batch.",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "Svasamm Research Pvt Ltd",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Svasamm",
        },
        datePublished: "2026-07-14",
        dateModified: "2026-08-04",
        mainEntityOfPage:
          "https://svasamm.com/pages/rice-mill-yield-recovery.html",
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
            name: "Rice Mill Yield & Recovery",
            item: "https://svasamm.com/pages/rice-mill-yield-recovery.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a good milling recovery for a rice mill?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "On clean, correctly moisturised paddy, expect 67-72% total milled rice recovery and 60-66% head rice.",
            },
          },
          {
            "@type": "Question",
            name: "How do you calculate paddy to rice conversion ratio?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Total recovery (%) = (total white rice output / paddy input) x 100. So 1000 kg paddy yielding 680 kg rice is 68%.",
            },
          },
          {
            "@type": "Question",
            name: "What is the difference between head rice recovery and total milling recovery?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Total milling recovery counts all milled rice (whole plus broken); head rice recovery counts only whole grains. The gap is your broken-rice percentage.",
            },
          },
          {
            "@type": "Question",
            name: "How do moisture and drying affect milling recovery?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Both extremes cost you. Paddy milled too wet mills poorly; paddy over-dried fractures and turns head rice into broken. The practical milling window is roughly 13-14% moisture - outside it, real recovery drops even on a well-adjusted machine.",
            },
          },
          {
            "@type": "Question",
            name: "Are rice-mill by-products worth accounting separately?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Bran (~8%) and husk (~20%) together are close to a third of every quintal of paddy, and both are real revenue - bran to solvent extractors for oil, husk as boiler fuel or for power. Booking them as separate stock and sales recovers a meaningful share of margin.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "rice-mill-byproduct-accounting",
    type: "guide",
    parentProduct: "millingo",
    eyebrow: "Rice Mill Guide",
    title: "Rice Mill By-Product Accounting: Bran, Husk & Broken Rice",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 14 July 2026",
    intro:
      "Ask a miller what they sell and they'll say 'rice.' But by weight, nearly a third of every quintal of paddy leaves the mill as something else — bran, husk, and broken rice. How well you track and sell those by-products often decides whether a milling run is profitable.",
    sections: [
      {
        type: "table",
        h: "The main by-products",
        cols: ["By-product", "Typical share of paddy", "Where it’s sold"],
        rows: [
          ["Head rice", "60–66%", "Your primary product"],
          ["Broken rice", "~5–10%", "Lower-priced rice; food, brewing, feed"],
          ["Bran", "~8%", "Rice-bran oil extraction, cattle feed"],
          ["Husk", "~20%", "Boiler fuel, briquettes, board"],
        ],
      },
      {
        type: "p",
        h: "Account for by-products as separate stock and sales",
        text: "The single biggest mistake is treating by-products as an afterthought. Each one should be:",
      },
      {
        type: "list",
        items: [
          {
            b: "Booked as its own inventory item",
            t: "the moment a milling batch completes (bran/husk by weight; broken rice by grade/bag).",
          },
          {
            b: "Sold and invoiced separately,",
            t: "with its own price and GST treatment, so revenue is visible per by-product.",
          },
          {
            b: "Reconciled against the batch —",
            t: "paddy in should equal head rice + broken + bran + husk + loss. If it doesn’t, you have leakage.",
          },
        ],
      },
      {
        type: "list",
        h: "Working out true cost per ton (or per bag)",
        items: [
          {
            b: "Paddy cost —",
            t: "the purchase price, after quality/moisture (butta) deductions.",
          },
          {
            b: "Processing cost —",
            t: "power, labour and transport attributable to the run.",
          },
          {
            b: "Less by-product income —",
            t: "bran, husk and broken sales offset the cost of producing head rice.",
          },
        ],
      },
      {
        type: "note",
        text: "Net cost of head rice = (paddy cost + processing cost) − (bran + husk + broken income), spread over head-rice output → cost per ton/bag.",
      },
      {
        type: "p",
        text: "Two mills with identical paddy cost and rice price can have very different profit — the difference is usually how completely they capture and sell by-products.",
      },
    ],
    faqs: [
      {
        q: "What are the main by-products of rice milling?",
        a: "Bran (~8% of paddy, for oil and feed), husk (~20%, used as fuel), and broken rice (the non-head portion of milled rice, sold below head rice).",
      },
      {
        q: "Why is by-product accounting important?",
        a: "By-products are a large share of paddy weight and a real revenue stream. Booked as separate stock and sales, they reveal true profit per ton; ignored, they leave money uncounted or unsold.",
      },
      {
        q: "How do I calculate cost per ton of rice?",
        a: "Add paddy cost (after butta) and processing cost (power, labour, transport), subtract by-product income (bran, husk, broken), then divide by head-rice output to get net cost per ton or bag.",
      },
    ],
    related: [
      {
        title: "How to calculate rice-mill yield & milling recovery",
        href: "Guide-YieldRecovery.dc.html",
      },
      {
        title: "Custom Milled Rice (CMR) explained",
        href: "Guide-CMR.dc.html",
      },
      {
        title: "Millingo — rice-mill ERP",
        href: "Millingo.dc.html",
      },
    ],
    cta: {
      title: "See true profit per ton, by-products included",
      body: "Millingo books bran, husk and broken rice as separate stock at batch completion, invoices each with its own price and GST, and computes cost per ton/bag after by-product income.",
      productHref: "Millingo.dc.html",
      productLabel: "Explore Millingo",
    },
    seo: {
      metaTitle:
        "Rice Mill By-Product Accounting: Bran, Husk & Broken Rice | Millingo",
      metaDescription:
        "Why bran, husk and broken rice decide mill profitability, how to value and account for them as separate stock, and how to allocate cost per ton/bag.",
      canonical:
        "https://svasamm.com/pages/rice-mill-byproduct-accounting.html",
      ogType: "article",
      ogTitle: "Rice Mill By-Product Accounting: Bran, Husk & Broken Rice",
      ogDescription:
        "How to value and account for rice-mill by-products and allocate true cost per ton/bag.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Rice Mill By-Product Accounting: Bran, Husk & Broken Rice",
        description: "How to value and account for rice-mill by-products.",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "Svasamm Research Pvt Ltd",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Svasamm",
        },
        datePublished: "2026-07-14",
        dateModified: "2026-07-16",
        mainEntityOfPage:
          "https://svasamm.com/pages/rice-mill-byproduct-accounting.html",
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
            name: "By-Product Accounting",
            item: "https://svasamm.com/pages/rice-mill-byproduct-accounting.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What are the main by-products of rice milling?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Bran (~8% of paddy, for oil and feed), husk (~20%, used as fuel), and broken rice (the non-head portion of milled rice, sold below head rice).",
            },
          },
          {
            "@type": "Question",
            name: "Why is by-product accounting important for a rice mill?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "By-products are a large share of paddy weight and a real revenue stream. Booked as separate stock and sales, they reveal true profit per ton.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "gst-for-rice-mills",
    type: "guide",
    parentProduct: "millingo",
    eyebrow: "Rice Mill Guide",
    title: "GST for Rice Mills: Paddy, Rice, Bran & Milling",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 14 July 2026",
    intro:
      'GST on rice comes down to one thing: loose or packed. Paddy and loose, unbranded rice are nil-rated, but rice sold "pre-packaged and labelled" attracts 5% GST — the rule in force since 18 July 2022 — and by-products like bran and husk each have their own treatment. This guide lays out the full landscape so you can bill correctly.',
    sections: [
      {
        type: "note",
        h: "The quick reference table",
        text: "This is general information, not tax advice. GST rates, HSN classifications and notifications change — always confirm the current position for your specific products with your chartered accountant.",
      },
      {
        type: "table",
        cols: ["Item", "HSN", "GST (general position)"],
        rows: [
          ["Paddy (raw, in husk)", "1006 10", "Exempt (nil)"],
          ["Brown / husked rice", "1006 20", "Nil-rated"],
          ["Rice — loose / unbranded", "1006 30", "0% (nil)"],
          ["Rice — pre-packaged & labelled", "1006 30", "5%"],
          ["Broken rice — pre-packaged", "1006 40", "5%"],
          ["Rice husk", "2302", "Exempt (generally)"],
          ["Rice bran", "2302 40", "Taxable (commonly 5%; varies)"],
        ],
      },
      {
        type: "p",
        h: "The pre-packaged rule is the big one",
        text: "Since July 2022, the GST line for rice isn't 'branded vs unbranded' — it's pre-packaged and labelled. Rice sold loose is nil-rated; the same rice in a pre-packaged, labelled pack attracts 5% GST. For a mill that sells both ways, the same product is taxed differently by how it's packed — your billing has to get this right per invoice.",
      },
      {
        type: "list",
        h: "By-products: each has its own treatment",
        items: [
          {
            b: "Husk —",
            t: "generally exempt.",
          },
          {
            b: "Bran —",
            t: "taxable (commonly 5%); classification differs for de-oiled bran / cattle-feed grades.",
          },
          {
            b: "Broken rice —",
            t: "follows the same pre-packaged/loose logic as rice.",
          },
        ],
      },
      {
        type: "p",
        h: "Milling charges (custom milling / job work)",
        text: "When you mill the government’s paddy under CMR, you’re supplying a service (job work, SAC 9988), and the milling charges generally attract GST (commonly 5%). Confirm the current position — it’s separate from GST on rice you sell on your own account.",
      },
      {
        type: "p",
        h: "The input tax credit trap",
        text: "If a large share of your output is exempt (loose/unbranded rice, husk), you generally cannot claim full input tax credit (ITC) — it has to be apportioned, and the exempt portion becomes a cost. Knowing your taxable-vs-exempt sales mix is essential for both compliance and pricing.",
      },
    ],
    faqs: [
      {
        q: "Is there GST on paddy?",
        a: "Raw paddy (HSN 1006 10) is exempt (nil-rated), so it moves and stores without GST.",
      },
      {
        q: "What is the GST rate on rice?",
        a: "Loose/unbranded rice is nil-rated; pre-packaged and labelled rice attracts 5% GST (the pre-packaged rule from July 2022).",
      },
      {
        q: "Can a rice mill claim full input tax credit?",
        a: "Not if a large share of output is exempt. ITC must be apportioned between taxable and exempt sales, and the exempt portion becomes a cost. Confirm specifics with your CA.",
      },
    ],
    related: [
      {
        title: "By-product accounting: bran, husk & broken rice",
        href: "Guide-ByproductAccounting.dc.html",
      },
      {
        title: "Custom Milled Rice (CMR) explained",
        href: "Guide-CMR.dc.html",
      },
      {
        title: "Millingo — rice-mill ERP",
        href: "Millingo.dc.html",
      },
    ],
    cta: {
      title: "Bill GST correctly across paddy, rice & by-products",
      body: "Millingo carries the right HSN/rate per item, distinguishes pre-packaged from loose sales, books by-products separately, and keeps your CMR and open-market billing straight.",
      productHref: "Millingo.dc.html",
      productLabel: "Explore Millingo",
    },
    seo: {
      metaTitle:
        "GST for Rice Mills: Rates on Paddy, Rice, Bran & Milling (2026 Guide) | Millingo",
      metaDescription:
        "A practical GST guide for rice mills: paddy exempt, pre-packaged rice 5%, husk exempt, bran taxable, plus milling-charge and input-tax-credit points. Verify with your CA.",
      canonical: "https://svasamm.com/pages/gst-for-rice-mills.html",
      ogType: "article",
      ogTitle: "GST for Rice Mills (2026 Guide)",
      ogDescription:
        "A practical overview of GST for rice mills - paddy, rice, by-products, milling charges and ITC.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "GST for Rice Mills: Rates on Paddy, Rice, Bran & Milling (2026 Guide)",
        description: "A practical overview of GST for rice mills.",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "Svasamm Research Pvt Ltd",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Svasamm",
        },
        datePublished: "2026-07-14",
        dateModified: "2026-07-16",
        mainEntityOfPage: "https://svasamm.com/pages/gst-for-rice-mills.html",
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
            name: "GST for Rice Mills",
            item: "https://svasamm.com/pages/gst-for-rice-mills.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is there GST on paddy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Raw paddy (HSN 1006 10) is exempt (nil-rated).",
            },
          },
          {
            "@type": "Question",
            name: "What is the GST rate on rice?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Loose, unbranded rice is nil-rated (0%); pre-packaged and labelled rice attracts 5% GST.",
            },
          },
          {
            "@type": "Question",
            name: "Is GST charged on rice bran and husk?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Rice husk (HSN 2302) is generally exempt; rice bran is taxable (commonly 5%; varies). Confirm with your CA.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "best-rice-mill-software",
    type: "guide",
    parentProduct: "millingo",
    eyebrow: "Buyer's Guide",
    title: "Best Rice Mill Software: How to Choose",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 14 July 2026",
    intro:
      "Search 'rice mill software' and you'll find dozens of vendors, from one-person shops to SAP resellers. They are not the same kind of product, and the 'best' one depends on how your mill works — especially whether you do government custom milling. Here are the three categories mills actually buy, a must-have checklist, and the questions that separate a real fit from a good demo.",
    sections: [
      {
        type: "p",
        h: "The three categories of rice-mill software",
        text: "1. Generic ERP / accounting (e.g. Tally-based). Strong on accounting, GST and inventory in general terms — but paddy quality grading, moisture/butta deductions, milling recovery, by-products and CMR obligations aren’t native. Fine for a small market-only mill; usually outgrown by CMR mills.",
      },
      {
        type: "p",
        text: "2. POS / billing software. Good for over-the-counter rice sales and GST invoicing, but a mill is a manufacturing operation, not a shop — procurement, milling batches and government milling need more than a billing tool.",
      },
      {
        type: "p",
        text: "3. Purpose-built rice-mill ERP. Modelled on the actual workflow: Sauda → gate receipt → QC → milling batch → sales/CMR delivery → reconciliation. This fits mills that live and die by recovery and CMR compliance. Millingo sits here.",
      },
      {
        type: "list",
        h: "The must-have checklist",
        items: [
          {
            b: "CMR / levy procurement —",
            t: "levy memos, camp pickups, CMR delivery, release orders, and the 7.1 out-turn reconciliation.",
          },
          {
            b: "Paddy QC with butta/moisture deductions —",
            t: "value deducted from the supplier bill without touching quantity.",
          },
          {
            b: "Milling recovery per batch —",
            t: "real yield tracked against the CMR out-turn.",
          },
          {
            b: "By-product accounting —",
            t: "bran, husk and broken as separate stock and sales.",
          },
          {
            b: "Gunny-bag (bardana) accounting —",
            t: "jute/PP conversions and empty-bag returns.",
          },
          {
            b: "Stock that posts only after QC",
            t: "— a gate receipt shouldn’t inflate stock before quality is confirmed.",
          },
          {
            b: "Local-language screens",
            t: "so gate/QC/production staff aren’t fighting English-only software.",
          },
        ],
      },
      {
        type: "list",
        h: "Questions to ask any vendor",
        items: [
          "Does it handle my state’s CMR workflow (e.g. WB e-Paddy, UP fcs.up.gov.in) out of the box, or is that a customisation?",
          "Can it compute milling recovery per batch and flag lots below target?",
          "How does it book bran/husk/broken — separate stock, or lumped in?",
          "Does it do the 7.1 / out-turn reconciliation, or do I still do that in Excel?",
          "What does implementation cost and how long does go-live take?",
          "Is support available in my language and time zone?",
        ],
      },
      {
        type: "p",
        h: "GST on rice is not generic GST",
        text: "This is where generic accounting software quietly fails a mill. Rice tax hinges on one distinction: loose versus pre-packaged and labelled. Paddy is exempt. Milled rice sold loose or unbranded is nil-rated, but the same rice sold 'pre-packaged and labelled' attracts 5% GST — a rule in force since 18 July 2022. Broken rice follows the same logic. So a mill selling both loose rice and packed, branded rice is running two GST treatments on one shelf, with by-products at their own rates on top. Software that can't tag each output line with the correct treatment automatically pushes that judgement onto whoever cuts the invoice — and that is exactly where returns stop reconciling. Ask any vendor to show you a single invoice carrying a nil line and a 5% line together.",
      },
      {
        type: "note",
        text: "By-product tax (rice bran, de-oiled bran, husk) varies by HSN and processing and has changed over time — don't let a vendor quote you a single flat number for all of them. The right answer is 'the system applies the current notified rate per item', not 'it's all 5%'. Confirm the current rate for your outputs with your tax advisor.",
      },
      {
        type: "p",
        h: "State-specific CMR workflow matters more than a feature list",
        text: "CMR is national in concept but state-specific in practice, and that detail is where fit is won or lost. A West Bengal mill lives in e-Paddy (epaddy.wb.gov.in), registers at procurement.wbfood.in, delivers to agencies like WBECSC and BENFED, and must return CMR in the jute bags the agency supplies. Uttar Pradesh runs through fcs.up.gov.in with biometric E-PoP devices at purchase centres. Odisha works through OSCSC; Bihar through PACS on esahkari.bihar.gov.in. Same idea, different portals, agencies and rules. 'Supports CMR' in a brochure is not the same as supporting your state's CMR — ask whether your state's workflow is built in or a paid customisation.",
      },
      {
        type: "p",
        h: "Deployment: cloud, on-premise, or offline-tolerant",
        text: "Mills often sit in areas where connectivity drops, and the gate never stops for the internet. Decide up front whether you want a cloud system (no server to maintain, accessible from anywhere, but dependent on a working connection) or on-premise (runs on your own machine, works offline, but you own the backups and updates). The pragmatic question for a mill is what happens to weighbridge entries and gate receipts when the line goes down for an hour — a system that simply stops is a problem a purely cloud pitch tends to gloss over.",
      },
      {
        type: "p",
        h: "Implementation, data migration and training",
        text: "The software is half the decision; getting live is the other half. Most mills are switching from Tally plus a stack of registers and Excel sheets, so ask how opening balances, party ledgers and stock get migrated, how long go-live realistically takes, and — the part that quietly decides success — whether gate, QC and production staff will be trained in a language they actually work in. Software that the office can use but the gate cannot is software that gets bypassed by lunchtime.",
      },
      {
        type: "list",
        h: "Total cost of ownership, not just the licence",
        items: [
          {
            b: "Licence or subscription —",
            t: "per-user or per-mill, monthly or annual; confirm what a second location or extra user costs.",
          },
          {
            b: "Implementation —",
            t: "setup, data migration and configuration for your state's workflow; often a one-time fee that dwarfs a month's licence.",
          },
          {
            b: "Support and updates —",
            t: "whether GST and CMR rule changes each season are included or billed as customisation.",
          },
          {
            b: "Hardware integration —",
            t: "weighbridge and moisture-meter links, printers and gunny-bag labels — cheap to ignore now, expensive to retrofit.",
          },
          {
            b: "Training —",
            t: "the recurring cost of onboarding new gate and production staff on a seasonal workforce.",
          },
        ],
      },
      {
        type: "list",
        h: "Red flags when evaluating a vendor",
        items: [
          "A demo that only shows accounting and billing, never a milling batch or a CMR delivery.",
          "'We can customise that' as the answer to every mill-specific question — customisation is time, cost and risk.",
          "No answer on the 7.1 / out-turn reconciliation, or a suggestion you'll still do it in Excel.",
          "By-products (bran, husk, broken) treated as an afterthought rather than separate stock and sales.",
          "English-only screens with no local-language option for gate and production staff.",
          "No named support contact, or support only in a time zone that isn't yours.",
        ],
      },
      {
        type: "p",
        h: "Where Millingo fits",
        text: "Millingo is a purpose-built rice-mill ERP: it models the full mill workflow, computes recovery per batch, books by-products separately, handles gunny-bag accounting, and runs the complete CMR cycle with state-specific workflow. It comes in Starter, Professional and Enterprise tiers. It isn’t the only good option — but if CMR and recovery are central, purpose-built beats generic.",
      },
    ],
    faqs: [
      {
        q: "What should I look for in rice mill software?",
        a: "Mill-specific capabilities: CMR/levy support, paddy QC with butta/moisture, per-batch milling recovery, by-product accounting, gunny-bag handling, GST, and local-language screens. Generic accounting is table stakes.",
      },
      {
        q: "Is a generic ERP like Tally enough for a rice mill?",
        a: "It covers accounting and GST but not paddy QC/butta, milling recovery, by-products, or CMR without heavy customisation. CMR-driven mills usually outgrow it.",
      },
      {
        q: "How much does rice mill software cost?",
        a: "It depends on mill size, CMR vs market-only, users, and hardware integration — see our rice-mill software pricing guide.",
      },
      {
        q: "Do I need software specific to my state's CMR process?",
        a: "In practice, yes. CMR runs through state portals and agencies — West Bengal on e-Paddy with WBECSC and jute-bag rules, UP on fcs.up.gov.in with E-PoP devices, Odisha via OSCSC, Bihar via PACS. 'Supports CMR' in general isn't the same as supporting your state's workflow — ask whether it's built in or a paid customisation.",
      },
      {
        q: "Can rice mill software handle GST on loose versus packed rice?",
        a: "It should. Loose or unbranded rice is nil-rated while pre-packaged and labelled rice is 5% (since 18 July 2022), so a mill selling both runs two treatments on one shelf, plus by-products at their own rates. Good mill software tags each output line with the correct rate automatically instead of leaving it to whoever cuts the invoice.",
      },
    ],
    related: [
      {
        title: "Rice-mill software price: what it costs & why",
        href: "Guide-Pricing.dc.html",
      },
      {
        title: "Millingo vs Dataman Rice Soft (AAHAAR)",
        href: "Compare-Dataman.dc.html",
      },
      {
        title: "Millingo — rice-mill ERP",
        href: "Millingo.dc.html",
      },
    ],
    cta: {
      title: "See a rice-mill ERP built for the job",
      body: "Compare Millingo against your checklist. Book a free consultation and we’ll walk your workflow.",
      productHref: "Millingo.dc.html",
      productLabel: "Explore Millingo",
    },
    seo: {
      metaTitle:
        "Best Rice Mill Software: How to Choose (Buyer's Guide 2026) | Millingo",
      metaDescription:
        "A practical buyer's guide to choosing rice mill software: generic ERP vs POS vs purpose-built rice-mill ERP, the must-have checklist, and questions to ask vendors.",
      canonical: "https://svasamm.com/pages/best-rice-mill-software.html",
      ogType: "article",
      ogTitle: "Best Rice Mill Software: How to Choose",
      ogDescription:
        "How to choose rice mill software: categories, a must-have checklist, and questions to ask vendors.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Best Rice Mill Software: How to Choose (Buyer's Guide 2026)",
        description: "How to choose rice mill software.",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "Svasamm Research Pvt Ltd",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Svasamm",
        },
        datePublished: "2026-07-14",
        dateModified: "2026-08-04",
        mainEntityOfPage:
          "https://svasamm.com/pages/best-rice-mill-software.html",
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
            name: "Best Rice Mill Software (Buyer's Guide)",
            item: "https://svasamm.com/pages/best-rice-mill-software.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What should I look for in rice mill software?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mill-specific capabilities: CMR/levy support, paddy QC with butta/moisture, per-batch milling recovery, by-product accounting, gunny-bag handling, GST, and local-language screens.",
            },
          },
          {
            "@type": "Question",
            name: "Is a generic ERP like Tally enough for a rice mill?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It covers accounting and GST but not paddy QC/butta, milling recovery, by-products, or CMR without heavy customisation. CMR-driven mills usually outgrow it.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need software specific to my state's CMR process?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In practice, yes. CMR runs through state portals and agencies - West Bengal on e-Paddy with WBECSC and jute-bag rules, UP on fcs.up.gov.in with E-PoP devices, Odisha via OSCSC, Bihar via PACS. 'Supports CMR' in general isn't the same as supporting your state's workflow - ask whether it's built in or a paid customisation.",
            },
          },
          {
            "@type": "Question",
            name: "Can rice mill software handle GST on loose versus packed rice?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It should. Loose or unbranded rice is nil-rated while pre-packaged and labelled rice is 5% (since 18 July 2022), so a mill selling both runs two treatments on one shelf, plus by-products at their own rates. Good mill software tags each output line with the correct rate automatically.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "rice-mill-software-price",
    type: "guide",
    parentProduct: "millingo",
    eyebrow: "Pricing Guide",
    title: "Rice Mill Software Price: What It Costs & Why",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 14 July 2026",
    intro:
      "'What does rice mill software cost?' has no single answer, because a billing app and a full CMR-capable ERP are very different products. Here are the pricing models you'll encounter, what actually drives the cost, and how to compare offers fairly.",
    sections: [
      {
        type: "list",
        h: "The pricing models you'll see",
        items: [
          {
            b: "One-time (perpetual) licence —",
            t: "pay once, then pay for annual updates/support. Lower long-run cost if the software keeps up.",
          },
          {
            b: "Subscription (SaaS) —",
            t: "annual or monthly, usually including updates and support. Lower upfront, and you always run the current version.",
          },
          {
            b: "Per-user —",
            t: "priced by number of logins (gate, QC, production, accounts, owner).",
          },
          {
            b: "Tiered / module-based —",
            t: "a package (Starter / Professional / Enterprise) that scales scope and price with what you use.",
          },
        ],
      },
      {
        type: "p",
        text: "As a rough marker: simple billing/POS tools can start in the low tens of thousands of rupees, while a full ERP handling CMR, recovery and by-products is priced on your operation’s size and scope.",
      },
      {
        type: "table",
        h: "What actually drives the price",
        cols: ["Cost driver", "Why it matters"],
        rows: [
          [
            "Mill size & throughput",
            "More volume, godowns and lots = more to configure and support.",
          ],
          [
            "CMR vs market-only",
            "Government custom milling is far more than open-market billing.",
          ],
          [
            "Number of users",
            "Per-user pricing scales with gate, QC, production and accounts logins.",
          ],
          [
            "Hardware integration",
            "Weighbridge, E-PoP, barcode/printer integration adds setup.",
          ],
          [
            "Multi-unit / multi-state",
            "Several mills or states multiplies configuration and compliance.",
          ],
          [
            "Implementation & training",
            "Data migration, setup and staff training are real costs beyond the licence.",
          ],
        ],
      },
      {
        type: "p",
        h: "Compare total cost of ownership, not the sticker",
        text: "The cheapest licence is rarely the cheapest system. Add up licence/subscription + implementation + hardware integration + training + annual support. A tool that’s ₹20,000 cheaper but doesn’t handle your CMR reconciliation will cost far more in manual work and compliance risk over a season.",
      },
      {
        type: "list",
        h: "How Millingo is priced",
        items: [
          {
            b: "Starter —",
            t: "small/seasonal, market-only mills: procurement, inventory, milling, basic sales, core GST invoicing.",
          },
          {
            b: "Professional —",
            t: "full operations: financials/reports, weighbridge, gunny-bag accounting, broker/commission, quality slabs, by-product P&L.",
          },
          {
            b: "Enterprise —",
            t: "government CMR business: levy/CMR procurement and sales, out-turn tracking, statutory returns, multi-unit.",
          },
        ],
      },
      {
        type: "p",
        text: "Because the right tier depends on your mill’s size and whether you do CMR, we quote after a short conversation rather than post a one-size number that would mislead.",
      },
    ],
    faqs: [
      {
        q: "How much does rice mill software cost in India?",
        a: "It varies with scope. Entry-level billing tools can start in the low tens of thousands of rupees; a full CMR-capable ERP is priced on mill size, users and modules. Compare total cost of ownership, not just the sticker.",
      },
      {
        q: "Is it a one-time cost or a subscription?",
        a: "Both exist. Perpetual licences charge once plus annual updates; subscriptions spread cost and include updates/support. Subscription lowers upfront cost and keeps you current.",
      },
      {
        q: "Why won't vendors just post a price?",
        a: "Because a seasonal market-only mill and a multi-unit CMR operation need very different scope. A single posted number usually means you either overpay or find hidden add-ons later.",
      },
    ],
    related: [
      {
        title: "Best rice-mill software: how to choose",
        href: "Guide-BestSoftware.dc.html",
      },
      {
        title: "Custom Milled Rice (CMR) explained",
        href: "Guide-CMR.dc.html",
      },
      {
        title: "Millingo — rice-mill ERP",
        href: "Millingo.dc.html",
      },
    ],
    cta: {
      title: "Get a straight quote for your mill",
      body: "Tell us your throughput, whether you do CMR, and how many users — we'll scope the right tier.",
      productHref: "Millingo.dc.html",
      productLabel: "Explore Millingo",
    },
    seo: {
      metaTitle:
        "Rice Mill Software Price: What It Costs & Why (2026 Guide) | Millingo",
      metaDescription:
        "How rice mill software is priced - one-time vs subscription, per-user vs tiered - and what drives cost (mill size, CMR vs market-only, users, hardware).",
      canonical: "https://svasamm.com/pages/rice-mill-software-price.html",
      ogType: "article",
      ogTitle: "Rice Mill Software Price: What It Costs & Why",
      ogDescription:
        "How rice mill software is priced and what drives the cost.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Rice Mill Software Price: What It Costs & Why (2026 Guide)",
        description:
          "How rice mill software is priced and what drives the cost.",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "Svasamm Research Pvt Ltd",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Svasamm",
        },
        datePublished: "2026-07-14",
        dateModified: "2026-07-16",
        mainEntityOfPage:
          "https://svasamm.com/pages/rice-mill-software-price.html",
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
            name: "Rice Mill Software Price",
            item: "https://svasamm.com/pages/rice-mill-software-price.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does rice mill software cost in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It varies widely with scope. Entry-level billing tools can start in the low tens of thousands of rupees; a full CMR-capable ERP is priced on mill size, users and modules.",
            },
          },
          {
            "@type": "Question",
            name: "Is rice mill software a one-time cost or subscription?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Both models exist. Perpetual licences charge once plus annual updates; subscriptions spread cost and include updates/support.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "rice-mill-software-west-bengal",
    type: "state",
    parentProduct: "millingo",
    eyebrow: "West Bengal",
    title: "Rice Mill Software in West Bengal — Built for e-Paddy & CMR",
    byline: "Millingo by Svasamm Research · Konnagar, West Bengal",
    intro:
      "West Bengal is one of India's largest paddy-growing and rice-milling states, and its millers work under a procurement system with its own portal, agencies and rules. Most generic software isn't built for it. Millingo is — a rice-mill ERP made by a West Bengal company (Svasamm Research, Konnagar, Hooghly) around how WB mills actually operate.",
    sections: [
      {
        type: "p",
        h: "How rice procurement works in West Bengal",
        text: "WB paddy procurement runs through the state e-Paddy portal (epaddy.wb.gov.in), with procurement and milling handled via agencies such as WBECSC (West Bengal Essential Commodities Supply Corporation) and BENFED (the state cooperative marketing federation). Millers operate under the West Bengal Custom Milled Rice (Obligation & Control) framework, delivering rice back to the pool against allotted paddy each KMS.",
      },
      {
        type: "list",
        h: "What West Bengal millers need from software",
        items: [
          {
            b: "WB e-Paddy / CMR workflow —",
            t: "levy memos, camp pickups, gate receipts, CMR delivery and the out-turn (7.1) reconciliation, mapped to WBECSC/BENFED procedures.",
          },
          {
            b: 'Local QC and "butta" norms —',
            t: "moisture and quality deductions calculated the WB way, as a value deduction that doesn’t touch quantity.",
          },
          {
            b: "Bengali-friendly screens",
            t: "so gate, QC and production staff aren’t fighting English-only software.",
          },
          {
            b: "Milling recovery & by-products —",
            t: "real recovery against the CMR out-turn, and bran/husk/broken booked as separate revenue.",
          },
          {
            b: "GST & accounting —",
            t: "compliant billing for open-market sales alongside CMR.",
          },
        ],
      },
      {
        type: "p",
        h: "Millingo for West Bengal mills",
        text: "Millingo covers the full mill — procurement gate-to-godown (stock posts only after QC), quality grading with automatic butta deductions, milling batches with yield and by-product tracking, gunny-bag (bardana) accounting, market sales, and the complete government FCI/levy (CMR) cycle. One system for both your open-market business and your CMR obligation.",
      },
    ],
    faqs: [
      {
        q: "Does Millingo support West Bengal e-Paddy and CMR rules?",
        a: "Yes — Millingo is built around the WB procurement workflow (e-Paddy, WBECSC/BENFED, KMS obligations, and the CMR out-turn reconciliation), so you can track allotment, milling and delivery in one place.",
      },
      {
        q: "Is Millingo available in Bengali?",
        a: "Millingo is designed for WB mills with local-language support in mind, so gate, QC and production staff can work comfortably rather than in English-only screens.",
      },
      {
        q: "Can Millingo handle both CMR and open-market sales?",
        a: "Yes. It runs your government CMR obligation and your open-market paddy/rice business on the same system, including GST-compliant billing.",
      },
    ],
    related: [
      {
        title: "Custom Milled Rice (CMR): the complete process",
        href: "Guide-CMR.dc.html",
      },
      {
        title: "Rice-mill software for Uttar Pradesh",
        href: "State-UttarPradesh.dc.html",
      },
      {
        title: "Millingo — rice-mill ERP",
        href: "Millingo.dc.html",
      },
    ],
    cta: {
      title: "Built in West Bengal, for West Bengal millers",
      body: "See how Millingo handles WB e-Paddy and CMR end to end — we're based in Konnagar, Hooghly.",
      productHref: "Millingo.dc.html",
      productLabel: "Explore Millingo",
    },
    seo: {
      metaTitle:
        "Rice Mill Software in West Bengal - Built for e-Paddy & CMR | Millingo",
      metaDescription:
        "Rice mill ERP for West Bengal millers: built around WB e-Paddy procurement, WBECSC/BENFED CMR rules, local QC/butta norms, and Bengali support.",
      canonical:
        "https://svasamm.com/pages/rice-mill-software-west-bengal.html",
      ogType: "website",
      ogTitle: "Rice Mill Software in West Bengal | Millingo",
      ogDescription:
        "Rice-mill ERP built for West Bengal millers - e-Paddy, WBECSC/BENFED CMR, butta norms, Bengali support.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Rice Mill Software for West Bengal (Millingo)",
        serviceType: "Rice Mill ERP Software",
        description:
          "Rice-mill ERP built for West Bengal millers - WB e-Paddy procurement, WBECSC/BENFED CMR compliance, local QC/butta norms, and Bengali support.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: {
          "@type": "State",
          name: "West Bengal",
        },
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
            name: "West Bengal",
            item: "https://svasamm.com/pages/rice-mill-software-west-bengal.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Does Millingo support West Bengal e-Paddy and CMR rules?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Millingo is built around the West Bengal procurement workflow - e-Paddy, WBECSC/BENFED agencies, KMS obligations, and the CMR out-turn and reconciliation.",
            },
          },
          {
            "@type": "Question",
            name: "Is Millingo available in Bengali?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Millingo is designed for West Bengal mills with local-language support in mind, so gate, QC and production staff can work in Bengali rather than English-only screens.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "rice-mill-software-uttar-pradesh",
    type: "state",
    parentProduct: "millingo",
    eyebrow: "Uttar Pradesh",
    title: "Rice Mill Software in Uttar Pradesh — Built for CMR & Procurement",
    byline: "Millingo by Svasamm Research",
    intro:
      "Uttar Pradesh is one of India’s largest paddy-producing states, and its rice mills handle huge volumes of government custom milling every season — strict obligations, tight deadlines and a lot of reconciliation. Millingo is a rice-mill ERP built around how mills actually run, including the CMR cycle UP millers work under.",
    sections: [
      {
        type: "p",
        h: "How paddy procurement works in Uttar Pradesh",
        text: "UP paddy procurement is run by the state Food & Civil Supplies Department through its portal, fcs.up.gov.in. Farmers register online, and purchase happens at centres using biometric E-PoP (Electronic Point of Purchase) devices, with payments via PFMS; the Kharif season typically opens around 1 October. Paddy procured at MSP is custom-milled by empanelled mills, which deliver rice back to the central pool.",
      },
      {
        type: "list",
        h: "What Uttar Pradesh millers need from software",
        items: [
          {
            b: "CMR compliance —",
            t: "track allotment vs delivery, the staged schedule, the 67% + FRK obligation, and the out-turn (7.1) reconciliation.",
          },
          {
            b: "Milling recovery —",
            t: "measure real recovery against the assumed out-turn so shortfalls don’t quietly eat margin.",
          },
          {
            b: "By-product accounting —",
            t: "bran, husk and broken booked as separate revenue.",
          },
          {
            b: "Quality grading & moisture deductions",
            t: "handled correctly at the gate.",
          },
          {
            b: "Hindi-friendly screens",
            t: "so mill staff work in their own language.",
          },
          {
            b: "GST billing",
            t: "for the open-market side of the business.",
          },
        ],
      },
      {
        type: "p",
        h: "Millingo for Uttar Pradesh mills",
        text: "Millingo runs the full mill — procurement gate-to-godown (stock posts only after QC), quality grading with automatic deductions, milling batches with yield and by-product tracking, gunny-bag accounting, market sales, and the complete CMR cycle — with the Enterprise tier built for the government milling business and the volume UP mills carry.",
      },
    ],
    faqs: [
      {
        q: "Does Millingo support Uttar Pradesh procurement and CMR?",
        a: "Yes — it runs the CMR cycle (allotment, milling, delivery, out-turn reconciliation) and tracks procurement flowing through UP’s Food & Civil Supplies system (fcs.up.gov.in, E-PoP centres), alongside open-market trade.",
      },
      {
        q: "Is Millingo available in Hindi?",
        a: "Millingo is built with local-language support in mind, so UP gate, QC and production staff can work in Hindi rather than English-only screens.",
      },
      {
        q: "Can it handle both CMR and open-market business?",
        a: "Yes — government CMR and open-market paddy/rice run on the same system, with GST-compliant billing.",
      },
    ],
    related: [
      {
        title: "Custom Milled Rice (CMR): the complete process",
        href: "Guide-CMR.dc.html",
      },
      {
        title: "Rice-mill software for West Bengal",
        href: "State-WestBengal.dc.html",
      },
      {
        title: "Millingo — rice-mill ERP",
        href: "Millingo.dc.html",
      },
    ],
    cta: {
      title: "Handle high-volume CMR without the spreadsheet chaos",
      body: "See how Millingo tracks UP procurement and CMR end to end.",
      productHref: "Millingo.dc.html",
      productLabel: "Explore Millingo",
    },
    seo: {
      metaTitle:
        "Rice Mill Software in Uttar Pradesh - Built for CMR & Paddy Procurement | Millingo",
      metaDescription:
        "Rice mill ERP for Uttar Pradesh millers: built around UP paddy procurement (fcs.up.gov.in, E-PoP), CMR obligations, milling recovery, by-products, and Hindi support.",
      canonical:
        "https://svasamm.com/pages/rice-mill-software-uttar-pradesh.html",
      ogType: "website",
      ogTitle: "Rice Mill Software in Uttar Pradesh | Millingo",
      ogDescription:
        "Rice-mill ERP built for UP millers - fcs.up.gov.in/E-PoP procurement, CMR, recovery, Hindi support.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Rice Mill Software for Uttar Pradesh (Millingo)",
        serviceType: "Rice Mill ERP Software",
        description:
          "Rice-mill ERP built for Uttar Pradesh millers - UP paddy procurement (fcs.up.gov.in, E-PoP), CMR compliance, milling recovery and by-products, with Hindi support.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: {
          "@type": "State",
          name: "Uttar Pradesh",
        },
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
            name: "Uttar Pradesh",
            item: "https://svasamm.com/pages/rice-mill-software-uttar-pradesh.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Does Millingo support Uttar Pradesh paddy procurement and CMR?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Millingo runs the CMR cycle and tracks procurement that flows through UP's Food & Civil Supplies system (fcs.up.gov.in, E-PoP centres).",
            },
          },
          {
            "@type": "Question",
            name: "Is Millingo available in Hindi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Millingo is built with local-language support in mind, so UP staff at the gate, QC and production can work in Hindi.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "rice-mill-software-odisha",
    type: "state",
    parentProduct: "millingo",
    eyebrow: "Odisha",
    title: "Rice Mill Software in Odisha — Built for OSCSC & CMR",
    byline: "Millingo by Svasamm Research",
    intro:
      "Odisha is a major paddy state where custom milling for the government is central to most mills’ business. Managing allotment, milling, delivery and reconciliation is exactly where generic software falls short. Millingo is a rice-mill ERP built around the way mills actually run, including the CMR cycle Odisha millers work under.",
    sections: [
      {
        type: "p",
        h: "How paddy procurement works in Odisha",
        text: "Odisha procurement is run by the Odisha State Civil Supplies Corporation (OSCSC), whose functions include procurement of paddy and the storage and distribution of Custom Milled Rice (CMR). Procurement and milling operate under the state’s Food and Procurement Policy for each KMS, with custom-miller agreements and inter-district movement of paddy and CMR. Paddy procured at MSP is custom-milled by empanelled mills.",
      },
      {
        type: "list",
        h: "What Odisha millers need from software",
        items: [
          {
            b: "OSCSC / CMR compliance —",
            t: "track allotment vs delivery, the delivery schedule, the out-turn obligation and the 7.1 reconciliation.",
          },
          {
            b: "Milling recovery —",
            t: "real recovery against the assumed out-turn.",
          },
          {
            b: "By-product accounting —",
            t: "bran, husk and broken as separate revenue.",
          },
          {
            b: "Quality grading & moisture deductions",
            t: "at the gate.",
          },
          {
            b: "GST billing",
            t: "for open-market sales.",
          },
        ],
      },
      {
        type: "p",
        h: "Millingo for Odisha mills",
        text: "Millingo runs the full mill — procurement gate-to-godown (stock posts only after QC), quality grading with automatic deductions, milling batches with yield and by-product tracking, gunny-bag accounting, market sales, and the complete CMR cycle — in one system, with the Enterprise tier built for the government milling business.",
      },
    ],
    faqs: [
      {
        q: "Does Millingo support Odisha OSCSC procurement and CMR?",
        a: "Yes — it runs the CMR cycle (allotment, milling, delivery, out-turn reconciliation) and is built to fit procurement flowing through OSCSC under the state’s KMS policy, alongside open-market trade.",
      },
      {
        q: "Can it handle both CMR and open-market business?",
        a: "Yes — government CMR and open-market paddy/rice run on one system, with GST-compliant billing.",
      },
    ],
    related: [
      {
        title: "Custom Milled Rice (CMR): the complete process",
        href: "Guide-CMR.dc.html",
      },
      {
        title: "Rice-mill software for Bihar",
        href: "State-Bihar.dc.html",
      },
      {
        title: "Millingo — rice-mill ERP",
        href: "Millingo.dc.html",
      },
    ],
    cta: {
      title: "Run OSCSC custom milling without the spreadsheet chaos",
      body: "See how Millingo tracks Odisha procurement and CMR end to end.",
      productHref: "Millingo.dc.html",
      productLabel: "Explore Millingo",
    },
    seo: {
      metaTitle:
        "Rice Mill Software in Odisha - Built for OSCSC & CMR | Millingo",
      metaDescription:
        "Rice mill ERP for Odisha millers: built around OSCSC paddy procurement and custom milled rice (CMR), milling recovery, by-product accounting, and GST.",
      canonical: "https://svasamm.com/pages/rice-mill-software-odisha.html",
      ogType: "website",
      ogTitle: "Rice Mill Software in Odisha | Millingo",
      ogDescription:
        "Rice-mill ERP built for Odisha millers - OSCSC procurement and CMR, recovery, by-products, GST.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Rice Mill Software for Odisha (Millingo)",
        serviceType: "Rice Mill ERP Software",
        description:
          "Rice-mill ERP built for Odisha millers - OSCSC paddy procurement and custom milled rice (CMR), milling recovery, by-product accounting, and GST.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: {
          "@type": "State",
          name: "Odisha",
        },
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
            name: "Odisha",
            item: "https://svasamm.com/pages/rice-mill-software-odisha.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Does Millingo support Odisha OSCSC procurement and CMR?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Millingo runs the CMR cycle and is built to fit procurement that flows through the Odisha State Civil Supplies Corporation (OSCSC) under the state's KMS policy.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "rice-mill-software-bihar",
    type: "state",
    parentProduct: "millingo",
    eyebrow: "Bihar",
    title: "Rice Mill Software in Bihar — Built for PACS Procurement & CMR",
    byline: "Millingo by Svasamm Research",
    intro:
      "Bihar is one of India’s largest paddy-growing states, and its rice mills handle heavy government custom-milling volumes each season through a cooperative-led procurement system. Tracking allotment, milling and delivery under that system is where generic accounting software struggles. Millingo is built around how mills actually run, including Bihar’s CMR cycle.",
    sections: [
      {
        type: "p",
        h: "How paddy procurement works in Bihar",
        text: "In Bihar, paddy procurement is largely run through PACS (Primary Agricultural Cooperative Societies) operating Paddy Purchase Centres, coordinated via the state cooperative portal esahkari.bihar.gov.in, with the State Food Corporation (SFC) and FCI in the supply chain. Rice mills register on the portal; custom millers accept paddy against portal-issued notes (T.P.-cum-A.C. Notes) and are responsible for the quality of the CMR they deliver back to the pool.",
      },
      {
        type: "list",
        h: "What Bihar millers need from software",
        items: [
          {
            b: "PACS/SFC CMR compliance —",
            t: "track allotment against portal notes, delivery schedule, out-turn obligation and reconciliation.",
          },
          {
            b: "Milling recovery —",
            t: "measure real recovery against the assumed out-turn.",
          },
          {
            b: "By-product accounting —",
            t: "bran, husk and broken as separate revenue.",
          },
          {
            b: "Quality grading & moisture deductions",
            t: "at the gate.",
          },
          {
            b: "Hindi-friendly screens",
            t: "and GST billing for open-market sales.",
          },
        ],
      },
      {
        type: "p",
        h: "Millingo for Bihar mills",
        text: "Millingo runs the full mill — procurement gate-to-godown (stock posts only after QC), quality grading with automatic deductions, milling batches with yield and by-product tracking, gunny-bag accounting, market sales, and the complete CMR cycle — in one system, with the Enterprise tier built for the government milling business.",
      },
    ],
    faqs: [
      {
        q: "Does Millingo support Bihar procurement and CMR?",
        a: "Yes — it runs the CMR cycle and is built to fit Bihar’s PACS-based procurement (esahkari.bihar.gov.in) and SFC handling, where millers accept paddy against portal notes and are responsible for CMR quality.",
      },
      {
        q: "Can it handle both CMR and open-market business?",
        a: "Yes — government CMR and open-market paddy/rice run on one system, with GST-compliant billing.",
      },
    ],
    related: [
      {
        title: "Custom Milled Rice (CMR): the complete process",
        href: "Guide-CMR.dc.html",
      },
      {
        title: "Rice-mill software for Odisha",
        href: "State-Odisha.dc.html",
      },
      {
        title: "Millingo — rice-mill ERP",
        href: "Millingo.dc.html",
      },
    ],
    cta: {
      title: "Handle PACS/SFC custom milling in one system",
      body: "See how Millingo tracks Bihar procurement and CMR end to end.",
      productHref: "Millingo.dc.html",
      productLabel: "Explore Millingo",
    },
    seo: {
      metaTitle:
        "Rice Mill Software in Bihar - Built for PACS Procurement & CMR | Millingo",
      metaDescription:
        "Rice mill ERP for Bihar millers: built around PACS/SFC paddy procurement (esahkari.bihar.gov.in) and custom milled rice (CMR), milling recovery, by-products, and GST.",
      canonical: "https://svasamm.com/pages/rice-mill-software-bihar.html",
      ogType: "website",
      ogTitle: "Rice Mill Software in Bihar | Millingo",
      ogDescription:
        "Rice-mill ERP built for Bihar millers - PACS/SFC procurement and CMR, recovery, by-products, GST.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Rice Mill Software for Bihar (Millingo)",
        serviceType: "Rice Mill ERP Software",
        description:
          "Rice-mill ERP built for Bihar millers - PACS/SFC paddy procurement (esahkari.bihar.gov.in) and custom milled rice (CMR), milling recovery, by-product accounting, and GST.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: {
          "@type": "State",
          name: "Bihar",
        },
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
            name: "Bihar",
            item: "https://svasamm.com/pages/rice-mill-software-bihar.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Does Millingo support Bihar paddy procurement and CMR?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Millingo runs the CMR cycle and is built to fit Bihar's PACS-based procurement (via esahkari.bihar.gov.in) and SFC handling.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "millingo-vs-dataman",
    type: "compare",
    parentProduct: "millingo",
    eyebrow: "Comparison",
    title: "Millingo vs Dataman Rice Soft (AAHAAR)",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 14 July 2026",
    intro:
      "If you're choosing rice-mill software, Dataman's Rice Soft (also marketed as AAHAAR) is one of the established options you'll come across, alongside Millingo. Both are built for Indian rice mills, but they emphasise different things. This is an honest, side-by-side look.",
    sections: [
      {
        type: "note",
        h: "What Dataman Rice Soft (AAHAAR) is",
        text: "Based on each vendor's publicly available information as of July 2026. Software changes — always confirm current features directly with the vendor before deciding.",
      },
      {
        type: "p",
        text: "Rice Soft, by Dataman Computer Systems Pvt Ltd, is a long-standing rice-mill package. It emphasises core mill business management: purchase (bargain/bill entry, gate pass), sales, production entry and reporting, inventory/stock registers, financial accounting (ledgers, P&L, TDS), quality control with lab testing and quality deductions, multi-location support, and GST.",
      },
      {
        type: "p",
        h: "What Millingo is",
        text: "Millingo, by Svasamm Research, is a rice-mill ERP built specifically around the full milling workflow — including the government CMR cycle. It computes milling recovery per batch, books bran/husk/broken as separate stock and sales, handles paddy QC with butta deductions, gunny-bag accounting, and state-specific CMR reconciliation (West Bengal, Uttar Pradesh, Odisha, Bihar). Offered in Starter, Professional and Enterprise tiers.",
      },
      {
        type: "p",
        h: "Side-by-side",
        text: "'Stated' = listed on the vendor's public site; 'Not stated' means we didn't find it publicly (it may still exist — ask them).",
      },
      {
        type: "table",
        cols: ["Capability", "Millingo", "Dataman Rice Soft"],
        rows: [
          ["Purchase / sales / accounting / GST", "Yes", "Stated"],
          [
            "Quality control / deductions",
            "Yes (butta/moisture)",
            "Stated (lab testing)",
          ],
          ["Multi-location / multi-unit", "Yes (Enterprise)", "Stated"],
          [
            "Government CMR / levy cycle",
            "Yes (core focus)",
            "Not stated publicly",
          ],
          ["Per-batch milling recovery", "Yes", "Not stated publicly"],
          [
            "By-product (bran/husk/broken) accounting",
            "Yes",
            "Not stated publicly",
          ],
          ["Weighbridge / kata-slip capture", "Yes", "Not stated publicly"],
        ],
      },
      {
        type: "p",
        h: "Which should you choose?",
        text: "If your priority is well-rounded mill accounting, purchase/sales and GST from an established vendor, Rice Soft is a credible option — verify with Dataman whether it covers your government-milling needs. If your mill lives and dies by CMR compliance, out-turn reconciliation and per-batch recovery/by-product profitability, that is exactly what Millingo is built around.",
      },
    ],
    faqs: [
      {
        q: "What's the main difference between Millingo and Dataman Rice Soft?",
        a: "Rice Soft (AAHAAR) focuses on core mill accounting, purchase/sales, production and GST. Millingo is built specifically around the government CMR cycle plus per-batch recovery and by-product accounting. If CMR and recovery are central, that’s the deciding difference.",
      },
      {
        q: "Is this comparison up to date?",
        a: "It reflects each vendor’s public information as of July 2026. Features change — confirm current capabilities directly with each vendor.",
      },
    ],
    related: [
      {
        title: "Millingo vs Samadhan Rice Mill ERP",
        href: "Compare-Samadhan.dc.html",
      },
      {
        title: "Best rice-mill software: how to choose",
        href: "Guide-BestSoftware.dc.html",
      },
      {
        title: "Millingo — rice-mill ERP",
        href: "Millingo.dc.html",
      },
    ],
    cta: {
      title: "See if Millingo fits your mill",
      body: "Bring your CMR and recovery requirements and we'll show you exactly how Millingo handles them.",
      productHref: "Millingo.dc.html",
      productLabel: "Explore Millingo",
    },
    seo: {
      metaTitle:
        "Millingo vs Dataman Rice Soft (AAHAAR): Rice Mill Software Compared",
      metaDescription:
        "An honest comparison of Millingo and Dataman's Rice Soft / AAHAAR rice mill software - positioning, features, and which fits mills that depend on CMR and recovery.",
      canonical: "https://svasamm.com/pages/millingo-vs-dataman.html",
      ogType: "article",
      ogTitle: "Millingo vs Dataman Rice Soft (AAHAAR)",
      ogDescription:
        "A factual comparison of Millingo and Dataman's Rice Soft / AAHAAR rice mill software.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "Millingo vs Dataman Rice Soft (AAHAAR): Rice Mill Software Compared",
        description:
          "A factual comparison of Millingo and Dataman's Rice Soft / AAHAAR.",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "Svasamm Research Pvt Ltd",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Svasamm",
        },
        datePublished: "2026-07-14",
        dateModified: "2026-07-16",
        mainEntityOfPage: "https://svasamm.com/pages/millingo-vs-dataman.html",
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
            name: "Millingo vs Dataman",
            item: "https://svasamm.com/pages/millingo-vs-dataman.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the main difference between Millingo and Dataman's Rice Soft?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Rice Soft (AAHAAR) focuses on core mill accounting, purchase/sales, production and GST. Millingo is built specifically around the government CMR cycle plus per-batch milling recovery and by-product accounting.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "millingo-vs-samadhan",
    type: "compare",
    parentProduct: "millingo",
    eyebrow: "Comparison",
    title: "Millingo vs Samadhan Rice Mill ERP",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 14 July 2026",
    intro:
      "Samadhan Rice Mill ERP is another established option for Indian mills, so it's a fair one to weigh against Millingo. Both target rice milling, but they're built on different foundations and lead with different strengths. Here's an honest side-by-side.",
    sections: [
      {
        type: "note",
        h: "What Samadhan Rice Mill ERP is",
        text: "Based on each vendor's publicly available information as of July 2026. Confirm current features directly with the vendor before deciding.",
      },
      {
        type: "p",
        text: "Samadhan Rice Mill ERP (by RITC Pvt Ltd) is built on Microsoft Dynamics 365 Business Central. It highlights automated daily paddy price entry, quality-based pricing that adjusts purchase orders from test results, contract-labour task management with wage calculation, multi-plant management with consolidated inventory, role-tailored dashboards, gate entry with digital weighbridge integration, QC (moisture, mix testing), and loading/dispatch and packing management. Being Dynamics-based, it sits at the enterprise end of the market.",
      },
      {
        type: "p",
        h: "What Millingo is",
        text: "Millingo, by Svasamm Research, is a purpose-built rice-mill ERP centred on the government CMR cycle, per-batch milling recovery, and by-product (bran/husk/broken) accounting, with paddy QC/butta deductions, gunny-bag accounting, and state-specific CMR workflow. Delivered in Starter, Professional and Enterprise tiers so smaller mills aren’t forced onto an enterprise platform.",
      },
      {
        type: "p",
        h: "Side-by-side",
        text: "'Stated' = listed on the vendor's public site; 'Not stated' means we didn't find it publicly (it may still exist — ask them).",
      },
      {
        type: "table",
        cols: ["Capability", "Millingo", "Samadhan Rice Mill ERP"],
        rows: [
          [
            "Paddy purchase & quality-based pricing",
            "Yes (butta/moisture)",
            "Stated",
          ],
          ["Weighbridge / gate integration", "Yes", "Stated"],
          ["Multi-plant / multi-unit", "Yes (Enterprise)", "Stated"],
          ["Contract-labour / wage tracking", "Not a core focus", "Stated"],
          [
            "Government CMR / levy cycle & 7.1 reconciliation",
            "Yes (core focus)",
            "Not stated publicly",
          ],
          ["Per-batch milling recovery", "Yes", "Not stated publicly"],
          [
            "By-product (bran/husk/broken) accounting",
            "Yes",
            "Not stated publicly",
          ],
          [
            "Platform",
            "Purpose-built for rice mills",
            "Microsoft Dynamics 365 BC",
          ],
          [
            "Tiered plans for smaller mills",
            "Yes (Starter/Professional/Enterprise)",
            "Not stated publicly",
          ],
        ],
      },
      {
        type: "p",
        h: "Which should you choose?",
        text: "If you specifically want a Microsoft Dynamics 365 platform, strong contract-labour management and are comfortable at the enterprise tier, Samadhan is worth evaluating. If you want CMR-first software with per-batch recovery and by-product profitability, and a tier that fits a smaller or seasonal mill, Millingo is built for that.",
      },
    ],
    faqs: [
      {
        q: "How does Millingo differ from Samadhan Rice Mill ERP?",
        a: "Samadhan is built on Microsoft Dynamics 365 BC and leads with quality-based pricing, contract labour, multi-plant and weighbridge. Millingo is purpose-built around CMR, per-batch recovery and by-products, with tiered plans. Choose based on whether you need a Dynamics enterprise platform or CMR-first, right-sized software.",
      },
      {
        q: "Is this comparison current?",
        a: "It reflects public information as of July 2026. Features change — verify directly with each vendor.",
      },
    ],
    related: [
      {
        title: "Millingo vs Dataman Rice Soft (AAHAAR)",
        href: "Compare-Dataman.dc.html",
      },
      {
        title: "Best rice-mill software: how to choose",
        href: "Guide-BestSoftware.dc.html",
      },
      {
        title: "Millingo — rice-mill ERP",
        href: "Millingo.dc.html",
      },
    ],
    cta: {
      title: "Compare Millingo against your requirements",
      body: "Tell us your CMR, recovery and mill-size needs and we'll show you exactly how Millingo fits.",
      productHref: "Millingo.dc.html",
      productLabel: "Explore Millingo",
    },
    seo: {
      metaTitle: "Millingo vs Samadhan Rice Mill ERP: An Honest Comparison",
      metaDescription:
        "Compare Millingo and Samadhan Rice Mill ERP - positioning, platform, features, and which fits mills that depend on CMR, recovery, and by-product tracking.",
      canonical: "https://svasamm.com/pages/millingo-vs-samadhan.html",
      ogType: "article",
      ogTitle: "Millingo vs Samadhan Rice Mill ERP",
      ogDescription:
        "A factual comparison of Millingo and Samadhan Rice Mill ERP.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Millingo vs Samadhan Rice Mill ERP: An Honest Comparison",
        description:
          "A factual comparison of Millingo and Samadhan Rice Mill ERP.",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "Svasamm Research Pvt Ltd",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Svasamm",
        },
        datePublished: "2026-07-14",
        dateModified: "2026-07-16",
        mainEntityOfPage: "https://svasamm.com/pages/millingo-vs-samadhan.html",
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
            name: "Millingo vs Samadhan",
            item: "https://svasamm.com/pages/millingo-vs-samadhan.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How does Millingo differ from Samadhan Rice Mill ERP?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Samadhan is built on Microsoft Dynamics 365 Business Central and emphasises quality-based pricing, contract labour, multi-plant and weighbridge. Millingo is purpose-built around the CMR cycle, per-batch recovery and by-product accounting, offered in tiered plans.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "oem-distributor-management",
    type: "guide",
    parentProduct: "dms",
    eyebrow: "OEM Channel Guide",
    title: "Distributor Management for OEMs: The Complete Channel Lifecycle",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "For an OEM that sells through distributors, the product is only half the business — the channel is the other half. Once a machine leaves your factory, a distributor books the deal, installs it, services it, and is the face the customer sees for years. If you can't see any of that, you're flying blind on your own revenue and your own reputation. This guide breaks the OEM–distributor relationship into its three stages — before sale, sale & installation, and after sale — and explains what to track at each.",
    sections: [
      {
        type: "p",
        h: "Why OEMs need more than a generic DMS",
        text: "Most software labelled 'distributor management' was built for FMCG: fast-moving goods, secondary sales, beat plans, and stock that turns over in days. An OEM's channel is a different animal.",
      },
      {
        type: "list",
        items: [
          {
            b: "The unit is a machine, not a carton —",
            t: "a serial number, a warranty clock and a service history that lasts years, not a case of product that sells this week.",
          },
          {
            b: "The distributor installs and services —",
            t: "sale, commissioning and after-sales work are done by the distributor’s own engineers, in the field, away from the OEM.",
          },
          {
            b: "The sales cycle is long —",
            t: "high-value equipment with quoted deals, not repeat reordering.",
          },
          {
            b: "The relationship outlives the sale —",
            t: "warranty, spares, consumables and service are where the multi-year revenue and the customer relationship actually live.",
          },
        ],
      },
      {
        type: "p",
        h: "Stage 1 — Before sale: distributor-booked leads, visible to the OEM",
        text: "Deals start at the distributor, not at head office. Distributors register enquiries, leads and bookings; the OEM sees the whole pipeline across the network — which distributor, which customer, which machine, what stage — without waiting for a monthly phone call.",
      },
      {
        type: "list",
        items: [
          {
            b: "Lead & deal registration",
            t: "by each distributor, in one place.",
          },
          {
            b: "Network-wide pipeline visibility",
            t: "for the OEM, in real time.",
          },
          {
            b: "Deal protection",
            t: "so two distributors aren’t chasing the same customer.",
          },
          {
            b: "Demand forecasting",
            t: "from the aggregated pipeline.",
          },
        ],
      },
      {
        type: "p",
        h: "Stage 2 — Sale, installation & warranty: the machine gets a record",
        text: "When the deal closes, the distributor and its engineer handle the sale and installation — and that is exactly where most OEMs lose the thread. The lifecycle model keeps it: sale and install are logged against a serial-numbered machine, warranty starts on the clock, and the distributor's own stock and installed base become visible to the OEM.",
      },
      {
        type: "list",
        items: [
          {
            b: "Who sold, who installed, and when —",
            t: "captured against the machine.",
          },
          {
            b: "Serial & warranty tracking",
            t: "from the day of installation.",
          },
          {
            b: "Distributor inventory visible to the OEM —",
            t: "channel stock and machine aging, not a black box.",
          },
          {
            b: "Analytics & reports",
            t: "on installs, aging and warranty status across the network.",
          },
        ],
      },
      {
        type: "p",
        h: "Stage 3 — After sale: from customer query to the right distributor, on an SLA",
        text: "After the sale, the customer contacts the OEM — but the distributor does the work. A query raised to the OEM is intelligently assigned to the right distributor (by territory, product and load), tracked against an SLA, and escalated automatically if it slips. The OEM keeps ownership of the customer experience even though the field work is delegated.",
      },
      {
        type: "list",
        items: [
          {
            b: "Intelligent assignment",
            t: "of each query to the right distributor/engineer.",
          },
          {
            b: "SLA tracking",
            t: "on response and resolution.",
          },
          {
            b: "Automatic escalation",
            t: "when an SLA is at risk.",
          },
          {
            b: "Full history",
            t: "of every query, tied to the machine and the distributor.",
          },
        ],
      },
      {
        type: "list",
        h: "What the OEM gets out of it",
        items: [
          "One system of record across an arm’s-length distributor network.",
          "Demand, install and service analytics instead of monthly guesswork.",
          "Channel inventory and installed-base visibility down to the serial.",
          "A defensible, SLA-backed customer experience the OEM still owns.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a distributor management system (DMS) for an OEM?",
        a: "For an OEM, a DMS gives visibility and control over an arm's-length distributor network across the full lifecycle — lead and deal registration before sale, sale/installation/warranty tracking with serial-level records, and after-sales query assignment with SLAs — rather than just secondary-sales reporting.",
      },
      {
        q: "How is an OEM DMS different from an FMCG DMS?",
        a: "FMCG DMS focuses on fast-moving stock, secondary sales and beat plans. An OEM DMS is built around high-value equipment: serial-tracked machines, installation by distributor engineers, warranty, and a multi-year service relationship.",
      },
      {
        q: "Can the OEM see the distributor's inventory and installed machines?",
        a: "Yes — the model gives the OEM visibility of channel stock and the installed base (machines, serials, warranty status and aging) across the network, while each distributor sees only its own.",
      },
    ],
    related: [
      {
        title: "Distributor management for coding & marking OEMs",
        href: "DMS-CodingMarking.dc.html",
      },
      {
        title: "Distributor management for packaging machinery OEMs",
        href: "DMS-PackagingMachinery.dc.html",
      },
      {
        title: "DMS — distributor management for OEMs",
        href: "DMS.dc.html",
      },
    ],
    cta: {
      title: "See a distributor lifecycle built for OEMs",
      body: "Bring your channel model — how distributors book, install and service — and we'll map the before / sale / after flow with you.",
      productHref: "DMS.dc.html",
      productLabel: "Explore DMS",
    },
    seo: {
      metaTitle:
        "Distributor Management for OEMs: The Complete Channel Lifecycle | DMS by Svasamm",
      metaDescription:
        "How OEMs manage a distributor channel across the full lifecycle - before-sale lead registration, sale/installation/warranty with serial tracking, and after-sales query assignment with SLAs.",
      canonical: "https://svasamm.com/pages/oem-distributor-management.html",
      ogType: "article",
      ogTitle:
        "Distributor Management for OEMs: The Complete Channel Lifecycle",
      ogDescription:
        "How OEMs manage a distributor channel across the full lifecycle - before-sale lead registration, sale/installation/warranty with serial tracking, and after-sales query assignment with SLAs.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "Distributor Management for OEMs: The Complete Channel Lifecycle",
        description:
          "How OEMs manage a distributor channel across the full lifecycle - before-sale lead registration, sale/installation/warranty with serial tracking, and after-sales query assignment with SLAs.",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "Svasamm Research Pvt Ltd",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Svasamm",
        },
        datePublished: "2026-07-16",
        dateModified: "2026-07-16",
        mainEntityOfPage:
          "https://svasamm.com/pages/oem-distributor-management.html",
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
            name: "DMS",
            item: "https://svasamm.com/pages/dms.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Distributor Management for OEMs",
            item: "https://svasamm.com/pages/oem-distributor-management.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a distributor management system (DMS) for an OEM?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For an OEM, a DMS gives visibility and control over an arm's-length distributor network across the full lifecycle - lead and deal registration before sale, sale/installation/warranty tracking with serial-level records, and after-sales query assignment with SLAs - rather than just secondary-sales reporting.",
            },
          },
          {
            "@type": "Question",
            name: "How is an OEM DMS different from an FMCG DMS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "FMCG DMS focuses on fast-moving stock, secondary sales and beat plans. An OEM DMS is built around high-value equipment: serial-tracked machines, installation by distributor engineers, warranty, and a multi-year service relationship.",
            },
          },
          {
            "@type": "Question",
            name: "Can the OEM see the distributor's inventory and installed machines?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - the model gives the OEM visibility of channel stock and the installed base (machines, serials, warranty status and aging) across the network, while each distributor sees only its own.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "dms-coding-marking-oem",
    type: "industry",
    parentProduct: "dms",
    eyebrow: "OEM Industry · Coding & Marking",
    title: "Distributor Management for Coding & Marking OEMs",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "Coding and marking OEMs — makers of continuous inkjet (CIJ), thermal inkjet, laser and thermal-transfer printers — live and die by uptime and consumables. A printer that stops on a packaging line stops the line, and the inks, make-up fluids and ribbons are a recurring revenue stream that flows through distributors. Managing that channel end to end is exactly what a DMS for OEMs is for.",
    sections: [
      {
        type: "list",
        h: "What makes coding & marking channels hard",
        items: [
          {
            b: "Uptime is everything —",
            t: "a coder down means the customer’s production line is down; service response is measured in hours, not days.",
          },
          {
            b: "Recurring consumables —",
            t: "inks, make-up fluids, cartridges and ribbons are ongoing revenue, and it leaks the moment a customer switches to third-party fluids.",
          },
          {
            b: "Distributors sell, install and service —",
            t: "the OEM rarely touches the printer after it ships.",
          },
          {
            b: "High installed base —",
            t: "thousands of serial-numbered printers across customer sites, each with its own warranty and service clock.",
          },
        ],
      },
      {
        type: "list",
        h: "The full lifecycle, tracked",
        items: [
          {
            b: "Before sale —",
            t: "distributors register printer deals; the OEM sees the pipeline across the whole network.",
          },
          {
            b: "Sale & install —",
            t: "the distributor engineer installs on the customer line; serial and warranty are recorded, and the distributor’s stock of printers and consumables is visible to the OEM.",
          },
          {
            b: "After sale —",
            t: "a line-down query to the OEM is assigned to the nearest capable distributor engineer on a tight SLA, and escalated if it breaches.",
          },
        ],
      },
      {
        type: "list",
        h: "What coding & marking OEMs get",
        items: [
          "Printer installed-base and warranty visibility down to the serial.",
          "Consumables demand and reorder signal per distributor — protecting genuine-fluid revenue.",
          "Fast, SLA-bound service for uptime-critical customers.",
          "Analytics on install aging and service load across the network.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we track ink and consumable sales through distributors?",
        a: "Yes — recurring consumables (inks, make-up fluids, cartridges, ribbons) are tracked per distributor, with reorder visibility so the OEM sees demand and can protect genuine-fluid revenue.",
      },
      {
        q: "How fast can a line-down service request reach an engineer?",
        a: "A query raised to the OEM is intelligently assigned to the nearest capable distributor engineer on an SLA, with automatic escalation if the SLA is at risk.",
      },
    ],
    related: [
      {
        title: "Distributor management for OEMs: the full channel lifecycle",
        href: "Guide-OEMDistributor.dc.html",
      },
      {
        title: "Distributor management for packaging machinery OEMs",
        href: "DMS-PackagingMachinery.dc.html",
      },
      {
        title: "DMS — distributor management for OEMs",
        href: "DMS.dc.html",
      },
    ],
    cta: {
      title: "Built for uptime-critical coding & marking channels",
      body: "Show us how your distributors sell printers and supply fluids, and we'll map the lifecycle with you.",
      productHref: "DMS.dc.html",
      productLabel: "Explore DMS",
    },
    seo: {
      metaTitle:
        "Distributor Management for Coding & Marking OEMs | DMS by Svasamm",
      metaDescription:
        "Distributor management for coding &amp; marking OEMs (CIJ, thermal inkjet, laser, TTO): consumables tracking (inks, fluids, ribbons), serial/warranty, and SLA-backed line-down service.",
      canonical: "https://svasamm.com/pages/dms-coding-marking-oem.html",
      ogType: "website",
      ogTitle: "Distributor Management for Coding &amp; Marking OEMs",
      ogDescription:
        "Distributor management for coding &amp; marking OEMs (CIJ, thermal inkjet, laser, TTO): consumables tracking (inks, fluids, ribbons), serial/warranty, and SLA-backed line-down service.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Distributor Management for Coding & Marking OEMs",
        serviceType: "Distributor Management Software for OEMs",
        description:
          "Distributor management for coding & marking OEMs (CIJ, thermal inkjet, laser, TTO): consumables tracking (inks, fluids, ribbons), serial/warranty, and SLA-backed line-down service.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "Coding & marking equipment OEMs",
        },
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
            name: "DMS",
            item: "https://svasamm.com/pages/dms.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Coding & Marking OEMs",
            item: "https://svasamm.com/pages/dms-coding-marking-oem.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can we track ink and consumable sales through distributors?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - recurring consumables (inks, make-up fluids, cartridges, ribbons) are tracked per distributor, with reorder visibility so the OEM sees demand and can protect genuine-fluid revenue.",
            },
          },
          {
            "@type": "Question",
            name: "How fast can a line-down service request reach an engineer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A query raised to the OEM is intelligently assigned to the nearest capable distributor engineer on an SLA, with automatic escalation if the SLA is at risk.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "dms-packaging-machinery-oem",
    type: "industry",
    parentProduct: "dms",
    eyebrow: "OEM Industry · Packaging Machinery",
    title: "Distributor Management for Packaging & Industrial Machinery OEMs",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "OEMs that build filling, sealing, labelling, cartoning and wrapping machines sell high-value equipment through distributors who commission it, stock spares and change parts, and carry the service relationship for the machine’s long life. That whole channel needs to be visible to the OEM.",
    sections: [
      {
        type: "list",
        h: "The channel challenge in packaging machinery",
        items: [
          {
            b: "Installation & commissioning",
            t: "are done by distributor engineers, often over days.",
          },
          {
            b: "Spares & change parts",
            t: "are a continuous aftermarket that flows through the channel.",
          },
          {
            b: "AMC & service contracts",
            t: "recur and need to be tracked and renewed.",
          },
          {
            b: "Long service life —",
            t: "machines run for years, so the installed base and its aging matter.",
          },
        ],
      },
      {
        type: "list",
        h: "Before sale to after sale, on one system",
        items: [
          {
            b: "Before sale —",
            t: "distributors book machine deals; the OEM sees the network pipeline.",
          },
          {
            b: "Sale & install —",
            t: "commissioning is logged against a serial-numbered machine with warranty, and the distributor’s spares stock and machine aging are visible to the OEM.",
          },
          {
            b: "After sale —",
            t: "a breakdown or spare-part query is assigned to the right distributor on an SLA, and escalated if it slips.",
          },
        ],
      },
      {
        type: "list",
        h: "What packaging machinery OEMs get",
        items: [
          "Installed base with warranty and AMC-renewal visibility.",
          "Spares and change-part demand across the channel.",
          "Commissioning and service tracking down to the engineer.",
          "SLA-backed breakdown response for production-critical customers.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can spares and change parts be tracked through distributors?",
        a: "Yes — the distributor’s spares stock is visible to the OEM, and aftermarket demand is tracked across the channel.",
      },
      {
        q: "Does it track AMC and service-contract renewals?",
        a: "Yes — AMC and service contracts are tracked against the installed machine so renewals aren’t missed.",
      },
    ],
    related: [
      {
        title: "Distributor management for OEMs: the full channel lifecycle",
        href: "Guide-OEMDistributor.dc.html",
      },
      {
        title: "Distributor management for HVAC & industrial equipment OEMs",
        href: "DMS-HVAC.dc.html",
      },
      {
        title: "DMS — distributor management for OEMs",
        href: "DMS.dc.html",
      },
    ],
    cta: {
      title: "One system for machines, spares and service",
      body: "Bring your distributor and AMC model, and we'll map commissioning-to-service with you.",
      productHref: "DMS.dc.html",
      productLabel: "Explore DMS",
    },
    seo: {
      metaTitle:
        "Distributor Management for Packaging & Industrial Machinery OEMs | DMS by Svasamm",
      metaDescription:
        "Distributor management for packaging &amp; machinery OEMs: commissioning tracking, serial/warranty, spares &amp; change parts through the channel, AMC renewals, and SLA-backed breakdown service.",
      canonical: "https://svasamm.com/pages/dms-packaging-machinery-oem.html",
      ogType: "website",
      ogTitle:
        "Distributor Management for Packaging &amp; Industrial Machinery OEMs",
      ogDescription:
        "Distributor management for packaging &amp; machinery OEMs: commissioning tracking, serial/warranty, spares &amp; change parts through the channel, AMC renewals, and SLA-backed breakdown service.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Distributor Management for Packaging & Industrial Machinery OEMs",
        serviceType: "Distributor Management Software for OEMs",
        description:
          "Distributor management for packaging & machinery OEMs: commissioning tracking, serial/warranty, spares & change parts through the channel, AMC renewals, and SLA-backed breakdown service.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "Packaging & industrial machinery OEMs",
        },
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
            name: "DMS",
            item: "https://svasamm.com/pages/dms.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Packaging Machinery OEMs",
            item: "https://svasamm.com/pages/dms-packaging-machinery-oem.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can spares and change parts be tracked through distributors?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - the distributor's spares stock is visible to the OEM, and aftermarket demand is tracked across the channel.",
            },
          },
          {
            "@type": "Question",
            name: "Does it track AMC and service-contract renewals?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - AMC and service contracts are tracked against the installed machine so renewals are not missed.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "dms-electrical-electronics-oem",
    type: "industry",
    parentProduct: "dms",
    eyebrow: "OEM Industry · Electrical & Electronics",
    title: "Distributor Management for Electrical & Electronics OEMs",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "OEMs making switchgear, drives, UPS systems, power electronics and test & measurement instruments sell a broad range through channel partners, with warranty registration at the end customer and a steady flow of repairs and returns. Keeping that visible is what an OEM DMS does.",
    sections: [
      {
        type: "list",
        h: "The channel challenge in electrical & electronics",
        items: [
          {
            b: "Broad SKU range",
            t: "across many product families and partners.",
          },
          {
            b: "Warranty registration",
            t: "happens at the end customer, often invisibly to the OEM.",
          },
          {
            b: "RMA & repair returns",
            t: "flow back through the channel and need tracking.",
          },
          {
            b: "Multi-tier partners —",
            t: "distributors, resellers and service centres.",
          },
        ],
      },
      {
        type: "list",
        h: "Before sale to after sale, on one system",
        items: [
          {
            b: "Before sale —",
            t: "partners register deals; the OEM sees the pipeline network-wide.",
          },
          {
            b: "Sale & warranty —",
            t: "serial and warranty registration are captured, and partner stock and aging are visible to the OEM.",
          },
          {
            b: "After sale —",
            t: "a support or RMA query is assigned to the right partner or service centre on an SLA, with escalation.",
          },
        ],
      },
      {
        type: "list",
        h: "What electrical & electronics OEMs get",
        items: [
          "Warranty and RMA visibility down to the serial.",
          "Channel stock across partners and tiers.",
          "SLA-backed support and repair turnaround.",
          "Product-wise analytics on sales and service.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can warranty registration and RMA be tracked through the channel?",
        a: "Yes — serial-level warranty registration and RMA/repair returns are tracked across partners, giving the OEM visibility it usually lacks.",
      },
      {
        q: "Does each partner see only its own data?",
        a: "Yes — access is scoped per partner, while the OEM sees the whole network.",
      },
    ],
    related: [
      {
        title: "Distributor management for OEMs: the full channel lifecycle",
        href: "Guide-OEMDistributor.dc.html",
      },
      {
        title: "Distributor management for automotive & aftermarket OEMs",
        href: "DMS-Automotive.dc.html",
      },
      {
        title: "DMS — distributor management for OEMs",
        href: "DMS.dc.html",
      },
    ],
    cta: {
      title: "Warranty, RMA and channel stock in one place",
      body: "Tell us how your partners register warranty and handle returns, and we'll map it with you.",
      productHref: "DMS.dc.html",
      productLabel: "Explore DMS",
    },
    seo: {
      metaTitle:
        "Distributor Management for Electrical & Electronics OEMs | DMS by Svasamm",
      metaDescription:
        "Distributor management for electrical &amp; electronics OEMs (switchgear, drives, UPS, instruments): serial-level warranty registration, RMA/repair tracking, channel stock, and SLA support.",
      canonical:
        "https://svasamm.com/pages/dms-electrical-electronics-oem.html",
      ogType: "website",
      ogTitle: "Distributor Management for Electrical &amp; Electronics OEMs",
      ogDescription:
        "Distributor management for electrical &amp; electronics OEMs (switchgear, drives, UPS, instruments): serial-level warranty registration, RMA/repair tracking, channel stock, and SLA support.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Distributor Management for Electrical & Electronics OEMs",
        serviceType: "Distributor Management Software for OEMs",
        description:
          "Distributor management for electrical & electronics OEMs (switchgear, drives, UPS, instruments): serial-level warranty registration, RMA/repair tracking, channel stock, and SLA support.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "Electrical & electronics equipment OEMs",
        },
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
            name: "DMS",
            item: "https://svasamm.com/pages/dms.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Electrical & Electronics OEMs",
            item: "https://svasamm.com/pages/dms-electrical-electronics-oem.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can warranty registration and RMA be tracked through the channel?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - serial-level warranty registration and RMA/repair returns are tracked across partners, giving the OEM visibility it usually lacks.",
            },
          },
          {
            "@type": "Question",
            name: "Does each partner see only its own data?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - access is scoped per partner, while the OEM sees the whole network.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "dms-pharma-medical-device-oem",
    type: "industry",
    parentProduct: "dms",
    eyebrow: "OEM Industry · Pharma & Medical Devices",
    title: "Distributor Management for Pharma & Medical Device OEMs",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "OEMs selling lab, diagnostic and medical equipment through distributors carry obligations most channels don’t: qualified installation, calibration schedules, reagent and consumable resupply, and serial-level traceability. An OEM DMS keeps that lifecycle visible and accountable.",
    sections: [
      {
        type: "note",
        h: "The channel challenge in pharma & medical devices",
        text: "This describes system capabilities for managing your channel — it is not a regulatory or quality-management certification. Confirm compliance requirements (e.g. IQ/OQ, calibration records) against your own quality system.",
      },
      {
        type: "list",
        items: [
          {
            b: "Qualified installation",
            t: "(IQ/OQ) performed by the distributor’s engineers.",
          },
          {
            b: "Calibration & AMC schedules",
            t: "that must be tracked against each instrument.",
          },
          {
            b: "Reagents & consumables",
            t: "resupplied through the channel.",
          },
          {
            b: "Serial / lot traceability",
            t: "for the installed base.",
          },
        ],
      },
      {
        type: "list",
        h: "Before sale to after sale, on one system",
        items: [
          {
            b: "Before sale —",
            t: "distributors register equipment deals; the OEM sees the pipeline.",
          },
          {
            b: "Sale & install —",
            t: "installation qualification and calibration are recorded against a serial-numbered instrument with warranty, and distributor stock and reagent supply are visible to the OEM.",
          },
          {
            b: "After sale —",
            t: "a service or calibration-due query is assigned to the right distributor engineer on an SLA, with escalation.",
          },
        ],
      },
      {
        type: "list",
        h: "What pharma & medical device OEMs get",
        items: [
          "Installed base with calibration and AMC due-dates.",
          "Reagent and consumable demand across distributors.",
          "Serial-level traceability of every instrument.",
          "SLA-backed service for critical equipment.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can calibration and AMC schedules be tracked per instrument?",
        a: "Yes — calibration and AMC due-dates are tracked against each serial-numbered instrument in the installed base.",
      },
      {
        q: "Can reagents and consumables be tracked through distributors?",
        a: "Yes — reagent and consumable supply is tracked per distributor, so the OEM sees demand across the channel.",
      },
    ],
    related: [
      {
        title: "Distributor management for OEMs: the full channel lifecycle",
        href: "Guide-OEMDistributor.dc.html",
      },
      {
        title: "Distributor management for electrical & electronics OEMs",
        href: "DMS-Electrical.dc.html",
      },
      {
        title: "DMS — distributor management for OEMs",
        href: "DMS.dc.html",
      },
    ],
    cta: {
      title: "A traceable lifecycle for regulated equipment",
      body: "Share how your distributors install and service instruments, and we'll map the lifecycle with you.",
      productHref: "DMS.dc.html",
      productLabel: "Explore DMS",
    },
    seo: {
      metaTitle:
        "Distributor Management for Pharma & Medical Device OEMs | DMS by Svasamm",
      metaDescription:
        "Distributor management for pharma &amp; medical device OEMs: qualified installation and calibration tracking, reagent/consumable resupply, serial-level traceability, and SLA-backed service.",
      canonical: "https://svasamm.com/pages/dms-pharma-medical-device-oem.html",
      ogType: "website",
      ogTitle: "Distributor Management for Pharma &amp; Medical Device OEMs",
      ogDescription:
        "Distributor management for pharma &amp; medical device OEMs: qualified installation and calibration tracking, reagent/consumable resupply, serial-level traceability, and SLA-backed service.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Distributor Management for Pharma & Medical Device OEMs",
        serviceType: "Distributor Management Software for OEMs",
        description:
          "Distributor management for pharma & medical device OEMs: qualified installation and calibration tracking, reagent/consumable resupply, serial-level traceability, and SLA-backed service.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "Pharma & medical device OEMs",
        },
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
            name: "DMS",
            item: "https://svasamm.com/pages/dms.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Pharma & Medical Device OEMs",
            item: "https://svasamm.com/pages/dms-pharma-medical-device-oem.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can calibration and AMC schedules be tracked per instrument?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - calibration and AMC due-dates are tracked against each serial-numbered instrument in the installed base.",
            },
          },
          {
            "@type": "Question",
            name: "Can reagents and consumables be tracked through distributors?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - reagent and consumable supply is tracked per distributor, so the OEM sees demand across the channel.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "dms-automotive-aftermarket-oem",
    type: "industry",
    parentProduct: "dms",
    eyebrow: "OEM Industry · Automotive & Aftermarket",
    title:
      "Distributor Management for Automotive Components & Aftermarket OEMs",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "Automotive component OEMs distribute through a multi-tier channel — distributor to retailer to garage — with high SKU counts, warranty claims coming back from the field, and a constant need to see secondary sales downstream. An OEM DMS brings that whole chain into view.",
    sections: [
      {
        type: "list",
        h: "The channel challenge in automotive & aftermarket",
        items: [
          {
            b: "Multi-tier distribution —",
            t: "distributor, retailer and workshop, each a step further from the OEM.",
          },
          {
            b: "High SKU count",
            t: "across parts and variants.",
          },
          {
            b: "Warranty claims",
            t: "raised from the field that need validation and tracking.",
          },
          {
            b: "Secondary-sales visibility —",
            t: "knowing what actually sells through, not just what shipped to the distributor.",
          },
        ],
      },
      {
        type: "list",
        h: "Before sale to after sale, on one system",
        items: [
          {
            b: "Before sale —",
            t: "distributors and dealers book orders and schemes; the OEM sees demand.",
          },
          {
            b: "Sale & warranty —",
            t: "batch/serial data supports warranty, and dealer and retailer stock plus secondary sales are visible to the OEM.",
          },
          {
            b: "After sale —",
            t: "a warranty claim or query is assigned to the right distributor on an SLA, with escalation.",
          },
        ],
      },
      {
        type: "list",
        h: "What automotive OEMs get",
        items: [
          "Secondary sales and downstream stock visibility.",
          "A tracked warranty-claim workflow from the field.",
          "Scheme and commission management across tiers.",
          "Analytics on sell-through by product and territory.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we see secondary sales through the distributor to retailers?",
        a: "Yes — the multi-tier model gives the OEM visibility of downstream stock and secondary sales, not just primary dispatch to the distributor.",
      },
      {
        q: "Are warranty claims from the field tracked?",
        a: "Yes — warranty claims are raised, validated and tracked through the channel with a full history.",
      },
    ],
    related: [
      {
        title: "Distributor management for OEMs: the full channel lifecycle",
        href: "Guide-OEMDistributor.dc.html",
      },
      {
        title: "Distributor management for electrical & electronics OEMs",
        href: "DMS-Electrical.dc.html",
      },
      {
        title: "DMS — distributor management for OEMs",
        href: "DMS.dc.html",
      },
    ],
    cta: {
      title: "See past the distributor to the whole chain",
      body: "Tell us your tiers and warranty-claim flow, and we'll map the channel with you.",
      productHref: "DMS.dc.html",
      productLabel: "Explore DMS",
    },
    seo: {
      metaTitle:
        "Distributor Management for Automotive Components & Aftermarket OEMs | DMS by Svasamm",
      metaDescription:
        "Distributor management for automotive component &amp; aftermarket OEMs: multi-tier secondary-sales visibility, field warranty-claim tracking, scheme &amp; commission management, and SLA service.",
      canonical:
        "https://svasamm.com/pages/dms-automotive-aftermarket-oem.html",
      ogType: "website",
      ogTitle:
        "Distributor Management for Automotive Components &amp; Aftermarket OEMs",
      ogDescription:
        "Distributor management for automotive component &amp; aftermarket OEMs: multi-tier secondary-sales visibility, field warranty-claim tracking, scheme &amp; commission management, and SLA service.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Distributor Management for Automotive Components & Aftermarket OEMs",
        serviceType: "Distributor Management Software for OEMs",
        description:
          "Distributor management for automotive component & aftermarket OEMs: multi-tier secondary-sales visibility, field warranty-claim tracking, scheme & commission management, and SLA service.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "Automotive components & aftermarket OEMs",
        },
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
            name: "DMS",
            item: "https://svasamm.com/pages/dms.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Automotive & Aftermarket OEMs",
            item: "https://svasamm.com/pages/dms-automotive-aftermarket-oem.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can we see secondary sales through the distributor to retailers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - the multi-tier model gives the OEM visibility of downstream stock and secondary sales, not just primary dispatch to the distributor.",
            },
          },
          {
            "@type": "Question",
            name: "Are warranty claims from the field tracked?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - warranty claims are raised, validated and tracked through the channel with a full history.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "dms-hvac-equipment-oem",
    type: "industry",
    parentProduct: "dms",
    eyebrow: "OEM Industry · HVAC & Equipment",
    title: "Distributor Management for HVAC & Industrial Equipment OEMs",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "OEMs making chillers, compressors, pumps and cooling systems sell heavy equipment through a dealer network that installs it, holds spares, and carries AMC and service contracts across a long service life. An OEM DMS keeps that installed base and service channel visible.",
    sections: [
      {
        type: "list",
        h: "The channel challenge in HVAC & industrial equipment",
        items: [
          {
            b: "Installation by dealers —",
            t: "heavy equipment commissioned in the field.",
          },
          {
            b: "AMC & service contracts",
            t: "that recur and drive aftermarket revenue.",
          },
          {
            b: "Spare parts",
            t: "held and sold through the dealer network.",
          },
          {
            b: "Long life & seasonality —",
            t: "installed base runs for years with seasonal service peaks.",
          },
        ],
      },
      {
        type: "list",
        h: "Before sale to after sale, on one system",
        items: [
          {
            b: "Before sale —",
            t: "dealers book equipment deals; the OEM sees the pipeline.",
          },
          {
            b: "Sale & install —",
            t: "commissioning is logged against a serial-numbered unit with warranty, and dealer spares stock and machine aging are visible to the OEM.",
          },
          {
            b: "After sale —",
            t: "a breakdown or service query is assigned to the right dealer on an SLA, with escalation.",
          },
        ],
      },
      {
        type: "list",
        h: "What HVAC & equipment OEMs get",
        items: [
          "Installed base with warranty and AMC-renewal visibility.",
          "Spares demand across the dealer network.",
          "SLA-backed breakdown and service response.",
          "Analytics on installs, aging and service load.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can AMC and service contracts be tracked and renewed?",
        a: "Yes — AMC and service contracts are tracked against each installed unit so renewals are visible and not missed.",
      },
      {
        q: "Can spare-part stock be tracked through dealers?",
        a: "Yes — dealer spares stock is visible to the OEM, with demand tracked across the network.",
      },
    ],
    related: [
      {
        title: "Distributor management for OEMs: the full channel lifecycle",
        href: "Guide-OEMDistributor.dc.html",
      },
      {
        title: "Distributor management for packaging machinery OEMs",
        href: "DMS-PackagingMachinery.dc.html",
      },
      {
        title: "DMS — distributor management for OEMs",
        href: "DMS.dc.html",
      },
    ],
    cta: {
      title: "Installed base, spares and AMC in one view",
      body: "Bring your dealer and AMC model, and we'll map install-to-service with you.",
      productHref: "DMS.dc.html",
      productLabel: "Explore DMS",
    },
    seo: {
      metaTitle:
        "Distributor Management for HVAC & Industrial Equipment OEMs | DMS by Svasamm",
      metaDescription:
        "Distributor management for HVAC &amp; equipment OEMs (chillers, compressors, pumps): commissioning, serial/warranty, dealer spares stock, AMC renewals, and SLA-backed breakdown service.",
      canonical: "https://svasamm.com/pages/dms-hvac-equipment-oem.html",
      ogType: "website",
      ogTitle:
        "Distributor Management for HVAC &amp; Industrial Equipment OEMs",
      ogDescription:
        "Distributor management for HVAC &amp; equipment OEMs (chillers, compressors, pumps): commissioning, serial/warranty, dealer spares stock, AMC renewals, and SLA-backed breakdown service.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Distributor Management for HVAC & Industrial Equipment OEMs",
        serviceType: "Distributor Management Software for OEMs",
        description:
          "Distributor management for HVAC & equipment OEMs (chillers, compressors, pumps): commissioning, serial/warranty, dealer spares stock, AMC renewals, and SLA-backed breakdown service.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "HVAC & industrial equipment OEMs",
        },
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
            name: "DMS",
            item: "https://svasamm.com/pages/dms.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "HVAC & Equipment OEMs",
            item: "https://svasamm.com/pages/dms-hvac-equipment-oem.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can AMC and service contracts be tracked and renewed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - AMC and service contracts are tracked against each installed unit so renewals are visible and not missed.",
            },
          },
          {
            "@type": "Question",
            name: "Can spare-part stock be tracked through dealers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - dealer spares stock is visible to the OEM, with demand tracked across the network.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "erp-implementation-guide",
    type: "guide",
    parentProduct: "erp",
    eyebrow: "ERP Guide",
    title: "ERP Implementation for Indian Businesses: A Practical Guide",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "An ERP replaces the patchwork of spreadsheets, Tally and disconnected tools with one system of record for finance, inventory, procurement and sales. The software matters, but implementation is what decides success or failure. This guide covers when you actually need an ERP, the phases of a rollout, and the mistakes that sink projects.",
    sections: [
      {
        type: "list",
        h: "Signs you have outgrown spreadsheets and Tally",
        items: [
          {
            b: "Numbers never match —",
            t: "stock, sales and accounts live in different files and disagree.",
          },
          {
            b: "Re-keying everywhere —",
            t: "the same order typed into three systems.",
          },
          {
            b: "No live view —",
            t: "you find out about a stockout or an overdue payment weeks late.",
          },
          {
            b: "GST is a scramble —",
            t: "returns pulled together by hand each month.",
          },
        ],
      },
      {
        type: "list",
        h: "The phases of an ERP rollout",
        items: [
          {
            b: "Discovery —",
            t: "map your real processes before touching software.",
          },
          {
            b: "Configuration —",
            t: "chart of accounts, warehouses, tax, roles.",
          },
          {
            b: "Data migration —",
            t: "clean masters and opening balances in.",
          },
          {
            b: "Pilot & training —",
            t: "one cycle end to end with real users.",
          },
          {
            b: "Go-live & stabilise —",
            t: "cut over, then tighten.",
          },
        ],
      },
      {
        type: "note",
        text: "Phase your rollout by module (finance first, then inventory, then manufacturing) rather than switching everything on at once — it de-risks go-live and gets value sooner.",
      },
      {
        type: "list",
        h: "What to standardise before you configure",
        items: [
          "A single chart of accounts and cost-centre structure.",
          "Item and customer/supplier master data, de-duplicated.",
          "Tax setup (GST rates, HSN, e-invoice thresholds).",
          "Approval and role matrix — who can do what.",
        ],
      },
      {
        type: "list",
        h: "Common mistakes that sink ERP projects",
        items: [
          {
            b: "Customising too early —",
            t: "automating a broken process instead of fixing it.",
          },
          {
            b: "Dirty data —",
            t: "migrating years of duplicates and errors.",
          },
          {
            b: "No process owner —",
            t: "software with nobody accountable for the workflow.",
          },
          {
            b: "Big-bang go-live —",
            t: "everything at once, no fallback.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "When does a business need an ERP instead of Tally and spreadsheets?",
        a: "When data lives in disconnected tools that disagree, the same information is re-keyed across systems, and you lack a live view of stock, orders and cash — that fragmentation is the signal to move to a single system of record.",
      },
      {
        q: "How long does an ERP implementation take?",
        a: "It depends on scope and data quality, but a phased rollout (finance first, then inventory, then manufacturing) de-risks go-live and delivers value sooner than switching everything on at once.",
      },
      {
        q: "What is the biggest reason ERP projects fail?",
        a: "Usually people and process, not software — customising a broken process too early, migrating dirty data, or having no accountable process owner.",
      },
    ],
    related: [
      {
        title: "ERP for manufacturing businesses",
        href: "ERP-Manufacturing.dc.html",
      },
      {
        title: "ERP for trading & distribution",
        href: "ERP-Trading.dc.html",
      },
      {
        title: "ERP System — overview",
        href: "ERP.dc.html",
      },
    ],
    cta: {
      title: "Plan an ERP rollout that actually lands",
      body: "Tell us your current tools and pain points, and we'll map a phased implementation with you.",
      productHref: "ERP.dc.html",
      productLabel: "Explore ERP",
    },
    seo: {
      metaTitle:
        "ERP Implementation for Indian Businesses: A Practical Guide | Svasamm",
      metaDescription:
        "When you need an ERP, the phases of a rollout, what to standardise first, and the mistakes that sink ERP projects - a practical guide for Indian SMEs and mid-market.",
      canonical: "https://svasamm.com/pages/erp-implementation-guide.html",
      ogType: "article",
      ogTitle: "ERP Implementation for Indian Businesses: A Practical Guide",
      ogDescription:
        "When you need an ERP, the phases of a rollout, what to standardise first, and the mistakes that sink ERP projects - a practical guide for Indian SMEs and mid-market.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "ERP Implementation for Indian Businesses: A Practical Guide",
        description:
          "When you need an ERP, the phases of a rollout, what to standardise first, and the mistakes that sink ERP projects - a practical guide for Indian SMEs and mid-market.",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "Svasamm Research Pvt Ltd",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Svasamm",
        },
        datePublished: "2026-07-17",
        dateModified: "2026-07-17",
        mainEntityOfPage:
          "https://svasamm.com/pages/erp-implementation-guide.html",
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
            name: "ERP System",
            item: "https://svasamm.com/pages/erp.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "ERP Implementation for Indian Businesses: A Practical Guide",
            item: "https://svasamm.com/pages/erp-implementation-guide.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "When does a business need an ERP instead of Tally and spreadsheets?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "When data lives in disconnected tools that disagree, the same information is re-keyed across systems, and you lack a live view of stock, orders and cash.",
            },
          },
          {
            "@type": "Question",
            name: "How long does an ERP implementation take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It depends on scope and data quality, but a phased rollout (finance first, then inventory, then manufacturing) de-risks go-live and delivers value sooner.",
            },
          },
          {
            "@type": "Question",
            name: "What is the biggest reason ERP projects fail?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Usually people and process, not software - customising a broken process too early, migrating dirty data, or having no accountable process owner.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "erp-for-manufacturing",
    type: "industry",
    parentProduct: "erp",
    eyebrow: "ERP by Industry · Manufacturing",
    title: "ERP for Manufacturing Businesses",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "Manufacturers run on a chain that generic accounting can’t see: bill of materials, work orders, shop-floor consumption and costing. An ERP built for manufacturing ties the floor to inventory and the ledger so you know true cost per unit.",
    sections: [
      {
        type: "list",
        h: "What manufacturers need from an ERP",
        items: [
          {
            b: "Bills of material & routings",
            t: "for every product and variant.",
          },
          {
            b: "Work orders & production planning",
            t: "tied to stock availability.",
          },
          {
            b: "Material consumption & WIP",
            t: "tracked as batches move through stages.",
          },
          {
            b: "Costing —",
            t: "material, labour and overhead rolled into cost per unit.",
          },
          {
            b: "Quality checks",
            t: "at inward, in-process and dispatch.",
          },
        ],
      },
      {
        type: "p",
        h: "One connected flow",
        text: "Sales order to production plan to purchase of shortfall materials to work order to finished goods to dispatch and invoice — with GST, e-invoice and e-way bill handled at the billing end. Every step posts to inventory and accounts, so cost and margin are visible per order.",
      },
      {
        type: "list",
        h: "What manufacturers get",
        items: [
          "True cost per unit, not a guess.",
          "Live stock of raw material, WIP and finished goods.",
          "Production planned against real availability.",
          "GST-compliant billing end to end.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does the ERP handle bills of material and work orders?",
        a: "Yes — BOMs, routings, work orders and production planning connect the shop floor to inventory and costing.",
      },
      {
        q: "Can it calculate true cost per unit?",
        a: "Yes — material, labour and overhead are rolled into per-unit cost, so you see real margin per order.",
      },
    ],
    related: [
      {
        title: "ERP implementation guide",
        href: "Guide-ERPImplementation.dc.html",
      },
      {
        title: "ERP for trading & distribution",
        href: "ERP-Trading.dc.html",
      },
      {
        title: "ERP System — overview",
        href: "ERP.dc.html",
      },
    ],
    cta: {
      title: "Connect your shop floor to your books",
      body: "Bring a product BOM and a month of orders, and we'll map production-to-costing with you.",
      productHref: "ERP.dc.html",
      productLabel: "Explore ERP",
    },
    seo: {
      metaTitle: "ERP for Manufacturing Businesses | Svasamm",
      metaDescription:
        "ERP for manufacturers: bills of material, work orders, production planning, material consumption and true cost per unit, with GST-compliant billing end to end.",
      canonical: "https://svasamm.com/pages/erp-for-manufacturing.html",
      ogType: "website",
      ogTitle: "ERP for Manufacturing Businesses",
      ogDescription:
        "ERP for manufacturers: bills of material, work orders, production planning, material consumption and true cost per unit, with GST-compliant billing end to end.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "ERP for Manufacturing Businesses",
        serviceType: "ERP System Software",
        description:
          "ERP for manufacturers: bills of material, work orders, production planning, material consumption and true cost per unit, with GST-compliant billing end to end.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "Manufacturing businesses",
        },
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
            name: "ERP System",
            item: "https://svasamm.com/pages/erp.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "ERP for Manufacturing Businesses",
            item: "https://svasamm.com/pages/erp-for-manufacturing.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Does the ERP handle bills of material and work orders?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - BOMs, routings, work orders and production planning connect the shop floor to inventory and costing.",
            },
          },
          {
            "@type": "Question",
            name: "Can it calculate true cost per unit?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - material, labour and overhead are rolled into per-unit cost, so you see real margin per order.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "erp-for-trading-distribution",
    type: "industry",
    parentProduct: "erp",
    eyebrow: "ERP by Industry · Trading & Distribution",
    title: "ERP for Trading & Distribution Businesses",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "Traders and distributors live on stock accuracy, fast billing and tight receivables. An ERP gives them multi-warehouse inventory, quotation-to-invoice speed and a real handle on outstanding money.",
    sections: [
      {
        type: "list",
        h: "What trading & distribution businesses need",
        items: [
          {
            b: "Multi-warehouse stock",
            t: "with batches, serials and valuation.",
          },
          {
            b: "Quotation → order → invoice",
            t: "without re-keying.",
          },
          {
            b: "Pricing & discount rules",
            t: "by customer and quantity.",
          },
          {
            b: "Receivables & credit limits",
            t: "tracked to the day.",
          },
          {
            b: "GST, e-invoice & e-way bill",
            t: "built in.",
          },
        ],
      },
      {
        type: "p",
        h: "Stock and cash, under control",
        text: "Every dispatch updates stock and books the sale; every receipt clears the ledger. Reorder levels flag what to buy, and customer-wise outstanding and credit limits keep cash from leaking.",
      },
      {
        type: "list",
        h: "What traders get",
        items: [
          "Accurate multi-location stock in real time.",
          "Faster billing with fewer errors.",
          "Receivables and credit under control.",
          "GST compliance without month-end panic.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can the ERP manage multiple warehouses?",
        a: "Yes — multi-warehouse stock with batches, serials and valuation, live with every transaction.",
      },
      {
        q: "Does it track customer credit limits and outstanding?",
        a: "Yes — customer-wise receivables, credit limits and statements are tracked to the day.",
      },
    ],
    related: [
      {
        title: "ERP implementation guide",
        href: "Guide-ERPImplementation.dc.html",
      },
      {
        title: "ERP for manufacturing businesses",
        href: "ERP-Manufacturing.dc.html",
      },
      {
        title: "ERP System — overview",
        href: "ERP.dc.html",
      },
    ],
    cta: {
      title: "Get stock and receivables under control",
      body: "Tell us your warehouses and billing volume, and we'll map the flow with you.",
      productHref: "ERP.dc.html",
      productLabel: "Explore ERP",
    },
    seo: {
      metaTitle: "ERP for Trading & Distribution Businesses | Svasamm",
      metaDescription:
        "ERP for traders and distributors: multi-warehouse inventory, quotation-to-invoice, pricing rules, receivables and credit limits, with GST, e-invoice and e-way bill built in.",
      canonical: "https://svasamm.com/pages/erp-for-trading-distribution.html",
      ogType: "website",
      ogTitle: "ERP for Trading &amp; Distribution Businesses",
      ogDescription:
        "ERP for traders and distributors: multi-warehouse inventory, quotation-to-invoice, pricing rules, receivables and credit limits, with GST, e-invoice and e-way bill built in.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "ERP for Trading & Distribution Businesses",
        serviceType: "ERP System Software",
        description:
          "ERP for traders and distributors: multi-warehouse inventory, quotation-to-invoice, pricing rules, receivables and credit limits, with GST, e-invoice and e-way bill built in.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "Trading & distribution businesses",
        },
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
            name: "ERP System",
            item: "https://svasamm.com/pages/erp.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "ERP for Trading & Distribution Businesses",
            item: "https://svasamm.com/pages/erp-for-trading-distribution.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can the ERP manage multiple warehouses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - multi-warehouse stock with batches, serials and valuation, live with every transaction.",
            },
          },
          {
            "@type": "Question",
            name: "Does it track customer credit limits and outstanding?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - customer-wise receivables, credit limits and statements are tracked to the day.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "erp-for-services-firms",
    type: "industry",
    parentProduct: "erp",
    eyebrow: "ERP by Industry · Services",
    title: "ERP for Services & Project-Based Firms",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "Services and project firms don’t sell stock — they sell time and deliverables. Their ERP has to track projects, timesheets, billing milestones and project profitability, not just inventory.",
    sections: [
      {
        type: "list",
        h: "What services firms need",
        items: [
          {
            b: "Projects & tasks",
            t: "with budgets and timelines.",
          },
          {
            b: "Timesheets",
            t: "feeding cost and billing.",
          },
          {
            b: "Milestone & retainer billing",
            t: "with GST.",
          },
          {
            b: "Project profitability",
            t: "— revenue vs cost per project.",
          },
          {
            b: "Receivables",
            t: "tied to milestones.",
          },
        ],
      },
      {
        type: "p",
        h: "From project to invoice",
        text: "Estimate a project, staff it, log time and expenses against it, bill by milestone or retainer, and see profitability per project and per client — all in one system with compliant invoicing.",
      },
      {
        type: "list",
        h: "What services firms get",
        items: [
          "Real project profitability, not just top-line revenue.",
          "Time and expenses captured against the right project.",
          "Milestone billing without spreadsheets.",
          "A clean view of receivables by client.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can the ERP track project profitability?",
        a: "Yes — revenue, time, expenses and cost are tracked per project so you see real profitability, not just billings.",
      },
      {
        q: "Does it support milestone and retainer billing?",
        a: "Yes — milestone and retainer billing with GST-compliant invoices are supported, tied to receivables.",
      },
    ],
    related: [
      {
        title: "ERP implementation guide",
        href: "Guide-ERPImplementation.dc.html",
      },
      {
        title: "ERP for trading & distribution",
        href: "ERP-Trading.dc.html",
      },
      {
        title: "ERP System — overview",
        href: "ERP.dc.html",
      },
    ],
    cta: {
      title: "See profit per project, not just revenue",
      body: "Bring a typical project structure, and we'll map estimate-to-invoice with you.",
      productHref: "ERP.dc.html",
      productLabel: "Explore ERP",
    },
    seo: {
      metaTitle: "ERP for Services & Project-Based Firms | Svasamm",
      metaDescription:
        "ERP for services and project firms: projects, timesheets, milestone and retainer billing, and true project profitability - with GST-compliant invoicing.",
      canonical: "https://svasamm.com/pages/erp-for-services-firms.html",
      ogType: "website",
      ogTitle: "ERP for Services &amp; Project-Based Firms",
      ogDescription:
        "ERP for services and project firms: projects, timesheets, milestone and retainer billing, and true project profitability - with GST-compliant invoicing.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "ERP for Services & Project-Based Firms",
        serviceType: "ERP System Software",
        description:
          "ERP for services and project firms: projects, timesheets, milestone and retainer billing, and true project profitability - with GST-compliant invoicing.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "Services & project-based firms",
        },
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
            name: "ERP System",
            item: "https://svasamm.com/pages/erp.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "ERP for Services & Project-Based Firms",
            item: "https://svasamm.com/pages/erp-for-services-firms.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can the ERP track project profitability?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - revenue, time, expenses and cost are tracked per project so you see real profitability, not just billings.",
            },
          },
          {
            "@type": "Question",
            name: "Does it support milestone and retainer billing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - milestone and retainer billing with GST-compliant invoices are supported.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "payroll-statutory-compliance-india",
    type: "guide",
    parentProduct: "hrms",
    eyebrow: "HR Guide",
    title: "Payroll & Statutory Compliance in India: A Practical Guide",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "Running payroll in India is more than paying salaries — it’s PF, ESI, professional tax, TDS and the returns that go with each, on deadlines that don’t move. This guide explains the core statutory components and how an HRMS keeps them right.",
    sections: [
      {
        type: "note",
        h: "The core statutory components",
        text: "This is general information, not tax or legal advice. Thresholds and rates change — confirm the current position for your establishment with a qualified professional.",
      },
      {
        type: "list",
        items: [
          {
            b: "Provident Fund (PF) —",
            t: "employee and employer contributions, filed with EPFO.",
          },
          {
            b: "ESI —",
            t: "for employees below the wage threshold, filed with ESIC.",
          },
          {
            b: "Professional Tax —",
            t: "state-specific, with its own slabs and returns.",
          },
          {
            b: "TDS on salary —",
            t: "deducted per the income-tax slabs and deposited monthly.",
          },
        ],
      },
      {
        type: "list",
        h: "Where payroll goes wrong",
        items: [
          {
            b: "Attendance not tied to pay —",
            t: "manual entry causes errors and disputes.",
          },
          {
            b: "Missed deadlines —",
            t: "late PF/ESI/TDS deposits attract penalties.",
          },
          {
            b: "Wrong slabs —",
            t: "professional tax and TDS mis-computed.",
          },
          {
            b: "No audit trail —",
            t: "payslips and returns not reconstructable.",
          },
        ],
      },
      {
        type: "p",
        h: "How an HRMS keeps it right",
        text: "Salary structures compute PF, ESI, PT and TDS automatically; attendance and shifts flow straight into the payroll run; and the reports needed for filing come out of the same system — with payslips and an audit trail for every cycle.",
      },
    ],
    faqs: [
      {
        q: "What statutory deductions apply to Indian payroll?",
        a: "Typically Provident Fund (PF), ESI (below the wage threshold), state professional tax, and TDS on salary — each with its own contribution rules and return deadlines.",
      },
      {
        q: "How does an HRMS help with payroll compliance?",
        a: "It computes PF, ESI, PT and TDS from salary structures, pulls attendance into the run, and produces the payslips, returns and audit trail needed for filing.",
      },
    ],
    related: [
      {
        title: "HRMS for manufacturing",
        href: "HRMS-Manufacturing.dc.html",
      },
      {
        title: "HRMS for hospitals & clinics",
        href: "HRMS-Healthcare.dc.html",
      },
      {
        title: "HRMS — overview",
        href: "HRMS.dc.html",
      },
    ],
    cta: {
      title: "Run compliant payroll without the deadline scramble",
      body: "Bring a salary structure and headcount, and we'll set up a sample cycle with you.",
      productHref: "HRMS.dc.html",
      productLabel: "Explore HRMS",
    },
    seo: {
      metaTitle:
        "Payroll & Statutory Compliance in India: A Practical Guide | Svasamm",
      metaDescription:
        "PF, ESI, professional tax and TDS explained for Indian payroll - the core statutory components, where payroll goes wrong, and how an HRMS keeps it compliant.",
      canonical:
        "https://svasamm.com/pages/payroll-statutory-compliance-india.html",
      ogType: "article",
      ogTitle: "Payroll &amp; Statutory Compliance in India: A Practical Guide",
      ogDescription:
        "PF, ESI, professional tax and TDS explained for Indian payroll - the core statutory components, where payroll goes wrong, and how an HRMS keeps it compliant.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Payroll & Statutory Compliance in India: A Practical Guide",
        description:
          "PF, ESI, professional tax and TDS explained for Indian payroll - the core statutory components, where payroll goes wrong, and how an HRMS keeps it compliant.",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "Svasamm Research Pvt Ltd",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Svasamm",
        },
        datePublished: "2026-07-17",
        dateModified: "2026-07-17",
        mainEntityOfPage:
          "https://svasamm.com/pages/payroll-statutory-compliance-india.html",
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
            name: "HRMS",
            item: "https://svasamm.com/pages/hrms.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Payroll & Statutory Compliance in India: A Practical Guide",
            item: "https://svasamm.com/pages/payroll-statutory-compliance-india.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What statutory deductions apply to Indian payroll?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Typically Provident Fund (PF), ESI (below the wage threshold), state professional tax, and TDS on salary - each with its own rules and deadlines.",
            },
          },
          {
            "@type": "Question",
            name: "How does an HRMS help with payroll compliance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It computes PF, ESI, PT and TDS from salary structures, pulls attendance into the run, and produces the payslips, returns and audit trail needed for filing.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "hrms-for-manufacturing",
    type: "industry",
    parentProduct: "hrms",
    eyebrow: "HRMS by Industry · Manufacturing",
    title: "HRMS for Manufacturing",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "Manufacturing HR runs on shifts, overtime and a mix of permanent and contract labour. An HRMS built for the floor ties biometric attendance and shift rosters straight to compliant payroll.",
    sections: [
      {
        type: "list",
        h: "What manufacturers need from HRMS",
        items: [
          {
            b: "Shift rosters & overtime",
            t: "across lines and plants.",
          },
          {
            b: "Biometric / geo attendance",
            t: "feeding payroll directly.",
          },
          {
            b: "Contract-labour tracking",
            t: "alongside permanent staff.",
          },
          {
            b: "PF/ESI/PT/TDS payroll",
            t: "computed automatically.",
          },
          {
            b: "Multi-plant",
            t: "headcount and reporting.",
          },
        ],
      },
      {
        type: "p",
        h: "Attendance to payslip, one flow",
        text: "Shifts and biometric check-in produce hours and overtime; payroll turns them into compliant pay with statutory deductions; employees self-serve payslips and leave — across every plant.",
      },
      {
        type: "list",
        h: "What manufacturers get",
        items: [
          "Accurate shift and overtime pay.",
          "Compliant statutory deductions.",
          "Contract and permanent labour in one view.",
          "Multi-plant headcount visibility.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does the HRMS handle shifts and overtime?",
        a: "Yes — shift rosters, biometric/geo check-in and overtime feed straight into payroll.",
      },
      {
        q: "Can it track contract labour alongside permanent staff?",
        a: "Yes — contract and permanent workers are managed together, with compliant payroll for each.",
      },
    ],
    related: [
      {
        title: "Payroll & compliance guide",
        href: "Guide-PayrollCompliance.dc.html",
      },
      {
        title: "HRMS for multi-location retail",
        href: "HRMS-Retail.dc.html",
      },
      {
        title: "HRMS — overview",
        href: "HRMS.dc.html",
      },
    ],
    cta: {
      title: "Tie the floor to compliant payroll",
      body: "Tell us your shift and labour mix, and we'll map attendance-to-payroll with you.",
      productHref: "HRMS.dc.html",
      productLabel: "Explore HRMS",
    },
    seo: {
      metaTitle: "HRMS for Manufacturing | Svasamm",
      metaDescription:
        "HRMS for manufacturers: shift rosters and overtime, biometric attendance feeding payroll, contract-labour tracking, and compliant PF/ESI/PT/TDS payroll across plants.",
      canonical: "https://svasamm.com/pages/hrms-for-manufacturing.html",
      ogType: "website",
      ogTitle: "HRMS for Manufacturing",
      ogDescription:
        "HRMS for manufacturers: shift rosters and overtime, biometric attendance feeding payroll, contract-labour tracking, and compliant PF/ESI/PT/TDS payroll across plants.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "HRMS for Manufacturing",
        serviceType: "HRMS Software",
        description:
          "HRMS for manufacturers: shift rosters and overtime, biometric attendance feeding payroll, contract-labour tracking, and compliant PF/ESI/PT/TDS payroll across plants.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "Manufacturing businesses",
        },
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
            name: "HRMS",
            item: "https://svasamm.com/pages/hrms.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "HRMS for Manufacturing",
            item: "https://svasamm.com/pages/hrms-for-manufacturing.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Does the HRMS handle shifts and overtime?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - shift rosters, biometric/geo check-in and overtime feed straight into payroll.",
            },
          },
          {
            "@type": "Question",
            name: "Can it track contract labour alongside permanent staff?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - contract and permanent workers are managed together, with compliant payroll for each.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "hrms-for-retail",
    type: "industry",
    parentProduct: "hrms",
    eyebrow: "HRMS by Industry · Retail",
    title: "HRMS for Multi-Location Retail",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "Retail chains manage a dispersed, high-churn workforce across many stores. An HRMS gives them store-wise rosters, fast onboarding and self-service that works from a phone.",
    sections: [
      {
        type: "list",
        h: "What multi-location retail needs",
        items: [
          {
            b: "Store-wise rosters & attendance",
            t: "with geo check-in.",
          },
          {
            b: "Fast onboarding",
            t: "for high-turnover roles.",
          },
          {
            b: "Centralised, location-aware payroll",
            t: "with state PT.",
          },
          {
            b: "Leave & holiday calendars",
            t: "per store/state.",
          },
          {
            b: "Mobile self-service",
            t: "for a deskless workforce.",
          },
        ],
      },
      {
        type: "p",
        h: "Every store, one system",
        text: "Each store runs its roster and attendance; head office sees consolidated headcount and runs one compliant payroll; staff apply for leave and get payslips from their phones.",
      },
      {
        type: "list",
        h: "What retail chains get",
        items: [
          "Store-wise attendance and rosters.",
          "Onboarding that keeps up with churn.",
          "One payroll across states, with correct PT.",
          "Self-service for a deskless workforce.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can staff use the HRMS from a phone?",
        a: "Yes — mobile self-service lets a deskless workforce check in, apply for leave and get payslips from any device.",
      },
      {
        q: "Does it handle payroll across multiple states?",
        a: "Yes — location-aware payroll applies the correct state professional tax and consolidates across stores.",
      },
    ],
    related: [
      {
        title: "Payroll & compliance guide",
        href: "Guide-PayrollCompliance.dc.html",
      },
      {
        title: "HRMS for manufacturing",
        href: "HRMS-Manufacturing.dc.html",
      },
      {
        title: "HRMS — overview",
        href: "HRMS.dc.html",
      },
    ],
    cta: {
      title: "Manage a dispersed retail workforce",
      body: "Tell us your store count and states, and we'll map rosters-to-payroll with you.",
      productHref: "HRMS.dc.html",
      productLabel: "Explore HRMS",
    },
    seo: {
      metaTitle: "HRMS for Multi-Location Retail | Svasamm",
      metaDescription:
        "HRMS for retail chains: store-wise rosters and geo attendance, fast onboarding for high churn, location-aware payroll with state PT, and mobile self-service.",
      canonical: "https://svasamm.com/pages/hrms-for-retail.html",
      ogType: "website",
      ogTitle: "HRMS for Multi-Location Retail",
      ogDescription:
        "HRMS for retail chains: store-wise rosters and geo attendance, fast onboarding for high churn, location-aware payroll with state PT, and mobile self-service.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "HRMS for Multi-Location Retail",
        serviceType: "HRMS Software",
        description:
          "HRMS for retail chains: store-wise rosters and geo attendance, fast onboarding for high churn, location-aware payroll with state PT, and mobile self-service.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "Multi-location retail businesses",
        },
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
            name: "HRMS",
            item: "https://svasamm.com/pages/hrms.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "HRMS for Multi-Location Retail",
            item: "https://svasamm.com/pages/hrms-for-retail.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can staff use the HRMS from a phone?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - mobile self-service lets a deskless workforce check in, apply for leave and get payslips from any device.",
            },
          },
          {
            "@type": "Question",
            name: "Does it handle payroll across multiple states?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - location-aware payroll applies the correct state professional tax and consolidates across stores.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "hrms-for-hospitals-clinics",
    type: "industry",
    parentProduct: "hrms",
    eyebrow: "HRMS by Industry · Healthcare",
    title: "HRMS for Hospitals & Clinics",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "Hospitals run 24/7 on rotating shifts across clinical and support staff, with credentials that must stay current. An HRMS keeps rosters, attendance and compliant payroll straight around the clock.",
    sections: [
      {
        type: "list",
        h: "What hospitals & clinics need",
        items: [
          {
            b: "24/7 rotating shift rosters",
            t: "across departments.",
          },
          {
            b: "Attendance & overtime",
            t: "for round-the-clock staffing.",
          },
          {
            b: "Credential / license tracking",
            t: "with expiry reminders.",
          },
          {
            b: "Compliant payroll",
            t: "with PF/ESI/PT/TDS.",
          },
          {
            b: "Leave management",
            t: "that protects coverage.",
          },
        ],
      },
      {
        type: "p",
        h: "Around-the-clock staffing, handled",
        text: "Rotating rosters cover every shift; attendance and overtime feed payroll; credential expiries are flagged before they lapse; and leave is approved without leaving a ward short.",
      },
      {
        type: "list",
        h: "What hospitals get",
        items: [
          "Reliable 24/7 shift coverage.",
          "Compliant payroll for clinical and support staff.",
          "Credential expiry never missed.",
          "Leave that protects coverage.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can the HRMS manage 24/7 rotating shifts?",
        a: "Yes — rotating rosters across departments with attendance and overtime feeding payroll.",
      },
      {
        q: "Does it track staff credentials and licenses?",
        a: "Yes — credential and license expiries are tracked with reminders so they don’t lapse.",
      },
    ],
    related: [
      {
        title: "Payroll & compliance guide",
        href: "Guide-PayrollCompliance.dc.html",
      },
      {
        title: "HRMS for multi-location retail",
        href: "HRMS-Retail.dc.html",
      },
      {
        title: "HRMS — overview",
        href: "HRMS.dc.html",
      },
    ],
    cta: {
      title: "Keep round-the-clock staffing compliant",
      body: "Tell us your departments and shift pattern, and we'll map rostering-to-payroll with you.",
      productHref: "HRMS.dc.html",
      productLabel: "Explore HRMS",
    },
    seo: {
      metaTitle: "HRMS for Hospitals & Clinics | Svasamm",
      metaDescription:
        "HRMS for hospitals and clinics: 24/7 rotating shift rosters, attendance and overtime, credential/license expiry tracking, and compliant payroll for clinical and support staff.",
      canonical: "https://svasamm.com/pages/hrms-for-hospitals-clinics.html",
      ogType: "website",
      ogTitle: "HRMS for Hospitals &amp; Clinics",
      ogDescription:
        "HRMS for hospitals and clinics: 24/7 rotating shift rosters, attendance and overtime, credential/license expiry tracking, and compliant payroll for clinical and support staff.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "HRMS for Hospitals & Clinics",
        serviceType: "HRMS Software",
        description:
          "HRMS for hospitals and clinics: 24/7 rotating shift rosters, attendance and overtime, credential/license expiry tracking, and compliant payroll for clinical and support staff.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "Hospitals & clinics",
        },
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
            name: "HRMS",
            item: "https://svasamm.com/pages/hrms.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "HRMS for Hospitals & Clinics",
            item: "https://svasamm.com/pages/hrms-for-hospitals-clinics.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can the HRMS manage 24/7 rotating shifts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - rotating rosters across departments with attendance and overtime feeding payroll.",
            },
          },
          {
            "@type": "Question",
            name: "Does it track staff credentials and licenses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - credential and license expiries are tracked with reminders so they do not lapse.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "sales-pipeline-guide",
    type: "guide",
    parentProduct: "crm",
    eyebrow: "CRM Guide",
    title: "Building a Sales Pipeline That Actually Closes",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "A CRM is only as good as the pipeline you run in it. This guide covers how to define stages that mean something, keep data clean, and use automation and analytics to close more without adding headcount.",
    sections: [
      {
        type: "list",
        h: "Define stages that reflect the buyer, not your wishes",
        items: [
          {
            b: "Stages = buyer actions,",
            t: 'not internal steps (e.g. "demo done", not "sent email").',
          },
          {
            b: "Clear entry/exit criteria",
            t: "for each stage so the pipeline is honest.",
          },
          {
            b: "One owner per deal",
            t: "and a next action always set.",
          },
          {
            b: "Lost-reason capture",
            t: "so you learn from what didn’t close.",
          },
        ],
      },
      {
        type: "p",
        h: "Keep the data clean",
        text: 'A pipeline full of stale, duplicated or ownerless deals lies to you. Capture leads from every source into one record, de-duplicate, and make "next action + date" mandatory so nothing rots silently.',
      },
      {
        type: "list",
        h: "Automate the follow-through",
        items: [
          {
            b: "Assignment rules",
            t: "route leads to the right rep instantly.",
          },
          {
            b: "Follow-up reminders",
            t: "so no deal goes cold.",
          },
          {
            b: "Stage automation",
            t: "triggers tasks and emails.",
          },
          {
            b: "Quotations",
            t: "generated from the same record.",
          },
        ],
      },
      {
        type: "list",
        h: "Measure what matters",
        items: [
          "Conversion rate by stage — where deals stall.",
          "Win rate and average deal size.",
          "Sales-cycle length.",
          "Activity vs outcome per rep.",
        ],
      },
    ],
    faqs: [
      {
        q: "How should I define CRM pipeline stages?",
        a: "Base stages on buyer actions with clear entry/exit criteria, one owner and a next action per deal, and a captured reason for every loss — so the pipeline reflects reality, not hope.",
      },
      {
        q: "How does a CRM help close more deals?",
        a: "Assignment rules, follow-up reminders and stage automation keep deals moving, while conversion and win-rate analytics show where to focus.",
      },
    ],
    related: [
      {
        title: "CRM for B2B sales teams",
        href: "CRM-B2B.dc.html",
      },
      {
        title: "CRM for services firms",
        href: "CRM-Services.dc.html",
      },
      {
        title: "CRM Platform — overview",
        href: "CRM.dc.html",
      },
    ],
    cta: {
      title: "Run a pipeline that tells the truth",
      body: "Bring your current stages and a sample of deals, and we'll model your pipeline with you.",
      productHref: "CRM.dc.html",
      productLabel: "Explore CRM",
    },
    seo: {
      metaTitle: "Building a Sales Pipeline That Actually Closes | Svasamm",
      metaDescription:
        "How to define CRM pipeline stages around buyer actions, keep data clean, automate follow-through, and measure conversion, win rate and cycle length.",
      canonical: "https://svasamm.com/pages/sales-pipeline-guide.html",
      ogType: "article",
      ogTitle: "Building a Sales Pipeline That Actually Closes",
      ogDescription:
        "How to define CRM pipeline stages around buyer actions, keep data clean, automate follow-through, and measure conversion, win rate and cycle length.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Building a Sales Pipeline That Actually Closes",
        description:
          "How to define CRM pipeline stages around buyer actions, keep data clean, automate follow-through, and measure conversion, win rate and cycle length.",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "Svasamm Research Pvt Ltd",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Svasamm",
        },
        datePublished: "2026-07-17",
        dateModified: "2026-07-17",
        mainEntityOfPage: "https://svasamm.com/pages/sales-pipeline-guide.html",
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
            name: "CRM Platform",
            item: "https://svasamm.com/pages/crm.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Building a Sales Pipeline That Actually Closes",
            item: "https://svasamm.com/pages/sales-pipeline-guide.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How should I define CRM pipeline stages?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Base stages on buyer actions with clear entry/exit criteria, one owner and a next action per deal, and a captured reason for every loss.",
            },
          },
          {
            "@type": "Question",
            name: "How does a CRM help close more deals?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Assignment rules, follow-up reminders and stage automation keep deals moving, while conversion and win-rate analytics show where to focus.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "crm-for-b2b-sales",
    type: "industry",
    parentProduct: "crm",
    eyebrow: "CRM by Industry · B2B Sales",
    title: "CRM for B2B Sales Teams",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "B2B sales means long cycles, multiple stakeholders and quoted deals. A CRM built for it keeps every conversation, quote and decision-maker on one account record.",
    sections: [
      {
        type: "list",
        h: "What B2B sales teams need",
        items: [
          {
            b: "Account & contact hierarchy",
            t: "for multi-stakeholder deals.",
          },
          {
            b: "Long-cycle pipeline",
            t: "with custom stages.",
          },
          {
            b: "Quotations & proposals",
            t: "from the same record.",
          },
          {
            b: "Activity tracking",
            t: "across the buying group.",
          },
          {
            b: "Forecasting",
            t: "from weighted pipeline.",
          },
        ],
      },
      {
        type: "p",
        h: "One record, whole relationship",
        text: "Every email, meeting, quote and stakeholder sits on the account, so any rep can pick up the deal, and managers forecast from a pipeline that reflects reality.",
      },
      {
        type: "list",
        h: "What B2B teams get",
        items: [
          "A full view of every account and stakeholder.",
          "Faster, consistent quotes.",
          "Reliable forecasting.",
          "No deal knowledge trapped in one rep’s head.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can the CRM handle multi-stakeholder B2B deals?",
        a: "Yes — account and contact hierarchies keep every stakeholder, conversation and quote on one record.",
      },
      {
        q: "Does it do quotations?",
        a: "Yes — quotes and proposals are generated from the same record and flow to order and invoice.",
      },
    ],
    related: [
      {
        title: "Sales pipeline guide",
        href: "Guide-CRMSalesPipeline.dc.html",
      },
      {
        title: "CRM for services firms",
        href: "CRM-Services.dc.html",
      },
      {
        title: "CRM Platform — overview",
        href: "CRM.dc.html",
      },
    ],
    cta: {
      title: "Give every B2B deal one record",
      body: "Bring your sales stages and quote process, and we'll model it with you.",
      productHref: "CRM.dc.html",
      productLabel: "Explore CRM",
    },
    seo: {
      metaTitle: "CRM for B2B Sales Teams | Svasamm",
      metaDescription:
        "CRM for B2B sales: account and contact hierarchies for multi-stakeholder deals, long-cycle pipelines, quotations, activity tracking and forecasting.",
      canonical: "https://svasamm.com/pages/crm-for-b2b-sales.html",
      ogType: "website",
      ogTitle: "CRM for B2B Sales Teams",
      ogDescription:
        "CRM for B2B sales: account and contact hierarchies for multi-stakeholder deals, long-cycle pipelines, quotations, activity tracking and forecasting.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "CRM for B2B Sales Teams",
        serviceType: "CRM Platform Software",
        description:
          "CRM for B2B sales: account and contact hierarchies for multi-stakeholder deals, long-cycle pipelines, quotations, activity tracking and forecasting.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "B2B sales teams",
        },
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
            name: "CRM Platform",
            item: "https://svasamm.com/pages/crm.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "CRM for B2B Sales Teams",
            item: "https://svasamm.com/pages/crm-for-b2b-sales.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can the CRM handle multi-stakeholder B2B deals?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - account and contact hierarchies keep every stakeholder, conversation and quote on one record.",
            },
          },
          {
            "@type": "Question",
            name: "Does it do quotations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - quotes and proposals are generated from the same record and flow to order and invoice.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "crm-for-services-firms",
    type: "industry",
    parentProduct: "crm",
    eyebrow: "CRM by Industry · Services",
    title: "CRM for Services Firms",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "For services firms, the sale is a relationship and the pipeline is proposals and retainers. A CRM keeps enquiries, proposals and ongoing client relationships in one place.",
    sections: [
      {
        type: "list",
        h: "What services firms need",
        items: [
          {
            b: "Enquiry-to-proposal pipeline",
            t: "with clear stages.",
          },
          {
            b: "Proposal & retainer tracking",
            t: "per client.",
          },
          {
            b: "Client relationship history",
            t: "across engagements.",
          },
          {
            b: "Referral & repeat-business",
            t: "tracking.",
          },
          {
            b: "Handoff to delivery",
            t: "once won.",
          },
        ],
      },
      {
        type: "p",
        h: "From enquiry to lasting client",
        text: "Capture enquiries, send proposals, win the work, and keep the whole relationship — repeat business and referrals included — on one record that delivery can pick up cleanly.",
      },
      {
        type: "list",
        h: "What services firms get",
        items: [
          "A clean enquiry-to-proposal pipeline.",
          "Every client interaction in one place.",
          "Repeat and referral business tracked.",
          "A smooth handoff from sales to delivery.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can the CRM track proposals and retainers?",
        a: "Yes — proposals and retainers are tracked per client alongside the full relationship history.",
      },
      {
        q: "Does it help with repeat and referral business?",
        a: "Yes — repeat business and referrals are tracked on the same client record so nothing is lost.",
      },
    ],
    related: [
      {
        title: "Sales pipeline guide",
        href: "Guide-CRMSalesPipeline.dc.html",
      },
      {
        title: "CRM for B2B sales teams",
        href: "CRM-B2B.dc.html",
      },
      {
        title: "CRM Platform — overview",
        href: "CRM.dc.html",
      },
    ],
    cta: {
      title: "Keep client relationships in one place",
      body: "Tell us how you win and keep clients, and we'll map the pipeline with you.",
      productHref: "CRM.dc.html",
      productLabel: "Explore CRM",
    },
    seo: {
      metaTitle: "CRM for Services Firms | Svasamm",
      metaDescription:
        "CRM for services firms: enquiry-to-proposal pipeline, proposal and retainer tracking, client relationship history, and a clean handoff to delivery.",
      canonical: "https://svasamm.com/pages/crm-for-services-firms.html",
      ogType: "website",
      ogTitle: "CRM for Services Firms",
      ogDescription:
        "CRM for services firms: enquiry-to-proposal pipeline, proposal and retainer tracking, client relationship history, and a clean handoff to delivery.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "CRM for Services Firms",
        serviceType: "CRM Platform Software",
        description:
          "CRM for services firms: enquiry-to-proposal pipeline, proposal and retainer tracking, client relationship history, and a clean handoff to delivery.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "Services firms",
        },
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
            name: "CRM Platform",
            item: "https://svasamm.com/pages/crm.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "CRM for Services Firms",
            item: "https://svasamm.com/pages/crm-for-services-firms.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can the CRM track proposals and retainers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - proposals and retainers are tracked per client alongside the full relationship history.",
            },
          },
          {
            "@type": "Question",
            name: "Does it help with repeat and referral business?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - repeat business and referrals are tracked on the same client record.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "crm-for-distribution",
    type: "industry",
    parentProduct: "crm",
    eyebrow: "CRM by Industry · Distribution",
    title: "CRM for Distribution Businesses",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "Distribution businesses juggle many customer accounts, repeat orders and support in one relationship. A CRM keeps sales, reorders and service issues on a single account view.",
    sections: [
      {
        type: "list",
        h: "What distribution businesses need",
        items: [
          {
            b: "Large account base",
            t: "with reorder history.",
          },
          {
            b: "Quotation & order capture",
            t: "tied to the catalogue.",
          },
          {
            b: "Support tickets",
            t: "on the same account.",
          },
          {
            b: "Outstanding & credit visibility",
            t: "for sales reps.",
          },
          {
            b: "Territory & rep assignment.",
          },
        ],
      },
      {
        type: "p",
        h: "Sales and support on one account",
        text: "Reps see order history, outstanding and open issues in one place, so they sell and serve the account without switching systems or losing context.",
      },
      {
        type: "list",
        h: "What distributors get",
        items: [
          "One view per customer account.",
          "Faster reorders and quotes.",
          "Support issues visible to sales.",
          "Territory-based ownership.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can sales and support share one customer view?",
        a: "Yes — orders, quotes and support tickets all sit on the same account record.",
      },
      {
        q: "Can reps see outstanding and credit?",
        a: "Yes — outstanding and credit visibility is available to reps on the account.",
      },
    ],
    related: [
      {
        title: "Sales pipeline guide",
        href: "Guide-CRMSalesPipeline.dc.html",
      },
      {
        title: "CRM for B2B sales teams",
        href: "CRM-B2B.dc.html",
      },
      {
        title: "CRM Platform — overview",
        href: "CRM.dc.html",
      },
    ],
    cta: {
      title: "Sell and serve from one account view",
      body: "Tell us your account base and order pattern, and we'll map it with you.",
      productHref: "CRM.dc.html",
      productLabel: "Explore CRM",
    },
    seo: {
      metaTitle: "CRM for Distribution Businesses | Svasamm",
      metaDescription:
        "CRM for distribution: a large account base with reorder history, quotation and order capture, support tickets on the same account, and outstanding/credit visibility for reps.",
      canonical: "https://svasamm.com/pages/crm-for-distribution.html",
      ogType: "website",
      ogTitle: "CRM for Distribution Businesses",
      ogDescription:
        "CRM for distribution: a large account base with reorder history, quotation and order capture, support tickets on the same account, and outstanding/credit visibility for reps.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "CRM for Distribution Businesses",
        serviceType: "CRM Platform Software",
        description:
          "CRM for distribution: a large account base with reorder history, quotation and order capture, support tickets on the same account, and outstanding/credit visibility for reps.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "Distribution businesses",
        },
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
            name: "CRM Platform",
            item: "https://svasamm.com/pages/crm.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "CRM for Distribution Businesses",
            item: "https://svasamm.com/pages/crm-for-distribution.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can sales and support share one customer view?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - orders, quotes and support tickets all sit on the same account record.",
            },
          },
          {
            "@type": "Question",
            name: "Can reps see outstanding and credit?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - outstanding and credit visibility is available to reps on the account.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "itsm-fundamentals-guide",
    type: "guide",
    parentProduct: "service-desk",
    eyebrow: "Service Desk Guide",
    title: "ITSM Fundamentals: Tickets, SLAs & Escalation",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "A service desk succeeds or fails on a few fundamentals: getting tickets to the right person, holding to SLAs, and escalating before things break. This guide covers the core concepts and how to set them up so they actually work.",
    sections: [
      {
        type: "list",
        h: "The building blocks",
        items: [
          {
            b: "Tickets & queues —",
            t: "structured intake routed to the right team.",
          },
          {
            b: "Categories & priority",
            t: "that drive routing and SLA.",
          },
          {
            b: "Incident vs problem —",
            t: "fix the outage, then the root cause.",
          },
          {
            b: "Knowledge base",
            t: "to deflect repeat questions.",
          },
        ],
      },
      {
        type: "p",
        h: "SLAs that mean something",
        text: "Set response and resolution targets by priority, measure against them per ticket, and make the clock visible to agents. An SLA nobody can see is an SLA nobody meets.",
      },
      {
        type: "note",
        text: "Define escalation before you need it: who gets notified, and when, as a ticket approaches its SLA — automatic, not a manual chase.",
      },
      {
        type: "list",
        h: "Escalation & self-service",
        items: [
          {
            b: "Automatic escalation",
            t: "when an SLA is at risk.",
          },
          {
            b: "Self-service portal",
            t: "so users raise and track their own requests.",
          },
          {
            b: "Knowledge articles",
            t: "that cut ticket volume.",
          },
          {
            b: "Reporting",
            t: "on SLA attainment and backlog.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between an incident and a problem in ITSM?",
        a: "An incident is a single disruption to fix now; a problem is the underlying root cause behind one or more incidents. Good practice resolves the incident, then tackles the problem.",
      },
      {
        q: "How do SLAs and escalation work together?",
        a: "SLAs set response/resolution targets by priority; escalation automatically notifies the right people as a ticket approaches or breaches its SLA, so slips are caught early.",
      },
    ],
    related: [
      {
        title: "Service Desk for internal IT teams",
        href: "SD-InternalIT.dc.html",
      },
      {
        title: "Service Desk for MSPs",
        href: "SD-MSP.dc.html",
      },
      {
        title: "Service Desk — overview",
        href: "ServiceDesk.dc.html",
      },
    ],
    cta: {
      title: "Stand up a service desk that holds its SLAs",
      body: "Bring your ticket categories and SLA targets, and we'll configure a working queue with you.",
      productHref: "ServiceDesk.dc.html",
      productLabel: "Explore Service Desk",
    },
    seo: {
      metaTitle: "ITSM Fundamentals: Tickets, SLAs & Escalation | Svasamm",
      metaDescription:
        "The building blocks of a service desk: tickets and queues, incident vs problem, SLAs that mean something, automatic escalation, and self-service.",
      canonical: "https://svasamm.com/pages/itsm-fundamentals-guide.html",
      ogType: "article",
      ogTitle: "ITSM Fundamentals: Tickets, SLAs &amp; Escalation",
      ogDescription:
        "The building blocks of a service desk: tickets and queues, incident vs problem, SLAs that mean something, automatic escalation, and self-service.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "ITSM Fundamentals: Tickets, SLAs & Escalation",
        description:
          "The building blocks of a service desk: tickets and queues, incident vs problem, SLAs that mean something, automatic escalation, and self-service.",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "Svasamm Research Pvt Ltd",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Svasamm",
        },
        datePublished: "2026-07-17",
        dateModified: "2026-07-17",
        mainEntityOfPage:
          "https://svasamm.com/pages/itsm-fundamentals-guide.html",
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
            name: "Service Desk",
            item: "https://svasamm.com/pages/service-desk.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "ITSM Fundamentals: Tickets, SLAs & Escalation",
            item: "https://svasamm.com/pages/itsm-fundamentals-guide.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the difference between an incident and a problem in ITSM?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An incident is a single disruption to fix now; a problem is the underlying root cause behind one or more incidents.",
            },
          },
          {
            "@type": "Question",
            name: "How do SLAs and escalation work together?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SLAs set response/resolution targets by priority; escalation automatically notifies the right people as a ticket approaches or breaches its SLA.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "service-desk-for-internal-it",
    type: "industry",
    parentProduct: "service-desk",
    eyebrow: "Service Desk by Industry · Internal IT",
    title: "Service Desk for Internal IT Teams",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "Internal IT teams support employees across the business. A service desk gives them one place for requests, incidents and assets — with SLAs that keep the business running.",
    sections: [
      {
        type: "list",
        h: "What internal IT teams need",
        items: [
          {
            b: "Employee self-service portal",
            t: "for requests and issues.",
          },
          {
            b: "Ticket routing",
            t: "to the right IT function.",
          },
          {
            b: "Asset / CMDB",
            t: "tracking hardware and software.",
          },
          {
            b: "SLAs & escalation",
            t: "for business-critical issues.",
          },
          {
            b: "Knowledge base",
            t: "to deflect repeat tickets.",
          },
        ],
      },
      {
        type: "p",
        h: "Support the whole business, tracked",
        text: "Employees raise requests through a portal; tickets route to the right person on an SLA; assets and services are tracked; and a knowledge base cuts the repeat questions.",
      },
      {
        type: "list",
        h: "What internal IT gets",
        items: [
          "One intake for the whole company.",
          "SLA-backed response to critical issues.",
          "A live asset/CMDB view.",
          "Fewer repeat tickets via self-service.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does it include an employee self-service portal?",
        a: "Yes — employees raise and track requests through a portal, backed by a knowledge base.",
      },
      {
        q: "Can it track IT assets?",
        a: "Yes — a CMDB tracks the hardware, software and services tickets relate to.",
      },
    ],
    related: [
      {
        title: "ITSM fundamentals guide",
        href: "Guide-ITSM.dc.html",
      },
      {
        title: "Service Desk for MSPs",
        href: "SD-MSP.dc.html",
      },
      {
        title: "Service Desk — overview",
        href: "ServiceDesk.dc.html",
      },
    ],
    cta: {
      title: "Give internal IT one system",
      body: "Tell us your request types and assets, and we'll configure it with you.",
      productHref: "ServiceDesk.dc.html",
      productLabel: "Explore Service Desk",
    },
    seo: {
      metaTitle: "Service Desk for Internal IT Teams | Svasamm",
      metaDescription:
        "Service desk for internal IT: an employee self-service portal, ticket routing, asset/CMDB tracking, SLAs and escalation, and a knowledge base to deflect repeat tickets.",
      canonical: "https://svasamm.com/pages/service-desk-for-internal-it.html",
      ogType: "website",
      ogTitle: "Service Desk for Internal IT Teams",
      ogDescription:
        "Service desk for internal IT: an employee self-service portal, ticket routing, asset/CMDB tracking, SLAs and escalation, and a knowledge base to deflect repeat tickets.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Service Desk for Internal IT Teams",
        serviceType: "Service Desk Software",
        description:
          "Service desk for internal IT: an employee self-service portal, ticket routing, asset/CMDB tracking, SLAs and escalation, and a knowledge base to deflect repeat tickets.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "Internal IT teams",
        },
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
            name: "Service Desk",
            item: "https://svasamm.com/pages/service-desk.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Service Desk for Internal IT Teams",
            item: "https://svasamm.com/pages/service-desk-for-internal-it.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Does it include an employee self-service portal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - employees raise and track requests through a portal, backed by a knowledge base.",
            },
          },
          {
            "@type": "Question",
            name: "Can it track IT assets?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - a CMDB tracks the hardware, software and services tickets relate to.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "service-desk-for-msps",
    type: "industry",
    parentProduct: "service-desk",
    eyebrow: "Service Desk by Industry · MSPs",
    title: "Service Desk for Managed Service Providers",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "MSPs run service desks for many client organisations at once, each with its own SLA. A multi-tenant service desk keeps clients separated, SLAs honoured and work reportable per client.",
    sections: [
      {
        type: "list",
        h: "What MSPs need",
        items: [
          {
            b: "Multi-client separation",
            t: "so each client sees only their own.",
          },
          {
            b: "Per-client SLAs",
            t: "and escalation rules.",
          },
          {
            b: "Client self-service portals",
            t: "branded per client.",
          },
          {
            b: "Time & work tracking",
            t: "for billing.",
          },
          {
            b: "Per-client reporting",
            t: "on SLA attainment.",
          },
        ],
      },
      {
        type: "p",
        h: "Many clients, one desk",
        text: "Every client is a separated tenant with its own SLAs, portal and reports, while your team works one queue — so you scale support without one client’s work bleeding into another’s.",
      },
      {
        type: "list",
        h: "What MSPs get",
        items: [
          "Clean client separation.",
          "Per-client SLA compliance.",
          "Branded client portals.",
          "Billable-time and SLA reporting per client.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can the service desk keep multiple clients separated?",
        a: "Yes — each client is a separated tenant with its own SLAs, portal and reporting, while your team works one queue.",
      },
      {
        q: "Can it apply different SLAs per client?",
        a: "Yes — per-client SLAs and escalation rules are supported, with reporting on attainment for each.",
      },
    ],
    related: [
      {
        title: "ITSM fundamentals guide",
        href: "Guide-ITSM.dc.html",
      },
      {
        title: "Service Desk for internal IT teams",
        href: "SD-InternalIT.dc.html",
      },
      {
        title: "Service Desk — overview",
        href: "ServiceDesk.dc.html",
      },
    ],
    cta: {
      title: "Run every client from one service desk",
      body: "Tell us your client count and SLA models, and we'll configure multi-tenant with you.",
      productHref: "ServiceDesk.dc.html",
      productLabel: "Explore Service Desk",
    },
    seo: {
      metaTitle: "Service Desk for Managed Service Providers | Svasamm",
      metaDescription:
        "Multi-tenant service desk for MSPs: client separation, per-client SLAs and escalation, branded client portals, time tracking for billing, and per-client reporting.",
      canonical: "https://svasamm.com/pages/service-desk-for-msps.html",
      ogType: "website",
      ogTitle: "Service Desk for Managed Service Providers",
      ogDescription:
        "Multi-tenant service desk for MSPs: client separation, per-client SLAs and escalation, branded client portals, time tracking for billing, and per-client reporting.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Service Desk for Managed Service Providers",
        serviceType: "Service Desk Software",
        description:
          "Multi-tenant service desk for MSPs: client separation, per-client SLAs and escalation, branded client portals, time tracking for billing, and per-client reporting.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "Managed service providers (MSPs)",
        },
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
            name: "Service Desk",
            item: "https://svasamm.com/pages/service-desk.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Service Desk for Managed Service Providers",
            item: "https://svasamm.com/pages/service-desk-for-msps.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can the service desk keep multiple clients separated?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - each client is a separated tenant with its own SLAs, portal and reporting, while your team works one queue.",
            },
          },
          {
            "@type": "Question",
            name: "Can it apply different SLAs per client?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - per-client SLAs and escalation rules are supported, with reporting on attainment for each.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "service-desk-for-customer-support",
    type: "industry",
    parentProduct: "service-desk",
    eyebrow: "Service Desk by Industry · Customer Support",
    title: "Service Desk for Customer Support Teams",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "Customer support teams field issues across email, phone and portal, and are judged on speed and satisfaction. A service desk unifies channels, holds SLAs and surfaces CSAT.",
    sections: [
      {
        type: "list",
        h: "What customer support teams need",
        items: [
          {
            b: "Multi-channel intake",
            t: "into one queue.",
          },
          {
            b: "SLA & priority",
            t: "on customer-facing issues.",
          },
          {
            b: "Knowledge base",
            t: "for self-service and agents.",
          },
          {
            b: "CSAT capture",
            t: "after resolution.",
          },
          {
            b: "Reporting",
            t: "on response, resolution and satisfaction.",
          },
        ],
      },
      {
        type: "p",
        h: "Every channel, one queue",
        text: "Email, phone and portal issues land in one queue, routed and prioritised on SLA; a knowledge base deflects the easy ones; and CSAT after resolution shows how you’re really doing.",
      },
      {
        type: "list",
        h: "What support teams get",
        items: [
          "A unified multi-channel queue.",
          "SLA-backed response times.",
          "Self-service that cuts volume.",
          "CSAT and performance visibility.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can it bring email, phone and portal into one queue?",
        a: "Yes — multi-channel intake lands in one queue, routed and prioritised on SLA.",
      },
      {
        q: "Does it measure customer satisfaction?",
        a: "Yes — CSAT is captured after resolution and reported alongside response and resolution times.",
      },
    ],
    related: [
      {
        title: "ITSM fundamentals guide",
        href: "Guide-ITSM.dc.html",
      },
      {
        title: "Service Desk for internal IT teams",
        href: "SD-InternalIT.dc.html",
      },
      {
        title: "Service Desk — overview",
        href: "ServiceDesk.dc.html",
      },
    ],
    cta: {
      title: "Unify support and hold your SLAs",
      body: "Tell us your channels and SLA targets, and we'll configure the desk with you.",
      productHref: "ServiceDesk.dc.html",
      productLabel: "Explore Service Desk",
    },
    seo: {
      metaTitle: "Service Desk for Customer Support Teams | Svasamm",
      metaDescription:
        "Service desk for customer support: multi-channel intake into one queue, SLAs and priority, knowledge base, CSAT capture, and reporting on response and satisfaction.",
      canonical:
        "https://svasamm.com/pages/service-desk-for-customer-support.html",
      ogType: "website",
      ogTitle: "Service Desk for Customer Support Teams",
      ogDescription:
        "Service desk for customer support: multi-channel intake into one queue, SLAs and priority, knowledge base, CSAT capture, and reporting on response and satisfaction.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Service Desk for Customer Support Teams",
        serviceType: "Service Desk Software",
        description:
          "Service desk for customer support: multi-channel intake into one queue, SLAs and priority, knowledge base, CSAT capture, and reporting on response and satisfaction.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "Customer support teams",
        },
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
            name: "Service Desk",
            item: "https://svasamm.com/pages/service-desk.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Service Desk for Customer Support Teams",
            item: "https://svasamm.com/pages/service-desk-for-customer-support.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can it bring email, phone and portal into one queue?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - multi-channel intake lands in one queue, routed and prioritised on SLA.",
            },
          },
          {
            "@type": "Question",
            name: "Does it measure customer satisfaction?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - CSAT is captured after resolution and reported alongside response and resolution times.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "dms-vs-bizom",
    type: "compare",
    parentProduct: "dms",
    eyebrow: "Comparison",
    title: "Svasamm DMS vs Bizom: For OEM Channels",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "Bizom (by Mobisy Technologies) is one of India's best-known channel platforms, so if you're an OEM comparing options it's a fair one to weigh against Svasamm DMS. Both manage distribution, but they're built for different shapes of channel. This is an honest side-by-side.",
    sections: [
      {
        type: "note",
        h: "What Bizom is",
        text: "Based on each vendor's publicly available information as of July 2026. Software changes — always confirm current features directly with the vendor before deciding.",
      },
      {
        type: "p",
        text: "Bizom is a retail-intelligence and SFA (sales-force automation) platform aimed primarily at FMCG and consumer-goods brands. It emphasises the fast-moving side of distribution: field-force / beat management, retailer order-taking, secondary sales and stock, DMS for distributor claims and schemes, and merchandising / retail execution across large outlet networks.",
      },
      {
        type: "p",
        h: "What Svasamm DMS is",
        text: "Svasamm DMS is built for OEMs that sell equipment through distributors — high-value, serial-numbered machines with a multi-year service life. It runs the full channel lifecycle: distributor-booked leads visible to the OEM (before sale), sale/installation/warranty with serial and installed-base tracking (sale), and customer queries routed to the right distributor on an SLA with escalation (after sale).",
      },
      {
        type: "p",
        h: "Side-by-side",
        text: "'Stated' = listed on the vendor's public site; 'Not stated' means we didn't find it publicly (it may still exist — ask them).",
      },
      {
        type: "table",
        cols: ["Capability", "Svasamm DMS", "Bizom"],
        rows: [
          [
            "Primary fit",
            "OEM equipment channels",
            "FMCG / consumer-goods brands",
          ],
          [
            "Field-force / beat automation (SFA)",
            "Not a core focus",
            "Stated (core strength)",
          ],
          [
            "Secondary sales & retail execution",
            "Partial",
            "Stated (core strength)",
          ],
          [
            "Distributor-booked lead/deal registration",
            "Yes",
            "Not stated publicly",
          ],
          [
            "Serial / installed-base & warranty tracking",
            "Yes (core focus)",
            "Not stated publicly",
          ],
          [
            "Installation & commissioning by distributor engineers",
            "Yes",
            "Not stated publicly",
          ],
          [
            "After-sales query routing with SLA & escalation",
            "Yes (core focus)",
            "Not stated publicly",
          ],
          ["OEM ERP / SAP integration", "Yes (API-first)", "Stated"],
        ],
      },
      {
        type: "p",
        h: "Which should you choose?",
        text: "If your channel is fast-moving consumer goods and your priority is beat plans, retail execution and secondary-sales intelligence across thousands of outlets, Bizom is purpose-built for that. If you’re an OEM whose value lives in serial-tracked machines, installation, warranty and SLA-bound after-sales service through distributors, that is exactly what Svasamm DMS is built around.",
      },
    ],
    faqs: [
      {
        q: "What is the main difference between Svasamm DMS and Bizom?",
        a: "Bizom is built for FMCG channels — field-force automation, retail execution and secondary sales. Svasamm DMS is built for OEM equipment channels — serial/warranty tracking, installation, and after-sales SLA service through distributors.",
      },
      {
        q: "Is this comparison up to date?",
        a: "It reflects each vendor’s public information as of July 2026. Features change — confirm current capabilities directly with each vendor.",
      },
    ],
    related: [
      {
        title: "Svasamm DMS vs FieldAssist",
        href: "Compare-FieldAssist.dc.html",
      },
      {
        title: "Distributor management for OEMs: the full channel lifecycle",
        href: "Guide-OEMDistributor.dc.html",
      },
      {
        title: "DMS — distributor management for OEMs",
        href: "DMS.dc.html",
      },
    ],
    cta: {
      title: "See if Svasamm DMS fits your channel",
      body: "Bring your before/sale/after flow and we'll show you exactly how DMS handles it.",
      productHref: "DMS.dc.html",
      productLabel: "Explore DMS",
    },
    seo: {
      metaTitle:
        "Svasamm DMS vs Bizom: Distributor Management for OEM Channels Compared | Svasamm",
      metaDescription:
        "An honest comparison of Svasamm DMS and Bizom for OEMs: FMCG route-to-market vs OEM equipment-channel management (serial/warranty tracking, installation, after-sales SLA).",
      canonical: "https://svasamm.com/pages/dms-vs-bizom.html",
      ogType: "article",
      ogTitle:
        "Svasamm DMS vs Bizom: Distributor Management for OEM Channels Compared",
      ogDescription:
        "An honest comparison of Svasamm DMS and Bizom for OEMs: FMCG route-to-market vs OEM equipment-channel management (serial/warranty tracking, installation, after-sales SLA).",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "Svasamm DMS vs Bizom: Distributor Management for OEM Channels Compared",
        description:
          "An honest comparison of Svasamm DMS and Bizom for OEMs: FMCG route-to-market vs OEM equipment-channel management (serial/warranty tracking, installation, after-sales SLA).",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "Svasamm Research Pvt Ltd",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Svasamm",
        },
        datePublished: "2026-07-17",
        dateModified: "2026-07-17",
        mainEntityOfPage: "https://svasamm.com/pages/dms-vs-bizom.html",
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
            name: "DMS",
            item: "https://svasamm.com/pages/dms.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "DMS vs Bizom",
            item: "https://svasamm.com/pages/dms-vs-bizom.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the main difference between Svasamm DMS and Bizom?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Bizom is built for FMCG channels - field-force automation, retail execution and secondary sales. Svasamm DMS is built for OEM equipment channels - serial/warranty tracking, installation, and after-sales SLA service through distributors.",
            },
          },
          {
            "@type": "Question",
            name: "Is this comparison up to date?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It reflects each vendor's public information as of July 2026. Features change - confirm current capabilities directly with each vendor.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "dms-vs-fieldassist",
    type: "compare",
    parentProduct: "dms",
    eyebrow: "Comparison",
    title: "Svasamm DMS vs FieldAssist: For OEM Channels",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "FieldAssist is a well-established route-to-market / SFA platform, so it's a reasonable one to compare against Svasamm DMS. Both help brands manage distribution, but they solve different problems. Here's an honest side-by-side.",
    sections: [
      {
        type: "note",
        h: "What FieldAssist is",
        text: "Based on each vendor's publicly available information as of July 2026. Confirm current features directly with the vendor before deciding.",
      },
      {
        type: "p",
        text: "FieldAssist is a route-to-market (RTM) SaaS platform focused on CPG/FMCG brands. It leads with sales-force automation, distributor management (DMS), retail execution and merchandising, and analytics across the general-trade outlet universe — optimising the daily beat, order capture and secondary sales of fast-moving goods.",
      },
      {
        type: "p",
        h: "What Svasamm DMS is",
        text: "Svasamm DMS is built for OEMs selling equipment through distributors. It centres on the full equipment lifecycle rather than daily FMCG beats: distributor-booked leads visible to the OEM, sale/installation/warranty with serial and installed-base tracking, and after-sales customer queries routed to the right distributor on an SLA with escalation.",
      },
      {
        type: "p",
        h: "Side-by-side",
        text: "'Stated' = listed on the vendor's public site; 'Not stated' means we didn't find it publicly (it may still exist — ask them).",
      },
      {
        type: "table",
        cols: ["Capability", "Svasamm DMS", "FieldAssist"],
        rows: [
          [
            "Primary fit",
            "OEM equipment channels",
            "CPG / FMCG route-to-market",
          ],
          [
            "Field-force automation & beat planning",
            "Not a core focus",
            "Stated (core strength)",
          ],
          ["Retail execution & merchandising", "No", "Stated (core strength)"],
          [
            "Distributor-booked lead/deal registration",
            "Yes",
            "Not stated publicly",
          ],
          [
            "Serial / installed-base & warranty tracking",
            "Yes (core focus)",
            "Not stated publicly",
          ],
          [
            "Installation & commissioning tracking",
            "Yes",
            "Not stated publicly",
          ],
          [
            "After-sales query routing with SLA & escalation",
            "Yes (core focus)",
            "Not stated publicly",
          ],
          ["OEM ERP / SAP integration", "Yes (API-first)", "Stated"],
        ],
      },
      {
        type: "p",
        h: "Which should you choose?",
        text: "If you’re a CPG/FMCG brand optimising general-trade route-to-market — beats, retail execution and secondary sales — FieldAssist is built for that world. If you’re an OEM whose channel revolves around serial-tracked equipment, installation, warranty and SLA-bound after-sales service, Svasamm DMS is the closer fit.",
      },
    ],
    faqs: [
      {
        q: "What is the main difference between Svasamm DMS and FieldAssist?",
        a: "FieldAssist is a route-to-market/SFA platform for CPG/FMCG brands — beats, retail execution, secondary sales. Svasamm DMS is for OEM equipment channels — serial/warranty tracking, installation, and after-sales SLA service through distributors.",
      },
      {
        q: "Is this comparison current?",
        a: "It reflects public information as of July 2026. Features change — verify directly with each vendor.",
      },
    ],
    related: [
      {
        title: "Svasamm DMS vs Bizom",
        href: "Compare-Bizom.dc.html",
      },
      {
        title: "Distributor management for OEMs: the full channel lifecycle",
        href: "Guide-OEMDistributor.dc.html",
      },
      {
        title: "DMS — distributor management for OEMs",
        href: "DMS.dc.html",
      },
    ],
    cta: {
      title: "See if Svasamm DMS fits your channel",
      body: "Tell us your OEM channel model and we'll map before/sale/after with you.",
      productHref: "DMS.dc.html",
      productLabel: "Explore DMS",
    },
    seo: {
      metaTitle:
        "Svasamm DMS vs FieldAssist: Distributor Management for OEM Channels Compared | Svasamm",
      metaDescription:
        "An honest comparison of Svasamm DMS and FieldAssist for OEMs: CPG/FMCG route-to-market vs OEM equipment-channel management (serial/warranty, installation, after-sales SLA).",
      canonical: "https://svasamm.com/pages/dms-vs-fieldassist.html",
      ogType: "article",
      ogTitle:
        "Svasamm DMS vs FieldAssist: Distributor Management for OEM Channels Compared",
      ogDescription:
        "An honest comparison of Svasamm DMS and FieldAssist for OEMs: CPG/FMCG route-to-market vs OEM equipment-channel management (serial/warranty, installation, after-sales SLA).",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline:
          "Svasamm DMS vs FieldAssist: Distributor Management for OEM Channels Compared",
        description:
          "An honest comparison of Svasamm DMS and FieldAssist for OEMs: CPG/FMCG route-to-market vs OEM equipment-channel management (serial/warranty, installation, after-sales SLA).",
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Founder",
          worksFor: {
            "@type": "Organization",
            name: "Svasamm Research Pvt Ltd",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Svasamm",
        },
        datePublished: "2026-07-17",
        dateModified: "2026-07-17",
        mainEntityOfPage: "https://svasamm.com/pages/dms-vs-fieldassist.html",
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
            name: "DMS",
            item: "https://svasamm.com/pages/dms.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "DMS vs FieldAssist",
            item: "https://svasamm.com/pages/dms-vs-fieldassist.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the main difference between Svasamm DMS and FieldAssist?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "FieldAssist is a route-to-market/SFA platform for CPG/FMCG brands - beats, retail execution, secondary sales. Svasamm DMS is for OEM equipment channels - serial/warranty tracking, installation, and after-sales SLA service through distributors.",
            },
          },
          {
            "@type": "Question",
            name: "Is this comparison current?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It reflects public information as of July 2026. Features change - verify directly with each vendor.",
            },
          },
        ],
      },
    ],
  },
  {
    slug: "dms-agri-farm-equipment-oem",
    type: "industry",
    parentProduct: "dms",
    eyebrow: "OEM Industry · Agri & Farm Equipment",
    title: "Distributor Management for Agri & Farm Equipment OEMs",
    byline: "By Mithun K. Singh, Founder, Svasamm Research · 16 July 2026",
    intro:
      "OEMs making tractors, implements, pumps and harvesters sell through a dispersed rural dealer network where service reach, spare-part logistics, warranty and finance/subsidy paperwork all matter. An OEM DMS brings that far-flung channel into one view.",
    sections: [
      {
        type: "list",
        h: "The channel challenge in agri & farm equipment",
        items: [
          {
            b: "Dispersed rural dealers",
            t: "spread across large geographies.",
          },
          {
            b: "Service reach —",
            t: "breakdowns happen far from the OEM, handled by dealers and local mechanics.",
          },
          {
            b: "Spares logistics",
            t: "over long distances.",
          },
          {
            b: "Warranty & finance/subsidy docs",
            t: "that need capturing at the point of sale.",
          },
        ],
      },
      {
        type: "list",
        h: "Before sale to after sale, on one system",
        items: [
          {
            b: "Before sale —",
            t: "dealers register leads and capture finance/subsidy details; the OEM sees demand.",
          },
          {
            b: "Sale & warranty —",
            t: "serial and warranty are recorded, and dealer stock and machine aging are visible to the OEM.",
          },
          {
            b: "After sale —",
            t: "a service or warranty query is assigned to the right dealer or mechanic on an SLA, with escalation.",
          },
        ],
      },
      {
        type: "list",
        h: "What agri equipment OEMs get",
        items: [
          "Visibility of a dispersed rural dealer network.",
          "Spares and warranty tracking across distances.",
          "SLA-backed service reach into remote areas.",
          "Analytics on sales, aging and service by territory.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a dispersed rural dealer network be managed in one system?",
        a: "Yes — the model gives the OEM visibility across a scattered dealer network, with each dealer seeing only its own data.",
      },
      {
        q: "Are spares and warranty tracked across distances?",
        a: "Yes — dealer spares stock, warranty and machine aging are visible to the OEM, with SLA-backed service assignment.",
      },
    ],
    related: [
      {
        title: "Distributor management for OEMs: the full channel lifecycle",
        href: "Guide-OEMDistributor.dc.html",
      },
      {
        title: "Distributor management for HVAC & industrial equipment OEMs",
        href: "DMS-HVAC.dc.html",
      },
      {
        title: "DMS — distributor management for OEMs",
        href: "DMS.dc.html",
      },
    ],
    cta: {
      title: "Bring a scattered rural channel into one view",
      body: "Tell us how your dealers sell and service in the field, and we'll map the lifecycle with you.",
      productHref: "DMS.dc.html",
      productLabel: "Explore DMS",
    },
    seo: {
      metaTitle:
        "Distributor Management for Agri & Farm Equipment OEMs | DMS by Svasamm",
      metaDescription:
        "Distributor management for agri &amp; farm equipment OEMs (tractors, implements, pumps): dispersed rural dealer visibility, spares &amp; warranty tracking, finance/subsidy capture, and SLA service.",
      canonical: "https://svasamm.com/pages/dms-agri-farm-equipment-oem.html",
      ogType: "website",
      ogTitle: "Distributor Management for Agri &amp; Farm Equipment OEMs",
      ogDescription:
        "Distributor management for agri &amp; farm equipment OEMs (tractors, implements, pumps): dispersed rural dealer visibility, spares &amp; warranty tracking, finance/subsidy capture, and SLA service.",
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Distributor Management for Agri & Farm Equipment OEMs",
        serviceType: "Distributor Management Software for OEMs",
        description:
          "Distributor management for agri & farm equipment OEMs (tractors, implements, pumps): dispersed rural dealer visibility, spares & warranty tracking, finance/subsidy capture, and SLA service.",
        provider: {
          "@type": "Organization",
          name: "Svasamm",
          url: "https://svasamm.com",
        },
        areaServed: "IN",
        audience: {
          "@type": "BusinessAudience",
          name: "Agri & farm equipment OEMs",
        },
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
            name: "DMS",
            item: "https://svasamm.com/pages/dms.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Agri & Farm Equipment OEMs",
            item: "https://svasamm.com/pages/dms-agri-farm-equipment-oem.html",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can a dispersed rural dealer network be managed in one system?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - the model gives the OEM visibility across a scattered dealer network, with each dealer seeing only its own data.",
            },
          },
          {
            "@type": "Question",
            name: "Are spares and warranty tracked across distances?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes - dealer spares stock, warranty and machine aging are visible to the OEM, with SLA-backed service assignment.",
            },
          },
        ],
      },
    ],
  },
];

// Route slug (with ".html") → article. Matches the /pages/*.html dispatcher.
export const ARTICLE_BY_SLUG: Record<string, Article> = Object.fromEntries(
  ARTICLES.map((a) => [a.slug + ".html", a]),
);
