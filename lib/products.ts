// All 7 product records — data from prototypes/ProductPage.dc.html data(), SEO + JSON-LD
// copied verbatim from each product's wrapper helmet (Millingo/DMS/ERP/HRMS/CRM/
// ServiceDesk .dc.html). Shaped to `Product` so it can move to Sanity later.

import type { Faq, Product } from "./types";
import { DIGITAL_PRODUCT } from "./digital";

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
      "Millingo runs the whole mill: paddy procurement and quality grading, milling yield and by-products, gunny-bag accounting, and full government FCI / state levy (CMR) compliance — from a single seasonal mill to multi-unit government-supplying operations.",
    ctaPrimary: "Get a free consultation",
    featuresTitle: "Gate to godown, and the government cycle end to end",
    features: [
      { icon: "ph-scroll", title: "Paddy procurement, gate to godown", body: "Purchase agreements (Sauda), gate receipts, and stock that posts only after quality approval." },
      { icon: "ph-scales", title: "Quality grading with butta deductions", body: "Multi-parameter QC (moisture, foreign matter, recovery) deducts value from the bill without touching quantity." },
      { icon: "ph-chart-line-up", title: "Milling yield & by-products", body: "Every batch tracks recovery % plus bran, husk and broken rice, each with its own valuation and P&L." },
      { icon: "ph-package", title: "Gunny-bag (bardana) accounting", body: "Bag-type conversions (jute/PP), packing and empty-bag returns tracked as stock." },
      { icon: "ph-buildings", title: "Government FCI / levy & CMR", body: "Levy memos, GPS-geofenced camp pickups, CMR deliveries, release orders and 7.1 out-turn reconciliation." },
      { icon: "ph-device-mobile", title: "Roles, dashboards & field app", body: "Owner, purchase, QC, production and warehouse queues, plus a phone-based camp-pick app." },
    ],
    tiersTitle: "Scales from one seasonal mill to multi-unit CMR operations",
    tiers: [
      { name: "Starter", for: "Small, seasonal, market-only mills.", featured: false, cta: "Start here", items: ["Paddy purchase & stock", "Milling batches & recovery", "Market sales & basic accounting", "Single unit"] },
      { name: "Professional", for: "Full operations with financials & QC slabs.", featured: true, cta: "Get a walkthrough", items: ["Everything in Starter", "Quality/moisture slabs & butta", "By-product P&L", "Gunny-bag accounting", "Full financials"] },
      { name: "Enterprise", for: "Government CMR business, multi-unit.", featured: false, cta: "Talk to us", items: ["Everything in Professional", "FCI / state levy & CMR cycle", "Statutory returns", "Multi-unit consolidation", "Field camp-pick app"] },
    ],
    builtFor: ["Private Rice Mills", "Paddy Processing", "FCI / CMR Mills", "Open-market Rice Sellers", "Multi-unit Mills", "Agri Processing"],
    resources: {
      title: "Guides, state-wise details & comparisons",
      intro: "In-depth, indexable pages for the questions buyers actually search — each is its own page for search & AI discovery.",
      grid: "1.2fr 1fr 1fr",
      columns: [
        {
          heading: "Rice-mill guides", icon: "ph-file-text", links: [
            { title: "Custom Milled Rice (CMR) explained — process, 67% obligation & FRK", href: "Guide-CMR.dc.html" },
            { title: "How to calculate rice-mill yield & milling recovery", href: "Guide-YieldRecovery.dc.html" },
            { title: "By-product accounting: bran, husk & broken rice", href: "Guide-ByproductAccounting.dc.html" },
            { title: "GST for rice mills: paddy, rice, bran & milling", href: "Guide-GST.dc.html" },
            { title: "Best rice-mill software: how to choose (buyer's guide)", href: "Guide-BestSoftware.dc.html" },
            { title: "Rice-mill software price: what it costs & why", href: "Guide-Pricing.dc.html" },
          ],
        },
        {
          heading: "By state", icon: "ph-map-pin", links: [
            { title: "West Bengal (e-Paddy & CMR)", href: "State-WestBengal.dc.html" },
            { title: "Uttar Pradesh (procurement & CMR)", href: "State-UttarPradesh.dc.html" },
            { title: "Odisha (OSCSC & CMR)", href: "State-Odisha.dc.html" },
            { title: "Bihar (PACS & CMR)", href: "State-Bihar.dc.html" },
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
      { q: "Does Millingo handle government CMR / levy procurement?", a: "Yes. Millingo covers the full CMR cycle — levy memos, camp pickups, CMR deliveries and release orders, and the 7.1 out-turn reconciliation — with state-specific workflow such as West Bengal e-Paddy." },
      { q: "Can Millingo track milling recovery and by-products?", a: "Yes. Each milling batch computes rice recovery and books bran, husk and broken rice as separate stock with their own valuation, so you see true profit per batch." },
      { q: "Which tiers does Millingo offer?", a: "Starter (small/seasonal, market-only mills), Professional (full operations, financials, quality/moisture slabs, by-product P&L), and Enterprise (government CMR business, statutory returns, multi-unit)." },
    ],
    cta: { title: "See Millingo run your mill's numbers", body: "Bring one season of paddy purchases and CMR memos — we’ll walk them through the system with you.", primary: "Get a free consultation" },
    seo: {
      metaTitle: "Millingo — Rice Mill ERP (Paddy, Milling, FCI/Levy CMR) | Svasamm",
      metaDescription: "Millingo is Svasamm's ERP built for rice mills: paddy procurement and quality grading, milling yield and by-products, gunny-bag accounting, and full FCI/state levy (CMR) compliance.",
      canonical: "https://svasamm.com/pages/millingo.html",
      ogType: "website",
      ogTitle: "Millingo — Rice Mill ERP | Svasamm",
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
    tagline: "Run your entire distributor network on one system",
    blurb:
      "DMS gives every distributor a scoped workspace while you keep central control — tiered stock allocation, order-to-delivery, commission and incentive calculation, and territory-level visibility across the whole network.",
    ctaPrimary: "Book a walkthrough",
    featuresTitle: "Central control, distributor-level detail",
    features: [
      { icon: "ph-user-focus", title: "Distributor-scoped access", body: "Each distributor sees only their own orders, stock and ledger — one system, cleanly partitioned." },
      { icon: "ph-stack", title: "Tiered stock & allocation", body: "Central warehouse to distributor to sub-stockist, with allocation rules and stock transfers." },
      { icon: "ph-package", title: "Order to delivery", body: "Order capture, approval, dispatch and proof-of-delivery, tracked end to end." },
      { icon: "ph-percent", title: "Commissions & incentives", body: "Slab-based commissions and scheme payouts computed automatically per distributor." },
      { icon: "ph-map-trifold", title: "Territory & beat control", body: "Geographies, beats and coverage mapped to distributors, with overlap prevention." },
      { icon: "ph-scales", title: "Ledgers & reconciliation", body: "Distributor-wise outstanding, credit limits and statements, reconciled to the day." },
    ],
    builtFor: ["OEM channel networks", "Coding & marking", "Packaging machinery", "Electrical & electronics", "Pharma & med-devices", "Automotive aftermarket", "HVAC & equipment", "Agri equipment"],
    resources: {
      title: "Guides, OEM-industry pages & comparisons",
      intro: "In-depth, indexable pages for the channel questions OEMs actually search — each is its own page for search & AI discovery.",
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
      { q: "Can each distributor log in and see only their data?", a: "Yes. Access is scoped per distributor — orders, stock and ledgers are partitioned so each party sees only their own, while head office sees the whole network." },
      { q: "Does DMS calculate commissions and scheme payouts?", a: "Yes. Slab-based commissions and promotional schemes are configured centrally and computed automatically on qualifying orders." },
      { q: "Can we run multiple stock tiers?", a: "Yes — central warehouse, distributor and sub-stockist tiers with allocation rules and inter-tier transfers." },
    ],
    cta: { title: "See DMS run your distribution network", body: "Bring one region and a distributor list — we’ll model the tiers, commissions and territories with you.", primary: "Book a walkthrough" },
    seo: {
      metaTitle: "DMS — Distributor Management System | Svasamm",
      metaDescription: "Run your entire distributor network on one system: distributor-scoped sales, tiered stock allocation, commissions and incentives, territory control, and reconciliation.",
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
      "A unified ERP for finance, inventory, procurement, manufacturing and sales — so a single source of truth drives your accounting, your warehouse and your shop floor, with Indian GST and statutory returns built in.",
    ctaPrimary: "Book a walkthrough",
    featuresTitle: "The whole operation, one source of truth",
    features: [
      { icon: "ph-book-open", title: "Finance & accounting", body: "General ledger, receivables/payables, cost centres and multi-entity consolidation." },
      { icon: "ph-warehouse", title: "Inventory & warehouse", body: "Multi-warehouse stock, batches, serials and valuation, live with every transaction." },
      { icon: "ph-shopping-cart", title: "Procurement", body: "Requisition to purchase order to receipt, with supplier scoring and approvals." },
      { icon: "ph-factory", title: "Manufacturing", body: "Bills of material, work orders and production planning tied to stock and costs." },
      { icon: "ph-receipt", title: "Sales & billing", body: "Quotation to invoice with GST, e-invoicing and e-way bill support." },
      { icon: "ph-file-text", title: "GST & statutory", body: "GST returns, TDS and Indian statutory reporting handled in the product." },
    ],
    builtFor: ["Manufacturing", "Trading & distribution", "Services", "Multi-entity groups", "Project-based firms"],
    resources: {
      title: "Guides & industry pages",
      intro: "In-depth, indexable pages for what ERP buyers actually search — each is its own page for search & AI discovery.",
      grid: "1fr 1.5fr",
      columns: [
        { heading: "ERP guide", icon: "ph-file-text", links: [{ title: "ERP implementation for Indian businesses", href: "Guide-ERPImplementation.dc.html" }] },
        {
          heading: "By industry", icon: "ph-buildings", links: [
            { title: "ERP for manufacturing", href: "ERP-Manufacturing.dc.html" },
            { title: "ERP for trading & distribution", href: "ERP-Trading.dc.html" },
            { title: "ERP for services & project firms", href: "ERP-Services.dc.html" },
          ],
        },
      ],
    },
    faqs: [
      { q: "Is Indian GST built in?", a: "Yes — GST-compliant invoicing, e-invoice and e-way bill support, and GST return preparation are part of the system, not a bolt-on." },
      { q: "Can it run multiple companies?", a: "Yes. Multiple legal entities with consolidation, inter-company transactions and per-entity books are supported." },
      { q: "Does it cover manufacturing?", a: "Yes — bills of material, work orders and production planning connect the shop floor to inventory and costing." },
    ],
    cta: { title: "See the ERP mapped to your books", body: "Bring a chart of accounts and a month of transactions — we’ll walk them through the system with you.", primary: "Book a walkthrough" },
    seo: {
      metaTitle: "ERP System — Finance, Supply Chain & Operations | Svasamm",
      metaDescription: "A unified ERP for finance, inventory, procurement, manufacturing and sales, with Indian GST and statutory returns built in.",
      canonical: "https://svasamm.com/pages/erp.html",
      ogType: "website",
      ogTitle: "ERP System | Svasamm",
      ogDescription: "One connected system for finance, warehouse and shop floor, with GST built in.",
    },
    jsonLd: [
      { "@context": "https://schema.org", "@type": "Service", name: "ERP System", serviceType: "Enterprise Resource Planning Software", description: "A unified ERP for finance, inventory, procurement, manufacturing and sales with Indian GST and statutory returns.", provider: { "@type": "Organization", name: "Svasamm", url: "https://svasamm.com" }, areaServed: "IN" },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" }, { "@type": "ListItem", position: 2, name: "Solutions", item: "https://svasamm.com/pages/services.html" }, { "@type": "ListItem", position: 3, name: "ERP System", item: "https://svasamm.com/pages/erp.html" }] },
    ],
  },
  {
    id: "hrms",
    name: "HRMS",
    badge: "Platform · HR",
    tagline: "HR from recruitment to retirement",
    blurb:
      "A single HR system for the whole employee lifecycle — recruitment and onboarding, attendance and shifts, payroll with Indian statutory compliance, leave, performance and employee self-service.",
    ctaPrimary: "Book a walkthrough",
    featuresTitle: "The whole employee lifecycle",
    features: [
      { icon: "ph-user-plus", title: "Recruitment & onboarding", body: "Job openings, applicant pipeline and structured onboarding into the employee record." },
      { icon: "ph-clock", title: "Attendance & shifts", body: "Shift rosters, biometric/geo check-in and overtime, feeding payroll directly." },
      { icon: "ph-money", title: "Payroll & compliance", body: "Salary structures with PF, ESI, TDS and professional tax computed and filed." },
      { icon: "ph-calendar-check", title: "Leave management", body: "Leave policies, balances, approvals and holiday calendars per location." },
      { icon: "ph-chart-bar", title: "Performance", body: "Goals, appraisal cycles and feedback tied to each employee." },
      { icon: "ph-device-mobile", title: "Employee self-service", body: "Payslips, leave requests and details, self-served from any device." },
    ],
    builtFor: ["SMEs & mid-market", "Manufacturing", "Multi-location teams", "Services firms", "Hospitals & clinics"],
    resources: {
      title: "Guides & industry pages",
      intro: "In-depth, indexable pages for what HR buyers actually search — each is its own page for search & AI discovery.",
      grid: "1fr 1.5fr",
      columns: [
        { heading: "HR guide", icon: "ph-file-text", links: [{ title: "Payroll & statutory compliance in India", href: "Guide-PayrollCompliance.dc.html" }] },
        {
          heading: "By industry", icon: "ph-buildings", links: [
            { title: "HRMS for manufacturing", href: "HRMS-Manufacturing.dc.html" },
            { title: "HRMS for multi-location retail", href: "HRMS-Retail.dc.html" },
            { title: "HRMS for hospitals & clinics", href: "HRMS-Healthcare.dc.html" },
          ],
        },
      ],
    },
    faqs: [
      { q: "Does payroll handle Indian statutory compliance?", a: "Yes — PF, ESI, TDS and professional tax are computed within payroll, with the reports needed for filing." },
      { q: "Can employees self-serve?", a: "Yes. Employees access payslips, apply for leave and update details from a self-service portal on any device." },
      { q: "Does attendance connect to payroll?", a: "Yes — shifts, biometric/geo check-in and overtime flow straight into the payroll run." },
    ],
    cta: { title: "See HRMS run one payroll cycle", body: "Bring a salary structure and an employee list — we’ll set up a sample cycle with you.", primary: "Book a walkthrough" },
    seo: {
      metaTitle: "HRMS — HR, Payroll & Attendance | Svasamm",
      metaDescription: "HR from recruitment to retirement: onboarding, attendance and shifts, payroll with Indian statutory compliance, leave, performance and employee self-service.",
      canonical: "https://svasamm.com/pages/hrms.html",
      ogType: "website",
      ogTitle: "HRMS | Svasamm",
      ogDescription: "The whole employee lifecycle on one system, with Indian payroll compliance built in.",
    },
    jsonLd: [
      { "@context": "https://schema.org", "@type": "Service", name: "HRMS", serviceType: "Human Resource Management Software", description: "HR management covering recruitment, onboarding, attendance, payroll with Indian statutory compliance, leave, performance and self-service.", provider: { "@type": "Organization", name: "Svasamm", url: "https://svasamm.com" }, areaServed: "IN" },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" }, { "@type": "ListItem", position: 2, name: "Solutions", item: "https://svasamm.com/pages/services.html" }, { "@type": "ListItem", position: 3, name: "HRMS", item: "https://svasamm.com/pages/hrms.html" }] },
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
];

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
  "digital.html": PRODUCTS[6],
};
