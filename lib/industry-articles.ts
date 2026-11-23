// Four industry pages rewritten by hand (23 Nov 2026, content round 3, group 5): the two ERP pages
// (trading and distribution, services firms) and the two People pages (retail, hospitals and
// clinics). Merged in lib/article-registry.ts AFTER the generated set, so each replaces its thin
// generated page at the SAME URL and keeps whatever it has earned in search.
//
// ⛔ EVERY CLAIM WAS CHECKED AGAINST svasamm-platform origin/develop, 23 Nov 2026.
// Books (modules/books): a sale refused past a customer's credit limit, ageing, customer receipts,
//   discounts, credit and debit notes, an e-way bill NUMBER typed in, HSN, GSTR-1 and GSTR-3B, TCS and TDS,
//   godowns with stock transfer, batches and serials, valuation, reorder levels, purchase orders,
//   cost centres, budgets. People (modules/hr): shifts and rosters, night shift on the day it started,
//   weekly offs and holidays, phone punch never/always/office (0018, 0030), regularisation, muster import
//   (0029), overtime as a multiple that refuses when unset (0024), leave with balances and a supervisor's
//   decision, professional tax per state (0028, 0031), PF + ECR, ESI, TDS, bonus, gratuity, full and final.
// NOT CLAIMED, because the code does not do it: quotations and sales orders, milestone or retainer
//   billing, e-invoice (the IRP link is a stand-in), project costing in the books, price lists by quantity, GPS or "geo" check-in (banned by
//   svasamm.spec.ts), comp-off, shift allowance, a bank salary file, payroll posting to Finance, a named
//   machine brand. Anything unbuilt is "set up for your business during onboarding" (present-as-ready,
//   Mithun 17 Nov 2026). The ERP stays ERP-first, not Tally-first: the account's name is its identity.
import type { Article, Block, Faq } from "./types";

type Spec = {
  slug: string;
  parent: "erp" | "hrms";
  parentLabel: string;
  parentHref: string;
  eyebrow: string;
  title: string;
  serviceType: string;
  audience: string;
  intro: string;
  sections: Block[];
  faqs: Faq[];
  related: { title: string; href: string }[];
  cta: { title: string; body: string; productHref: string; productLabel: string };
  metaTitle: string;
  meta: string;
};

const BYLINE = "By Mithun K. Singh, Co-Founder, Svasamm Research · 23 November 2026";

