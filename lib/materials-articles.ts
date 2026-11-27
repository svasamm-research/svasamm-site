// Svasamm Materials — four purchase and stores guides (24 Nov 2026), hand-authored, merged in
// lib/article-registry.ts. Materials is NOT its own product on this site (Mithun, 27 Nov 2026): it
// is part of Millingo and of Svasamm One's ERP, and can be sold alone, so the guides sit under the
// ERP page. Industry pages (ERPNext's /industry pattern) are the next version, not this one.
// The searches a purchase or stores head makes: three-way matching, physical stock verification,
// the reorder level formula, vendor rating.
//
// ⛔ CLAIMS ABOUT THE PRODUCT were checked against svasamm-platform origin/develop modules/materials,
// 24 Nov 2026 (migrations 0001-0029, packages/materials): indents with approval above a value;
// purchase orders with approval and a budget check (off / warn / block, commitments counted); GRN that
// refuses more than is left on the order; the bill matched three ways, input GST per line, TDS on
// purchases; purchase returns as a debit note; issues to a department or a machine at moving average;
// transfers in one step, or two through "on the road" to a hired godown; the stock count; reservations;
// reorder levels raising an indent; RFQs, rate contracts, approved vendors, vendor rating from
// documents; phone floor screens (weigh-in, issue, move, count).
// NOT CLAIMED, because the code does not do it: FIFO, batch, lot, serial or expiry tracking; unit
// conversion; a receipt tolerance; e-way bill or e-invoice generation; reverse-charge bills;
// issuing for production (Millingo issues its own). The same holds for the ERP and Millingo pages.
// Rules cited: CGST Act 2017 s.16(2) (the conditions for input tax credit, among them that the goods
// were received); CARO 2020 para 3(ii)(a) (the auditor reports on physical verification of inventory
// and on discrepancies of 10% or more in aggregate for a class). TDS on purchases is named without a
// section number: the Income-tax Act 2025 renumbers it from 1 April 2026.
import type { Article, Block, Faq } from "./types";

const BYLINE = "By Mithun K. Singh, Co-Founder, Svasamm Research · 24 November 2026";
const PRODUCT = { title: "Svasamm One ERP — purchase and stores", href: "/pages/erp.html" };

type Spec = {
  slug: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  meta: string;
  intro: string;
  sections: Block[];
  faqs: Faq[];
  related: { title: string; href: string }[];
  cta: { title: string; body: string };
};

function build(s: Spec): Article {
  const url = `https://svasamm.com/pages/${s.slug}.html`;
  return {
    slug: s.slug,
    type: "guide",
    parentProduct: "erp",
    eyebrow: s.eyebrow,
    title: s.title,
    byline: BYLINE,
    intro: s.intro,
    sections: s.sections,
    faqs: s.faqs,
    related: [...s.related, PRODUCT],
    cta: { ...s.cta, productHref: "/pages/erp.html", productLabel: "Explore the ERP" },
    seo: {
      metaTitle: s.metaTitle,
      metaDescription: s.meta,
      canonical: url,
      ogType: "article",
      ogTitle: s.title,
      ogDescription: s.meta,
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: s.title,
        description: s.meta,
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Co-Founder",
          worksFor: { "@type": "Organization", name: "Svasamm Research Pvt Ltd" },
        },
        publisher: { "@type": "Organization", name: "Svasamm" },
        datePublished: "2026-11-24",
        dateModified: "2026-11-24",
        mainEntityOfPage: url,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" },
          { "@type": "ListItem", position: 2, name: "ERP System", item: "https://svasamm.com/pages/erp.html" },
          { "@type": "ListItem", position: 3, name: s.title, item: url },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  } as Article;
}

