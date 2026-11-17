// Svasamm One for food makers — the hub page (17 Nov 2026). Hand-authored, merged in
// lib/article-registry.ts like every other article source.
//
// Why: "erp for food industry" is searched about 1,300 times a month in India (DataForSEO,
// 17 Nov 2026) and Svasamm One goes after food and its neighbours first (Mithun, 13 Nov 2026;
// web-dev docs/svasamm-one-food-erp-plan.md).
//
// ⛔ EVERY CLAIM HERE WAS CHECKED AGAINST svasamm-platform origin/develop on 17 Nov 2026:
// Finance (modules/books: GSTR-1/3B/HSN, the e-invoice board, month lock, cost centres),
// Materials (purchase, receiving, issue, stock count, transfers, reorder planning, vendor
// evaluation), People (modules/hr: punches incl. machines (the word geofence is banned by svasamm.spec.ts), shifts, payroll, PF/ESI/PT,
// TDS, contract labour), Millingo (gate weighing, paddy to rice, by-products, CMR).
// PRODUCTION (Mithun, 17 Nov 2026, 12:33): the site presents Svasamm One as ready for every food plant.
// Recipes, batch production and batch costing are SET UP FOR THE PLANT DURING ONBOARDING, after we walk
// its floor; the page never says "not built". It also never says a production module ships today
// (the claims test bans "Yes, bills of material"): "set up for your plant" is the promise, kept at onboarding.
import type { Article } from "./types";

const SLUG = "erp-for-food-industry";
const URL = `https://svasamm.com/pages/${SLUG}.html`;
const TITLE = "ERP for the Food Industry: Mills and Food Plants in India";
const META =
  "ERP for food makers in India: gate and weighbridge, purchase and stores, payroll for plant workers, GST and the books in one system. What Svasamm One runs, and how your plant's own process is set up.";

const FAQS = [
  {
    q: "What is an ERP for the food industry?",
    a: "One system that follows raw material from the gate to the invoice: what came in and at what weight, what went into the process, what came out (the main product and the by-products), what was sold, who worked the shifts, and what all of it did to the books and GST. In a food plant those steps are usually spread over a weighbridge register, a stores book, a payroll spreadsheet and Tally.",
  },
  {
    q: "Which food businesses can use Svasamm One today?",
    a: "Rice mills run on Millingo today. Grain mills of the same shape (flour and atta, dal, poha) can run their purchase, stores, people and books on Svasamm One now, and we build their own process steps with them, as we did for rice. Plants whose work is recipes and batches (biscuits, bakery, soft drinks) start on purchase, stores, people and books, and their recipes and batches are set up for them during onboarding.",
  },
  {
    q: "Does it handle recipes, bills of material and batch production?",
    a: "They are set up for your plant. No two plants mix, boil or bake the same way, so we walk your floor, map your recipes and batches as you actually run them, and set them up in Svasamm One for your plant during onboarding, the way Millingo was built around how rice mills really work.",
  },
  {
    q: "Is GST built in?",
    a: "Yes. GSTR-1, GSTR-3B and the HSN summary come from the same vouchers the plant posts, and the e-invoice board checks each invoice. A month can be locked once its return is filed, so nobody changes a filed figure by accident.",
  },
  {
    q: "Can it pay contract labour and shift workers?",
    a: "Yes. Svasamm People takes punches from a machine at the gate, a phone at the plant or a supervisor's entry, marks shifts, and runs payroll with PF, ESI, professional tax and TDS. Contract labour can have a record without a login.",
  },
  {
    q: "How long does it take to start?",
    a: "It depends on your plant. We start with your gate, stores and books, because those are ready, and add your process steps after a walkthrough of your floor. Book a walkthrough and we will tell you what is ready for your plant and what is not.",
  },
];

