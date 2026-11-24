// Svasamm Materials — the product page (24 Nov 2026, Mithun: "we have extensively worked upon the
// Materials module — do we have enough content?" There was none). Sold on its own AND as the stock
// and purchase part of a vertical (Mithun, 24 Nov 2026: "Both"), like People.
//
// ⛔ EVERY CLAIM WAS CHECKED AGAINST svasamm-platform origin/develop, modules/materials (migrations
// 0001-0029) and packages/materials, 24 Nov 2026: indents with approval above a value; purchase
// orders with approval and a budget check (off / warn / block, commitments counted, 0028); GRN that
// refuses more than is left on the order; the bill matched three ways, input GST claimed per line,
// TDS 194Q; purchase returns as a debit note; issue slips to a department or a machine at moving
// average; transfers in one step on your premises, two through "on the road" to a hired godown,
// shortfall accepted or claimed from the transporter; the stock count (a blank is not nought, the
// store corrected at once, the money after approval); reservations (off by default); revaluation
// capped at cost; reorder levels raising an indent; material planning from a product's plans; RFQs,
// rate contracts, approved vendors with shares, vendor rating from documents; stock balance, ledger,
// by warehouse, bin locations; phone floor screens (weigh-in, issue, move, count).
// NOT CLAIMED, because the code does not do it: FIFO, batch, lot, serial or expiry tracking; unit
// conversion; a receipt tolerance; e-way bill or e-invoice generation; reverse-charge bills (those
// go through Finance's voucher entry); issuing for production (Millingo issues its own).
import type { Product } from "./types";

const URL = "https://svasamm.com/pages/materials.html";