const THREE_WAY = build({
  slug: "three-way-match-po-grn-bill",
  eyebrow: "Purchase Guide",
  title: "Three-Way Matching: Purchase Order, GRN and Bill",
  metaTitle: "Three-Way Matching: Purchase Order, GRN and Bill | Svasamm",
  meta: "What three-way matching is, why the GRN matters for input GST credit, the five mismatches it catches, and how to set it up in a small or mid-sized firm.",
  intro:
    "Three-way matching checks a vendor's bill against two things before it is paid: the purchase order that said what was bought and at what rate, and the goods received note that says what actually arrived. It is the cheapest control a purchase department has, and the one most firms skip because the three papers live in three places.",
  sections: [
    {
      type: "table",
      h: "The three documents, and what each one proves",
      cols: ["Document", "Made by", "It proves"],
      rows: [
        ["Purchase order", "Purchase", "What was agreed: the material, the quantity and the rate"],
        ["Goods received note (GRN)", "The store", "What arrived, on which day, into which godown"],
        ["Vendor's bill", "The vendor, entered by accounts", "What the vendor is asking to be paid, with GST"],
      ],
    },
    {
      type: "p",
      h: "Why the GRN matters for GST",
      text: "Section 16(2) of the CGST Act allows input tax credit only when, among other conditions, the buyer has **received the goods**. The bill alone does not prove that; the GRN does. A firm that claims credit on bills with no receipt behind them is claiming credit it may have to reverse, with interest, when the department asks for proof.",
    },
    {
      type: "list",
      h: "Five mismatches it catches",
      items: [
        { b: "Billed above the order rate —", t: "the vendor raised the price after the order. Hold the difference until a debit note or a revised order explains it." },
        { b: "Billed for more than arrived —", t: "the lorry came short. Pay for what the GRN says, not what the bill says." },
        { b: "Received more than was ordered —", t: "excess that nobody asked for. Refuse it at the gate, or raise the order first." },
        { b: "Billed twice —", t: "the same delivery on two bills. A bill matched to a GRN cannot be matched again." },
        { b: "Goods returned but billed —", t: "a return to the vendor must reduce what is owed, by a debit note against the bill." },
      ],
    },
    {
      type: "list",
      h: "Setting it up, step by step",
      items: [
        { b: "No purchase without an order —", t: "except the small, petty purchases you list by name." },
        { b: "The store receives against the order —", t: "it picks the open order and enters what arrived, never typing a free receipt." },
        { b: "Accounts enters the bill against the GRN —", t: "so the rate and quantity are checked line by line, not on the total." },
        { b: "Decide what happens to a difference —", t: "a price difference held until explained, a short supply paid at what arrived." },
        { b: "Keep one register of goods received but not billed —", t: "it is what you owe vendors for goods already in your godown, and it should be small and recent." },
      ],
    },
    {
      type: "p",
      h: "How Svasamm Materials does it",
      text: "A GRN in Svasamm Materials is made only against a released purchase order, and it refuses a quantity above what is left on the order, naming both figures. Receiving puts the stock up and posts what you owe to **goods received, not billed**. The bill is matched to the order rate and the quantity received less any returns; input GST is claimed line by line and TDS on purchases is deducted where it is due. A bill above the order rate leaves the excess on hold until a debit note claims it back; a bill below it lowers the stock's cost. Returns to the vendor go against the receipt and post a debit note that reverses the input GST.",
    },
  ],
  faqs: [
    { q: "What is three-way matching in purchase?", a: "Checking a vendor's bill against the purchase order and the goods received note before it is paid: the rate against the order, and the quantity against what actually arrived." },
    { q: "What is the difference between two-way and three-way matching?", a: "Two-way matching checks the bill against the order only. Three-way matching adds the goods received note, so you pay for what arrived and not only for what was ordered." },
    { q: "Do we need a GRN for input tax credit?", a: "Input tax credit needs the goods to have been received, under section 16(2) of the CGST Act. A GRN is the firm's own record that they were. Keep it with the bill." },
    { q: "What is goods received not billed?", a: "A liability for goods already in your godown whose bill has not come yet. It goes up at the GRN and comes down when the bill is entered." },
  ],
  related: [{ title: "Reorder level: the formula and how to set it", href: "/pages/reorder-level-formula.html" }],
  cta: {
    title: "Match one month of your purchases",
    body: "Send one month's purchase orders, receipts and bills. We will match them three ways in Svasamm Materials and show you every difference. Free, no obligation.",
  },
});

