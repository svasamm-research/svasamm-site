// The four "Why Svasamm" pages the home page's cards open (12 Oct 2026). Hand-authored,
// merged in lib/article-registry.ts like every other article source.
//
// ⛔ EVERY CLAIM HERE WAS CHECKED AGAINST svasamm-platform origin/main (a77daf50) on
// 12 Oct 2026. What is built is said plainly; what is not is either left out or marked
// "coming". Before adding a sentence, find it in the code — the site said "self-hostable",
// "integrate with what you run" and "ABDM" for months with none of the three true.
import type { Article } from "./types";

const DATE = "2026-10-12";
const url = (slug: string) => `https://svasamm.com/pages/${slug}.html`;

function why(a: Omit<Article, "type" | "parentProduct" | "byline" | "jsonLd" | "seo"> & {
  metaTitle: string;
  metaDescription: string;
  crumb: string;
  date?: string; // published, ISO; the first four pages share DATE
  changed?: string; // last rewritten, ISO; the sitemap's lastmod reads it through dateModified
}): Article {
  const { metaTitle, metaDescription, crumb, date = DATE, changed = date, ...rest } = a;
  const shown = new Date(date + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  return {
    ...rest,
    type: "guide",
    parentProduct: "platform",
    byline: `By Mithun K. Singh, Co-Founder, Svasamm Research · ${shown}`,
    seo: {
      metaTitle,
      metaDescription,
      canonical: url(a.slug),
      ogType: "article",
      ogTitle: a.title,
      ogDescription: metaDescription,
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: a.title,
        description: metaDescription,
        author: {
          "@type": "Person",
          name: "Mithun K. Singh",
          jobTitle: "Co-Founder",
          worksFor: { "@type": "Organization", name: "Svasamm Research Pvt Ltd" },
        },
        publisher: { "@type": "Organization", name: "Svasamm" },
        datePublished: date,
        dateModified: changed,
        mainEntityOfPage: url(a.slug),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://svasamm.com/" },
          { "@type": "ListItem", position: 2, name: "Why Svasamm", item: "https://svasamm.com/#why" },
          { "@type": "ListItem", position: 3, name: crumb, item: url(a.slug) },
        ],
      },
    ],
  };
}

const CTA = { productHref: "Solutions.dc.html", productLabel: "See every product" };
const OTHERS = (self: string) =>
  [
    { title: "Customized, not customizable", href: "/pages/customized-software-for-your-industry.html" },
    { title: "Configured to your workflow", href: "/pages/configured-to-your-workflow.html" },
    { title: "Where Svasamm One runs", href: "/pages/hosting-and-your-data.html" },
    { title: "One open API", href: "/pages/api-and-integrations.html" },
    { title: "India-first compliance", href: "/pages/india-compliance.html" },
  ].filter((r) => !r.href.includes(self));