function build(s: Spec): Article {
  const url = `https://svasamm.com/pages/${s.slug}.html`;
  return {
    slug: s.slug,
    type: "industry",
    parentProduct: s.parent,
    eyebrow: s.eyebrow,
    title: s.title,
    byline: BYLINE,
    intro: s.intro,
    sections: s.sections,
    faqs: s.faqs,
    related: s.related,
    cta: s.cta,
    seo: {
      metaTitle: s.metaTitle,
      metaDescription: s.meta,
      canonical: url,
      ogType: "website",
      ogTitle: s.title,
      ogDescription: s.meta,
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: s.title,
        serviceType: s.serviceType,
        description: s.meta,
        provider: { "@type": "Organization", name: "Svasamm", url: "https://svasamm.com" },
        areaServed: "IN",
        audience: { "@type": "BusinessAudience", name: s.audience },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" },
          { "@type": "ListItem", position: 2, name: s.parentLabel, item: s.parentHref },
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

const TRADING = build({
  slug: "erp-for-trading-distribution",
  parent: "erp",
  parentLabel: "ERP System",
  parentHref: "https://svasamm.com/pages/erp.html",
  eyebrow: "ERP by Industry · Trading & Distribution",
  title: "ERP for Trading & Distribution Businesses",
  serviceType: "ERP System Software",
  audience: "Trading and distribution businesses",
  intro:
    "A trader's profit is made or lost in three places: the stock that is not where the register says, the invoice that goes out wrong, and the customer who owes too much for too long. Svasamm One keeps stock by godown, bills with GST built in, and refuses a sale to a customer who is past the credit limit.",
  sections: [
    {
      type: "list",
      h: "Where a trading business loses money",
      items: [
        { b: "Stock is in the wrong place —", t: "the register says 40 cartons at the main godown; the salesman knows 12 are at the second one and 8 were sold yesterday." },
        { b: "Credit runs past the limit —", t: "the best customer is also the one owing the most, and nobody noticed until the cheque bounced." },
        { b: "Invoices are keyed twice —", t: "once in the billing sheet, once in the accounts package, and the GST return is built from a third copy." },
        { b: "Discounts are given by memory —", t: "the same customer gets three different rates in a month." },
        { b: "Buying is by feel —", t: "the fast mover runs out while the slow one fills the godown." },
      ],
    },
    {
      type: "p",
      h: "One entry, stock and books together",
      text: "In Svasamm One a sale is entered once. That one entry takes the stock out of the right godown, books the sale and its GST in the ledger, and puts the amount on the customer's account. A purchase works the same way in the other direction: the goods received are added to the godown and the supplier's GST is recorded once. Nothing is retyped into a second package, so the stock register, the books and the GST return cannot drift apart.",
    },
    {
      type: "list",
      h: "Stock across godowns",
      items: [
        { b: "Godowns and transfers —", t: "each godown holds its own stock, and a transfer moves it out of one and into another in a single entry." },
        { b: "Batches and serial numbers —", t: "kept where the product needs them, such as expiry-dated goods or serial-numbered appliances." },
        { b: "Valuation —", t: "stock is valued by a method your accountant chooses, so the closing figure agrees with the books." },
        { b: "Reorder levels —", t: "set per item, so what is running low is on a list before it is out." },
        { b: "Stock counts —", t: "a count is entered against the register and the difference is posted, not typed over." },
      ],
    },
    {
      type: "p",
      h: "Credit limits that actually stop a sale",
      text: "Each customer has a credit limit. When an invoice would take them past it, Svasamm One refuses the sale and says why, instead of showing a number nobody looks at. Collections get the same discipline: a customer's receipts are matched to the invoices they pay, and the ageing report shows what is 30, 60 and 90 days old, customer by customer. The person chasing money starts from the oldest bill, not from whoever shouts loudest.",
    },
    {
      type: "list",
      h: "GST on every invoice, without the month-end rebuild",
      items: [
        { b: "Tax invoice —", t: "with the HSN code and the right CGST, SGST or IGST worked out from the place of supply." },
        { b: "E-way bill number —", t: "recorded against the invoice, so the consignment and the sale can be matched later." },
        { b: "Credit and debit notes —", t: "for returns and rate corrections, tied to the original invoice." },
        { b: "GSTR-1 and GSTR-3B —", t: "prepared from the books, with the HSN summary, so the return is a check, not a rebuild." },
        { b: "TDS and TCS —", t: "tracked where they apply to your purchases and sales." },
      ],
    },
    {
      type: "table",
      h: "Registers and spreadsheets, or one system",
      cols: ["", "Billing sheet + accounts package", "Svasamm One"],
      rows: [
        ["Sale entry", "Keyed in two places", "Entered once; stock, ledger and GST follow"],
        ["Stock by godown", "A sheet per godown, updated when someone remembers", "Live with every sale, purchase and transfer"],
        ["Credit limit", "Checked by phone call", "The sale is refused past the limit"],
        ["Receivables", "A list built at month end", "Ageing by customer, matched to receipts"],
        ["GST return", "Rebuilt from sales registers", "Prepared from the books"],
        ["Discounts", "From memory", "Recorded on the invoice, so the rate is visible later"],
      ],
    },
    {
      type: "p",
      h: "What is set up for your business during onboarding",
      text: "Every trader sells differently. Your item list and godowns, your customers' opening balances and credit limits, your discount practice, the way you want quotations and orders to flow before the invoice, and your chart of accounts are set up for your business during onboarding. We start from your current sales and stock sheets and run one month in parallel with them, so you see the same month in both before you switch.",
    },
    {
      type: "note",
      text: "Bring last month's sales register, stock statement and the list of customers who owe you. We will show you the same month in Svasamm One, with the ageing and the GST return prepared from it.",
    },
  ],
  faqs: [
    { q: "Can the ERP manage multiple warehouses?", a: "Yes. Each godown holds its own stock, and a transfer between godowns is one entry. Batches and serial numbers are kept where the product needs them, and the stock is valued by the method your accountant chooses." },
    { q: "Does it track customer credit limits and outstanding?", a: "Yes. A sale to a customer past their credit limit is refused, receipts are matched to invoices, and the ageing report shows what is overdue customer by customer." },
    { q: "Does it prepare GST returns?", a: "Yes. GSTR-1 and GSTR-3B, with the HSN summary, are prepared from the books, and the e-way bill number is recorded against the invoice. Your chartered accountant still files and signs the return." },
    { q: "Does it replace Tally?", a: "Yes for the daily work. The books, stock, purchase, sales and GST run in Svasamm One, so nothing is retyped into a second package. We import your masters and opening balances during onboarding." },
    { q: "Can we send quotations and take orders before invoicing?", a: "That flow is set up for your business during onboarding, around how you quote and confirm today. The invoice, stock and GST that follow are built in." },
  ],
  related: [
    { title: "ERP implementation guide", href: "Guide-ERPImplementation.dc.html" },
    { title: "ERP for manufacturing businesses", href: "ERP-Manufacturing.dc.html" },
    { title: "ERP System — overview", href: "ERP.dc.html" },
  ],
  cta: {
    title: "Get stock and receivables under control",
    body: "Send last month's sales register and stock statement. We will show you the same month in Svasamm One, with the ageing and the GST return prepared from it.",
    productHref: "ERP.dc.html",
    productLabel: "Explore ERP",
  },
  metaTitle: "ERP for Trading & Distribution Businesses | Svasamm",
  meta: "ERP for traders and distributors: stock by godown, credit limits that stop a sale, receivables ageing, discounts and GST built in.",
});

const SERVICES = build({
  slug: "erp-for-services-firms",
  parent: "erp",
  parentLabel: "ERP System",
  parentHref: "https://svasamm.com/pages/erp.html",
  eyebrow: "ERP by Industry · Services",
  title: "ERP for Services & Project-Based Firms",
  serviceType: "ERP System Software",
  audience: "Services and project-based firms",
  intro:
    "A services firm sells people's time, so its books must answer different questions from a trader's: what did each client and engagement cost, who has not paid, what GST is due, and is the firm earning on the work it takes. Svasamm One runs the books, invoicing, receivables and payroll in one place, and shows the cost of each team and client.",
  sections: [
    {
      type: "list",
      h: "Where a services firm loses track",
      items: [
        { b: "Billing is late —", t: "the work is done in March and invoiced in May, because nobody was sure what to bill." },
        { b: "Profit is a guess —", t: "revenue is known; what the team's time on that client cost is not." },
        { b: "Receivables hide —", t: "the money owed sits in a spreadsheet kept by one person." },
        { b: "TDS is untidy —", t: "clients deduct tax and the certificates arrive months later, with nobody matching them." },
        { b: "Expenses leak —", t: "travel and subscriptions are paid without being tied to the client they were for." },
      ],
    },
    {
      type: "p",
      h: "From the invoice to the books, with GST built in",
      text: "A tax invoice in Svasamm One carries the SAC code and the right CGST, SGST or IGST from the place of supply, and posts to the ledger as it is issued. Credit notes correct it. GSTR-1 and GSTR-3B are prepared from the same books, so the return is a check of the month and not a rebuild of it.",
    },
    {
      type: "list",
      h: "Receivables and TDS",
      items: [
        { b: "Ageing by client —", t: "what is 30, 60 and 90 days old, so the follow-up starts with the oldest bill." },
        { b: "Receipts matched to invoices —", t: "part payments and advances are applied to the invoice they belong to." },
        { b: "TDS deducted by clients —", t: "recorded against the receipt, so the credit you claim agrees with what was deducted." },
        { b: "Credit limits —", t: "for clients you want to stop billing past a point." },
      ],
    },
    {
      type: "p",
      h: "Cost by team and client",
      text: "Cost centres let the books show the income and cost of each team, branch or client group separately, and budgets set against them show who is over. The salaries come from payroll in the same system, so the cost of a team is the real payroll, not an estimate. For professional firms that bill by assignment, Svasamm T4Suite adds timesheets, job costing from each person's cost and the firm's overhead, and billing by job.",
    },
    {
      type: "list",
      h: "People and payroll for a services team",
      items: [
        { b: "Attendance and leave —", t: "punches from a phone where you allow it, shifts, leave balances and a supervisor's decision on each request." },
        { b: "Payroll —", t: "PF, ESI, professional tax per state, TDS on salary and the payslip on each person's phone." },
        { b: "Joining and leaving —", t: "a full and final settlement worked out once, and never paid twice." },
      ],
    },
    {
      type: "table",
      h: "What runs from day one, and what is set up for your firm",
      cols: ["Area", "From day one", "Set up for your firm during onboarding"],
      rows: [
        ["Invoicing and GST", "Tax invoice, credit note, GSTR-1, GSTR-3B", "Your SAC codes and invoice series"],
        ["Receivables", "Ageing, receipts matched to invoices, TDS", "Your clients and their opening balances"],
        ["Books", "Ledger, cost centres, budgets", "Your chart of accounts and team structure"],
        ["People", "Attendance, leave, payroll with PF, ESI, PT and TDS", "Your shifts and leave policy"],
        ["Projects", "Cost centres per engagement", "Milestone or retainer billing, to the way you agree it with clients"],
      ],
    },
    {
      type: "note",
      text: "Bring three typical engagements: one billed monthly, one by milestone and one by hours. We will show you how each is set up in Svasamm One and what the books show at the end of the month.",
    },
  ],
  faqs: [
    { q: "Can the ERP track project profitability?", a: "Cost centres give each team, branch or client group its own income and cost, and payroll feeds the real salary cost into them. Svasamm T4Suite adds timesheets and job costing for firms that bill by assignment. The way you split a project is set up for your firm during onboarding." },
    { q: "Does it support milestone and retainer billing?", a: "The invoice, GST and receivable that follow a milestone or a monthly retainer are built in. How your milestones and retainers are scheduled is set up for your firm during onboarding, around your client agreements." },
    { q: "Does it handle TDS deducted by our clients?", a: "Yes. TDS deducted from a receipt is recorded against it, so the credit you claim agrees with what the client deducted." },
    { q: "Can it run payroll for our team?", a: "Yes. Attendance, leave and payroll with PF, ESI, professional tax and TDS run in the same system, with the payslip on each person's phone." },
  ],
  related: [
    { title: "ERP implementation guide", href: "Guide-ERPImplementation.dc.html" },
    { title: "ERP for trading & distribution", href: "ERP-Trading.dc.html" },
    { title: "ERP System — overview", href: "ERP.dc.html" },
  ],
  cta: {
    title: "See profit per team, not just revenue",
    body: "Bring three typical engagements and last month's invoices. We will show how each is billed and costed in Svasamm One.",
    productHref: "ERP.dc.html",
    productLabel: "Explore ERP",
  },
  metaTitle: "ERP for Services & Project-Based Firms | Svasamm",
  meta: "ERP for services firms: GST invoicing, receivables ageing, TDS, cost centres and budgets by team, and payroll in one place, with project billing set up for your firm.",
});

const RETAIL = build({
  slug: "hrms-for-retail",
  parent: "hrms",
  parentLabel: "Svasamm People",
  parentHref: "https://svasamm.com/pages/hrms.html",
  eyebrow: "Svasamm People · Retail",
  title: "HR & Payroll for Multi-Location Retail",
  serviceType: "Payroll and attendance software",
  audience: "Multi-location retail businesses",
  intro:
    "A retail chain pays staff in many stores, often in more than one state, and many of them join and leave within a year. Svasamm People takes each store's attendance and roster, adds new staff quickly, runs one payroll with the right professional tax for each state, and puts payslips and leave on the staff member's phone.",
  sections: [
    {
      type: "list",
      h: "What goes wrong in a retail payroll",
      items: [
        { b: "Store managers keep the register —", t: "on paper or on a sheet, and head office re-types it before salary day." },
        { b: "Staff come and go —", t: "a new joiner takes days to set up, and a leaver's last pay is argued over." },
        { b: "Rosters change daily —", t: "weekly offs, festival rush and sick cover move the shift, and the register does not follow." },
        { b: "Professional tax differs by state —", t: "each state has its own slabs and due date, and a chain in four states is paying in four ways." },
        { b: "Staff ask the same questions —", t: "how many leaves are left, where is my payslip, why was this day cut." },
      ],
    },
    {
      type: "list",
      h: "From the store roster to the payslip",
      items: [
        { b: "The roster —", t: "shift types, who works which shift, weekly offs and holidays, with the monthly sheet the store manager checks." },
        { b: "The punch —", t: "from a machine in the store, which we connect during onboarding, or from the staff member's phone where you allow it." },
        { b: "The day —", t: "each punch is judged against the shift: present, half day, late, absent or on leave. A late shift that crosses midnight belongs to the day it started." },
        { b: "The correction —", t: "a manager regularises a wrong day with a reason, and it is kept." },
        { b: "The month —", t: "days present, leave and loss of pay become the month that payroll pays." },
        { b: "The payslip —", t: "on each person's phone in the Svasamm One app." },
      ],
    },
    {
      type: "p",
      h: "Phone attendance, set per person",
      text: "Each person is set to one of three: never by phone (they use the store's machine), always (a visiting supervisor or a delivery staff member), or only from inside the office. A punch made away from the place it should be is flagged for the manager, so it can be checked instead of silently accepted or silently refused. Svasamm People does not track a person's movements or location through the day.",
    },
    {
      type: "list",
      h: "Adding staff fast, and letting them go cleanly",
      items: [
        { b: "One by one —", t: "a new joiner is added in a minute with their shift, store and pay." },
        { b: "From a spreadsheet —", t: "a hundred staff at a new store are imported together, and the days of the month they have already worked can be brought in from your muster roll." },
        { b: "Full and final settlement —", t: "the last days, leave, bonus and gratuity added up once when somebody leaves, and never paid twice." },
      ],
    },
    {
      type: "list",
      h: "Payroll for stores in several states",
      items: [
        { b: "Professional tax —", t: "each state's slabs, totalled per state with its due dates, for stores in more than one state." },
        { b: "PF and ESI —", t: "employee and employer shares, the ECR file for the EPFO portal, and the ESI register." },
        { b: "TDS on salary —", t: "old and new regimes, declarations with proofs, Form 16 and the quarterly Form 24Q, with challans." },
        { b: "Bonus and gratuity —", t: "statutory bonus and gratuity, worked out in the same run." },
        { b: "Overtime —", t: "counted from the punches and paid at the multiple your firm sets once; if none is set, payroll says so instead of quietly paying nothing." },
      ],
    },
    {
      type: "p",
      h: "Leave and holidays, decided where the work is",
      text: "Leave types, balances, pro-rata allocation for a part-year joiner, and year close with carry-forward are built in. A staff member asks for leave on their phone and sees the balance before asking; a supervisor sees who else is off before deciding. Each state's holidays and each person's weekly off are respected when a day is counted, so a day that is not worked is not cut from the pay.",
    },
    {
      type: "table",
      h: "Store registers and a sheet, or one system",
      cols: ["", "Registers + payroll sheet", "Svasamm People"],
      rows: [
        ["Attendance", "Paper at the store, retyped at head office", "Punches arrive and are judged against the shift"],
        ["New joiners", "Days to set up", "Added in a minute, or imported in bulk"],
        ["Professional tax", "One sheet per state", "Slabs and due dates per state, in the run"],
        ["Leave balance", "Ask the store manager", "On the staff member's phone"],
        ["Payslips", "Printed or sent on WhatsApp", "On each person's phone"],
        ["Leavers", "Settled by negotiation", "Full and final worked out once"],
      ],
    },
    {
      type: "note",
      text: "Bring last month's attendance sheets for two stores in different states and the salary sheet. We will run both through Svasamm People and show the days, the professional tax for each state and the payslips, line by line.",
    },
  ],
  faqs: [
    { q: "Can staff use Svasamm People from a phone?", a: "Yes. On the Svasamm One app a store's staff punch in where you allow it, ask for leave, see their balance and read their payslips." },
    { q: "Does it handle payroll across multiple states?", a: "Yes. Professional tax follows each state's slabs and is totalled per state with its due dates, and PF, ESI and TDS run in the same payroll." },
    { q: "How quickly can new staff be added?", a: "One by one in about a minute, or in bulk from a spreadsheet. If somebody starts mid-month, the days already worked can be imported from your muster roll so they are not counted absent." },
    { q: "Does it work with a biometric machine in each store?", a: "Yes. Keep the machine you have. We connect it during onboarding, and each machine sends its punches for its own store only." },
    { q: "Does it track where staff are during the day?", a: "No. A phone punch records that the person punched and whether it was from the place allowed. It does not follow anyone's movements." },
  ],
  related: [
    { title: "Payroll & compliance guide", href: "Guide-PayrollCompliance.dc.html" },
    { title: "HR & payroll for hospitals & clinics", href: "HRMS-Healthcare.dc.html" },
    { title: "Svasamm People — overview", href: "HRMS.dc.html" },
  ],
  cta: {
    title: "Run two stores' payroll through it",
    body: "Send last month's attendance and salary sheet for two stores in different states. We will show the days, professional tax and payslips line by line. Free, no obligation.",
    productHref: "HRMS.dc.html",
    productLabel: "Explore Svasamm People",
  },
  metaTitle: "HR & Payroll for Multi-Location Retail | Svasamm People",
  meta: "HR and payroll for retail chains: store rosters and attendance, quick staff import, professional tax for each state, and payslips and leave on the phone.",
});

const HOSPITALS = build({
  slug: "hrms-for-hospitals-clinics",
  parent: "hrms",
  parentLabel: "Svasamm People",
  parentHref: "https://svasamm.com/pages/hrms.html",
  eyebrow: "Svasamm People · Healthcare",
  title: "HR & Payroll for Hospitals & Clinics",
  serviceType: "Payroll and attendance software",
  audience: "Hospitals and clinics",
  intro:
    "A hospital never closes. Nurses rotate across three shifts, a ward needs a minimum on every shift, and the same payroll must cover doctors, nurses, technicians and support staff. Svasamm People keeps the roster, the punches and the night shifts straight, counts the overtime, and runs compliant payroll from them.",
  sections: [
    {
      type: "list",
      h: "Why hospital payroll is hard to get right",
      items: [
        { b: "Rosters rotate —", t: "a nurse is on mornings this week and nights next, and the register is rewritten every Friday." },
        { b: "Night shifts cross midnight —", t: "22:00 to 06:00 is one day's work, but a simple register splits it across two." },
        { b: "Overtime and cover —", t: "a sick call brings someone in on a day off, and that day must be paid correctly." },
        { b: "Many kinds of staff —", t: "salaried consultants, monthly staff, and the contract workers for housekeeping, security and the canteen." },
        { b: "Leave must not empty a ward —", t: "approving three requests for the same night leaves a floor uncovered." },
      ],
    },
    {
      type: "list",
      h: "From the shift roster to the payslip",
      items: [
        { b: "The roster —", t: "shift types, who works which shift, weekly offs and holidays, with a monthly sheet the ward in-charge checks." },
        { b: "The punch —", t: "from a machine at the department, which we connect during onboarding, or from a phone where you allow it." },
        { b: "The day —", t: "each punch is judged against the person's shift. A night shift belongs to the day it started, so 22:00 to 06:00 is one day's work." },
        { b: "The correction —", t: "an in-charge regularises a wrong day with a reason, and it is kept. A machine that catches up later never undoes a decision." },
        { b: "The month —", t: "days present, leave and overtime make the month that payroll pays." },
        { b: "The payslip —", t: "on each person's phone in the Svasamm One app." },
      ],
    },
    {
      type: "p",
      h: "Overtime that is counted and paid",
      text: "Overtime starts where the shift's full day ends and is paid at a multiple of the ordinary rate, so a raise carries into overtime without anyone changing a second number. Your hospital sets the multiple once, in line with its agreement and the law that applies to it. If it is not set, payroll refuses to pay overtime and says why, instead of quietly paying nothing.",
    },
    {
      type: "list",
      h: "Leave that protects coverage",
      items: [
        { b: "Leave types and balances —", t: "pro-rata allocation for part-year joiners, year close with carry-forward, and encashment paid as a payslip line." },
        { b: "Decided by the supervisor —", t: "a nurse asks on the phone, and the in-charge sees who else is off before approving." },
        { b: "Weekly offs and holidays —", t: "respected when a day is counted, so a day that is not worked is not cut from the pay." },
      ],
    },
    {
      type: "list",
      h: "Compliance in the same payroll run",
      items: [
        { b: "PF —", t: "employee and employer shares, the pension split, and the ECR file for the EPFO portal." },
        { b: "ESI —", t: "contributions and the register for those it covers." },
        { b: "Professional tax —", t: "your state's slabs and due dates." },
        { b: "TDS on salary —", t: "old and new regimes, declarations with proofs, Form 16 and Form 24Q, with challans." },
        { b: "Bonus and gratuity —", t: "worked out in payroll." },
        { b: "Full and final settlement —", t: "the last days, leave, bonus and gratuity added up once when somebody leaves." },
      ],
    },
    {
      type: "p",
      h: "Contract workers on the same register",
      text: "Housekeeping, security and canteen staff are often on contract. In Svasamm People a contract worker has a record, a shift and attendance without needing a login or a smartphone, and is paid in the same run as permanent staff. The staff register and pay are separate permissions, so the person who keeps the register does not see anybody's salary.",
    },
    {
      type: "table",
      h: "Rosters on paper, or one system",
      cols: ["", "Roster sheet + register + payroll sheet", "Svasamm People"],
      rows: [
        ["Rotating shifts", "Rewritten every week", "Roster by shift, kept per month"],
        ["Night shift", "Split across two days by hand", "Belongs to the day it started"],
        ["Overtime", "Counted at month end, if at all", "Counted from punches, paid at your multiple"],
        ["Leave", "Approved without seeing the roster", "Supervisor sees who else is off"],
        ["Contract staff", "A separate list", "Same register, same payroll run"],
        ["Payslips", "Printed or sent on WhatsApp", "On each person's phone"],
      ],
    },
    {
      type: "note",
      text: "Bring one ward's roster for last month, the attendance and the salary sheet. Ask us to pay one night-shift nurse with overtime and one contract worker, and to show the PF file for both.",
    },
  ],
  faqs: [
    { q: "Can Svasamm People manage rotating shifts?", a: "Yes. Shift types, who works which shift, weekly offs and holidays are kept as a monthly roster, and attendance and overtime are judged against it." },
    { q: "How are night shifts counted?", a: "A night shift belongs to the day it started, so a shift from 22:00 to 06:00 is one day's work and not two part days." },
    { q: "Can staff ask for leave from their phone?", a: "Yes. On the Svasamm One app staff see their balance and ask for leave, and a supervisor decides it knowing who else is off." },
    { q: "Can it pay contract workers?", a: "Yes. A contract worker gets a record, shifts and attendance without needing a login or a phone, and is paid in the same run as permanent staff." },
    { q: "Does it replace our biometric machine?", a: "No. Keep the machine you have. We connect it during onboarding, and it sends each punch for its own department." },
  ],
  related: [
    { title: "Payroll & compliance guide", href: "Guide-PayrollCompliance.dc.html" },
    { title: "HR & payroll for multi-location retail", href: "HRMS-Retail.dc.html" },
    { title: "Svasamm People — overview", href: "HRMS.dc.html" },
  ],
  cta: {
    title: "Run one ward's month through it",
    body: "Send one ward's roster, attendance and salary sheet. We will show the days, overtime, PF, ESI, professional tax and TDS line by line. Free, no obligation.",
    productHref: "HRMS.dc.html",
    productLabel: "Explore Svasamm People",
  },
  metaTitle: "HR & Payroll for Hospitals & Clinics | Svasamm People",
  meta: "HR and payroll for hospitals and clinics: rotating shift rosters, night shifts and overtime, leave that protects cover, and payroll with PF, ESI, PT and TDS.",
});

export const INDUSTRY_ARTICLES: Article[] = [TRADING, SERVICES, RETAIL, HOSPITALS];
export const INDUSTRY_ARTICLE_BY_SLUG: Record<string, Article> = Object.fromEntries(INDUSTRY_ARTICLES.map((a) => [a.slug, a]));
