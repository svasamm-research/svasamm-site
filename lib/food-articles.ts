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
// NOT BUILT, and said so on the page: recipes / bills of material, batch production orders,
// batch costing, batch traceability. Do not add a sentence you cannot find in the code.
import type { Article } from "./types";

const SLUG = "erp-for-food-industry";
const URL = `https://svasamm.com/pages/${SLUG}.html`;
const TITLE = "ERP for the Food Industry: Mills and Food Plants in India";
const META =
  "ERP for food makers in India: gate and weighbridge, purchase and stores, payroll for plant workers, GST and the books in one system. What Svasamm One runs today and what is still being built.";

const FAQS = [
  {
    q: "What is an ERP for the food industry?",
    a: "One system that follows raw material from the gate to the invoice: what came in and at what weight, what went into the process, what came out (the main product and the by-products), what was sold, who worked the shifts, and what all of it did to the books and GST. In a food plant those steps are usually spread over a weighbridge register, a stores book, a payroll spreadsheet and Tally.",
  },
  {
    q: "Which food businesses can use Svasamm One today?",
    a: "Rice mills run on Millingo today. Grain mills of the same shape (flour and atta, dal, poha) can run their purchase, stores, people and books on Svasamm One now, and we build their own process steps with them, as we did for rice. Plants whose work is recipes and batches (biscuits, bakery, soft drinks) can run purchase, stores, people and books; recipe and batch production is still being built.",
  },
  {
    q: "Does it handle recipes, bills of material and batch production?",
    a: "Not yet. Recipes (bills of material), batch production orders and batch costing are being built. Until they ship we will not tell you otherwise: in a walkthrough we show what runs today and say plainly what does not.",
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
      "A food plant runs on weight. Grain, cane or flour comes in by the lorry, goes through a process that turns some of it into the product and some into by-products, and leaves as packed goods with GST on every invoice. Most plants keep that chain in four places: a weighbridge register, a stores book, a payroll spreadsheet and Tally. An ERP for the food industry puts it in one. This page says what Svasamm One runs for a food plant today, what we build with you, and what is not built yet.",
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
        cols: ["Industry", "Runs today", "Built with you", "Not built yet"],
        rows: [
          ["Rice mills", "Millingo: paddy to rice, by-products, CMR, gate weighing; purchase, stores, people, books", "Your state's rules and your reports", "—"],
          ["Flour, atta, dal and poha mills", "Purchase, stores, people, books", "Your intake, process and yield steps, on the rice mill's pattern", "—"],
          ["Sugar and jaggery", "Purchase, stores, people, books", "Your intake and weighing", "Batch production and costing"],
          ["Biscuits and bakery", "Purchase, stores, people, books", "—", "Recipes, batch production, batch costing"],
          ["Soft drinks and beverages", "Purchase, stores, people, books", "—", "Recipes, batch production, batch costing"],
        ],
      },
      {
        type: "p",
        h: "Grain mills: the rice mill's pattern",
        text: "A rice mill is the hardest grain mill to run on software: two kinds of paddy in separate pools, a government season apart from the financial year, an out-turn the state fixes, and by-products (bran, husk, broken rice) sold on their own. Millingo already runs all of it. **A flour, dal or poha mill has the same shape**: grain in by weight, a yield from the process, by-products to account for. That is why we start with grain mills: the pattern exists, and what differs is your own steps, which we build with you.",
      },
      {
        type: "note",
        h: "What is not built yet",
        text: "**Recipes (bills of material), batch production orders, batch costing and batch traceability are being built.** A biscuit, bakery or beverage plant can run its purchase, stores, people and books on Svasamm One today, but not its production floor. We say this here so a walkthrough never starts with a surprise.",
      },
      {
        type: "list",
        h: "What to ask any food-industry ERP in a demo",
        items: [
          { b: "Show me a lorry from the gate to the ledger.", t: "If the weight is typed twice, it will be wrong once." },
          { b: "Where do by-products go?", t: "Bran, husk, broken grain or molasses are money; an ERP that treats them as waste hides it." },
          { b: "How are contract workers paid?", t: "Many plants run half their floor on contract labour; ask to see one paid, with PF and ESI." },
          { b: "Where does GSTR-3B come from?", t: "It should come from the vouchers, not a spreadsheet you fill in after." },
          { b: "What is not built?", t: "Every vendor has a list. Ask for it before you sign, not after." },
        ],
      },
    ],
    faqs: FAQS,
    related: [
      { title: "Millingo — rice mill software", href: "/pages/millingo.html" },
      { title: "Choosing rice mill software", href: "/pages/best-rice-mill-software.html" },
      { title: "Svasamm People — payroll and attendance", href: "/pages/hrms.html" },
      { title: "ERP System — overview", href: "/pages/erp.html" },
    ],
    cta: {
      title: "Bring your plant's gate, stores and books",
      body: "Show us a week of weighbridge slips, stores entries and the payroll, and we will walk them through Svasamm One with you — and say plainly what is not built for your plant yet.",
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

export const FOOD_ARTICLE_BY_SLUG: Record<string, Article> = Object.fromEntries(FOOD_ARTICLES.map((a) => [a.slug, a]));