export const WHY_ARTICLES: Article[] = [
  why({
    slug: "customized-software-for-your-industry",
    date: "2026-10-14",
    crumb: "Customized, not customizable",
    eyebrow: "Why Svasamm · Customized",
    title: "Customized, Not Customizable: Software Built for Your Industry Before You Arrive",
    metaTitle: "Customized vs Customizable Software for Your Industry | Svasamm",
    metaDescription:
      "Customizable software leaves the fitting to you. Customized software arrives already fitted to your industry. What that means for a rice mill, a CA firm and a payroll — and what Svasamm still leaves for your firm to choose.",
    intro:
      "Every business-software brochure now says it can be shaped to fit you. There are two very different things behind that word. Customizable software is a general tool with switches — you, or a consultant you pay, spend months making it fit. Customized software arrives already shaped for one industry, and leaves you only the choices that really differ from firm to firm. Svasamm builds the second kind.",
    sections: [
      {
        type: "table",
        h: "The difference, side by side",
        cols: ["", "Customizable software", "Customized for your industry"],
        rows: [
          ["Where it starts", "A general ledger, a general form builder", "Your industry's own records — a CMR season, a payroll month, a client's filing list"],
          ["Who does the fitting", "You, or a consultant billed by the day", "Already done; your firm answers a short setup checklist"],
          ["The industry's rules", "Added by you as fields and formulas", "Inside the product — PF and professional tax, GST returns, the 67% out-turn"],
          ["When a rule changes", "Your configuration may break; you fix it", "We change the product, and every firm gets the change"],
          ["What can go wrong", "A field typed wrongly once is wrong every month", "A figure the law fixes cannot be typed over"],
        ],
      },
      {
        type: "list",
        h: "What “customized” means in each Svasamm product",
        items: [
          { b: "Millingo, for rice mills", t: "— the CMR season kept apart from the financial year, the government's paddy and the mill's own paddy in separate pools, gunny bags and the shortfall as a debt. A generic ERP has none of these words." },
          { b: "Svasamm People, for any firm's payroll", t: "— PF, ESI, professional tax for every state and union territory with its due dates, TDS under both regimes, Form 24Q and Form 16 Part B, from the first month." },
          { b: "T4Suite, for CA and compliance firms", t: "— starter task lists for the filings a practice handles (GST returns, TDS returns, income-tax returns, ROC filings), set by the kind of firm: CA, law, company secretary or other." },
        ],
      },
      {
        type: "p",
        h: "What your firm still chooses",
        text: "Customized does not mean rigid. Where firms genuinely differ, the product asks once, during setup: when overtime starts in your factory, whether each establishment is registered for PF and ESI, what a salary is made of, the day your week starts, your mill's recovery rate for the season. Each choice is a short list of options with a stated default — not a blank form to design.",
      },
      {
        type: "p",
        h: "When your rule doesn't fit",
        text: "**We change the product, not your copy of it.** The overtime choice in Svasamm People exists because one company's policy did not fit a single fixed figure; it became a setting with options, and every firm now has it. That is the other half of customized: the fitting is our work, done once, for the whole industry — not yours, done again at every upgrade.",
      },
      {
        type: "note",
        text: "**What we do not offer today: custom fields, custom workflows or roles you design yourself.** If your firm needs something none of the choices covers, tell us — it is how the products grow.",
      },
    ],
    faqs: [
      { q: "What is the difference between customized and customizable software?", a: "Customizable software is a general tool you configure to fit your business, often with a consultant. Customized software is built for one industry from the start, so its records, rules and reports already fit; you only make the few choices that differ from firm to firm." },
      { q: "Is Svasamm customized or customizable?", a: "Customized. Each product is built for one industry — rice mills, CA firms, payroll — and asks your firm a short list of setup choices. Custom fields and workflows you design yourself are not offered today." },
      { q: "What if our firm works differently?", a: "Tell us. If your rule is one other firms share, it becomes a setting in the product for everyone — as the overtime choice in Svasamm People did." },
    ],
    related: OTHERS("customized-software-for-your-industry"),
    cta: { ...CTA, title: "Is your industry one we have built for?", body: "Tell us what your business runs on. If one of our products fits, we will show you in your own figures; if none does, we will say so." },
  }),

  why({
    slug: "configured-to-your-workflow",
    changed: "2026-11-18",
    crumb: "Configured to your workflow",
    eyebrow: "Why Svasamm · Workflow",
    title: "Configured to Your Workflow: What a Firm Sets, and What It Never Has To",
    metaTitle: "Configured to Your Workflow — Svasamm One",
    metaDescription:
      "How Svasamm's products fit a firm: setup as a checklist, the choices each product asks for, roles per product, and what is never pre-filled.",
    intro:
      "Each Svasamm product starts from the way its industry already works — a payroll that knows PF and professional tax, a rice-mill book that knows a CMR season. What is left to your firm is a short list of choices, asked for once, in the order the work needs them.",
    sections: [
      {
        type: "p",
        h: "Setup is a checklist, not a settings page",
        text: "Instead of a page of switches, **setting up a product is a list of steps with a count of how many are done**. A step that is not finished says exactly what is missing and for whom — for example, that one person has no salary yet — so nothing is left half set up without anyone knowing.",
      },
      {
        type: "table",
        h: "The choices each product asks for",
        cols: ["Product", "What your firm decides"],
        rows: [
          ["Svasamm People", "When overtime starts — after the shift, after a set number of hours (nine unless you change it), or never. Whether each establishment is registered for PF and ESI, asked before the first payroll month. What a salary is made of — fixed parts, a percentage of another part, a slab, or the balance."],
          ["T4Suite", "The day your week starts and when an idle timer stops. Starter roles and task lists by the kind of firm — CA, law, company secretary or other — which you then switch on or off."],
          ["Millingo", "Whether TDS under section 194Q applies to your purchases, with its threshold and rate. Milling capacity per hour and shift hours. Your mill type and the recovery rate for each CMR season."],
        ],
      },
      {
        type: "p",
        h: "Roles come with the product you buy",
        text: "A new firm gets three roles of its own — Owner, Administrator and Member — and the roles of the products it bought, nothing more. Each permission in a role can be switched on or off; **the Owner role cannot be changed, so the firm can never lock itself out**. Who may change a setting is named for each product, so a bookkeeper can set tax rates without holding the owner's keys.",
      },
      {
        type: "list",
        h: "What is never pre-filled",
        items: [
          { b: "Another firm's data", t: "— Millingo starts with only what every mill shares; your varieties and godowns are yours to add." },
          { b: "A salary you did not set", t: "— a payroll month will not run for someone with no salary structure; it says who and why." },
          { b: "Your staff list", t: "— Svasamm People can import it from a CSV file instead of typing it in." },
        ],
      },
      {
        type: "p",
        h: "Why a short list of choices beats a long settings page",
        text: "Most business software is sold as \"fully customisable\", and then a firm spends its first three months filling in hundreds of settings it never asked for. The settings that matter get lost among the ones that do not, and a wrong switch shows up only when a payslip or a return comes out wrong. **Starting from the industry's own practice means the product already knows the parts every firm shares** — how PF is worked out, what a CMR season is, which filings a CA firm tracks — and asks your firm only what is genuinely yours.",
      },
      {
        type: "table",
        h: "What onboarding looks like",
        cols: ["Step", "What happens", "Who does it"],
        rows: [
          ["Walk-through", "We sit with the people who do the work and go through one real month: a payroll, a season's purchases, a client's filings. Every rule your firm follows is written down in its own words.", "Your team and ours"],
          ["Setup checklist", "The product's steps are answered — the choices in the table above, your establishments, your tax registrations — and the checklist shows what is still open.", "Our team, with your answers"],
          ["Your masters", "Staff, items, parties, godowns or clients are brought in from your files. A staff list comes in from a CSV file.", "Our team"],
          ["A month side by side", "One month is run in Svasamm and in your old way together, and the figures are compared line by line before you switch.", "Your team, with ours"],
          ["Your own way of working", "Where your firm works in a way the product's choices do not cover, it is set up for your firm during onboarding, after we have seen it.", "Our team"],
        ],
      },
      {
        type: "list",
        h: "What to have ready before the walk-through",
        items: [
          { b: "One recent month of the real work", t: "— a salary register, a purchase book, a list of client filings. Real papers find the rules nobody thinks to mention." },
          { b: "Your registrations", t: "— GSTIN, PF and ESI codes, TAN, and which state each place of work is in, because professional tax and some rules follow the state." },
          { b: "Who does what", t: "— who enters, who approves and who only reads. This decides which roles each person gets." },
          { b: "The exceptions", t: "— the overtime rule for one shift, the party who is always paid late, the client who files quarterly. These are where a product either fits your firm or does not." },
        ],
      },
      {
        type: "p",
        h: "Changing a choice later",
        text: "A choice is not fixed for ever. Overtime rules, shift hours and the recovery rate for a new CMR season can be changed by the person whose role allows it, and the change applies from then on. **A payroll month already submitted keeps the figures it was worked out with**, so a change made in March does not quietly rewrite January's payslips.",
      },
      {
        type: "note",
        text: "**If your firm works in a way none of these choices covers, tell us.** It is set up for your firm during onboarding — the overtime choice above exists because a client's rule did not fit one fixed figure.",
      },
    ],
    faqs: [
      { q: "Can we create our own roles?", a: "Each product brings the roles its industry needs, and you switch each permission on or off for your firm. The Owner role is fixed, so the firm can never lock itself out." },
      { q: "How long does setup take?", a: "For one product and one location, the walk-through and setup take a few days; most of the time after that is the month run side by side, which is what makes the switch safe." },
      { q: "Can a choice be changed after we start?", a: "Yes, by the person whose role allows it. The change applies from then on; a payroll month already submitted keeps its figures." },
      { q: "Do we have to finish setup before using the product?", a: "No. Setup shows what is done and what is missing; a step only blocks the work that depends on it — a payroll month, for example, waits for PF and ESI registration to be answered." },
    ],
    related: OTHERS("configured-to-your-workflow"),
    cta: { ...CTA, title: "Walk us through how your firm works", body: "Show us one month of your work and we will show you which of these choices your firm makes, and where a product would not fit yet." },
  }),

  why({
    slug: "hosting-and-your-data",
    changed: "2026-11-18",
    crumb: "Where Svasamm One runs",
    eyebrow: "Why Svasamm · Hosting",
    title: "Where Svasamm One Runs: Hosted by Us, or Your Own Deployment on Request",
    metaTitle: "Hosting and Your Data — Svasamm One",
    metaDescription:
      "Svasamm One is hosted by us; a deployment of your own is available on request. How it is built, how each firm's data is kept apart, and where documents live.",
    intro:
      "Svasamm One runs on servers we operate, and every client signs in at app.svasamm.com. A deployment of your own — on your servers or a cloud account you hold — is available on request. This page says how the system is built, so you can judge either.",
    sections: [
      {
        type: "p",
        h: "How it is built",
        text: "Svasamm One is two pieces: one server program that answers for every product, and the web app people use. Both ship as container images. The database is PostgreSQL, and the changes to its structure are carried inside the server program itself, so a deployment cannot run with the wrong version of its own tables.",
      },
      {
        type: "p",
        h: "How each firm's data is kept apart",
        text: "Many firms share one database, and the database itself keeps them apart: **row-level security means a query made for one firm cannot see another firm's rows**, even if the program asking has a fault. Which products a firm has is a setting, not a separate build — every firm runs the same software.",
      },
      {
        type: "p",
        h: "Where your documents live",
        text: "T4Suite stores a firm's documents in S3-compatible storage, and they are uploaded and downloaded directly between the browser and that storage — **the files never pass through our server**.",
      },
      {
        type: "list",
        h: "A deployment of your own",
        items: [
          { b: "What it needs", t: "— a server that runs containers, and PostgreSQL 18." },
          { b: "How it starts", t: "— your firm is set up from the same image with one command; nothing is built specially for you." },
          { b: "What to ask us", t: "— who runs it day to day, how it is backed up, and how updates reach it. We agree these before it starts." },
        ],
      },
      {
        type: "p",
        h: "Hosted in India",
        text: "Our hosted service runs on servers in India, so your firm's records stay in the country. For a payroll that holds staff's PAN, bank accounts and salaries, or a mill's books, that is the question most owners ask first.",
      },
      {
        type: "table",
        h: "Hosted by us, or your own deployment",
        cols: ["", "Hosted by us", "Your own deployment"],
        rows: [
          ["Where it runs", "Our servers in India; you sign in at app.svasamm.com", "Your servers, or a cloud account your firm holds"],
          ["Who keeps it running", "We do", "Agreed with you before it starts — your team, ours, or both"],
          ["Updates", "Reach every firm together, with the database changes carried inside the server program", "The same images, applied when agreed with you"],
          ["Backups", "Ours to run", "Agreed with you before it starts"],
          ["What it costs your team", "Nothing to run", "A server, PostgreSQL 18, and someone to watch them"],
        ],
      },
      {
        type: "p",
        h: "Your data is yours to take",
        text: "Your firm owns its records. **When an account ends, the firm has 30 days to export its data; after that it is deleted.** An account that is unpaid becomes read-only after seven days — the records are never deleted for a late payment. The same rules are written in our terms, privacy policy and refund policy.",
      },
      {
        type: "p",
        h: "Personal data and the DPDP Act",
        text: "India's Digital Personal Data Protection Act, 2023 puts the duty for personal data on the business that decides why it is collected — for a payroll, that is your firm, deciding what it keeps about its staff. Svasamm processes that data on your firm's behalf. Keeping each firm's rows apart in the database, keeping documents out of our server's path, and signing people in with short-lived tokens are how the system holds up its side of that.",
      },
      {
        type: "list",
        h: "Questions to ask any software vendor about your data",
        items: [
          { b: "Where are the servers?", t: "— in which country, and whose account they run in." },
          { b: "How is my firm kept apart from the others?", t: "— by the database itself, or only by the program's care." },
          { b: "Do my files pass through your servers?", t: "— and are they kept there." },
          { b: "What happens when we leave?", t: "— how long we have to export, in what form, and when it is deleted." },
          { b: "What happens if we pay late?", t: "— whether the records are locked, read-only or removed." },
        ],
      },
    ],
    faqs: [
      { q: "Can we run Svasamm One on our own servers?", a: "On request. It is built from the same images we run, but every client today uses our hosted service, so we agree the running, backups and updates with you first." },
      { q: "Can another firm see our data?", a: "No. Firms share a database, and the database's row-level security limits every query to one firm's rows." },
      { q: "Where is our data stored?", a: "On servers in India, for our hosted service. A deployment of your own runs wherever your firm chooses." },
      { q: "Can we take our data with us if we leave?", a: "Yes. When an account ends, the firm has 30 days to export its data, after which it is deleted." },
    ],
    related: OTHERS("hosting-and-your-data"),
    cta: { ...CTA, title: "Hosted, or your own?", body: "Tell us where your data has to live and we will tell you plainly what each option involves." },
  }),

  why({
    slug: "api-and-integrations",
    changed: "2026-11-18",
    crumb: "One open API",
    eyebrow: "Why Svasamm · API",
    title: "One Open API Under Every Screen, Connected to Your Systems",
    metaTitle: "API and Integrations — Svasamm One",
    metaDescription:
      "Every Svasamm One screen runs on one REST API. How it works, how access is checked, and how your other systems are connected during onboarding.",
    intro:
      "Nothing in a Svasamm product happens behind the screen's back. Every button calls the same REST API the products are built on, and the other systems your firm runs are connected to it during onboarding.",
    sections: [
      {
        type: "p",
        h: "One API under every screen",
        text: "The API speaks JSON over HTTPS under one versioned path, /v1, with one section per product. The web app and the phone app are its first users: **every screen you see is the API's answer**, and the app's own types are generated from the server's, so the two cannot quietly disagree. When something is refused, the answer follows a public standard for errors (RFC 9457) and carries a stable code a program can act on.",
      },
      {
        type: "p",
        h: "How access is checked",
        text: "Each request carries a short-lived signed token; the public keys that check it are published at a standard address, so the signature can be verified anywhere. T4Suite's API is also described in an OpenAPI document.",
      },
      {
        type: "p",
        h: "Why one API matters to a business owner",
        text: "Software that grew screen by screen often keeps its real rules inside the screens, and anything connected from outside has to work round them. **Here the rules live behind the API, so a figure entered by a connected system is checked by exactly the same rules as one typed by a person**: a closed financial year stays closed, a resent record is recognised instead of counted twice, a sale still needs its GST. Nothing that comes in from outside can skip a control your team works under.",
      },
      {
        type: "table",
        h: "Connecting your other systems",
        cols: ["What firms connect", "What flows"],
        rows: [
          ["Attendance devices", "Punches from a biometric or card machine come in to the payroll's attendance, so days are worked out from the record, not typed in."],
          ["Your existing books", "Opening balances, parties and items come in at the cut-over date, so the first month starts where the old system ended."],
          ["Reports and dashboards", "The figures your own reporting tools need are read from the same API the screens use."],
          ["Your other software", "What should move between them, and when, is agreed with you, then set up during onboarding."],
        ],
      },
      {
        type: "list",
        h: "How a connection is set up",
        items: [
          { b: "Name the system and the records", t: "— which software, and which records should move: punches, parties, invoices, balances." },
          { b: "Agree the direction and the timing", t: "— one way or both, as it happens or once a day." },
          { b: "Agree what happens on a refusal", t: "— a record the rules refuse is reported with its reason, never dropped silently." },
          { b: "Run it beside the old way", t: "— for one month, so the figures are compared before anyone relies on them." },
        ],
      },
      {
        type: "list",
        h: "Questions to ask about any business software's API",
        items: [
          { b: "Do the screens use the same API?", t: "— if they do not, the API usually lags behind them and misses the rules the screens enforce." },
          { b: "What happens when a record is refused?", t: "— a stable error code a program can act on, or a message only a person can read." },
          { b: "How is a request signed and checked?", t: "— short-lived signed tokens are safer than a password stored in another system." },
          { b: "Is a resent record counted twice?", t: "— a network fault will resend a punch or an invoice sooner or later; the system must recognise it." },
          { b: "Is it versioned?", t: "— a versioned path means a connection built today keeps working when the product changes." },
        ],
      },
      {
        type: "note",
        text: "**Every connection is set up with you during onboarding.** Tell us what you want to connect and what should flow between them, and we agree the details before anything is switched on.",
      },
    ],
    faqs: [
      { q: "Can we connect our own software to Svasamm One?", a: "Yes. The connection is set up with you during onboarding: you name the system and the records, and we agree the direction, timing and what happens when a record is refused." },
      { q: "Is there API documentation?", a: "T4Suite's API has an OpenAPI description. For the other products, the parts a connection needs are documented for your firm when the connection is set up." },
      { q: "Does a connected system get round the product's rules?", a: "No. A connected system calls the same API the screens do, so its records are checked by the same rules — a closed financial year stays closed and a resent record is not counted twice." },
    ],
    related: OTHERS("api-and-integrations"),
    cta: { ...CTA, title: "What do you need to connect?", body: "Name the system and what should flow between them — it decides what we open first." },
  }),

  why({
    slug: "india-compliance",
    changed: "2026-11-18",
    crumb: "India-first compliance",
    eyebrow: "Why Svasamm · Compliance",
    title: "India-First Compliance: PF, ESI, TDS, GST and CMR, Product by Product",
    metaTitle: "India-First Compliance — PF, ESI, TDS, GST, CMR | Svasamm",
    metaDescription:
      "The Indian rules built into Svasamm's products: PF, ESI, professional tax, TDS, Form 24Q, GST returns and CMR, with a month's statutory due dates.",
    intro:
      "Indian business runs on rules a foreign product treats as an add-on: provident fund, professional tax that differs by state, GST returns, a rice mill's debt of rice to the government. In Svasamm's products they are part of the work itself. Here is exactly which, by product.",
    sections: [
      {
        type: "list",
        h: "Svasamm People — payroll",
        items: [
          { b: "PF and ESI", t: "— PF at 12% with the ₹15,000 wage ceiling and the pension split; ESI with its ₹21,000 limit." },
          { b: "Professional tax and labour welfare fund", t: "— for all 36 states and union territories, with each state's due dates. Check the rates with your CA before your first filing." },
          { b: "Income tax on salary", t: "— TDS under the old and new regimes, the section 87A rebate, and investment declarations with proof." },
          { b: "Returns and certificates", t: "— Form 24Q with its annexures, and Form 16 Part B (Part A comes from TRACES)." },
          { b: "Bonus, gratuity and final settlement", t: "— worked out from the same records." },
        ],
      },
      {
        type: "list",
        h: "Millingo — books and CMR",
        items: [
          { b: "GST", t: "— your GSTIN, regular or composition; GSTR-1 and GSTR-3B prepared from the books. Your accountant files on the GST portal and enters the acknowledgement number back." },
          { b: "E-way bills", t: "— a sale over ₹50,000 asks for its e-way bill number before it is saved." },
          { b: "TDS on purchases", t: "— section 194Q, if it applies to your mill." },
          { b: "CMR", t: "— the CMR season kept apart from the financial year, the 67% and 68% out-turn, release orders, offers and dispatches to the corporation, gunny bags, and shortfall as a debt. The state rules built in today are West Bengal's." },
        ],
      },
      {
        type: "p",
        h: "T4Suite — the compliance calendar",
        text: "T4Suite starts a CA firm with task lists for the filings it handles — GSTR-1, GSTR-3B and GSTR-9, TDS returns, income-tax returns and ROC filings — so each client's deadlines become the firm's work list.",
      },
      {
        // Mithun, 17 Nov 2026: the site presents us as ready; another state's rules are set up for the mill.
        // ABDM is not mentioned: it needs the government's certification, and "ABDM-ready" is a banned claim.
        type: "p",
        h: "Your state's CMR rules",
        text: "A mill outside West Bengal has its own state's CMR rules (Uttar Pradesh, Bihar, Odisha, Punjab or another) set up for it during onboarding, from that state's current notification.",
      },
      {
        type: "table",
        h: "A month's statutory due dates",
        cols: ["Due by", "What", "Prepared in"],
        rows: [
          ["7th of the next month", "TDS deducted in the month deposited (March's by 30 April)", "Svasamm People, Millingo"],
          ["11th", "GSTR-1 for a monthly filer", "Millingo"],
          ["15th", "PF contributions and the ECR; ESI contributions", "Svasamm People"],
          ["20th", "GSTR-3B for a monthly filer (a quarterly filer's dates are later and differ by state)", "Millingo"],
          ["Each state's own date", "Professional tax, and the labour welfare fund where the state has one", "Svasamm People"],
          ["31 Jul, 31 Oct, 31 Jan, 31 May", "Form 24Q, the quarterly TDS return on salaries", "Svasamm People"],
        ],
      },
      {
        type: "p",
        h: "Why the rules belong inside the work",
        text: "In many firms compliance is a month-end chore: the accountant collects figures from several registers, works out PF and TDS in a spreadsheet, and hopes the two agree with the books. **When the rule is part of the entry itself, the figure for the return is ready as the month closes** — the PF on a payslip is the PF in the ECR, and the GST on a sale is the GST in GSTR-1. Nothing has to be copied, so nothing can be copied wrong.",
      },
      {
        type: "p",
        h: "When a rule changes",
        text: "Indian rules change every budget and often in between: a professional tax slab, a TDS threshold, a GST rate, a state's CMR terms for a new season. Rates and limits are kept as dated records, not written into the program, so **a new rate applies from its own date and the months before keep the rate they were worked out with.** A due date the government extends is followed; the dates in the table above are the usual ones.",
      },
      {
        type: "note",
        text: "**Nothing here files with a government portal for you.** Svasamm prepares the figures and keeps the record; filing stays with the person responsible for it. This page is a guide, not tax advice — check your firm's rates and dates with your CA.",
      },
    ],
    faqs: [
      { q: "Does Svasamm file GST returns directly?", a: "No. Millingo prepares GSTR-1 and GSTR-3B from the books; your accountant files on the GST portal and records the acknowledgement number." },
      { q: "Does Svasamm People cover professional tax in our state?", a: "Yes — all 36 states and union territories are in, with their due dates. Check the rates with your CA before your first filing." },
      { q: "What happens when a tax rate changes?", a: "The new rate is entered with the date it applies from. Months before that date keep the rate they were worked out with." },
    ],
    related: OTHERS("india-compliance"),
    cta: { ...CTA, title: "Which rules does your firm answer to?", body: "Tell us your state and your filings and we will show you how each one is prepared for your firm." },
  }),
];

export const WHY_ARTICLE_BY_SLUG: Record<string, Article> = Object.fromEntries(
  WHY_ARTICLES.map((a) => [a.slug, a]),
);
