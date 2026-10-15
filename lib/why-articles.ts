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
}): Article {
  const { metaTitle, metaDescription, crumb, date = DATE, ...rest } = a;
  const shown = new Date(date + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  return {
    ...rest,
    type: "guide",
    parentProduct: "platform",
    byline: `By Mithun K. Singh, Founder, Svasamm Research · ${shown}`,
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
          jobTitle: "Founder",
          worksFor: { "@type": "Organization", name: "Svasamm Research Pvt Ltd" },
        },
        publisher: { "@type": "Organization", name: "Svasamm" },
        datePublished: date,
        dateModified: date,
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
    metaTitle: "Customized vs Customizable Software — Built for Your Industry | Svasamm",
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
          { b: "Millingo, for rice mills", t: "— the CMR season kept apart from the financial year, the government's paddy and the mill's own paddy in separate pools, gunny bags, the shortfall as a debt, and fortified rice. A generic ERP has none of these words." },
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
        type: "note",
        text: "**Custom fields, custom workflows and roles you design yourself are not part of the products today.** If your firm works in a way none of these choices covers, tell us — the overtime choice above exists because a client's rule did not fit one fixed figure.",
      },
    ],
    faqs: [
      { q: "Can we create our own roles?", a: "Not today. Each product brings the roles its industry needs, and you switch each permission on or off. The Owner role is fixed." },
      { q: "Do we have to finish setup before using the product?", a: "No. Setup shows what is done and what is missing; a step only blocks the work that depends on it — a payroll month, for example, waits for PF and ESI registration to be answered." },
    ],
    related: OTHERS("configured-to-your-workflow"),
    cta: { ...CTA, title: "Walk us through how your firm works", body: "Show us one month of your work and we will show you which of these choices your firm makes, and where a product would not fit yet." },
  }),

  why({
    slug: "hosting-and-your-data",
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
    ],
    faqs: [
      { q: "Can we run Svasamm One on our own servers?", a: "On request. It is built from the same images we run, but every client today uses our hosted service, so we agree the running, backups and updates with you first." },
      { q: "Can another firm see our data?", a: "No. Firms share a database, and the database's row-level security limits every query to one firm's rows." },
    ],
    related: OTHERS("hosting-and-your-data"),
    cta: { ...CTA, title: "Hosted, or your own?", body: "Tell us where your data has to live and we will tell you plainly what each option involves." },
  }),

  why({
    slug: "api-and-integrations",
    crumb: "One open API",
    eyebrow: "Why Svasamm · API",
    title: "One Open API Under Every Screen — and Opening to Your Systems",
    metaTitle: "API and Integrations — Svasamm One",
    metaDescription:
      "Every Svasamm One screen runs on one REST API. How it works today, and the access for your own systems now being added.",
    intro:
      "Nothing in a Svasamm product happens behind the screen's back. Every button calls the same REST API the products are built on — and access to that API for your own systems is now being added to the platform.",
    sections: [
      {
        type: "p",
        h: "What is true today",
        text: "The API speaks JSON over HTTPS under one versioned path, /v1, with one section per product. The web app and the phone app are its first users: **every screen you see is the API's answer**, and the app's own types are generated from the server's, so the two cannot quietly disagree. When something is refused, the answer follows a public standard for errors (RFC 9457) and carries a stable code a program can act on.",
      },
      {
        type: "p",
        h: "How access is checked",
        text: "Each request carries a short-lived signed token; the public keys that check it are published at a standard address, so the signature can be verified anywhere. T4Suite's API is also described in an OpenAPI document.",
      },
      {
        // A table, not a list: the list block draws a tick, and a tick says "done".
        type: "table",
        h: "Coming — access for your own systems",
        cols: ["What", "So that"],
        rows: [
          ["Keys for your systems", "Your accounting, attendance or reporting tools can read and write without a person signing in."],
          ["Notifications out", "Your systems hear when something changes instead of asking every minute."],
          ["A description of every product's API", "Each product gets an OpenAPI document, as T4Suite has today."],
        ],
      },
      {
        type: "note",
        text: "**Until those arrive, connecting another system is something we do with you.** Tell us what you want to connect, and it shapes what is built first.",
      },
    ],
    faqs: [
      { q: "Can we connect our own software to Svasamm One today?", a: "Not by yourselves yet — keys for outside systems are being added. Today we set up a connection with you." },
      { q: "Is there API documentation?", a: "T4Suite's API has an OpenAPI description. The other products' are coming with access for outside systems." },
    ],
    related: OTHERS("api-and-integrations"),
    cta: { ...CTA, title: "What do you need to connect?", body: "Name the system and what should flow between them — it decides what we open first." },
  }),

  why({
    slug: "india-compliance",
    crumb: "India-first compliance",
    eyebrow: "Why Svasamm · Compliance",
    title: "India-First Compliance: What Is Built In, and What Is Coming",
    metaTitle: "India-First Compliance — PF, ESI, TDS, GST, CMR | Svasamm",
    metaDescription:
      "The Indian rules built into Svasamm's products — PF, ESI, professional tax, TDS, Form 24Q, GST returns, CMR — and what is still coming.",
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
          { b: "CMR", t: "— the CMR season kept apart from the financial year, the 67% and 68% out-turn, release orders, offers and dispatches to the corporation, gunny bags, shortfall as a debt, and fortified rice. The state rules built in today are West Bengal's." },
        ],
      },
      {
        type: "p",
        h: "T4Suite — the compliance calendar",
        text: "T4Suite starts a CA firm with task lists for the filings it handles — GSTR-1, GSTR-3B and GSTR-9, TDS returns, income-tax returns and ROC filings — so each client's deadlines become the firm's work list.",
      },
      {
        // A table, not a list: the list block draws a tick, and a tick says "done".
        type: "table",
        h: "Coming — not built yet",
        cols: ["What", "For"],
        rows: [
          ["ABDM — ABHA, the facility registry and the professional registry", "Lucoze, as it joins Svasamm One"],
          ["CMR rules for Uttar Pradesh, Bihar, Odisha and Punjab", "Millingo, after West Bengal"],
        ],
      },
      {
        type: "note",
        text: "**Nothing here files with a government portal for you.** Svasamm prepares the figures and keeps the record; filing stays with the person responsible for it.",
      },
    ],
    faqs: [
      { q: "Does Svasamm file GST returns directly?", a: "No. Millingo prepares GSTR-1 and GSTR-3B from the books; your accountant files on the GST portal and records the acknowledgement number." },
      { q: "Does Svasamm People cover professional tax in our state?", a: "Yes — all 36 states and union territories are in, with their due dates. Check the rates with your CA before your first filing." },
      { q: "Does Lucoze support ABDM on Svasamm One yet?", a: "Not yet. ABDM comes with Lucoze joining Svasamm One." },
    ],
    related: OTHERS("india-compliance"),
    cta: { ...CTA, title: "Which rules does your firm answer to?", body: "Tell us your state and your filings and we will show you which are built in and which are still coming." },
  }),
];

export const WHY_ARTICLE_BY_SLUG: Record<string, Article> = Object.fromEntries(
  WHY_ARTICLES.map((a) => [a.slug, a]),
);
