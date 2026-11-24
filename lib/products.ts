// All 7 product records — data from prototypes/ProductPage.dc.html data(), SEO + JSON-LD
// copied verbatim from each product's wrapper helmet (Millingo/DMS/ERP/People/CRM/
// ServiceDesk .dc.html). Shaped to `Product` so it can move to Sanity later.

import type { Faq, Product } from "./types";
import { DIGITAL_PRODUCT } from "./digital";
import { PRODUCT_GUIDES } from "./product-guides";
import { DIGITAL_SCHOOLS_PRODUCT } from "./digital-schools";
import { MATERIALS_PRODUCT } from "./materials";

// FAQPage from the product's visible on-page FAQs — matches the accordion content Google
// requires to be visible, and gives every product a FAQPage for GEO/AI-answer coverage.
export function faqPageLd(faqs: Faq[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export const PRODUCTS: Product[] = [
  {
    id: "millingo",
    name: "Millingo",
    badge: "Rice Mill ERP · Millingo",
    tagline: "The ERP built for rice mills — not bent to fit one",
    blurb:
      "Millingo runs the whole mill: paddy procurement and quality grading, milling yield and by-products, gunny-bag accounting, and the government CMR cycle — for a mill milling for the market, for the government, or both.",
    ctaPrimary: "Get a free consultation",
    featuresTitle: "Gate to godown, and the government cycle end to end",
    features: [
      { icon: "ph-scroll", title: "Paddy procurement, gate to godown", body: "Purchase orders, a gate pass for every lorry, a weighment that can be claimed only once, and stock that posts only after the QC bench passes the load.", href: "/pages/millingo-paddy-in-rice-out.html#gate" },
      { icon: "ph-scales", title: "Quality grading with butta deductions", body: "Recovery, moisture and dust read at the bench; a shortfall takes value off the bill — 1% of the load per point — without touching the weight.", href: "/pages/millingo-paddy-in-rice-out.html#qc" },
      { icon: "ph-chart-line-up", title: "Milling yield & by-products", body: "Every batch tracks recovery against what was promised; bran, husk, broken rice and the rest become stock, valued at what they will sell for and taken off the rice’s cost.", href: "/pages/millingo-paddy-in-rice-out.html#milling" },
      { icon: "ph-package", title: "Gunny-bag (bardana) accounting", body: "Two pools that never mix — the mill’s own bags and the corporation’s — drawn by packing, issued to camps and received back, jute and PP kept apart." },
      { icon: "ph-buildings", title: "Government levy & CMR", body: "Release orders, camp picks, rice offered and delivered to the depot, the shortfall as a debt, and report 7.1 set against the portal.", href: "/pages/millingo-paddy-in-rice-out.html#depot" },
      { icon: "ph-receipt", title: "Market sales & the books", body: "Sale orders, dispatch only against rice the godown holds, tax invoices, and GSTR-1 and GSTR-3B prepared from the books." },
    ],
    tiersTitle: "From a market-only mill to full government CMR",
    tiers: [
      { name: "Starter", for: "Small, seasonal, market-only mills.", featured: false, cta: "Start here", items: ["Paddy purchase & stock", "Milling batches & recovery", "Market sales & accounting"] },
      { name: "Professional", for: "Full operations with financials & QC slabs.", featured: true, cta: "Get a walkthrough", items: ["Everything in Starter", "QC bench & butta deductions", "By-products valued as stock", "Gunny-bag accounting", "GSTR-1 & GSTR-3B from the books"] },
      { name: "Enterprise", for: "Mills doing government custom milling (CMR).", featured: false, cta: "Talk to us", items: ["Everything in Professional", "Government levy & CMR cycle", "Shortfall & report 7.1"] },
    ],
    builtFor: ["Private Rice Mills", "Paddy Processing", "FCI / CMR Mills", "Open-market Rice Sellers", "Agri Processing"],
    resources: {
      title: "Guides, state-wise details & comparisons",
      intro: "In-depth, indexable pages for the questions buyers actually search — each is its own page for search & AI discovery.",
      grid: "1.2fr 1fr 1fr",
      columns: [
        {
          heading: "Rice-mill guides", icon: "ph-file-text", links: [
            { title: "Custom Milled Rice (CMR) explained — the process and the 67% obligation", href: "Guide-CMR.dc.html" },
            { title: "How to calculate rice-mill yield & milling recovery", href: "Guide-YieldRecovery.dc.html" },
            { title: "By-product accounting: bran, husk & broken rice", href: "Guide-ByproductAccounting.dc.html" },
            { title: "GST for rice mills: paddy, rice, bran & milling", href: "Guide-GST.dc.html" },
            { title: "Best rice-mill software: how to choose (buyer's guide)", href: "Guide-BestSoftware.dc.html" },
            { title: "Rice-mill software price: what it costs & why", href: "Guide-Pricing.dc.html" },
            { title: "Why CMR out-turn drops below 67% (moisture & shortfall)", href: "/pages/cmr-out-turn-shortfall-moisture.html" },
            { title: "Broken rice: 10%, not 15%. What the new CMR rule means", href: "/pages/broken-rice-10-percent-cmr-improved-rice.html" },
          ],
        },
        {
          heading: "By state", icon: "ph-map-pin", links: [
            { title: "West Bengal (e-Paddy & CMR)", href: "State-WestBengal.dc.html" },
            { title: "Uttar Pradesh (procurement & CMR)", href: "State-UttarPradesh.dc.html" },
            { title: "Odisha (OSCSC & CMR)", href: "State-Odisha.dc.html" },
            { title: "Bihar (PACS & CMR)", href: "State-Bihar.dc.html" },
            { title: "Punjab: the 2026-27 milling policy & the 90% rule", href: "/pages/punjab-custom-milling-policy-2026-27.html" },
            { title: "Punjab: release orders and paddy allotment", href: "/pages/punjab-release-order-paddy-allotment.html" },
            { title: "Uttar Pradesh: paddy procurement and CMR 2026-27", href: "/pages/up-paddy-procurement-cmr-2026-27.html" },
          ],
        },
        {
          heading: "Compare", icon: "ph-scales", links: [
            { title: "Millingo vs Dataman Rice Soft (AAHAAR)", href: "Compare-Dataman.dc.html" },
            { title: "Millingo vs Samadhan Rice Mill ERP", href: "Compare-Samadhan.dc.html" },
          ],
        },
      ],
    },
    faqs: [
      { q: "What is a rice mill ERP?", a: "Software built specifically for rice milling — paddy procurement and quality grading, milling production with yield and by-product tracking, packaging, sales, accounting, and government FCI/levy (CMR) compliance — on one system, rather than a generic ERP adapted to fit." },
      { q: "Does Millingo handle government CMR / levy procurement?", a: "Yes. Millingo covers the CMR cycle — release orders, camp picks, rice offered and delivered to the depot, the shortfall, and report 7.1 — with West Bengal’s rules built in first." },
      { q: "Can Millingo track milling recovery and by-products?", a: "Yes. Each milling batch computes rice recovery against what was promised, and books bran, husk and broken rice as stock valued at what they will sell for." },
      { q: "Which tiers does Millingo offer?", a: "Starter (market-only mills), Professional (QC bench and butta, by-products, gunny, GST returns), and Enterprise (government levy and CMR, shortfall and report 7.1)." },
      // 17 Nov 2026, each answer checked against svasamm-platform origin/develop: weighment typed and claimed
      // once (gate/arrival.go ErrAlreadyEntered); nine role templates (modules/millingo/manifest.go); imports
      // (modules/millingo/imports, books/openimport.go); WB and Odisha rules (gate/levy.go, rice_profile.go);
      // cloud, desk screens only (packages/millingo App.tsx). Millingo is English only: never claim Hindi or Bengali.
      { q: "Does Millingo read the weighbridge?", a: "The gate types the weight from the kanta's display, and each weighment can go on one entry only, so the same slip cannot be claimed twice." },
      { q: "Can each person at the mill see only their own part?", a: "Yes. Millingo comes with nine ready roles: owner, mill manager, gate and weighbridge, quality, production floor, store and gunny, sales and dispatch, CMR and levy, and accounts. Each one sees or edits only its own area." },
      { q: "Can I bring my parties and opening balances across from Excel or Tally?", a: "Yes. Farmers, arhtiyas, traders, customers, varieties, warehouses and lorries import from an Excel or CSV sheet, and the opening trial balance imports from an Excel or CSV export, including one taken from Tally." },
      { q: "Which states' CMR rules are built in?", a: "West Bengal's and Odisha's are built in. A mill in another state has its own state's rules set up during onboarding, from that state's current notification." },
      { q: "Is Millingo on the cloud?", a: "Yes. It runs in the cloud and opens in a browser on the mill's computers, so there is no server to keep at the mill. It needs an internet connection." },
    ],
    cta: { title: "Free CMR season review for your mill", body: "Send one season’s paddy received and rice delivered — we’ll show you where your out-turn and deliveries stand against the state’s figures, and how Millingo keeps that current. Free, no obligation.", primary: "Ask for the free review" },
    seo: {
      metaTitle: "Millingo: Rice Mill Software for Paddy, Milling & CMR | Svasamm",
      metaDescription: "Millingo is rice mill software for Indian mills: paddy gate and QC with butta, recovery per batch, by-products, gunny bags, the CMR cycle and GST on one system.",
      canonical: "https://svasamm.com/pages/millingo.html",
      ogType: "website",
      ogTitle: "Millingo: rice mill software | Svasamm",
      ogDescription: "ERP built specifically for rice mills — procurement, milling yield, by-products and CMR compliance.",
    },
    jsonLd: [
      { "@context": "https://schema.org", "@type": "Service", name: "Millingo - Rice Mill ERP", serviceType: "Rice Mill ERP Software", description: "An ERP built specifically for rice mills: paddy procurement and quality grading, milling production with yield and by-product tracking, gunny-bag accounting, market sales, and government FCI/state levy (CMR) procurement and compliance.", provider: { "@type": "Organization", name: "Svasamm", url: "https://svasamm.com" }, areaServed: "IN" },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" }, { "@type": "ListItem", position: 2, name: "Solutions", item: "https://svasamm.com/pages/services.html" }, { "@type": "ListItem", position: 3, name: "Millingo - Rice Mill ERP", item: "https://svasamm.com/pages/millingo.html" }] },
    ],
  },
  {
    id: "dms",
    name: "DMS",
    badge: "Distributor Management",
    tagline: "See every distributor, every machine and every sale in one system",
    blurb:
      "DMS is distributor management built for OEMs — makers of machines that sell, install and service through distributors. Each distributor runs its own sales, stock and books inside your system, so you see primary and secondary sales, serial numbers, installations, warranty and commission without waiting for a phone call or a Tally export.",
    ctaPrimary: "Book a walkthrough",
    featuresTitle: "Central control, distributor-level detail",
    features: [
      { icon: "ph-user-focus", title: "A workspace per distributor", body: "Each distributor is its own legal entity in your system, with its GSTIN, users, godowns and credit limit. Its people see only their own orders, stock and books; zone managers see the distributors under them; head office sees all." },
      { icon: "ph-package", title: "Primary and secondary sales", body: "The distributor's purchase order is your sales order — one document seen from both sides. When the distributor sells on, it bills from its own GSTIN, and that sale is in your view the same day." },
      { icon: "ph-barcode", title: "Serial numbers and installed base", body: "Every machine keeps its serial from your dispatch to the distributor's godown to the customer's floor. The installed base shows every machine at every customer: where, since when, and how much warranty is left." },
      { icon: "ph-file-text", title: "Application and Warranty Sheet", body: "The OEM's own document over a delivery: the machine and serial, the customer's application, the consumables that fit it, the engineer and the warranty terms, printed on one page. Installation starts the warranty." },
      { icon: "ph-stack", title: "Stock held, and for how long", body: "Stock on hand at each distributor and each godown, with the days each machine has sat. Amber at 45 days and red at 60 by default, both set to your policy." },
      { icon: "ph-percent", title: "Commission from invoices", body: "Commission slabs by category and amount, worked out from the distributor's invoices — not from a spreadsheet someone fills in at quarter end." },
      { icon: "ph-map-trifold", title: "Territories down to the pincode", body: "Zone, region and territory, with pincodes allocated to each distributor. A sale outside a distributor's pincodes is flagged for you to see, not silently allowed." },
      { icon: "ph-scales", title: "The distributor's books", body: "Invoices, credit notes, collections and outstanding at each distributor, in the same books as yours. GST is worked out on every invoice from the two parties' states." },
    ],
    builtFor: ["Coding & marking", "Packaging machinery", "Electrical & electronics", "Pharma & med-devices", "Automotive aftermarket", "HVAC & equipment", "Agri equipment", "Any OEM selling through distributors"],
    resources: {
      title: "Guides, OEM-industry pages & comparisons",
      intro: "In-depth pages for the channel questions OEMs actually search — each is its own page for search & AI discovery.",
      grid: "1fr 1.4fr 1fr",
      columns: [
        { heading: "OEM channel guide", icon: "ph-file-text", links: [{ title: "Distributor management for OEMs: the full channel lifecycle", href: "Guide-OEMDistributor.dc.html" }] },
        {
          heading: "By OEM industry", icon: "ph-factory", links: [
            { title: "Coding & marking OEMs (inkjet/CIJ, inks & fluids)", href: "DMS-CodingMarking.dc.html" },
            { title: "Packaging & industrial machinery OEMs", href: "DMS-PackagingMachinery.dc.html" },
            { title: "Electrical & electronics equipment OEMs", href: "DMS-Electrical.dc.html" },
            { title: "Pharma & medical device OEMs", href: "DMS-Pharma.dc.html" },
            { title: "Automotive components & aftermarket OEMs", href: "DMS-Automotive.dc.html" },
            { title: "HVAC & industrial equipment OEMs", href: "DMS-HVAC.dc.html" },
            { title: "Agri & farm equipment OEMs", href: "DMS-Agri.dc.html" },
          ],
        },
        {
          heading: "Compare", icon: "ph-scales", links: [
            { title: "Svasamm DMS vs Bizom", href: "Compare-Bizom.dc.html" },
            { title: "Svasamm DMS vs FieldAssist", href: "Compare-FieldAssist.dc.html" },
          ],
        },
      ],
    },
    faqs: [
      { q: "How is DMS different from Bizom, Botree or FieldAssist?", a: "Those tools were built for fast-moving consumer goods: outlets, beats and cartons, with the distributor's own books left in Tally and synced across. DMS is built for OEMs. The unit is a machine with a serial number, an installation and a warranty, and the distributor's sales and books live inside your system, so there is nothing to sync." },
      { q: "Can each distributor log in and see only their data?", a: "Yes. A distributor's people see only their own entity — orders, stock, invoices and collections. A zone or region manager sees every distributor under them, read-only. Your own staff see the whole network." },
      { q: "Does the distributor still need Tally?", a: "No. The distributor raises its invoices, credit notes and collections in DMS, from its own GSTIN, and its books are kept there. That is what lets you see secondary sales the same day instead of at month end." },
      { q: "Can we follow a machine by its serial number?", a: "Yes. The serial is recorded when the machine is received, picked oldest first on dispatch, and followed through every move to the customer's site. The serial tracker shows where any machine is and who has held it." },
      { q: "How is commission worked out?", a: "You set slabs by product category and by amount. DMS works out each distributor's commission from its invoices for the period, so the figure and the invoices behind it are the same thing." },
      { q: "Can we bring our distributors, customers and opening stock from Excel?", a: "Yes. Distributors, users, customers, territories, pincodes, items and opening stock come in from Excel sheets. A bad row is refused with its reason, so you fix the sheet rather than the data afterwards." },
      { q: "What about schemes, claims and field service visits?", a: "Scheme slabs, the distributor's claims against you, and service tickets on an installed machine are set up during onboarding to your channel policy, on the same distributor, serial and warranty records." },
    ],
    cta: { title: "See DMS run your distribution network", body: "Bring one region and a distributor list — we’ll model the territories, a machine's journey and the commission with you.", primary: "Book a walkthrough" },
    changed: "2026-11-19",
    seo: {
      metaTitle: "DMS — Distributor Management System | Svasamm",
      metaDescription: "Run your distributor network on one system: distributor-scoped sales, tiered stock allocation, commissions, incentives, territory control and reconciliation.",
      canonical: "https://svasamm.com/pages/dms.html",
      ogType: "website",
      ogTitle: "DMS — Distributor Management System | Svasamm",
      ogDescription: "One system for your whole distributor network — scoped sales, tiered stock, commissions and territory control.",
    },
    jsonLd: [
      { "@context": "https://schema.org", "@type": "Service", name: "DMS - Distributor Management System", serviceType: "Distributor Management Software", description: "A distributor management system with distributor-scoped access, tiered stock allocation, order-to-delivery, commission and incentive calculation, and territory control.", provider: { "@type": "Organization", name: "Svasamm", url: "https://svasamm.com" }, areaServed: "IN" },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" }, { "@type": "ListItem", position: 2, name: "Solutions", item: "https://svasamm.com/pages/services.html" }, { "@type": "ListItem", position: 3, name: "DMS", item: "https://svasamm.com/pages/dms.html" }] },
    ],
  },
  {
    id: "erp",
    name: "ERP System",
    badge: "Platform · ERP",
    tagline: "Finance, supply chain and operations on one connected system",
    blurb:
      "Svasamm One's ERP: finance, purchase and stores, people and sales on one system — one source of truth for your accounting, your godowns and your gate, with Indian GST and statutory returns built in.",
    ctaPrimary: "Book a walkthrough",
    featuresTitle: "The whole operation, one source of truth",
    features: [
      { icon: "ph-book-open", title: "Finance & accounting", body: "General ledger, receivables and payables, cost centres, budgets and a month lock once a return is filed." },
      { icon: "ph-warehouse", title: "Inventory & warehouse", body: "Multi-warehouse stock, batches, serials and valuation, live with every transaction." },
      { icon: "ph-shopping-cart", title: "Procurement", body: "Indent to purchase order to goods received, with approvals and each supplier rated from what they delivered." },
      { icon: "ph-factory", title: "Industry processes", body: "Your industry's own steps built in — a rice mill's paddy-to-rice and CMR, and your plant's recipes and batches set up for you during onboarding." },
      { icon: "ph-receipt", title: "Sales & billing", body: "Orders to invoice with GST on every line, and GSTR-1 and GSTR-3B prepared from the books." },
      { icon: "ph-file-text", title: "GST & statutory", body: "GST returns, TDS and Indian statutory reporting handled in the product." },
    ],
    builtFor: ["Food and grain mills", "Manufacturing", "Trading & distribution", "Services"],
    resources: {
      title: "Guides & industry pages",
      intro: "In-depth, indexable pages for what ERP buyers actually search — each is its own page for search & AI discovery.",
      grid: "1fr 1.5fr",
      columns: [
        { heading: "ERP guide", icon: "ph-file-text", links: [{ title: "ERP implementation for Indian businesses", href: "Guide-ERPImplementation.dc.html" }] },
        {
          heading: "By industry", icon: "ph-buildings", links: [
            { title: "ERP for the food industry", href: "ERP-Food.dc.html" },
            { title: "ERP for manufacturing", href: "ERP-Manufacturing.dc.html" },
            { title: "ERP for trading & distribution", href: "ERP-Trading.dc.html" },
            { title: "ERP for services & project firms", href: "ERP-Services.dc.html" },
          ],
        },
      ],
    },
    faqs: [
      { q: "Is Indian GST built in?", a: "Yes — GST-compliant invoicing and GSTR-1, GSTR-3B and HSN summary preparation are part of the system, not a bolt-on." },
      { q: "Can it run more than one plant or godown?", a: "Yes. Each plant and godown is its own place, with its own stock and staff, in one firm's books." },
      { q: "Does it cover manufacturing?", a: "Purchase, stores, people and the books run from day one. Your recipes, production orders and batch costing are set up for your plant during onboarding: we walk your floor and build your industry's own steps with you, as we did for rice mills." },
    ],
    cta: { title: "See the ERP mapped to your books", body: "Bring a chart of accounts and a month of transactions — we’ll walk them through the system with you.", primary: "Book a walkthrough" },
    seo: {
      metaTitle: "ERP System — Finance, Supply Chain & Operations | Svasamm",
      metaDescription: "Svasamm One's ERP: finance, purchase and stores, people and sales on one system, with Indian GST and statutory returns built in.",
      canonical: "https://svasamm.com/pages/erp.html",
      ogType: "website",
      ogTitle: "ERP System | Svasamm",
      ogDescription: "One connected system for finance, warehouse and shop floor, with GST built in.",
    },
    jsonLd: [
      { "@context": "https://schema.org", "@type": "Service", name: "ERP System", serviceType: "Enterprise Resource Planning Software", description: "An ERP for finance, purchase and stores, people and sales, with Indian GST and statutory returns.", provider: { "@type": "Organization", name: "Svasamm", url: "https://svasamm.com" }, areaServed: "IN" },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" }, { "@type": "ListItem", position: 2, name: "Solutions", item: "https://svasamm.com/pages/services.html" }, { "@type": "ListItem", position: 3, name: "ERP System", item: "https://svasamm.com/pages/erp.html" }] },
    ],
  },
  {
    id: "hrms",
    name: "Svasamm People",
    badge: "Platform · HR & payroll",
    tagline: "HR and payroll for the people who work for you",
    blurb:
      "Svasamm People keeps your staff register, shifts and attendance, leave and holidays, and runs payroll with Indian statutory deductions from the first month — PF, ESI, professional tax by state, TDS with Form 16 and 24Q. Staff punch in and ask for leave on the Svasamm One app; HR works on the web.",
    ctaPrimary: "Book a walkthrough",
    featuresTitle: "Everything about your staff, from joining to the payslip",
    features: [
      { icon: "ph-user-plus", title: "Staff register", body: "Every employee, their joining date, salary and bank details (IFSC checked), added one by one or imported from a spreadsheet." },
      { icon: "ph-clock", title: "Shifts & attendance", body: "Shift timings and rosters; staff punch in from their phone, and only from inside the office. Overtime is worked out from the punches." },
      { icon: "ph-calendar-check", title: "Leave & holidays", body: "Leave policies and balances; a supervisor decides each request. National holidays are already set; add your festivals at setup." },
      { icon: "ph-money", title: "Payroll", body: "A monthly run with PF, ESI and professional tax — with each state's due dates — plus statutory bonus and gratuity." },
      { icon: "ph-file-text", title: "TDS, Form 16 & 24Q", body: "Tax deducted from salary through the year, with Form 16 for each employee and the 24Q return." },
      { icon: "ph-device-mobile", title: "On the phone", body: "On the Svasamm One app staff punch in, ask for leave and see their payslips; nobody needs a desk." },
    ],
    builtFor: ["Small & mid-sized firms", "Factories & rice mills", "CA & professional firms", "Hospitals & clinics", "Shops & services"],
    resources: {
      title: "Guides & industry pages",
      intro: "In-depth, indexable pages for what HR buyers actually search — each is its own page for search & AI discovery.",
      grid: "1fr 1.5fr",
      columns: [
        { heading: "HR guide", icon: "ph-file-text", links: [{ title: "Payroll & statutory compliance in India", href: "Guide-PayrollCompliance.dc.html" }] },
        {
          heading: "By industry", icon: "ph-buildings", links: [
            { title: "Payroll & attendance for factories", href: "HRMS-Manufacturing.dc.html" },
            { title: "HR & payroll for multi-location retail", href: "HRMS-Retail.dc.html" },
            { title: "HR & payroll for hospitals & clinics", href: "HRMS-Healthcare.dc.html" },
          ],
        },
      ],
    },
    faqs: [
      { q: "What is HRMS software, and what does Svasamm People cover?", a: "HRMS (human resource management system) software keeps everything about the people who work for you in one place. Svasamm People covers the staff register and pay history, attendance from a punch machine or a phone, shifts and overtime, leave, payroll with PF, ESI, professional tax and TDS, Form 16 and 24Q, statutory bonus, gratuity, and the full and final settlement when somebody leaves." },
      { q: "Does payroll handle Indian statutory compliance?", a: "Yes. PF, ESI, professional tax (with each state\u2019s due dates) and TDS are computed in the payroll run, with Form 16 and 24Q, statutory bonus and gratuity." },
      { q: "Can staff use it on their phone?", a: "Yes. On the Svasamm One app staff punch in from inside the office, ask for leave and see their payslips." },
      { q: "Does attendance connect to payroll?", a: "Yes. The days a person was present, on leave or absent, and their overtime, make the month that payroll pays." },
      { q: "Does it work with T4Suite?", a: "Yes. Svasamm People sits beside T4Suite on one Svasamm One login, so a CA firm runs its practice and its own staff with one sign-in." },
    ],
    cta: { title: "Free payroll check for one month", body: "Send one month’s salary sheet — we’ll run it through Svasamm People and show you the PF, ESI, professional tax and TDS it works out, line by line. Free, no obligation.", primary: "Ask for the free check" },
    seo: {
      metaTitle: "HRMS Software in India: HR, Payroll & Attendance | Svasamm People",
      metaDescription: "Svasamm People is HRMS software for Indian firms: staff register, shifts and attendance from a machine or phone, leave, and payroll with PF, ESI, PT, TDS, Form 16 and 24Q.",
      canonical: "https://svasamm.com/pages/hrms.html",
      ogType: "website",
      ogTitle: "Svasamm People: HRMS software for Indian firms",
      ogDescription: "Staff, attendance, leave and payroll with Indian statutory deductions — on the web and on the Svasamm One app.",
    },
    jsonLd: [
      { "@context": "https://schema.org", "@type": "Service", name: "Svasamm People", serviceType: "Human Resource Management Software", description: "HR and payroll for Indian firms: staff register, shifts and attendance on the phone, leave and holidays, and payroll with PF, ESI, professional tax, TDS, Form 16 and 24Q.", provider: { "@type": "Organization", name: "Svasamm", url: "https://svasamm.com" }, areaServed: "IN" },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" }, { "@type": "ListItem", position: 2, name: "Solutions", item: "https://svasamm.com/pages/services.html" }, { "@type": "ListItem", position: 3, name: "Svasamm People", item: "https://svasamm.com/pages/hrms.html" }] },
    ],
  },
  {
    id: "crm",
    name: "CRM Platform",
    badge: "Platform · CRM",
    tagline: "Turn leads into customers, and customers into repeat business",
    blurb:
      "A CRM that connects sales, marketing and support on one record — lead capture and pipeline, sales automation, campaigns, quotations, and a shared view of every customer conversation.",
    ctaPrimary: "Book a walkthrough",
    featuresTitle: "One record from first touch to renewal",
    features: [
      { icon: "ph-funnel", title: "Lead & pipeline", body: "Capture leads from every source and move them through a pipeline you define." },
      { icon: "ph-lightning", title: "Sales automation", body: "Assignment rules, follow-up reminders and stage automation keep deals moving." },
      { icon: "ph-megaphone", title: "Marketing campaigns", body: "Email campaigns and segments tied to the same contact records." },
      { icon: "ph-file-text", title: "Quotations & orders", body: "Quote to order to invoice, connected to your catalogue and pricing." },
      { icon: "ph-chat-circle-dots", title: "Support & tickets", body: "Customer issues logged against the account for a full relationship view." },
      { icon: "ph-chart-line-up", title: "Analytics", body: "Pipeline, conversion and activity dashboards for reps and managers." },
    ],
    builtFor: ["B2B sales teams", "Services firms", "Distribution", "SMEs", "Agencies"],
    resources: {
      title: "Guides & industry pages",
      intro: "In-depth, indexable pages for what CRM buyers actually search — each is its own page for search & AI discovery.",
      grid: "1fr 1.5fr",
      columns: [
        { heading: "CRM guide", icon: "ph-file-text", links: [{ title: "Building a sales pipeline that closes", href: "Guide-CRMSalesPipeline.dc.html" }] },
        {
          heading: "By industry", icon: "ph-buildings", links: [
            { title: "CRM for B2B sales teams", href: "CRM-B2B.dc.html" },
            { title: "CRM for services firms", href: "CRM-Services.dc.html" },
            { title: "CRM for distribution businesses", href: "CRM-Distribution.dc.html" },
          ],
        },
      ],
    },
    faqs: [
      { q: "Does it connect sales and support?", a: "Yes — leads, deals, quotes and support tickets all sit against the same customer record for one shared view." },
      { q: "Can I customise the pipeline?", a: "Yes. Stages, fields and automation rules are configured to match how your team actually sells." },
      { q: "Does it do quotations and orders?", a: "Yes — quote to order to invoice, connected to your catalogue and pricing." },
    ],
    cta: { title: "See the CRM shaped to your pipeline", body: "Bring your current stages and a sample of leads — we’ll model your pipeline with you.", primary: "Book a walkthrough" },
    seo: {
      metaTitle: "CRM Platform — Sales, Marketing & Support | Svasamm",
      metaDescription: "A CRM that connects sales, marketing and support on one record: lead capture and pipeline, sales automation, campaigns, quotations and analytics.",
      canonical: "https://svasamm.com/pages/crm.html",
      ogType: "website",
      ogTitle: "CRM Platform | Svasamm",
      ogDescription: "One customer record from first touch to renewal — sales, marketing and support connected.",
    },
    jsonLd: [
      { "@context": "https://schema.org", "@type": "Service", name: "CRM Platform", serviceType: "Customer Relationship Management Software", description: "A CRM connecting sales, marketing and support with lead and pipeline management, automation, campaigns, quotations and analytics.", provider: { "@type": "Organization", name: "Svasamm", url: "https://svasamm.com" }, areaServed: "IN" },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" }, { "@type": "ListItem", position: 2, name: "Solutions", item: "https://svasamm.com/pages/services.html" }, { "@type": "ListItem", position: 3, name: "CRM Platform", item: "https://svasamm.com/pages/crm.html" }] },
    ],
  },
  {
    id: "service-desk",
    name: "Service Desk",
    badge: "Platform · ITSM",
    tagline: "IT service management your team will actually use",
    blurb:
      "A service desk for internal IT or customer support — ticketing and queues, incident and problem management, SLAs and escalation, a knowledge base, and a self-service portal, all in one place.",
    ctaPrimary: "Book a walkthrough",
    featuresTitle: "From ticket to resolution, on time",
    features: [
      { icon: "ph-ticket", title: "Ticketing & queues", body: "Multi-channel ticket intake with routing to the right team queue." },
      { icon: "ph-warning", title: "Incident & problem", body: "Link incidents to underlying problems and track root-cause resolution." },
      { icon: "ph-timer", title: "SLA & escalation", body: "Response and resolution SLAs with automatic escalation before breach." },
      { icon: "ph-book-bookmark", title: "Knowledge base", body: "Articles that deflect repeat tickets and speed up agents." },
      { icon: "ph-desktop", title: "Assets / CMDB", body: "Track the assets and services tickets relate to." },
      { icon: "ph-user-circle", title: "Self-service portal", body: "A branded portal where users raise and track their own requests." },
    ],
    builtFor: ["Internal IT teams", "MSPs", "Customer support", "Facilities", "Shared services"],
    resources: {
      title: "Guides & industry pages",
      intro: "In-depth, indexable pages for what service-desk buyers actually search — each is its own page for search & AI discovery.",
      grid: "1fr 1.5fr",
      columns: [
        { heading: "ITSM guide", icon: "ph-file-text", links: [{ title: "ITSM fundamentals: tickets, SLAs & escalation", href: "Guide-ITSM.dc.html" }] },
        {
          heading: "By industry", icon: "ph-buildings", links: [
            { title: "Service Desk for internal IT teams", href: "SD-InternalIT.dc.html" },
            { title: "Service Desk for MSPs", href: "SD-MSP.dc.html" },
            { title: "Service Desk for customer support teams", href: "SD-CustomerSupport.dc.html" },
          ],
        },
      ],
    },
    faqs: [
      { q: "Does it enforce SLAs?", a: "Yes — response and resolution SLAs are tracked per ticket with automatic escalation before a breach." },
      { q: "Is there a self-service portal?", a: "Yes. Users raise and track requests through a branded portal, backed by a knowledge base that deflects repeat tickets." },
      { q: "Can we manage assets?", a: "Yes — a lightweight CMDB tracks the assets and services that tickets relate to." },
    ],
    cta: { title: "See the Service Desk handle your queues", body: "Bring your ticket categories and SLA targets — we’ll configure a working queue with you.", primary: "Book a walkthrough" },
    seo: {
      metaTitle: "Service Desk — IT Service Management (ITSM) | Svasamm",
      metaDescription: "IT service management with ticketing and queues, incident and problem management, SLAs and escalation, knowledge base and a self-service portal.",
      canonical: "https://svasamm.com/pages/service-desk.html",
      ogType: "website",
      ogTitle: "Service Desk | Svasamm",
      ogDescription: "Ticketing, SLAs, knowledge base and self-service — ITSM your team will actually use.",
    },
    jsonLd: [
      { "@context": "https://schema.org", "@type": "Service", name: "Service Desk", serviceType: "IT Service Management Software", description: "IT service management with ticketing, incident and problem management, SLAs and escalation, knowledge base and self-service portal.", provider: { "@type": "Organization", name: "Svasamm", url: "https://svasamm.com" }, areaServed: "IN" },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" }, { "@type": "ListItem", position: 2, name: "Solutions", item: "https://svasamm.com/pages/services.html" }, { "@type": "ListItem", position: 3, name: "Service Desk", item: "https://svasamm.com/pages/service-desk.html" }] },
    ],
  },
  DIGITAL_PRODUCT,
  DIGITAL_SCHOOLS_PRODUCT,
];

// The long-form guides (lib/product-guides.ts), and the date each page last changed by itself.
for (const p of PRODUCTS) {
  const g = PRODUCT_GUIDES[p.id];
  if (g) {
    p.guide = { title: g.title, sections: g.sections };
    p.changed = g.changed;
  }
}

// Append a FAQPage (built from each product's visible FAQs) to every product's JSON-LD.
for (const p of PRODUCTS) p.jsonLd = [...p.jsonLd, faqPageLd(p.faqs)];

// Route slug (the `.html` file key) → product. Slugs match lib/routes.ts canonicals.
export const PRODUCT_BY_SLUG: Record<string, Product> = {
  "millingo.html": PRODUCTS[0],
  "dms.html": PRODUCTS[1],
  "erp.html": PRODUCTS[2],
  "hrms.html": PRODUCTS[3],
  "crm.html": PRODUCTS[4],
  "service-desk.html": PRODUCTS[5],
  "digital-healthcare.html": PRODUCTS[6],
  "digital-schools.html": PRODUCTS[7],
  "materials.html": MATERIALS_PRODUCT,
};