export const MATERIALS_PRODUCT: Product = {
  id: "materials",
  name: "Svasamm Materials",
  badge: "Platform · Purchase & stores",
  tagline: "Purchase and stores, posted straight to the books",
  blurb:
    "Svasamm Materials runs the store and the buying behind it: indents, purchase orders with approvals and a budget check, goods received against the order, the vendor's bill matched three ways, issues, transfers between godowns and the stock count. Every movement posts to Svasamm Finance at moving-average cost, so the stock in the store and the stock in the books are one figure.",
  ctaPrimary: "Book a walkthrough",
  featuresTitle: "From the indent to the stock in the books",
  features: [
    { icon: "ph-receipt", title: "Indents & approvals", body: "A department asks for what it needs with a reason. Approval above a value you set, and nobody approves their own indent." },
    { icon: "ph-shopping-cart", title: "Purchase orders", body: "Orders with approval and a budget check against Finance: off, warn or block. An approved order still waiting counts against the budget." },
    { icon: "ph-truck", title: "Receiving & the bill", body: "Goods received against the order, never more than is left on it. The bill is matched to the order rate and the quantity received, with input GST and TDS worked out." },
    { icon: "ph-warehouse", title: "Issues & transfers", body: "Issue to a department or a machine at moving-average cost. Move stock between your godowns, or to a hired godown with the lorry's shortfall settled." },
    { icon: "ph-barcode", title: "Stock count", body: "Count one warehouse on one day. Every line must be answered; the store is corrected at once and the difference posts after approval." },
    { icon: "ph-chart-line-up", title: "Reorder & vendors", body: "Reorder levels raise their own indent. Quotes from several vendors, rate contracts, approved vendors per material, and a vendor rating counted from the documents." },
  ],
  builtFor: ["Factories & workshops", "Food plants", "Rice mills, with Millingo", "Firms with more than one godown", "Any firm on Svasamm Finance"],
  resources: {
    title: "Guides",
    intro: "How a purchase and stores department runs well, step by step — each is its own page.",
    grid: "1fr",
    columns: [
      {
        heading: "Purchase & stores guides",
        icon: "ph-file-text",
        links: [
          { title: "Three-way matching: purchase order, GRN and bill", href: "/pages/three-way-match-po-grn-bill.html" },
          { title: "Physical stock verification, step by step", href: "/pages/physical-stock-verification.html" },
          { title: "Reorder level: the formula and how to set it", href: "/pages/reorder-level-formula.html" },
          { title: "Vendor rating that counts, not guesses", href: "/pages/vendor-rating-method.html" },
        ],
      },
    ],
  },
  faqs: [
    { q: "What is Svasamm Materials?", a: "Purchase and stores software for Indian firms. It covers indents, purchase orders, goods received, the vendor's bill, purchase returns, issues, transfers between godowns, the stock count, reorder levels, quotations, rate contracts and vendor rating, and it posts every movement to Svasamm Finance." },
    { q: "How is stock valued?", a: "At moving-average cost, per material and warehouse. The cost of an issue is worked out by the books, never typed. A bill below the order rate lowers the stock's cost; a bill above it is held until a debit note claims the difference back." },
    { q: "Does it stop a purchase that is over budget?", a: "If you want it to. The budget check has three settings: off, warn, or block. On block, an order over the head's budget waits until the budget is raised or the budget approver passes it with a reason. Approved orders not yet received count against the budget too." },
    { q: "Can staff in the store use it on a phone?", a: "Yes. The store floor has phone screens for weighing in a lorry, issuing, moving stock and counting." },
    { q: "Do we need Svasamm Finance?", a: "Materials posts to Svasamm Finance, which comes with it: the stock heads, goods received not billed, input GST and TDS land in the same books. You choose which heads each movement posts to." },
    { q: "Does it work with Millingo?", a: "Yes. A rice mill on Millingo keeps its stores and consumables in Materials, and Millingo's plans feed Materials' planning of what must be bought." },
  ],
  cta: {
    title: "Bring one month of purchases",
    body: "Send one month's purchase orders, receipts and bills. We will run them through Svasamm Materials and show you the three-way match, the stock by warehouse and what the books would say. Free, no obligation.",
    primary: "Book a walkthrough",
  },
  seo: {
    metaTitle: "Purchase and Inventory Software in India | Svasamm Materials",
    metaDescription:
      "Svasamm Materials: indents, purchase orders with approval and budget check, GRN, three-way bill match with GST and TDS, issues, godown transfers and stock count, posted to the books.",
    canonical: URL,
    ogType: "website",
    ogTitle: "Svasamm Materials: purchase and stores, posted to the books",
    ogDescription: "Indents, purchase orders, receiving, the three-way match, issues, transfers and the stock count, on one record with your books.",
  },
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Svasamm Materials",
      serviceType: "Inventory and Purchase Management Software",
      description:
        "Purchase and stores software for Indian firms: indents, purchase orders with approval and budget check, goods received, three-way bill matching with GST and TDS, issues, godown transfers, stock count and vendor rating, posted to the books.",
      provider: { "@type": "Organization", name: "Svasamm", url: "https://svasamm.com" },
      areaServed: "IN",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://svasamm.com/pages/services.html" },
        { "@type": "ListItem", position: 3, name: "Svasamm Materials", item: URL },
      ],
    },
  ],
  guide: {
    title: "Choosing purchase and inventory software",
    sections: [
      {
        type: "p",
        h: "What goes wrong in a store without one record",
        text: "In most firms the store keeps a register, purchase keeps a file of orders, and the accountant enters the bill in the books weeks later. Each is right on its own and they never agree. A bill is paid for goods that came short, an order is placed for something already in the godown, and at the year-end count nobody can say whether the difference is a theft, a wrong entry or a lorry that never arrived. **Purchase and stores software** puts the order, the receipt, the bill and the issue on one record, so each step checks the one before it.",
      },
      {
        type: "list",
        h: "What to look for",
        items: [
          { b: "The receipt checks the order —", t: "a GRN that cannot take more than is left on the order, so excess never enters stock unnoticed." },
          { b: "The bill checks both —", t: "the order rate and the quantity received, before input GST is claimed and the vendor is owed." },
          { b: "Cost is worked out, not typed —", t: "an issue is priced by the system, so the stock value in the books is never a guess." },
          { b: "Approvals with limits —", t: "small indents go straight through; large ones wait for the person whose limit covers them." },
          { b: "The count corrects the books —", t: "a physical count whose difference posts to the books after an approval with a reason." },
          { b: "It posts by itself —", t: "goods received but not billed, input GST and TDS land in the ledger as the documents are made, not at month end." },
        ],
      },
      {
        type: "table",
        h: "A purchase, start to finish",
        cols: ["Step", "Who", "What the books show"],
        rows: [
          ["Indent", "The department", "Nothing yet; the budget counts it as committed"],
          ["Purchase order", "Purchase, approved above the limit", "Committed against the head's budget"],
          ["GRN", "The store", "Stock up; owed under goods received, not billed"],
          ["Bill", "Accounts", "Vendor owed; input GST claimed; TDS deducted where due"],
          ["Issue", "The store", "Stock down; consumption or repairs at moving-average cost"],
        ],
      },
      {
        type: "p",
        h: "How a firm starts on Svasamm Materials",
        text: "We import your material list, warehouses and opening stock from a spreadsheet, set your reorder levels, approval limits and which ledger each movement posts to, and load your open purchase orders. Then the store works one month on Svasamm Materials beside its register. When the stock by warehouse and the books agree at the month's count, the register is retired.",
      },
    ],
  },
  changed: "2026-11-24",
};