const COUNT = build({
  slug: "physical-stock-verification",
  eyebrow: "Stores Guide",
  title: "Physical Stock Verification, Step by Step",
  metaTitle: "Physical Stock Verification Process, Step by Step | Svasamm",
  meta: "How to run a physical stock verification: planning, the blind count, recounts, approving the difference, and what CARO 2020 asks the auditor to report on inventory.",
  intro:
    "Physical stock verification is counting what is actually in the godown and comparing it with what the books say should be there. Done once a year in a rush, it finds differences nobody can explain. Done warehouse by warehouse through the year, it becomes routine, and the year-end count holds no surprises.",
  sections: [
    {
      type: "p",
      h: "What the auditor will ask",
      text: "Under CARO 2020, paragraph 3(ii)(a), the statutory auditor of a company it applies to reports whether management verified its inventory physically at reasonable intervals, whether the coverage and procedure were appropriate, and whether any discrepancy of **10% or more in aggregate for a class of inventory** was found and properly dealt with in the books. A count with no record of who counted, when, and how the difference was approved is hard to defend.",
    },
    {
      type: "list",
      h: "Before the count",
      items: [
        { b: "One warehouse, one day —", t: "count a place completely rather than everything partly." },
        { b: "Freeze movement —", t: "no receipts or issues in that warehouse while it is counted, or each one noted with its time." },
        { b: "Print the sheet without the book quantity —", t: "a blind count stops people writing down what they expect to find." },
        { b: "Two people per bay —", t: "one counts, one writes; swap for the recount." },
      ],
    },
    {
      type: "list",
      h: "During and after",
      items: [
        { b: "Every line answered —", t: "a blank is not nought. If a material is not there, write nought." },
        { b: "Write down what was found but not listed —", t: "stock in the wrong godown is a difference too." },
        { b: "Recount the big differences —", t: "before anybody explains one, count it again." },
        { b: "Approve the difference with a reason —", t: "a short is a loss, a gain is usually an entry missed; each needs a person and a reason." },
        { b: "Post it at cost —", t: "the difference goes to the books at the stock's cost, not at a price somebody remembers." },
      ],
    },
    {
      type: "table",
      h: "A rhythm that holds",
      cols: ["What", "How often"],
      rows: [
        ["Fast-moving and costly materials", "Every month"],
        ["The rest of a busy godown", "Every quarter"],
        ["Slow and cheap materials", "Twice a year"],
        ["Every warehouse, complete", "At the year end"],
      ],
    },
    {
      type: "p",
      h: "How Svasamm Materials does it",
      text: "A stock count in Svasamm Materials is one warehouse on one day. The sheet lists everything the books hold there, every line must be answered, and the counter can add what was found but not listed. The store's quantity is corrected at once, so nobody issues stock that is not there. The money waits: the difference posts to stock shrinkage at moving-average cost in a voucher that needs approval with a reason, and approving it closes the count. The store can count on a phone.",
    },
  ],
  faqs: [
    { q: "What is physical stock verification?", a: "Counting the stock actually held and comparing it with the quantity in the books, then recording and approving the difference." },
    { q: "How often should stock be verified physically?", a: "Often enough that differences can still be explained. A common rhythm is monthly for costly and fast-moving materials, quarterly for the rest of a busy godown, and a complete count at the year end." },
    { q: "What does CARO 2020 say about inventory?", a: "Paragraph 3(ii)(a) asks the auditor to report whether management verified inventory physically at reasonable intervals, whether the coverage and procedure were appropriate, and whether discrepancies of 10% or more in aggregate for a class were found and properly dealt with in the books." },
    { q: "What is a blind count?", a: "A count made from a sheet that does not show the quantity the books expect, so the counter writes down what is there and not what should be." },
  ],
  related: [{ title: "Three-way matching: purchase order, GRN and bill", href: "/pages/three-way-match-po-grn-bill.html" }],
  cta: {
    title: "Count one godown with us",
    body: "Send your stock list for one godown. We will load it into Svasamm Materials and walk your store through a count on the phone. Free, no obligation.",
  },
});