export const FOOD_ARTICLES: Article[] = [
  {
    slug: SLUG,
    type: "industry",
    parentProduct: "erp",
    eyebrow: "ERP by Industry · Food",
    title: TITLE,
    byline: "By Mithun K. Singh, Co-Founder, Svasamm Research · 17 November 2026",
    intro:
      "A food plant runs on weight. Grain, cane or flour comes in by the lorry, goes through a process that turns some of it into the product and some into by-products, and leaves as packed goods with GST on every invoice. Most plants keep that chain in four places: a weighbridge register, a stores book, a payroll spreadsheet and Tally. An ERP for the food industry puts it in one. This page says what Svasamm One runs for a food plant, and how your plant's own process is set up with you.",
    sections: [
      {
        type: "p",
        h: "Why a food plant outgrows Tally and registers",
        text: "Tally keeps the books well. It does not know that a lorry weighed 18,420 kg in and 6,180 kg out, that the moisture was high, or that the shift that milled it was short of two people. So the owner reconciles: the weighbridge slip against the purchase bill, the stores book against the physical stock, the attendance register against the payroll. **Every reconciliation is a place where money leaks unseen.** An ERP records each of these once, where it happens, and the books follow from it.",
      },
      {
        type: "list",
        h: "What Svasamm One runs for a food plant today",
        items: [
          { b: "Gate and weighbridge —", t: "for rice mills, every lorry is weighed in and out at the gate and the net weight goes straight into the purchase (Millingo)." },
          { b: "Purchase and stores —", t: "indents, purchase orders, goods received, issues to the floor, transfers between godowns, stock counts and reorder planning. Each supplier is rated from what they actually delivered." },
          { b: "People on the floor —", t: "punches from a machine at the gate or a phone at the plant, shifts and rosters, overtime, payroll with PF, ESI, professional tax and TDS, and contract labour without a login." },
          { b: "The books and GST —", t: "the ledger, cost centres, GSTR-1, GSTR-3B and the HSN summary from the same vouchers, an e-invoice board, and a month lock once a return is filed." },
          { b: "One sign-in, one phone app —", t: "the gate, the stores, the payroll and the books are one system, so a figure is entered once." },
        ],
      },
      {
        type: "table",
        h: "Food industries, and where Svasamm One stands for each",
        cols: ["Industry", "Ready from day one", "Set up for your plant"],
        rows: [
          ["Rice mills", "Millingo: paddy to rice, by-products, CMR, gate weighing; purchase, stores, people, books", "Your state's rules and your reports"],
          ["Flour, atta, dal and poha mills", "Purchase, stores, people, books", "Your intake, process and yield steps, on the rice mill's pattern"],
          ["Sugar and jaggery", "Purchase, stores, people, books", "Your cane intake, boiling batches and costing"],
          ["Biscuits and bakery", "Purchase, stores, people, books", "Your recipes, batch production and batch costing"],
          ["Soft drinks and beverages", "Purchase, stores, people, books", "Your recipes, batch production and batch costing"],
        ],
      },
      {
        type: "p",
        h: "Grain mills: the rice mill's pattern",
        text: "A rice mill is the hardest grain mill to run on software: two kinds of paddy in separate pools, a government season apart from the financial year, an out-turn the state fixes, and by-products (bran, husk, broken rice) sold on their own. Millingo already runs all of it. **A flour, dal or poha mill has the same shape**: grain in by weight, a yield from the process, by-products to account for. That is why we start with grain mills: the pattern exists, and what differs is your own steps, which we build with you.",
      },
      {
        type: "note",
        h: "Recipes and batches: set up around your floor",
        text: "**Recipes, batch production and batch costing are set up for each plant.** A biscuit, bakery or beverage plant starts on purchase, stores, people and books, and for the production floor we walk your floor, map your recipes and batches as you actually run them, and set them up in Svasamm One for your plant during onboarding, the way Millingo was built around how rice mills really work.",
      },
      {
        type: "list",
        h: "What to ask any food-industry ERP in a demo",
        items: [
          { b: "Show me a lorry from the gate to the ledger.", t: "If the weight is typed twice, it will be wrong once." },
          { b: "Where do by-products go?", t: "Bran, husk, broken grain or molasses are money; an ERP that treats them as waste hides it." },
          { b: "How are contract workers paid?", t: "Many plants run half their floor on contract labour; ask to see one paid, with PF and ESI." },
          { b: "Where does GSTR-3B come from?", t: "It should come from the vouchers, not a spreadsheet you fill in after." },
          { b: "How is my own process set up?", t: "Ask who walks your floor, what they need from your side, and by when it runs." },
        ],
      },
    ],
    faqs: FAQS,
    related: [
      // The owner guides first: the hub's "read next" shows three, and these are its own.
      { title: "Flour mill business in India", href: "/pages/flour-mill-business.html" },
      { title: "Jaggery plant: process, yield, cost and GST", href: "/pages/jaggery-plant.html" },
      { title: "Poha mill business", href: "/pages/poha-mill-business.html" },
      { title: "Millingo — rice mill software", href: "/pages/millingo.html" },
      { title: "Choosing rice mill software", href: "/pages/best-rice-mill-software.html" },
      { title: "Svasamm People — payroll and attendance", href: "/pages/hrms.html" },
      { title: "ERP System — overview", href: "/pages/erp.html" },
    ],
    cta: {
      title: "Bring your plant's gate, stores and books",
      body: "Show us a week of weighbridge slips, stores entries and the payroll, and we will walk them through Svasamm One with you, and show how your plant's own steps are set up.",
      productHref: "ERP.dc.html",
      productLabel: "Explore ERP",
    },
    seo: {
      metaTitle: "ERP for Food Industry in India: Mills and Food Plants | Svasamm",
      metaDescription: META,
      canonical: URL,
      ogType: "website",
      ogTitle: TITLE,
      ogDescription: META,
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: TITLE,
        serviceType: "ERP System Software",
        description: META,
        provider: { "@type": "Organization", name: "Svasamm", url: "https://svasamm.com" },
        areaServed: "IN",
        audience: { "@type": "BusinessAudience", name: "Food processing businesses and mills" },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" },
          { "@type": "ListItem", position: 2, name: "ERP System", item: "https://svasamm.com/pages/erp.html" },
          { "@type": "ListItem", position: 3, name: "ERP for the Food Industry", item: URL },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  },
];

// ─── Owner guides (17 Nov 2026) ───────────────────────────────────────────────────────────────
// For the owner who is starting or running a plant and searches for the business, not for software:
// "flour mill business" 320, "jaggery plant" 590, "poha mill" 170 a month (DataForSEO, 17 Nov 2026).
// Each leads to the hub above, with the guide bar (components/Article.tsx reads FOOD_GUIDE_SLUGS).
//
// ⛔ EVERY FIGURE HERE IS FROM AN OFFICIAL OR INSTITUTE SOURCE, read 17 Nov 2026:
// - GST: CBIC Notification 9/2025-Central Tax (Rate) [taxable, Schedule I S. Nos. 51, 53, 106, 109,
//   121, 155, 156] and 10/2025-Central Tax (Rate) [exempt S. Nos. 70, 72, 89, 96, 98, 105], both
//   17 Sep 2025, in force 22 Sep 2025; read in the West Bengal Commercial Taxes consolidated chart
//   "as amended up to 31.03.2026" (comtax.wb.gov.in). "Pre-packaged and labelled" = for retail sale,
//   not more than 25 kg, Legal Metrology Act 2009 (the notification's own Explanation).
// - FSSAI: order F. No. RCD-01002/1/2021-Regulatory-FSSAI-Part(1) of 13 Mar 2026 (registration up to
//   Rs 1.5 crore turnover, state licence to Rs 50 crore, central above; from 1 Apr 2026; it supersedes
//   every earlier criterion, so the old capacity bands and "every grain mill needs a state licence"
//   no longer hold). Perpetual validity: amendment regulations of 10 Mar 2026, FSSAI FAQ of 27 Mar 2026.
// - Flour: MSME-DI Kolkata project profile "Mini Flour Mill" (March 2021): roller split, chakkis mill
//   about 70% of wheat, the capital, turnover, prices (atta Rs 21, suji Rs 39, maida Rs 20.5 a kg) and
//   8.51% net profit.
// - Jaggery: NIFTEM PMFME detailed project report "Jaggery Making Business": the process, about 10% of
//   cane weight as jaggery, the Rs 13.56 lakh project. Crusher extraction 50-55% / 55-60% and recovery 9%
//   (traditional) to 13% (modern): Venkatesan et al., "Jaggery Making Process and Preservation: A Review",
//   Agricultural Reviews 45(2): 218-228, 2024 (doi 10.18805/ag.R-2367).
// - Poha: NIFTEM PMFME handbook "Processing of Black Rice", the poha section: soak 24-30 h to 30-32%
//   moisture, roast 172-175 C for 35-40 s, edge runners 50-150 kg/h, 65-70% yield.
// - PMFME: 35% of eligible cost up to Rs 10 lakh (both DPRs); extended till September 2026 (PIB); no
//   further period notified when written, so the pages tell the owner to ask the state nodal agency.
// Svasamm One claims: only what the hub above says (purchase, stores, people, books today; the
// process steps and batches set up for the plant at onboarding). No gate weighing (that is Millingo's,
// for rice), no moisture tracking, no recipes.
export const FOOD_GUIDE_SLUGS = new Set(["flour-mill-business", "jaggery-plant", "poha-mill-business"]);

const HUB = "/pages/erp-for-food-industry.html";
const DATE = "2026-11-17";

function guideLd(slug: string, headline: string, description: string, crumb: string, faqs: { q: string; a: string }[]) {
  const url = `https://svasamm.com/pages/${slug}.html`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline,
      description,
      author: {
        "@type": "Person",
        name: "Mithun K. Singh",
        jobTitle: "Co-Founder",
        worksFor: { "@type": "Organization", name: "Svasamm Research Pvt Ltd" },
      },
      publisher: { "@type": "Organization", name: "Svasamm" },
      datePublished: DATE,
      dateModified: DATE,
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" },
        { "@type": "ListItem", position: 2, name: "ERP for the Food Industry", item: `https://svasamm.com${HUB}` },
        { "@type": "ListItem", position: 3, name: crumb, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
}

const FSSAI_ROW = "FSSAI, by turnover (from 1 April 2026): registration up to ₹1.5 crore, a state licence up to ₹50 crore, a central licence above that.";

const FLOUR_FAQS = [
  {
    q: "Is there GST on atta?",
    a: "Not when it is sold loose. Wheat flour (atta and maida, HSN 1101) is exempt unless it is pre-packaged and labelled; then it is 5%. Pre-packaged and labelled means packed for retail sale in a pack of 25 kg or less that must carry the Legal Metrology declarations. So a 50 kg bag sold to a bakery is nil and a 5 kg pack on a shop shelf is 5%. These are the rates in force since 22 September 2025.",
  },
  {
    q: "Which FSSAI licence does a flour mill need?",
    a: "Since 1 April 2026 it depends on turnover alone: registration up to ₹1.5 crore a year, a state licence above ₹1.5 crore and up to ₹50 crore, and a central licence above ₹50 crore (FSSAI order of 13 March 2026). A licence or registration issued from 1 April 2026 does not need renewing, though the annual fee and returns still do.",
  },
  {
    q: "How much atta comes from 100 kg of wheat?",
    a: "A chakki grinds the whole grain, so nearly all of it leaves as atta; the loss is in cleaning and moisture. A roller flour mill splits the wheat. The Government of India's MSME project profile for a mini flour mill gives about 30 kg maida, 20 kg suji, 40 kg atta and 10 kg bran and other from 100 kg of wheat. Your own wheat and settings decide your real figure, which is why it is worth measuring per lot.",
  },
  {
    q: "Is there flour mill software on Svasamm One?",
    a: "Not as a ready product the way Millingo is for rice mills. A flour mill can run its purchase, stores, payroll and books on Svasamm One today, and we build its intake and yield steps with it, on the pattern Millingo uses for rice.",
  },
];
const FLOUR_TITLE = "Flour Mill Business in India: Licences, GST, Yield and Records";
const FLOUR_META =
  "Starting a flour mill business in India: chakki or roller mill, the FSSAI licence by turnover, GST on loose and packed atta, and the yield from 100 kg of wheat.";

const JAGGERY_FAQS = [
  {
    q: "How much jaggery comes from one tonne of sugarcane?",
    a: "About 100 kg. NIFTEM's model project report for a jaggery unit puts the yield at about 10% of the cane's weight: 100 kg of cane gives about 10 kg of jaggery. A 2024 review of jaggery making gives 9% for the traditional process and 13% for a modern one.",
  },
  {
    q: "Is there GST on jaggery?",
    a: "Not when it is sold loose. Jaggery of all types (gur, khandsari, rab) is exempt unless it is pre-packaged and labelled, which is 5%: packed for retail sale, 25 kg or less, with the Legal Metrology declarations. Molasses and bagasse sold off the plant are 5%. These are the rates in force since 22 September 2025.",
  },
  {
    q: "What does a small jaggery plant cost to set up?",
    a: "NIFTEM's model project report under the PMFME scheme sets out a unit of about 1.6 lakh kg of jaggery a year at a total project cost of ₹13.56 lakh: ₹5.20 lakh of machinery, ₹2.80 lakh of other fixed assets and ₹5.56 lakh of working capital, with no land or building in the figure. Treat it as a starting point for your own quotation, not a price.",
  },
  {
    q: "Can I run a jaggery plant on Svasamm One?",
    a: "Yes. Purchase, stores, season payroll and the books run from day one, and your cane intake, boiling batches and batch costing are set up for your plant during onboarding, after we walk your floor.",
  },
];
const JAGGERY_TITLE = "Jaggery Plant in India: Process, Yield, Cost and GST";
const JAGGERY_META =
  "Setting up a jaggery plant in India: the process, about 10 kg of jaggery from 100 kg of cane, what a small unit costs, GST on gur and the FSSAI licence.";

const POHA_FAQS = [
  {
    q: "How is poha made?",
    a: "Paddy is soaked for 24 to 30 hours until it holds 30 to 32% moisture, drained, roasted in hot sand at about 172 to 175°C for 35 to 40 seconds, and flattened while hot in an edge runner or a roller. Husk and bran are separated, the flakes are sieved to remove broken pieces and powder, thick flakes are shade-dried, and the poha is packed. This is the process set out in NIFTEM's handbook under the PMFME scheme.",
  },
  {
    q: "How much poha comes from 100 kg of paddy?",
    a: "About 65 to 70 kg, according to NIFTEM's handbook, depending on the variety, the paddy's quality, the process and the grade of flake.",
  },
  {
    q: "Is there GST on poha?",
    a: "Not when it is sold loose. Flattened or beaten rice (chira) is exempt unless it is pre-packaged and labelled, which is 5%: packed for retail sale, 25 kg or less, with the Legal Metrology declarations. Rice bran sold off the mill is 5%; unprepared husk is exempt. These are the rates in force since 22 September 2025.",
  },
  {
    q: "Is there poha mill software on Svasamm One?",
    a: "Not as a ready product. A poha mill starts where a rice mill starts, with paddy by weight, so we build its soak, roast and flake steps with it on the pattern Millingo uses for rice. Its purchase, stores, payroll and books run on Svasamm One today.",
  },
];
const POHA_TITLE = "Poha Mill Business: Process, Yield, GST and Records";
const POHA_META =
  "Starting a poha mill: how paddy becomes poha, 65 to 70 kg from 100 kg of paddy, GST on loose and packed chira, the FSSAI licence and the records to keep.";

const CTA_LABEL = "Explore Svasamm One for food";

export const FOOD_GUIDES: Article[] = [
  {
    slug: "flour-mill-business",
    type: "guide",
    parentProduct: "erp",
    eyebrow: "Owner's guide · Flour mills",
    title: FLOUR_TITLE,
    byline: "By Mithun K. Singh, Co-Founder, Svasamm Research · 17 November 2026",
    intro:
      "A flour mill business looks simple from outside: wheat goes in, atta comes out. Inside, the money is made or lost in a few points of yield, in the difference between a loose bag and a packed one at GST time, and in stock nobody counted. This guide is for the owner starting a flour mill or running one: the two kinds of mill, the licences, the GST, what 100 kg of wheat should give you, and the records that protect a thin margin.",
    sections: [
      {
        type: "table",
        h: "Chakki or roller mill: two different businesses",
        cols: ["", "Chakki (disc or stone) mill", "Roller flour mill"],
        rows: [
          ["What it makes", "Whole-wheat atta, and often besan, masala or other grains on the same stones", "Maida, suji (rawa), atta and bran, split from the same wheat"],
          ["Who buys", "Households, shops, small packers", "Bakeries, biscuit makers, wholesalers, packers"],
          ["Yield question", "How much of the wheat leaves as atta after cleaning and moisture loss", "How the wheat splits between maida, suji, atta and bran"],
          ["Share of the market", "About 70% of India's wheat is still milled in chakkis (MSME-DI)", "The rest: larger plants, bulk buyers"],
        ],
      },
      {
        type: "p",
        h: "What a mini flour mill costs and earns",
        text: "The Government of India's MSME Development Institute in Kolkata published a project profile for a mini roller flour mill in March 2021. It plans for about 1,435 tonnes of atta, 240 tonnes of suji, 240 tonnes of maida and 342 tonnes of besan a year on one shift. It puts the fixed capital at about ₹78.8 lakh and a month's working capital at about ₹44.4 lakh, **about ₹1.23 crore in all**, for a turnover of about ₹6 crore a year. Its net profit is **8.51% of turnover**. That last figure is the one to remember: at 8.5%, a small leak in yield or stock decides whether the year is good or poor.",
      },
      {
        type: "list",
        h: "The licences and registrations",
        items: [
          { b: "FSSAI —", t: FSSAI_ROW + " The old capacity bands no longer apply (FSSAI order of 13 March 2026). The mini mill above, at about ₹6 crore, needs a state licence." },
          { b: "No renewals —", t: "a licence or registration issued from 1 April 2026 stays valid unless it is suspended, cancelled or surrendered. Missing the annual fee or the annual return gets it deemed suspended, so those still matter." },
          { b: "GST registration —", t: "once your turnover crosses your state's limit for goods, or from the start if you sell packed atta to other states." },
          { b: "Udyam registration —", t: "free, online, and what banks and state schemes ask for." },
          { b: "Your state's own —", t: "a factory licence, pollution board consent and the local trade licence vary by state and size; ask your district industries centre." },
        ],
      },
      {
        type: "table",
        h: "GST on a flour mill's goods",
        cols: ["What you sell", "Loose, or over 25 kg", "Pre-packaged and labelled, 25 kg or less"],
        rows: [
          ["Atta, maida (HSN 1101)", "Nil", "5%"],
          ["Suji, rawa, dalia (HSN 1103)", "Nil", "5%"],
          ["Other cereal flours: maize, bajra, ragi (HSN 1102)", "Nil", "5%"],
          ["Wheat bran sold as cattle feed", "Nil", "Nil"],
        ],
      },
      {
        type: "p",
        text: "These are the rates in force since 22 September 2025 (CBIC Notifications 9/2025 and 10/2025, Central Tax (Rate)). **Pre-packaged and labelled** means packed for retail sale, in a pack of 25 kg or less, that must carry the Legal Metrology declarations. One mill can sell both on the same day: a 50 kg bag to a bakery at nil and a 5 kg pack to a shop at 5%. Each invoice has to say which, and the input tax you claim has to follow the taxable share of your sales, not all of it.",
      },
      {
        type: "p",
        h: "Yield: what 100 kg of wheat should give you",
        text: "A chakki grinds the whole grain, so nearly all the wheat leaves as atta; what you lose is dust, stones and chaff in cleaning, and moisture in grinding. A roller mill splits the wheat, and the MSME profile gives the split as about **30% maida, 20% suji, 40% atta and 10% bran and other**. Your wheat will not read the profile. A soft lot, a wet lot or a worn roll moves the split, and the products do not sell at one price: the MSME profile prices suji at ₹39 a kg against ₹21 for atta. So the figure worth having is your own, per lot: wheat in by weight, each product out by weight, and the gap.",
      },
      {
        type: "list",
        h: "The records a flour mill should keep",
        items: [
          { b: "Wheat in, by lot —", t: "the supplier, the weight on the weighbridge slip, the price and the bill, so a lot can be followed to what it gave." },
          { b: "Out-turn per lot —", t: "maida, suji, atta and bran by weight, against the wheat that went in." },
          { b: "Stock you can count —", t: "wheat in the godown, flour in bags, packing material, checked against the book every month." },
          { b: "Loose and packed, apart —", t: "every sale marked nil or 5%, so GSTR-1 and GSTR-3B come out right and the input credit follows the taxable share." },
          { b: "The shift and the payroll —", t: "who ran the mill, the overtime, PF and ESI, because labour is the second cost after wheat." },
        ],
      },
      {
        type: "note",
        h: "Government help: check before you count on it",
        text: "The PMFME scheme of the Ministry of Food Processing Industries has paid **35% of a micro food unit's eligible project cost, up to ₹10 lakh**, against a bank loan. PIB reported it extended till September 2026; when we wrote this, no further period had been notified. Ask your state's nodal agency or district resource person whether it is open before you put it in your plan.",
      },
      {
        type: "list",
        h: "Sources",
        items: [
          { b: "MSME Development Institute, Kolkata", t: "— project profile \"Mini Flour Mill\", March 2021 (dcmsme.gov.in)." },
          { b: "CBIC Notification 9/2025-Central Tax (Rate), 17 September 2025", t: "— Schedule I, S. Nos. 51 to 53 (5% when pre-packaged and labelled)." },
          { b: "CBIC Notification 10/2025-Central Tax (Rate), 17 September 2025", t: "— S. Nos. 70 to 72 and 105 (nil when loose; wheat bran)." },
          { b: "FSSAI order of 13 March 2026", t: "— F. No. RCD-01002/1/2021-Regulatory-FSSAI-Part(1): revised turnover thresholds from 1 April 2026." },
          { b: "FSSAI FAQs of 27 March 2026", t: "— perpetual validity of licences and registrations." },
        ],
      },
    ],
    faqs: FLOUR_FAQS,
    related: [
      { title: "ERP for the food industry", href: HUB },
      { title: "Jaggery plant: process, yield, cost and GST", href: "/pages/jaggery-plant.html" },
      { title: "Poha mill business", href: "/pages/poha-mill-business.html" },
      { title: "Svasamm People — payroll and attendance", href: "/pages/hrms.html" },
    ],
    cta: {
      title: "Run your flour mill's stores, payroll and books in one place",
      body: "Show us a month of wheat bills, stock and payroll and we will walk them through Svasamm One with you, and build your intake and yield steps on the pattern Millingo uses for rice. Free, no obligation.",
      productHref: "ERP-Food.dc.html",
      productLabel: CTA_LABEL,
    },
    seo: {
      metaTitle: "Flour Mill Business in India: Licences, GST, Yield | Svasamm",
      metaDescription: FLOUR_META,
      canonical: "https://svasamm.com/pages/flour-mill-business.html",
      ogType: "article",
      ogTitle: FLOUR_TITLE,
      ogDescription: FLOUR_META,
    },
    jsonLd: guideLd("flour-mill-business", FLOUR_TITLE, FLOUR_META, "Flour mill business", FLOUR_FAQS),
  },
  {
    slug: "jaggery-plant",
    type: "guide",
    parentProduct: "erp",
    eyebrow: "Owner's guide · Jaggery",
    title: JAGGERY_TITLE,
    byline: "By Mithun K. Singh, Co-Founder, Svasamm Research · 17 November 2026",
    intro:
      "A jaggery plant turns about a tenth of its cane into money. Everything else is juice left in the bagasse, water boiled away and scum skimmed off, so a point of recovery is worth more than almost anything else the owner can change. This guide is for the owner setting up a jaggery plant or running one: the process, the yield, what a small unit costs, the GST and the licence, and the records a cane season needs.",
    sections: [
      {
        type: "list",
        h: "From cane to block: the process",
        items: [
          { b: "Crushing —", t: "mature cane is crushed for its juice. A vertical crusher takes out about 50 to 55% of the cane's weight as juice and a horizontal one about 55 to 60%; the rest leaves as bagasse." },
          { b: "Filtering and clarifying —", t: "the juice is filtered and heated in shallow iron pans; a vegetable clarificant such as bhindi (okra) is added and the scum is lifted off as it rises." },
          { b: "Boiling —", t: "the juice is boiled down until it is thick enough to set." },
          { b: "Moulding —", t: "the hot mass is cooled in moulds into blocks of 1 kg and up, or worked into powder or small cubes." },
          { b: "Packing —", t: "blocks go out in jute cloth or packs; this is also where loose and packed part ways for GST." },
        ],
      },
      {
        type: "p",
        h: "Yield: about 10 kg of jaggery from 100 kg of cane",
        text: "NIFTEM's model project report for a jaggery unit puts the yield at **about 10% of the cane's weight**. A 2024 review of jaggery making gives 9% for the traditional process and 13% for a modern one; the cane's variety and quality move it too. The arithmetic is plain: 100 tonnes of cane gives 10 tonnes at 10% and 11 tonnes at 11%. **One point of recovery is a tenth more jaggery from the same cane**, and cane is the plant's largest cost. That is why a season's recovery is worth knowing per day and per batch, not only at the end.",
      },
      {
        type: "p",
        h: "What a small jaggery unit costs",
        text: "NIFTEM's detailed project report under the PMFME scheme sets out a unit with capacity for about 1.6 lakh kg of jaggery a year, planned at 55% of that in the first year. Its total project cost is **₹13.56 lakh**: ₹5.20 lakh of machinery and equipment, ₹2.80 lakh of other fixed assets and ₹5.56 lakh of working capital, with no land or building in the figure. Working capital is two-fifths of the total for a reason: a jaggery plant buys most of its cane in a few months and sells its jaggery through the year.",
      },
      {
        type: "table",
        h: "GST on a jaggery plant's goods",
        cols: ["What you sell", "Loose, or over 25 kg", "Pre-packaged and labelled, 25 kg or less"],
        rows: [
          ["Jaggery of all types: gur, khandsari, rab", "Nil", "5%"],
          ["Molasses", "5%", "5%"],
          ["Bagasse sold off the plant", "5%", "5%"],
        ],
      },
      {
        type: "p",
        text: "These are the rates in force since 22 September 2025 (CBIC Notifications 9/2025 and 10/2025, Central Tax (Rate)). **Pre-packaged and labelled** means packed for retail sale, in a pack of 25 kg or less, that must carry the Legal Metrology declarations. A plant that sells loose blocks to traders and 1 kg packs to shops has both kinds of sale, and each invoice has to say which.",
      },
      {
        type: "list",
        h: "The licences and registrations",
        items: [
          { b: "FSSAI —", t: FSSAI_ROW + " The old capacity bands no longer apply (FSSAI order of 13 March 2026)." },
          { b: "No renewals —", t: "a licence or registration issued from 1 April 2026 stays valid unless it is suspended, cancelled or surrendered; the annual fee and return still have to be paid and filed." },
          { b: "GST registration —", t: "once your turnover crosses your state's limit for goods, or from the start if you sell packed jaggery to other states." },
          { b: "Udyam registration —", t: "free, online, and what banks and state schemes ask for." },
          { b: "Your state's own —", t: "the furnace and its smoke bring pollution board consent; the rules for buying cane vary by state. Ask your district industries centre." },
        ],
      },
      {
        type: "list",
        h: "The records a jaggery plant should keep",
        items: [
          { b: "Cane in, by grower and day —", t: "the weight, the price, and what is still owed to each grower." },
          { b: "Recovery per day or batch —", t: "cane crushed against jaggery made, so a bad crusher setting or a poor lot of cane shows up the same week." },
          { b: "Stock through the year —", t: "jaggery in store by grade and pack, checked against the book, because most of it is sold months after it is made." },
          { b: "Loose and packed, apart —", t: "every sale marked nil or 5%, and molasses and bagasse sales at 5%." },
          { b: "Season labour —", t: "a plant runs a large crew for a few months; their days, wages, PF and ESI have to close when the season does." },
        ],
      },
      {
        type: "note",
        h: "Government help: check before you count on it",
        text: "The PMFME scheme has paid **35% of a micro food unit's eligible project cost, up to ₹10 lakh**, against a bank loan; NIFTEM's jaggery report is written for it. PIB reported the scheme extended till September 2026; when we wrote this, no further period had been notified. Ask your state's nodal agency or district resource person whether it is open before you put it in your plan.",
      },
      {
        type: "list",
        h: "Sources",
        items: [
          { b: "NIFTEM, PMFME", t: "— detailed project report \"Jaggery Making Business\" (process, 10% yield, project cost)." },
          { b: "Venkatesan, Lakshmanan and Raman, Agricultural Reviews 45(2), 2024", t: "— \"Jaggery Making Process and Preservation: A Review\": juice extraction by crusher type, recovery of 9% to 13%." },
          { b: "CBIC Notification 9/2025-Central Tax (Rate), 17 September 2025", t: "— Schedule I, S. Nos. 106, 109 and 156." },
          { b: "CBIC Notification 10/2025-Central Tax (Rate), 17 September 2025", t: "— S. No. 96 (jaggery, nil when loose)." },
          { b: "FSSAI order of 13 March 2026", t: "— revised turnover thresholds from 1 April 2026." },
        ],
      },
    ],
    faqs: JAGGERY_FAQS,
    related: [
      { title: "ERP for the food industry", href: HUB },
      { title: "Flour mill business in India", href: "/pages/flour-mill-business.html" },
      { title: "Poha mill business", href: "/pages/poha-mill-business.html" },
      { title: "Svasamm People — payroll and attendance", href: "/pages/hrms.html" },
    ],
    cta: {
      title: "Close the season's cane, stock and wages in one place",
      body: "Show us a season's cane bills, stock and labour and we will walk them through Svasamm One with you, and set up your boiling batches around how your plant runs. Free, no obligation.",
      productHref: "ERP-Food.dc.html",
      productLabel: CTA_LABEL,
    },
    seo: {
      metaTitle: "Jaggery Plant in India: Process, Yield, Cost, GST | Svasamm",
      metaDescription: JAGGERY_META,
      canonical: "https://svasamm.com/pages/jaggery-plant.html",
      ogType: "article",
      ogTitle: JAGGERY_TITLE,
      ogDescription: JAGGERY_META,
    },
    jsonLd: guideLd("jaggery-plant", JAGGERY_TITLE, JAGGERY_META, "Jaggery plant", JAGGERY_FAQS),
  },
  {
    slug: "poha-mill-business",
    type: "guide",
    parentProduct: "erp",
    eyebrow: "Owner's guide · Poha mills",
    title: POHA_TITLE,
    byline: "By Mithun K. Singh, Co-Founder, Svasamm Research · 17 November 2026",
    intro:
      "A poha mill buys paddy, as a rice mill does, and sells flakes by grade. Between the two, the paddy is soaked, roasted and pressed, and a third of its weight leaves as husk, bran, broken pieces and water. This guide is for the owner starting a poha mill or running one: the process, the yield, the GST and the licence, and the records that show where the third went.",
    sections: [
      {
        type: "list",
        h: "How paddy becomes poha",
        items: [
          { b: "Soaking —", t: "paddy is soaked in water for 24 to 30 hours, until it holds 30 to 32% moisture, and drained." },
          { b: "Roasting —", t: "the soaked paddy is roasted in hot sand at about 172 to 175°C for 35 to 40 seconds, which dries the husk." },
          { b: "Flaking —", t: "the hot paddy is pressed flat in an edge runner (machines of 50, 100 and 150 kg of paddy an hour) or a roller; husk and bran fall out through the mesh." },
          { b: "Cleaning and sieving —", t: "the rest of the husk is winnowed off and the flakes are sieved to take out broken pieces, powder and lumps." },
          { b: "Drying and packing —", t: "thick flakes are shade-dried before packing, because they hold more moisture and keep for less time than medium and thin ones." },
        ],
      },
      {
        type: "p",
        h: "Yield: 65 to 70 kg of poha from 100 kg of paddy",
        text: "NIFTEM's handbook under the PMFME scheme gives **65 to 70% of the paddy's weight** as poha, depending on the variety, the paddy's quality, the process and the grade of flake. The rest is husk, bran, broken pieces and the water driven off. On 10 tonnes of paddy, the gap between 65% and 70% is **500 kg of poha**. A mill that knows its yield per lot knows which paddy and which shift gave it, and buys accordingly.",
      },
      {
        type: "table",
        h: "GST on a poha mill's goods",
        cols: ["What you sell", "Loose, or over 25 kg", "Pre-packaged and labelled, 25 kg or less"],
        rows: [
          ["Poha: flattened or beaten rice, chira (HSN 1904)", "Nil", "5%"],
          ["Rice bran (not de-oiled)", "5%", "5%"],
          ["Husk, unprepared", "Nil", "Nil"],
        ],
      },
      {
        type: "p",
        text: "These are the rates in force since 22 September 2025 (CBIC Notifications 9/2025 and 10/2025, Central Tax (Rate)). **Pre-packaged and labelled** means packed for retail sale, in a pack of 25 kg or less, that must carry the Legal Metrology declarations. A mill selling 30 kg bags to wholesalers and 500 g packs to shops has both kinds of sale, and each invoice has to say which.",
      },
      {
        type: "list",
        h: "The licences and registrations",
        items: [
          { b: "FSSAI —", t: FSSAI_ROW + " The old capacity bands no longer apply (FSSAI order of 13 March 2026)." },
          { b: "No renewals —", t: "a licence or registration issued from 1 April 2026 stays valid unless it is suspended, cancelled or surrendered; the annual fee and return still have to be paid and filed." },
          { b: "GST registration —", t: "once your turnover crosses your state's limit for goods, or from the start if you sell packed poha to other states." },
          { b: "Udyam registration —", t: "free, online, and what banks and state schemes ask for." },
          { b: "Your state's own —", t: "the roaster's furnace brings pollution board consent, and a factory licence depends on your workers and power. Ask your district industries centre." },
        ],
      },
      {
        type: "list",
        h: "The records a poha mill should keep",
        items: [
          { b: "Paddy in, by lot —", t: "the supplier, the variety, the weight on the slip, the price and the bill." },
          { b: "Yield per lot —", t: "paddy soaked against poha out by grade (thick, medium, thin), and the broken pieces and bran, so a poor lot or a worn runner shows up the same week." },
          { b: "Stock by grade —", t: "paddy in the godown and poha in bags by grade, checked against the book; thick poha keeps for less time, so it should leave first." },
          { b: "Loose and packed, apart —", t: "every sale marked nil or 5%, and bran sales at 5%." },
          { b: "The shift and the payroll —", t: "who worked which shift, the overtime, PF and ESI, because labour is the second cost after paddy." },
        ],
      },
      {
        type: "note",
        h: "Government help: check before you count on it",
        text: "The PMFME scheme has paid **35% of a micro food unit's eligible project cost, up to ₹10 lakh**, against a bank loan. PIB reported it extended till September 2026; when we wrote this, no further period had been notified. Ask your state's nodal agency or district resource person whether it is open before you put it in your plan.",
      },
      {
        type: "list",
        h: "Sources",
        items: [
          { b: "NIFTEM, PMFME", t: "— handbook \"Processing of Black Rice\", the poha section (process, machines, 65 to 70% yield)." },
          { b: "CBIC Notification 9/2025-Central Tax (Rate), 17 September 2025", t: "— Schedule I, S. Nos. 121 and 155." },
          { b: "CBIC Notification 10/2025-Central Tax (Rate), 17 September 2025", t: "— S. Nos. 89 and 98 (husk; poha, nil when loose)." },
          { b: "FSSAI order of 13 March 2026", t: "— revised turnover thresholds from 1 April 2026." },
        ],
      },
    ],
    faqs: POHA_FAQS,
    related: [
      { title: "ERP for the food industry", href: HUB },
      { title: "Millingo — rice mill software", href: "/pages/millingo.html" },
      { title: "Flour mill business in India", href: "/pages/flour-mill-business.html" },
      { title: "Jaggery plant: process, yield, cost and GST", href: "/pages/jaggery-plant.html" },
    ],
    cta: {
      title: "Run your poha mill's paddy, stock and books in one place",
      body: "Show us a month of paddy bills, stock and payroll and we will walk them through Svasamm One with you, and build your soak, roast and flake steps on the pattern Millingo uses for rice. Free, no obligation.",
      productHref: "ERP-Food.dc.html",
      productLabel: CTA_LABEL,
    },
    seo: {
      metaTitle: "Poha Mill Business: Process, Yield, GST | Svasamm",
      metaDescription: POHA_META,
      canonical: "https://svasamm.com/pages/poha-mill-business.html",
      ogType: "article",
      ogTitle: POHA_TITLE,
      ogDescription: POHA_META,
    },
    jsonLd: guideLd("poha-mill-business", POHA_TITLE, POHA_META, "Poha mill business", POHA_FAQS),
  },
];

export const FOOD_ARTICLE_BY_SLUG: Record<string, Article> = Object.fromEntries(
  [...FOOD_ARTICLES, ...FOOD_GUIDES].map((a) => [a.slug, a]),
);