const REORDER = build({
  slug: "reorder-level-formula",
  eyebrow: "Stores Guide",
  title: "Reorder Level: the Formula and How to Set It",
  metaTitle: "Reorder Level Formula, with a Worked Example | Svasamm",
  meta: "The reorder level formula with a worked example, how to set safety stock and the reorder quantity, and the mistakes that cause stock-outs or a full godown.",
  intro:
    "The reorder level is the stock at which you must order again, so the new lot arrives before the old one runs out. Set too low, the plant stops waiting for a part; set too high, money sits in the godown. It takes three numbers to set, and all three are already in your records.",
  sections: [
    {
      type: "p",
      h: "The formula",
      text: "**Reorder level = average daily use × lead time in days + safety stock.** The lead time is the days from placing the order to the goods being in your godown, not the vendor's promise. Safety stock covers the days when use is higher or the lorry is later than usual.",
    },
    {
      type: "table",
      h: "A worked example",
      cols: ["", "Figure"],
      rows: [
        ["Average use of a packing material", "40 rolls a day"],
        ["Lead time, order to godown", "6 days"],
        ["Use during the lead time", "40 × 6 = 240 rolls"],
        ["Safety stock (3 days' use)", "120 rolls"],
        ["Reorder level", "240 + 120 = 360 rolls"],
      ],
    },
    {
      type: "list",
      h: "Setting the safety stock",
      items: [
        { b: "From the worst recent delay —", t: "if the vendor has been up to three days late, three days' use is a fair start." },
        { b: "Higher for what stops the plant —", t: "a spare part with one vendor deserves more than a stationery item with ten." },
        { b: "Lower for what spoils or is costly —", t: "safety stock is money and space; spend it where a stock-out hurts most." },
      ],
    },
    {
      type: "list",
      h: "The reorder quantity",
      items: [
        { b: "Enough to last a sensible cycle —", t: "often two to four weeks' use, rounded to the vendor's pack." },
        { b: "Not more than the godown holds —", t: "or the next delivery waits in the lorry." },
        { b: "Fixed by contract where there is one —", t: "a rate contract's monthly quantity is the reorder quantity." },
      ],
    },
    {
      type: "list",
      h: "Mistakes that cause stock-outs",
      items: [
        { b: "Counting the order as stock —", t: "an order on the way is not in the godown, but it does stop a second order." },
        { b: "Ignoring stock already promised —", t: "stock set aside for a batch is not free to issue." },
        { b: "Setting levels once and never again —", t: "use and lead times change with the season; review them every quarter." },
      ],
    },
    {
      type: "p",
      h: "How Svasamm Materials does it",
      text: "Each material in Svasamm Materials carries its reorder level, reorder quantity and lead time in days. When a material falls below its level with nothing already coming, an indent for the reorder quantity is raised by itself and marked as raised by the level, and it goes through the same approval as any other indent. Material planning works out the net need per material from a product's open plans, the stock, the orders on the way and the indents already raised.",
    },
  ],
  faqs: [
    { q: "What is the reorder level formula?", a: "Average daily use multiplied by the lead time in days, plus safety stock. For 40 a day, a 6-day lead time and 3 days' safety stock: 40 × 6 + 120 = 360." },
    { q: "What is the difference between reorder level and reorder quantity?", a: "The reorder level is when to order: the stock at which a new order must be placed. The reorder quantity is how much to order each time." },
    { q: "What is safety stock?", a: "Extra stock held to cover use above the average or a delivery later than usual, so a delay does not stop the work." },
    { q: "Should an order on the way count towards the reorder level?", a: "It should stop a second order being raised, but it is not stock in the godown until it is received." },
  ],
  related: [{ title: "Vendor rating that counts, not guesses", href: "/pages/vendor-rating-method.html" }],
  cta: {
    title: "Set your reorder levels from your own records",
    body: "Send six months of issues and receipts for your top materials. We will work out the use, lead time and reorder level for each. Free, no obligation.",
  },
});

const VENDOR = build({
  slug: "vendor-rating-method",
  eyebrow: "Purchase Guide",
  title: "Vendor Rating That Counts, Not Guesses",
  metaTitle: "Vendor Rating Method from Your Own Documents | Svasamm",
  meta: "How to rate vendors from your own purchase documents: price kept, delivered on time, quality accepted. A simple method a small purchase team can keep up.",
  intro:
    "Most vendor ratings are filled in once a year from memory, and they say what the purchase officer already thought. A rating worth having is counted from the documents you already make: the order, the receipt, the bill and the return. Nobody types a score; the score is what happened.",
  sections: [
    {
      type: "table",
      h: "Three things to count",
      cols: ["Measure", "From which document", "What it shows"],
      rows: [
        ["Price kept", "Bill against the order", "Bills raised above the order rate"],
        ["On time", "GRN against the order date and lead time", "Deliveries later than the agreed lead time"],
        ["Quality", "Returns against receipts", "Quantity sent back as a share of what came"],
      ],
    },
    {
      type: "list",
      h: "Keep it simple",
      items: [
        { b: "Two grades are enough to start —", t: "a vendor who kept the price, delivered on time and had nothing returned, and one who did not." },
        { b: "No rating without deliveries —", t: "a new vendor is unrated, not rated well." },
        { b: "Look at the reasons, not just the grade —", t: "one late lorry in a strike month is not the same as late every month." },
      ],
    },
    {
      type: "list",
      h: "Use it where it changes a decision",
      items: [
        { b: "Approved vendors per material —", t: "order only from the vendors on the list, with the share each gets." },
        { b: "Quotations —", t: "ask several vendors, record each answer, and write down why the one you chose was chosen." },
        { b: "Rate contracts —", t: "an agreed rate and monthly quantity for a period, kept for the vendors who earned it." },
      ],
    },
    {
      type: "p",
      h: "How Svasamm Materials does it",
      text: "Vendor rating in Svasamm Materials is counted from the documents and never typed: bills above the order rate, deliveries later than the material's lead time, and quantity returned against quantity received. A vendor with none of those is graded A, any of them B, and a vendor with no deliveries yet is left blank. Each material can carry a list of approved vendors with their shares, and an order can only go to a vendor on it. Quotations from several vendors are recorded once each, the choice needs a reason, and the chosen quote becomes an order at its rate.",
    },
  ],
  faqs: [
    { q: "What is vendor rating?", a: "A grade for each supplier based on how it performed: whether it kept the agreed price, delivered on time and supplied goods that were accepted." },
    { q: "How do you measure vendor performance?", a: "Count it from your own documents: bills above the order rate, receipts later than the agreed lead time, and returns as a share of what was received." },
    { q: "What is an approved vendor list?", a: "The vendors a material may be ordered from, often with the share each gets. It stops a material being bought from an untried supplier by accident." },
  ],
  related: [{ title: "Three-way matching: purchase order, GRN and bill", href: "/pages/three-way-match-po-grn-bill.html" }],
  cta: {
    title: "Rate your vendors from last year's documents",
    body: "Send a year of purchase orders, receipts and returns. We will grade every vendor from them and show you why. Free, no obligation.",
  },
});

export const MATERIALS_ARTICLES: Article[] = [THREE_WAY, COUNT, REORDER, VENDOR];
export const MATERIALS_ARTICLE_BY_SLUG: Record<string, Article> = Object.fromEntries(MATERIALS_ARTICLES.map((a) => [a.slug, a]));
