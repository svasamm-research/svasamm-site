// Depth for thin GENERATED articles (17 Nov 2026, Mithun: "the pages which are less words, make them
// longer"). lib/articles.ts is frozen, so instead of hand-editing it the registry appends these
// sections and FAQs to the generated article, and moves its dateModified so the sitemap tells Google
// to recrawl. Add a page here; never copy a whole generated article out.
//
// ⛔ CLAIMS: product facts are what the code does (svasamm-platform develop, 17 Nov 2026):
// Millingo (modules/millingo, as on the Millingo product page), People (modules/hr, as listed in
// lib/people-articles.ts), the books (modules/books). Rules that vary by state and season (FRK, the
// broken-rice limit, KMS dates) are "set for your state during onboarding", never constants. Statutory
// figures are the current official rules; each page keeps its "not tax advice" note.
import type { Block, Faq } from "./types";

export type Depth = { changed: string; sections: Block[]; faqs?: Faq[] };

const CHANGED = "2026-11-17";

export const ARTICLE_DEPTH: Record<string, Depth> = {
  "erp-implementation-guide": {
    changed: CHANGED,
    sections: [
      {
        type: "p",
        h: "How long an ERP implementation takes",
        text: "For a business with one or two locations and clean records, a phased rollout takes **two to four months**: finance in the first month, purchase and stores in the second, and the industry's own process after that. It takes longer when the masters are dirty, when nobody owns the process, or when the business tries to switch everything on in one weekend. The calendar matters less than the order: get the books right first, because every other module posts into them.",
      },
      {
        type: "list",
        h: "Moving off Tally without losing a year",
        items: [
          { b: "Pick a clean cut-over date —", t: "the first day of a month, ideally of a quarter, so GST returns are filed from one system per period." },
          { b: "Bring opening balances, not history —", t: "the trial balance on the cut-over date, open bills of each customer and supplier, and stock by item and godown. Old vouchers stay in Tally for reference." },
          { b: "Rebuild the chart of accounts, do not copy it —", t: "Tally ledgers collected over years often hold one party under three names. Each account in Svasamm One is known by its name, so the name you choose is the one everybody will use." },
          { b: "Run one month in parallel —", t: "post the same month in both, compare the trial balance and the GST summary, and switch off only when they agree." },
          { b: "Lock the month once its return is filed —", t: "so nobody changes a period the government has already seen." },
        ],
      },
      {
        type: "table",
        h: "A 90-day plan for a mid-sized business",
        cols: ["Weeks", "What happens", "Who owns it"],
        rows: [
          ["1–2", "Walk the processes: order to cash, purchase to pay, the floor, payroll", "Owner and each department head"],
          ["3–4", "Chart of accounts, items, parties, godowns, tax setup; clean the masters", "Accounts head, stores head"],
          ["5–6", "Finance live; one month run in parallel with Tally", "Accounts head"],
          ["7–9", "Purchase, stores and sales live; stock counted and matched", "Stores and sales heads"],
          ["10–12", "Payroll and the industry's own process; old systems read-only", "HR head, plant head"],
        ],
      },
      {
        type: "p",
        h: "What an ERP really costs",
        text: "The licence is the visible part. The real cost is the people's time during the rollout, cleaning the data, training, and the months when two systems run side by side. Ask any vendor four questions: what is charged per user, what is charged for implementation and data migration, what support costs after go-live, and what it costs to leave with your data. A cheap licence with expensive changes is the most common surprise in Indian ERP projects.",
      },
      {
        type: "list",
        h: "Choosing an implementation partner",
        items: [
          "Ask to speak to the person who will configure your system, not only the salesperson.",
          "Make them run one of your real transactions in the demo: a purchase with GST, a stock issue, a sale, a payment.",
          "Ask how they move opening balances and who checks them.",
          "Ask what happens to a change you need in month six, and what it costs.",
          "Prefer a partner who knows your industry's process over one who promises to customise anything.",
        ],
      },
      {
        type: "note",
        text: "Svasamm One is implemented by the team that builds it. We walk your floor, set up your books, stores, people and your industry's own steps, run a month in parallel, and switch the old system to read-only only when the figures agree.",
      },
      {
        type: "list",
        h: "Training the people who will use it",
        items: [
          { b: "Train by role, not by module —", t: "the storekeeper learns receipt, issue and count; the accountant learns vouchers, reconciliation and returns. Nobody sits through screens they will never open." },
          { b: "Train on your own data —", t: "a real purchase, a real sale and a real payroll month, not a demo company." },
          { b: "Name one person per department —", t: "who answers the others' questions in the first month and tells the partner what is not working." },
        ],
      },
      {
        type: "p",
        h: "The first 90 days after go-live",
        text: "Expect the first month to be slower than the old way: people are checking every figure twice. By the second month the trial balance closes on time and the stock count is a formality. Watch three numbers each week: how many transactions are still entered outside the system, how many corrections the accountant made, and how long the month-end close took. When all three fall, switch the old system to read-only and stop paying for it.",
      },
    ],
    faqs: [
      {
        q: "How long does it take to move from Tally to an ERP?",
        a: "For a business with one or two locations, about two to four months in phases: finance first with one month run in parallel, then purchase and stores, then the industry's own process. Opening balances move, not years of old vouchers.",
      },
      {
        q: "Should we customise the ERP for our process?",
        a: "Fix the process first, then set the software up around it. Customising early automates a broken process and makes every later upgrade harder.",
      },
    ],
  },

  "erp-for-manufacturing": {
    changed: CHANGED,
    sections: [
      {
        type: "list",
        h: "Signs a plant has outgrown Tally and spreadsheets",
        items: [
          { b: "Stores and accounts disagree —", t: "the stock register says one figure, the books another, and the physical count a third." },
          { b: "Purchase runs on phone calls —", t: "indents on paper, orders on WhatsApp, and nobody sure what has been received." },
          { b: "Overtime and contract labour are a monthly fight —", t: "the machine report, the supervisor's register and the salary sheet do not agree." },
          { b: "The GST return is rebuilt each month —", t: "from sales registers kept outside the books." },
        ],
      },
      {
        type: "p",
        h: "Purchase and stores on the shop floor",
        text: "In Svasamm One a department raises an indent, purchase turns it into an order, and the gate and stores receive against that order, so the quantity received, the rate and the supplier's GST are recorded once. Material is issued to the floor against a request, moved between stores as a transfer, and counted on a schedule, with the difference posted as an adjustment. Reorder levels tell you what is running low before the line stops. Each supplier is rated from what they actually delivered: on time, in full, at the agreed rate.",
      },
      {
        type: "p",
        h: "People: shifts, overtime and contract labour",
        text: "Punches come from your biometric machine or, where you allow it, a phone. Each day is judged against the shift, a night shift belongs to the day it started, and overtime is counted from the punches and paid at the multiple your firm sets, twice the ordinary rate under section 59 of the Factories Act. Contract workers are on the same register without needing a login, and payroll deducts PF, ESI, professional tax and TDS in the same run.",
      },
      {
        type: "p",
        h: "Costing what you make",
        text: "A manufacturer wants to know what a batch actually cost: the material issued, the labour on the shift, the power and the overheads. Your bills of material, production orders and the way you cost a batch are set up for your plant during onboarding, from how your floor actually runs, and post into the same books as purchase and payroll. Until then the books already carry cost centres, so material, wages and overheads can be read by department from the first month.",
      },
      {
        type: "table",
        h: "What runs from day one, and what is set up for your plant",
        cols: ["Area", "From day one", "Set up for your plant during onboarding"],
        rows: [
          ["Purchase and stores", "Indent, order, receipt, issue, transfer, count, reorder", "Your item codes and godowns"],
          ["People", "Shifts, punches, overtime, payroll with PF, ESI, PT, TDS", "Connecting your attendance machine"],
          ["Books and GST", "Ledger, cost centres, budgets, GSTR-1, GSTR-3B", "Your chart of accounts"],
          ["Production", "—", "Bills of material, production orders, batch costing"],
        ],
      },
      {
        type: "note",
        text: "Bring one month of your purchase register, stock statement and salary sheet to the walkthrough. We will show you the same month in Svasamm One, and what it would take to set your floor up.",
      },
      {
        type: "p",
        h: "More than one plant or godown",
        text: "Each plant and godown is its own place in Svasamm One, with its own stock and its own staff, in one firm's books. A transfer from the main store to a second plant moves the stock out of one and into the other, and the owner sees every place on one login, while the plant head sees only their own.",
      },
      {
        type: "list",
        h: "How a plant is set up, step by step",
        items: [
          { b: "Walk the floor —", t: "we spend a day on your gate, stores, floor and office, and write down how material and people actually move." },
          { b: "Masters —", t: "items, godowns, suppliers, customers and staff, cleaned and imported from your spreadsheets or Tally." },
          { b: "Books and GST first —", t: "opening balances and one month in parallel with your current accounts." },
          { b: "Stores and people —", t: "receipts, issues and counts; the attendance machine connected; one payroll run checked against your salary sheet." },
          { b: "Your floor —", t: "bills of material, production orders and batch costing, set up from what the walk found." },
        ],
      },
    ],
    faqs: [
      {
        q: "Can it pay overtime and contract labour?",
        a: "Yes. Overtime is counted from the punches and paid at the multiple your firm sets, and contract workers are paid in the same run as permanent staff, without needing a login.",
      },
      {
        q: "Does it replace Tally?",
        a: "Yes. The books, GST returns, purchase, stores and payroll run in Svasamm One, so nothing is retyped into a second package.",
      },
    ],
  },

  "payroll-statutory-compliance-india": {
    changed: CHANGED,
    sections: [
      {
        type: "table",
        h: "The main contributions at a glance",
        cols: ["What", "Who pays", "The rule of thumb", "Deposit by"],
        rows: [
          ["Provident Fund (EPF)", "Employee 12%, employer 12% of basic + DA", "Employer's share split: 8.33% to the pension scheme (on wages up to ₹15,000) and the rest to PF", "15th of the next month, with the ECR"],
          ["ESI", "Employee 0.75%, employer 3.25% of gross wages", "For employees earning up to ₹21,000 a month", "15th of the next month"],
          ["Professional tax", "Employee, deducted by employer", "Each state's own slabs; some states have none", "The state's own due dates"],
          ["TDS on salary", "Employee, deducted by employer", "Income-tax slabs under the regime the employee chose", "7th of the next month (30 April for March)"],
        ],
      },
      {
        type: "p",
        h: "Wages under the labour codes",
        text: "The four labour codes, in force from 21 November 2025, bring one definition of wages. If allowances are more than half of the total pay, the excess counts back into wages, so a salary built on a small basic and large allowances no longer keeps PF and gratuity low. Check your salary structures against this before the next increment, not after an inspection.",
      },
      {
        type: "list",
        h: "Bonus, gratuity and settlement",
        items: [
          { b: "Statutory bonus —", t: "at least 8.33% and at most 20% of wages for eligible employees, worked out on ₹7,000 a month or the minimum wage, whichever is higher." },
          { b: "Gratuity —", t: "15 days' wages for each completed year of service, on the last drawn wages, payable when someone leaves after the qualifying service." },
          { b: "Full and final settlement —", t: "the last days' pay, leave encashment, bonus and gratuity added up once, with the deductions, when somebody leaves." },
        ],
      },
      {
        type: "list",
        h: "TDS on salary through the year",
        items: [
          "Each employee chooses the old or the new regime; the deduction follows the choice.",
          "Investment declarations at the start of the year, proofs before the last quarter.",
          "HRA relief worked out from rent paid, salary and the city.",
          "Form 24Q every quarter, and Form 16 to every employee after the year closes.",
        ],
      },
      {
        type: "table",
        h: "A payroll month, day by day",
        cols: ["When", "What"],
        rows: [
          ["Last working day", "Attendance closed: days present, leave, absent and overtime"],
          ["1st–3rd", "Payroll run, checked and approved; payslips out"],
          ["7th", "TDS deposited for the previous month"],
          ["15th", "PF (with the ECR file) and ESI deposited"],
          ["State's date", "Professional tax deposited and returned"],
          ["Quarter end + 1 month", "Form 24Q filed"],
        ],
      },
      {
        type: "p",
        h: "What Svasamm People does in each step",
        text: "Punches come from your biometric machine or a phone, and each day is judged against the shift. The payroll run reads those days, deducts **PF with the ECR file, ESI, professional tax per state with its due dates, and TDS under both regimes** with declarations and HRA, and records a challan for every deposit. Statutory bonus, gratuity and full and final settlement are worked out in the same system, and Form 16 and Form 24Q come out of it. Each employee sees their payslip on the Svasamm One app.",
      },
      {
        type: "p",
        h: "Contract labour is still your compliance",
        text: "Many factories run half the floor on contract labour. The contractor pays them, but the principal employer is answerable if their PF and ESI are not deposited. Ask each contractor for the challans every month, and keep the contract workers on your own attendance register, so the days you paid the contractor for match the days the workers were actually at the gate.",
      },
      {
        type: "list",
        h: "What late or wrong payroll costs",
        items: [
          { b: "Late PF —", t: "interest for every day it is late, and damages on top, assessed by the EPFO." },
          { b: "Late ESI —", t: "interest for the delay, and damages for a default." },
          { b: "Late TDS —", t: "interest for each month or part of a month, a fee for a late 24Q, and the expense can be disallowed in your own return." },
          { b: "Wrong professional tax —", t: "the shortfall with interest and penalty under the state's own act." },
        ],
      },
    ],
    faqs: [
      {
        q: "When are PF and ESI due?",
        a: "Both are deposited by the 15th of the month after the wages are paid; PF is filed with the ECR on the EPFO portal.",
      },
      {
        q: "Does the new wage definition change PF?",
        a: "It can. Under the labour codes, allowances above half of total pay count back into wages, so a structure with a small basic may now owe more PF and gratuity.",
      },
    ],
  },

  "gst-for-rice-mills": {
    changed: CHANGED,
    sections: [
      {
        type: "p",
        h: "Selling the same rice two ways",
        text: "Most mills sell loose rice to traders and some rice in their own labelled bags. The same variety is then nil-rated on one invoice and taxed on another, so the bill has to follow how each lot was packed, not what the rice is. In Millingo each item carries its own HSN code and rate, so loose and packed rice are set up as separate items and each invoice line carries the rate of how that lot was packed.",
      },
      {
        type: "p",
        h: "Government milling is a service, not a sale",
        text: "When you mill paddy for the government under CMR, the paddy and the rice are not yours: you are paid milling charges for a job. That is a supply of service, invoiced separately from your own sales, and it has its own GST treatment to confirm with your chartered accountant. Keep the two businesses apart in the books, because the input tax credit you can claim depends on how much of your output is taxable.",
      },
      {
        type: "list",
        h: "Working out the input tax credit you can keep",
        items: [
          { b: "Credit on inputs used only for taxable sales —", t: "packed rice, bran where taxable, milling charges: claim in full." },
          { b: "Credit on inputs used only for exempt sales —", t: "loose rice, husk: not claimable." },
          { b: "Common credit —", t: "power, repairs, the mill's own services: split each month by the share of exempt turnover, and reverse the exempt share." },
          { b: "Year end —", t: "recompute the split on the year's actual turnover and adjust." },
        ],
      },
      {
        type: "p",
        h: "The returns, from the same books",
        text: "In Millingo every sale order, dispatch and invoice posts to the books as it is made, with the HSN code and rate on each line. GSTR-1 and GSTR-3B are prepared from those books, so the return reads the same figures as the invoices and the ledger. Purchase bills carry the supplier's GST, so the credit is visible as it builds up rather than at month end.",
      },
      {
        type: "list",
        h: "Common GST mistakes at rice mills",
        items: [
          "One rate for all rice, whether it left loose or in labelled bags.",
          "Milling charges for CMR mixed into the mill's own sales.",
          "Full input tax credit claimed while most output is exempt.",
          "Bran sold without checking whether the grade is taxable.",
          "Returns filed from a sales register that was never matched to the books.",
        ],
      },
      {
        type: "table",
        h: "A mill's GST month",
        cols: ["When", "What"],
        rows: [
          ["Every sale", "Tax invoice with HSN and rate per line; loose and packed rice on their own lines"],
          ["11th of next month", "GSTR-1: the outward invoices (monthly filers)"],
          ["20th of next month", "GSTR-3B: the summary and the tax paid (monthly filers)"],
          ["Every month", "Input tax credit split between taxable and exempt sales, and the exempt share reversed"],
          ["Year end", "The split recomputed on the year's turnover, and the annual return"],
        ],
      },
    ],
    faqs: [
      {
        q: "Is GST charged on milling charges under CMR?",
        a: "Milling the government's paddy is a service you supply, invoiced separately from your own rice sales. Its GST treatment is separate from the GST on rice; confirm the current position with your chartered accountant.",
      },
      {
        q: "Can one invoice carry both loose and packed rice?",
        a: "Yes, as separate lines: the loose rice nil-rated and the pre-packaged, labelled rice at 5%, each with its own HSN line. In Millingo they are separate items, so each line carries its own rate.",
      },
    ],
  },

  "rice-mill-software-odisha": {
    changed: CHANGED,
    sections: [
      {
        type: "list",
        h: "A season at an Odisha custom-milling mill",
        items: [
          { b: "Agreement and allotment —", t: "the mill signs the custom-milling agreement for the KMS and is allotted paddy from the procurement centres." },
          { b: "Paddy in —", t: "lorries arrive with the corporation's paddy; each is weighed, checked and stored apart from the mill's own." },
          { b: "Milling —", t: "batches milled to the out-turn the agreement asks for, with bran, husk and brokens as by-products." },
          { b: "Rice out —", t: "CMR delivered to the depot in lots, each acknowledged, against the delivery schedule." },
          { b: "Reconciliation —", t: "paddy received, rice owed and rice delivered agreed with the corporation's records, and any shortfall settled." },
        ],
      },
      {
        type: "p",
        h: "The government's paddy and your own, kept apart",
        text: "Many Odisha mills mill the government's paddy and buy their own for the open market in the same season. Millingo keeps the two apart from the gate onwards: the corporation's paddy is received against the release order and tracked as the corporation's, while the mill's own paddy is bought, graded and costed. Gunny bags are two pools as well, the mill's own and the corporation's, drawn by packing and returned, so the bag account closes at the end of the season.",
      },
      {
        type: "p",
        h: "Out-turn, shortfall and report 7.1",
        text: "Every milling batch records the paddy put in and the rice and by-products that came out, so the real recovery is known batch by batch, not at the end of the season. Rice offered and delivered to the depot is recorded lot by lot, a shortfall against the out-turn is carried as a debt to the corporation, and report 7.1 is set against the portal's figures. The rules that change by state and season, such as fortified rice and the broken-rice limit, are set for Odisha's current KMS during onboarding.",
      },
      {
        type: "table",
        h: "Spreadsheet or Millingo, for an Odisha mill",
        cols: ["", "Registers and spreadsheets", "Millingo"],
        rows: [
          ["Government paddy", "Mixed with the mill's own stock", "Received against the release order, kept apart"],
          ["Recovery", "Worked out at season end", "Batch by batch"],
          ["Depot deliveries", "Acknowledgements in a file", "Each lot recorded, with the balance owed"],
          ["Gunny bags", "One pool, never closes", "Two pools, issued and returned"],
          ["Open-market sales", "A separate billing package", "The same books, with GST on each line"],
        ],
      },
      {
        type: "list",
        h: "What to ask any rice mill software vendor in Odisha",
        items: [
          "Receive one lorry of the corporation's paddy and one of your own. Are they kept apart in stock?",
          "Mill a batch. What was the recovery, and where are the bran, husk and brokens?",
          "Deliver a lot of CMR to the depot. What does the software say is still owed?",
          "Show the corporation's gunny bags apart from the mill's own.",
          "Sell rice in the open market. Does the GST invoice post to the same books?",
        ],
      },
      {
        type: "p",
        h: "How a mill starts on Millingo",
        text: "We visit the mill, take your parties, items, godowns and opening stock from your current registers or Tally, and set Odisha's rules for the current KMS. The gate and the QC bench start first, because every later figure depends on the weight and the grade; milling, the CMR cycle and sales follow in the same season, with your current registers kept until the figures agree.",
      },
    ],
    faqs: [
      {
        q: "Can Millingo keep the government's paddy apart from our own?",
        a: "Yes. The corporation's paddy is received against the release order and tracked as the corporation's; the mill's own paddy is bought, graded and costed separately, and gunny bags are kept in two pools.",
      },
    ],
  },

  "rice-mill-software-bihar": {
    changed: CHANGED,
    sections: [
      {
        type: "list",
        h: "A season at a Bihar custom-milling mill",
        items: [
          { b: "Registration and tagging —", t: "the mill registers on the state portal and is tagged to the PACS and procurement centres it will mill for." },
          { b: "Paddy in —", t: "paddy arrives against the portal's notes; each lorry is weighed, checked and stored apart from the mill's own paddy." },
          { b: "Milling —", t: "batches milled to the out-turn the agreement asks for, with bran, husk and brokens as by-products." },
          { b: "Rice out —", t: "CMR delivered to the State Food Corporation or FCI depot in lots, each acknowledged." },
          { b: "Reconciliation —", t: "paddy received, rice owed and rice delivered agreed with the portal and the corporation." },
        ],
      },
      {
        type: "p",
        h: "PACS paddy and the mill's own trade",
        text: "A Bihar mill often mills PACS paddy for the state and trades its own rice in the open market at the same time. Millingo keeps the two apart from the gate: the state's paddy is received against the release order and tracked as the corporation's, while the mill's own purchases are graded at the QC bench, with a shortfall in recovery, moisture or dust taking value off the bill without touching the weight. Gunny bags are kept in two pools, the mill's own and the corporation's.",
      },
      {
        type: "p",
        h: "Out-turn and delivery, batch by batch",
        text: "Every batch records paddy in and rice and by-products out, so recovery is known as the season runs. Deliveries to the depot are recorded lot by lot with the balance still owed, a shortfall is carried as a debt, and report 7.1 is set against the portal's figures. The rules that change by state and season are set for Bihar's current KMS during onboarding.",
      },
      {
        type: "table",
        h: "Spreadsheet or Millingo, for a Bihar mill",
        cols: ["", "Registers and spreadsheets", "Millingo"],
        rows: [
          ["State paddy", "Mixed with the mill's own stock", "Received against the release order, kept apart"],
          ["Quality at the gate", "Deductions argued later", "Graded at the bench, value taken off the bill"],
          ["Recovery", "Worked out at season end", "Batch by batch"],
          ["Depot deliveries", "Acknowledgements in a file", "Each lot recorded, with the balance owed"],
          ["Open-market sales", "A separate billing package", "The same books, with GST on each line"],
        ],
      },
      {
        type: "list",
        h: "What to ask any rice mill software vendor in Bihar",
        items: [
          "Receive one lorry of PACS paddy and one of your own. Are they kept apart in stock?",
          "Grade a load below standard. Does the deduction change the bill or the weight?",
          "Mill a batch. What was the recovery, and where are the bran, husk and brokens?",
          "Deliver a lot of CMR to the depot. What does the software say is still owed?",
          "Sell rice in the open market. Does the GST invoice post to the same books?",
        ],
      },
      {
        type: "p",
        h: "How a mill starts on Millingo",
        text: "We visit the mill, take your parties, items, godowns and opening stock from your current registers or Tally, and set Bihar's rules for the current KMS. The gate and the QC bench start first, because every later figure depends on the weight and the grade; milling, the CMR cycle and sales follow in the same season, with your current registers kept until the figures agree.",
      },
    ],
    faqs: [
      {
        q: "Is Millingo available in Hindi?",
        a: "Millingo's screens are in English today, in plain words chosen for a mill's office. We train your staff on them during onboarding.",
      },
    ],
  },
  // DMS industry pages (19 Nov 2026): claims from svasamm-platform docs/channel/the-requirement-catalogue.md;
  // service tickets, AMC, schemes, claims and RMA are "set up during onboarding".
  "dms-coding-marking-oem": {
    changed: "2026-11-19",
    sections: [
      {
        type: "p",
        h: "A worked example: one CIJ printer and its ink",
        text: "A coding and marking OEM sells a continuous inkjet printer through its distributor in Ludhiana. The distributor bills a biscuit factory in Jalandhar from its own GSTIN, and its engineer installs the printer on the packing line. The Application and Warranty Sheet records the serial, the line speed, the substrate it codes on and the ink and make-up fluid that fit that model. From then on, every litre of ink the distributor sells to that factory is a sale against a known machine. The OEM can see which installed printers are buying genuine consumables and which have gone quiet — the first sign of a competitor's ink or a printer that is no longer running."
      },
      {
        type: "table",
        h: "What the Application and Warranty Sheet holds for a coding printer",
        cols: [
          "Field",
          "What it records",
          "Why it matters"
        ],
        rows: [
          [
            "Model and serial",
            "The printer, as dispatched and received",
            "Follows the machine through every move"
          ],
          [
            "Application",
            "Product, substrate and line speed",
            "Tells the next engineer how it was set up"
          ],
          [
            "Consumables",
            "Ink, make-up fluid and cleaning solution that fit the model",
            "Only approved consumables are offered on the next order"
          ],
          [
            "Engineer",
            "Who installed it, from which distributor",
            "Service history starts with a name"
          ],
          [
            "Warranty",
            "Start date from installation, and the terms",
            "Known on arrival when the line goes down"
          ]
        ]
      },
      {
        type: "list",
        h: "The reports a coding & marking OEM reads every week",
        items: [
          {
            b: "Consumable pull by installed printer —",
            t: "ink and fluid sold per machine, so a printer buying nothing stands out."
          },
          {
            b: "Printers held by distributors —",
            t: "with the days each has sat; amber at 45 days and red at 60 by default."
          },
          {
            b: "Installations this month —",
            t: "by distributor and region, with sheets still to be completed."
          },
          {
            b: "Commission —",
            t: "worked out from the distributor's invoices, printers and consumables on their own slabs."
          }
        ]
      },
      {
        type: "p",
        h: "Rolling it out across a coding & marking channel",
        text: "Start with the distributors that sell the most printers. Bring their customers, pincodes and the printers they hold today, by serial, from Excel. Approve the consumables that fit each model, so a distributor cannot offer the wrong ink on an order. Then bring the installed printers you already know about, so the installed base is useful from the first week. Line-down service requests and visits are set up during onboarding, on the same printer and warranty records."
      }
    ],
    faqs: [
      {
        q: "Can a distributor propose a new consumable for a printer model?",
        a: "Yes. A distributor can propose a consumable for a model; head office approves it before it can be sold against that model."
      },
      {
        q: "Can we see which customers stopped buying our ink?",
        a: "Yes. Because consumables are sold against installed printers, a printer with no consumable sales for a period shows up in the consumable pull report."
      }
    ]
  },
  "dms-packaging-machinery-oem": {
    changed: "2026-11-19",
    sections: [
      {
        type: "p",
        h: "A worked example: a cartoner commissioned by a distributor",
        text: "A packaging machinery OEM ships a cartoning machine to its distributor in Pune. The distributor sells it to a pharmaceutical plant in Baddi, bills it from its own GSTIN, and its engineer commissions it on site with the plant's format parts. The Application and Warranty Sheet records the serial, the carton sizes it was set up for, the change parts supplied and the warranty start. When the plant later orders a new format part, the distributor raises it against that machine, and the OEM sees which machines are growing their use and which have stood still since installation."
      },
      {
        type: "table",
        h: "What the Application and Warranty Sheet holds for a packaging machine",
        cols: [
          "Field",
          "What it records",
          "Why it matters"
        ],
        rows: [
          [
            "Model and serial",
            "The machine, as dispatched and received",
            "Follows the machine through every move"
          ],
          [
            "Application",
            "Product, pack sizes and speed it was commissioned for",
            "The next change part is ordered against a known setup"
          ],
          [
            "Change parts and spares",
            "What shipped with it and what was added later",
            "Spares stock at the distributor matches the machines it serves"
          ],
          [
            "Engineer",
            "Who commissioned it",
            "Service history starts with a name"
          ],
          [
            "Warranty",
            "Start date from commissioning, and the terms",
            "Known on arrival at a breakdown"
          ]
        ]
      },
      {
        type: "list",
        h: "The reports a packaging machinery OEM reads every week",
        items: [
          {
            b: "Installed base by customer and region —",
            t: "every machine, since when, and the warranty left."
          },
          {
            b: "Machines held by distributors —",
            t: "with days held; a machine sitting 60 days is capital tied up in the channel."
          },
          {
            b: "Commissioning still open —",
            t: "machines delivered whose sheet is not complete."
          },
          {
            b: "Spares and change parts sold per machine —",
            t: "which installations keep buying and which have gone quiet."
          }
        ]
      },
      {
        type: "p",
        h: "Rolling it out across a packaging machinery channel",
        text: "Packaging machinery channels are small and high-value, so start with all distributors at once. Bring the machines each holds and the installed base you already know, by serial. Set warranty terms per model, and the days at which held stock turns amber and red. AMC contracts and their renewals are set up during onboarding to your service policy, on the same machine records."
      }
    ],
    faqs: [
      {
        q: "Can a distributor hold several models with different warranty terms?",
        a: "Yes. Warranty terms are set per model, and each installation starts its own warranty from the commissioning date."
      },
      {
        q: "Do we see a machine resold by the distributor to another customer?",
        a: "Yes. The serial follows every move, so a machine moved from one customer site to another keeps its history."
      }
    ]
  },
  "dms-electrical-electronics-oem": {
    changed: "2026-11-19",
    sections: [
      {
        type: "p",
        h: "A worked example: a drive sold through two tiers",
        text: "An electrical equipment OEM sells variable-frequency drives through a distributor in Ahmedabad. The distributor sells a batch to a panel builder and bills from its own GSTIN in Gujarat; the panel builder fits one drive into a machine that ends up at a textile mill. The serial of each drive is recorded on dispatch and on the distributor's sale, so a drive returned from the field a year later can be traced to the distributor, the invoice and the date — and the warranty is known without anyone searching email."
      },
      {
        type: "table",
        h: "What the warranty record holds for an electrical product",
        cols: [
          "Field",
          "What it records",
          "Why it matters"
        ],
        rows: [
          [
            "Model and serial",
            "Each unit, from dispatch to the distributor's sale",
            "A return is traced to its invoice in seconds"
          ],
          [
            "Customer",
            "The party the distributor billed",
            "Warranty is registered at the right name"
          ],
          [
            "Installation",
            "Where and when it was put to work, when an engineer installs it",
            "Warranty starts from installation, not from dispatch"
          ],
          [
            "Warranty",
            "Terms per model and the date it ends",
            "A return inside warranty is known on arrival"
          ]
        ]
      },
      {
        type: "list",
        h: "The reports an electrical & electronics OEM reads every week",
        items: [
          {
            b: "Secondary sales by distributor —",
            t: "what each partner sold on, the day it was billed, not at month end."
          },
          {
            b: "Serial tracker —",
            t: "where any unit is and who has held it."
          },
          {
            b: "Stock and days held —",
            t: "per distributor and godown, with ageing on slow lines."
          },
          {
            b: "Off-territory sales —",
            t: "sales to pincodes outside a distributor's area, flagged for review."
          }
        ]
      },
      {
        type: "p",
        h: "Rolling it out across an electrical & electronics channel",
        text: "Electrical channels carry many models, so begin by bringing items and price lists for each channel, then the distributors and their pincodes. Bring opening stock by serial for the high-value lines. Returns, repairs and the RMA process are set up during onboarding, on the same serial and warranty records, so a returned unit arrives already known."
      }
    ],
    faqs: [
      {
        q: "Can the price to the distributor and the distributor's price to its customer differ?",
        a: "Yes. Price lists are kept per channel and per distributor: your price to the distributor and the distributor's price to its customer."
      },
      {
        q: "Can our distributors import their customers in bulk?",
        a: "Yes. Customers, territories and pincodes come in from Excel, and a bad row is refused with its reason."
      }
    ]
  },
  "dms-pharma-medical-device-oem": {
    changed: "2026-11-19",
    sections: [
      {
        type: "p",
        h: "A worked example: an analyser installed by a distributor",
        text: "A diagnostic equipment OEM sells a biochemistry analyser through its distributor in Kolkata. The distributor bills a diagnostic lab in Siliguri from its own GSTIN, and its engineer installs and qualifies the analyser on site. The Application and Warranty Sheet records the serial, the tests the lab runs, the reagent kits that fit the model and the warranty start. Every reagent order the lab places afterwards is a sale against a known instrument, so the OEM sees which installations are running and which have stopped ordering."
      },
      {
        type: "table",
        h: "What the Application and Warranty Sheet holds for an instrument",
        cols: [
          "Field",
          "What it records",
          "Why it matters"
        ],
        rows: [
          [
            "Model and serial",
            "The instrument, as dispatched and received",
            "Serial-level traceability from factory to lab"
          ],
          [
            "Application",
            "The tests and sample volume it was installed for",
            "Reagent supply is planned per instrument"
          ],
          [
            "Consumables",
            "Reagent kits and consumables approved for the model",
            "Only approved consumables are sold against it"
          ],
          [
            "Engineer",
            "Who installed and qualified it",
            "A named person for every installation"
          ],
          [
            "Warranty",
            "Start date from installation, and the terms",
            "Known on arrival at a fault"
          ]
        ]
      },
      {
        type: "list",
        h: "The reports a pharma & medical device OEM reads every week",
        items: [
          {
            b: "Installed base by customer —",
            t: "every instrument, where, since when, warranty left."
          },
          {
            b: "Reagent and consumable sales per instrument —",
            t: "so an instrument that has gone quiet stands out."
          },
          {
            b: "Installations this month —",
            t: "by distributor, with sheets still open."
          },
          {
            b: "Instruments held by distributors —",
            t: "with days held, so demo and stock units do not drift."
          }
        ]
      },
      {
        type: "p",
        h: "Rolling it out across a pharma & medical device channel",
        text: "Start with the instruments: bring the installed base you know, by serial, and the units each distributor holds. Approve the reagent kits and consumables per model. Then bring customers and pincodes. Calibration and preventive maintenance schedules, and service visits, are set up during onboarding on the same instrument records."
      }
    ],
    faqs: [
      {
        q: "Can we keep batch numbers on reagents?",
        a: "Batch numbers and expiry dates for reagents and consumables are set up in stock during onboarding, to how your products are labelled."
      },
      {
        q: "Does each distributor see only its own labs and hospitals?",
        a: "Yes. A distributor's people see only their own entity — its customers, orders, stock and books."
      }
    ]
  },
  "dms-automotive-aftermarket-oem": {
    changed: "2026-11-19",
    sections: [
      {
        type: "p",
        h: "A worked example: a brake part from distributor to garage",
        text: "An automotive component OEM sells brake assemblies through a distributor in Ludhiana that supplies retailers and garages across Punjab. The distributor raises its own invoices to retailers from its GSTIN, inside the OEM's system. The OEM sees secondary sales by part and by pincode the day they are billed, which retailers are buying, and where a part sold outside the distributor's pincodes. When a part comes back under warranty, its invoice and distributor are known."
      },
      {
        type: "table",
        h: "What the OEM sees across the tiers",
        cols: [
          "Field",
          "What it records",
          "Why it matters"
        ],
        rows: [
          [
            "Primary sales",
            "OEM to distributor, by part and by month",
            "What went into the channel"
          ],
          [
            "Secondary sales",
            "Distributor to retailer or garage, the day it is billed",
            "What actually sold, not what was pushed"
          ],
          [
            "Stock and days held",
            "Per distributor, per part",
            "Slow parts are seen before they become returns"
          ],
          [
            "Territory",
            "Pincodes per distributor; outside sales flagged",
            "Disputes between distributors are settled with facts"
          ]
        ]
      },
      {
        type: "list",
        h: "The reports an automotive OEM reads every week",
        items: [
          {
            b: "Primary against secondary sales —",
            t: "per distributor, so a distributor stocking up without selling is seen early."
          },
          {
            b: "Top parts by region —",
            t: "from secondary invoices, not estimates."
          },
          {
            b: "Off-territory sales —",
            t: "flagged for review, never silently allowed."
          },
          {
            b: "Outstanding and collections —",
            t: "per distributor, from their books."
          }
        ]
      },
      {
        type: "p",
        h: "Rolling it out across an automotive aftermarket channel",
        text: "Aftermarket catalogues are large, so bring items and price lists first, by channel. Then bring the distributors, their pincodes and their retailers from Excel; a bad row is refused with its reason. Warranty claims, schemes for retailers and the distributor's claims against you are set up during onboarding to your channel policy."
      }
    ],
    faqs: [
      {
        q: "Can retailers be added by the distributor?",
        a: "Yes. A distributor adds its own customers — retailers, garages, fleets — and they are visible to head office."
      },
      {
        q: "Can we see stock at each distributor by part?",
        a: "Yes. Stock on hand per distributor and godown, with days held, part by part."
      }
    ]
  },
  "dms-hvac-equipment-oem": {
    changed: "2026-11-19",
    sections: [
      {
        type: "p",
        h: "A worked example: a chiller installed by a dealer",
        text: "An HVAC OEM sells an air-cooled chiller through its dealer in Hyderabad. The dealer bills a hospital from its own GSTIN in Telangana, and its engineer installs and commissions the chiller. The Application and Warranty Sheet records the serial, the cooling load it was sized for, the site and the warranty start. The OEM sees the installed base grow by city, the chillers and compressors each dealer still holds and for how long, and which installations are coming out of warranty — the moment to offer a service contract."
      },
      {
        type: "table",
        h: "What the Application and Warranty Sheet holds for HVAC equipment",
        cols: [
          "Field",
          "What it records",
          "Why it matters"
        ],
        rows: [
          [
            "Model and serial",
            "The unit, as dispatched and received",
            "Follows the machine through every move"
          ],
          [
            "Application",
            "Site, load and duty it was installed for",
            "The next engineer knows the setup"
          ],
          [
            "Spares",
            "What shipped with it and what was added",
            "Dealer spares stock matches the base it serves"
          ],
          [
            "Engineer",
            "Who installed and commissioned it",
            "Service history starts with a name"
          ],
          [
            "Warranty",
            "Start from commissioning; terms per model",
            "Expiring warranties are a list, not a surprise"
          ]
        ]
      },
      {
        type: "list",
        h: "The reports an HVAC & equipment OEM reads every week",
        items: [
          {
            b: "Warranty ending in the next 90 days —",
            t: "by dealer and city, ready for a service contract offer."
          },
          {
            b: "Installed base by city —",
            t: "every unit, since when, warranty left."
          },
          {
            b: "Units held by dealers —",
            t: "with days held; heavy equipment sitting 60 days is costly."
          },
          {
            b: "Dealer commission —",
            t: "from invoices, by product category."
          }
        ]
      },
      {
        type: "p",
        h: "Rolling it out across an HVAC & equipment dealer network",
        text: "Bring the installed units you know, by serial, with their installation dates, so the warranty list is right from the first day. Then bring dealers, their pincodes and the units they hold. AMC contracts, renewals and service visits are set up during onboarding to your service policy, on the same unit records."
      }
    ],
    faqs: [
      {
        q: "Can we see which units are coming out of warranty?",
        a: "Yes. Warranty starts at installation and is kept per unit, so the units whose warranty ends in a period are a report."
      },
      {
        q: "Do dealers in different states bill with their own GSTIN?",
        a: "Yes. Each dealer is its own entity in your system, with its own GSTIN, and GST is worked out on every invoice from the two parties' states."
      }
    ]
  },
  "dms-agri-farm-equipment-oem": {
    changed: "2026-11-19",
    sections: [
      {
        type: "p",
        h: "A worked example: a tractor implement sold in a rural district",
        text: "An agri equipment OEM sells rotavators through a dealer in Bardhaman. The dealer sells one to a farmer and bills it from its own GSTIN in West Bengal; its mechanic delivers and sets it up at the farm. The serial and the warranty start are recorded on the sale. The OEM sees, district by district, what each dealer sold this season, what is still in the dealer's yard and for how long, and where sales crossed into another dealer's pincodes."
      },
      {
        type: "table",
        h: "What the OEM records for each machine",
        cols: [
          "Field",
          "What it records",
          "Why it matters"
        ],
        rows: [
          [
            "Model and serial",
            "The machine, as dispatched and received",
            "Follows it through every move"
          ],
          [
            "Customer",
            "The farmer or contractor the dealer billed",
            "Warranty is registered at the right name"
          ],
          [
            "Delivery and setup",
            "Who set it up and when",
            "Warranty starts from setup"
          ],
          [
            "Warranty",
            "Terms per model and the date it ends",
            "Known on arrival at a breakdown in the field"
          ]
        ]
      },
      {
        type: "list",
        h: "The reports an agri equipment OEM reads every season",
        items: [
          {
            b: "Sales by district and dealer —",
            t: "from the dealer's own invoices, the day they are billed."
          },
          {
            b: "Machines in dealers' yards —",
            t: "with days held, so stock is moved before the season ends."
          },
          {
            b: "Off-territory sales —",
            t: "sales outside a dealer's pincodes, flagged for review."
          },
          {
            b: "Dealer outstanding —",
            t: "from the dealer's books, before the next dispatch is approved."
          }
        ]
      },
      {
        type: "p",
        h: "Rolling it out across a rural dealer network",
        text: "Rural dealers often keep their records on paper, so begin with what head office already has: the dealer list, their pincodes and the machines dispatched to them, brought in from Excel. Each dealer then raises invoices in the system from its own login. Subsidy paperwork, spares programmes and service visits are set up during onboarding to your channel policy."
      }
    ],
    faqs: [
      {
        q: "Do dealers need a computer at the counter?",
        a: "No. Dealers sign in from a browser on a computer or a phone."
      },
      {
        q: "Can we stop a dispatch to a dealer over its credit limit?",
        a: "Each dealer has a credit limit and terms, and its outstanding is visible from its books when you approve the next dispatch."
      }
    ]
  },
  // CRM and Service desk industry pages (19 Nov 2026): as the product-guides note.
  "crm-for-distribution": {
    changed: "2026-11-19",
    sections: [
      {
        type: "p",
        h: "A worked example: a distributor's salesperson on Monday",
        text: "A salesperson at an electrical goods distributor starts the week with a list, not a blank page: the twelve retailers due a visit, the three deals with a new contractor waiting on a quote, and the two customers whose outstanding has crossed their credit limit. Every visit is logged against the customer with the next step. When a contractor's deal is won, the contractor becomes a customer in the distributor's books with the products already on it, and the first order is raised from there."
      },
      {
        type: "table",
        h: "What a distribution CRM should hold for each account",
        cols: [
          "Record",
          "What it holds",
          "Why it matters"
        ],
        rows: [
          [
            "Account",
            "The customer, its locations and its people",
            "One view for sales and support"
          ],
          [
            "Deals",
            "New business: products, value, stage, days in stage",
            "New accounts are chased, not forgotten"
          ],
          [
            "Visits",
            "Who visited, when, what was agreed",
            "The next salesperson knows the history"
          ],
          [
            "Outstanding",
            "What the customer owes, from the books",
            "Nobody sells into an account that has not paid"
          ]
        ]
      },
      {
        type: "list",
        h: "Questions to ask any CRM vendor",
        items: [
          {
            b: "Does a won deal become a customer in the books —",
            t: "or does accounts type it again?"
          },
          {
            b: "Can a salesperson see only their accounts —",
            t: "while the manager sees the team's?"
          },
          {
            b: "Is the deal's value worked out from its products —",
            t: "or typed by hand?"
          },
          {
            b: "Can visits be logged in under a minute on a phone —",
            t: "or will the team go back to WhatsApp?"
          }
        ]
      }
    ],
    faqs: [
      {
        q: "Can the CRM work with the distributor management system?",
        a: "Yes. Svasamm's CRM and DMS share the same customers and the same scoping, so a distributor's salespeople see only their own leads, deals and customers."
      },
      {
        q: "Can a manager see deals that are stuck?",
        a: "Yes. Every deal shows how many days it has spent in its stage, so the ones that have not moved stand out."
      }
    ]
  },
  "crm-for-b2b-sales": {
    changed: "2026-11-19",
    sections: [
      {
        type: "p",
        h: "A worked example: a six-month industrial deal",
        text: "An equipment maker's salesperson meets a plant head at a trade fair. The lead goes in with the source. Over six months the deal moves from qualified to proposal to negotiation; the purchase head, the plant head and the finance head are each recorded with their part in the decision. Each visit and call is logged with the next step. The proposal carries the products and quantities, so its value is worked out, not typed. When the order comes, the deal is won and the company becomes a customer in the books."
      },
      {
        type: "table",
        h: "Stages for a long B2B deal",
        cols: [
          "Stage",
          "Probability",
          "What moves it on"
        ],
        rows: [
          [
            "Lead",
            "10%",
            "A meeting with someone who has the problem"
          ],
          [
            "Qualified",
            "25%",
            "Need, budget range and decision-maker confirmed"
          ],
          [
            "Proposal",
            "50%",
            "A priced proposal with products and quantities"
          ],
          [
            "Negotiation",
            "75%",
            "Terms agreed with purchase and finance"
          ],
          [
            "Won",
            "100%",
            "A purchase order received"
          ]
        ]
      },
      {
        type: "list",
        h: "What makes B2B pipelines honest",
        items: [
          {
            b: "Days in stage —",
            t: "a deal that has sat in proposal for ninety days is not a 50% deal."
          },
          {
            b: "Value from products —",
            t: "the pipeline's total is the sum of real proposals."
          },
          {
            b: "One next step on every deal —",
            t: "a deal without a next step is a deal nobody is working."
          },
          {
            b: "Loss reasons —",
            t: "recorded on every lost deal, reviewed every quarter."
          }
        ]
      }
    ],
    faqs: [
      {
        q: "Can we set our own deal stages and probabilities?",
        a: "Yes. The firm names its stages, their order and the probability at each."
      },
      {
        q: "Can quotations come from the deal?",
        a: "The deal carries its products and value; quotation printing to your format is set up during onboarding."
      }
    ]
  },
  "crm-for-services-firms": {
    changed: "2026-11-19",
    sections: [
      {
        type: "p",
        h: "A worked example: a consulting firm's enquiry to retainer",
        text: "An enquiry arrives from a manufacturer that wants help with GST compliance. The partner logs the lead and its source — a referral from an existing client. After a first meeting the deal is qualified, a proposal for a monthly retainer goes out, and a follow-up task is set for a week later. When the client signs, the deal is won and the client becomes a customer in the books, ready to be billed every month."
      },
      {
        type: "table",
        h: "What a services firm should track",
        cols: [
          "Record",
          "What it holds",
          "Why it matters"
        ],
        rows: [
          [
            "Source",
            "Referral, website, event, existing client",
            "Shows where good clients come from"
          ],
          [
            "Proposal",
            "The services, the fee and the term",
            "The pipeline is a real number"
          ],
          [
            "Follow-ups",
            "Tasks with dates, against the deal",
            "No proposal goes cold by silence"
          ],
          [
            "Won and lost",
            "With the reason",
            "Pricing and pitch improve from facts"
          ]
        ]
      },
      {
        type: "list",
        h: "Habits that keep a services pipeline healthy",
        items: [
          {
            b: "Log the referral source on every lead —",
            t: "referrals are usually a services firm's best clients, and they deserve a thank-you."
          },
          {
            b: "Set the next follow-up before leaving the meeting —",
            t: "the deal shows it until it is done."
          },
          {
            b: "Review deals with no movement for thirty days —",
            t: "every Monday, in ten minutes."
          },
          {
            b: "Record why you lost —",
            t: "price, timing, fit or a competitor."
          }
        ]
      }
    ],
    faqs: [
      {
        q: "Can partners see every deal while associates see only theirs?",
        a: "Yes. Each person sees their own deals; partners and managers see their team's or the whole firm's."
      },
      {
        q: "Does a won deal start billing?",
        a: "A won deal becomes a customer in the books; recurring billing for the retainer is set up during onboarding."
      }
    ]
  },
  "service-desk-for-customer-support": {
    changed: "2026-11-19",
    sections: [
      {
        type: "p",
        h: "A worked example: a line-down call at a customer",
        text: "A packaging line stops at a customer's plant. The support team raises an urgent ticket naming the customer and the machine. Because the machine's installation is on record, the agent sees at once that it is under warranty. The service-level timer shows thirty minutes to first response; the ticket goes to the engineer for that region, and the customer is told who is coming and when."
      },
      {
        type: "table",
        h: "Priorities a customer support team can start with",
        cols: [
          "Priority",
          "When to use it",
          "Example"
        ],
        rows: [
          [
            "Urgent",
            "The customer's work has stopped",
            "A machine is down on a running line"
          ],
          [
            "High",
            "Work is slowed or at risk",
            "Output is below normal"
          ],
          [
            "Normal",
            "A question or a request",
            "How to change a setting"
          ],
          [
            "Low",
            "A suggestion",
            "A feature the customer would like"
          ]
        ]
      },
      {
        type: "list",
        h: "What support managers review every week",
        items: [
          {
            b: "Breaches —",
            t: "tickets that missed first response or resolution, by queue."
          },
          {
            b: "Oldest open tickets —",
            t: "anything open longer than a week, with its owner."
          },
          {
            b: "Repeat tickets —",
            t: "the same question from many customers is a knowledge-base article waiting to be written."
          },
          {
            b: "Warranty against paid work —",
            t: "known from the machine on each ticket."
          }
        ]
      }
    ],
    faqs: [
      {
        q: "Can a ticket show whether the machine is under warranty?",
        a: "Yes, for an OEM on Svasamm's DMS: the ticket names the installed machine, and its warranty is known on arrival."
      },
      {
        q: "Can customers raise tickets by email or a portal?",
        a: "Email intake and a customer portal are set up during onboarding, to your support process."
      }
    ]
  },
  "service-desk-for-msps": {
    changed: "2026-11-19",
    sections: [
      {
        type: "p",
        h: "A worked example: one desk, twelve client companies",
        text: "A managed service provider supports twelve companies. Each client is kept separate: its users, its tickets, its service levels. A manufacturing client pays for a four-hour fix on urgent tickets; a small office client has next-day. The agent's queue shows every client's tickets with the time left on each, so the urgent one at the manufacturer is worked first even if it arrived later."
      },
      {
        type: "table",
        h: "Service levels that differ by client",
        cols: [
          "Client type",
          "Urgent response",
          "Urgent resolution"
        ],
        rows: [
          [
            "Plant running shifts",
            "30 minutes",
            "4 hours"
          ],
          [
            "Office, business hours",
            "2 hours",
            "1 working day"
          ],
          [
            "Small office, basic plan",
            "Next working day",
            "3 working days"
          ]
        ]
      },
      {
        type: "list",
        h: "What an MSP reports to each client every month",
        items: [
          {
            b: "Tickets raised and solved —",
            t: "by priority, against the service level promised."
          },
          {
            b: "Breaches —",
            t: "each one, with the reason."
          },
          {
            b: "Top recurring issues —",
            t: "with what is being done to stop them."
          },
          {
            b: "Open items —",
            t: "anything carried into next month, with an owner."
          }
        ]
      }
    ],
    faqs: [
      {
        q: "Can each client see only its own tickets?",
        a: "Yes. Records are scoped, so a client's people see only their company's tickets."
      },
      {
        q: "Can service levels be set per client?",
        a: "Service levels per client and per priority are set up during onboarding to each contract."
      }
    ]
  },
  "service-desk-for-internal-it": {
    changed: "2026-11-19",
    sections: [
      {
        type: "p",
        h: "A worked example: a new joiner's first day",
        text: "HR adds a new joiner, and IT gets the requests: a laptop, an email account, access to the accounting system. Each is a ticket with an owner and a due date before the joining day. On the day, a printer on the second floor stops working; an employee raises a ticket, and the timer shows the team has one working day. The IT head sees both kinds of work — planned requests and things that broke — on one board."
      },
      {
        type: "table",
        h: "Kinds of tickets internal IT handles",
        cols: [
          "Kind",
          "Example",
          "Typical target"
        ],
        rows: [
          [
            "Incident",
            "A printer or a system stopped",
            "Same working day"
          ],
          [
            "Service request",
            "A laptop, an account, software",
            "Before the date it is needed"
          ],
          [
            "Access",
            "Rights to a system or a folder",
            "One working day, with approval"
          ],
          [
            "Change",
            "An update or a new system",
            "Planned, with notice"
          ]
        ]
      },
      {
        type: "list",
        h: "What internal IT should measure",
        items: [
          {
            b: "Requests done before they were needed —",
            t: "the joiner had a laptop on day one."
          },
          {
            b: "Incidents by kind —",
            t: "so the printer that fails every week gets replaced."
          },
          {
            b: "Breaches by team —",
            t: "where the work is piling up."
          },
          {
            b: "Tickets per employee per month —",
            t: "a rising number means something is wrong upstream."
          }
        ]
      }
    ],
    faqs: [
      {
        q: "Can employees raise their own tickets?",
        a: "Yes. Employees raise and follow their own tickets; the self-service portal and its catalogue of requests are set up during onboarding."
      },
      {
        q: "Can tickets be linked to the laptop or device they are about?",
        a: "Asset records and linking tickets to them are set up during onboarding to how your IT team tracks devices."
      }
    ]
  },

  // Millingo comparisons and the by-product guide (20 Nov 2026): claims from svasamm-platform develop,
  // modules/millingo gate and mill (refusals, and priceBatch for the worked batch). Vendors are "ask them".
  "millingo-vs-dataman": {
    changed: "2026-11-20",
    sections: [
      {
        type: "p",
        h: "Test both with one lorry, not a feature list",
        text: "Every rice-mill package lists purchase, stock, milling and GST, so a feature list cannot tell two of them apart. A demo can. Ask both vendors to take one real lorry of paddy through their software while you watch, from the gate to the godown, then mill it and sell the rice. The differences show up in the first ten minutes: where the weight comes from, what the bench does to the bill, and where the bran and husk go."
      },
      {
        type: "list",
        h: "Six things to try in each demo",
        items: [
          {
            b: "Claim one weighment twice —",
            t: "in Millingo a weighment can go on one paddy entry only, so the second claim is refused."
          },
          {
            b: "Grade a load below standard —",
            t: "in Millingo the shortfall takes value off the bill, 1% of the load per point, and the weight stays as weighed."
          },
          {
            b: "Receive the government's paddy —",
            t: "in Millingo it comes only against a release order, is never bought or billed, and moisture is never deducted from it."
          },
          {
            b: "Mill a batch —",
            t: "in Millingo the rice, bran, husk and brokens come off as stock, and more cannot come out than went in."
          },
          {
            b: "Leave a by-product without a rate —",
            t: "in Millingo the rice is then left unpriced so somebody looks, rather than carrying the whole paddy cost."
          },
          {
            b: "Deliver a lot to FCI —",
            t: "in Millingo a lot is 290 quintals, 580 bags of 50 kg, accepted or rejected whole, and no bill is raised before the depot accepts it."
          }
        ]
      },
      {
        type: "table",
        h: "Questions to put to any vendor",
        cols: [
          "Question",
          "Why it matters"
        ],
        rows: [
          [
            "Which states' CMR rules do you carry, and for which season?",
            "Rules on brokens, lots and dates differ by state and change every KMS"
          ],
          [
            "How is a shortfall valued, and where does it show?",
            "It is a debt to the government with a cost, not a footnote"
          ],
          [
            "Are the corporation's gunny bags kept apart from ours?",
            "Two owners, two pools; mixing them is a reconciliation every season"
          ],
          [
            "Is the cost of rice net of what the by-products fetch?",
            "Without it, a batch's margin is wrong by the value of bran and husk"
          ],
          [
            "Who can see what?",
            "The gate, the QC bench and the office should each see only their part"
          ],
          [
            "How do we move from our current registers?",
            "Opening stock, open orders and the season's CMR position have to come across"
          ]
        ]
      },
      {
        type: "p",
        h: "Moving from another package",
        text: "A mill rarely changes software mid-season. The move is planned for the gap between seasons: opening stock by shed and variety, open purchase orders, the parties, the gunny bags in each pool, and the CMR position with the government. The rules for your state and the current season are set during onboarding. Every plan includes the move from your current registers or Tally, and the nine ready roles, so the gate, the bench and the office each start with only their own screens."
      }
    ],
    faqs: [
      {
        q: "Can I try Millingo on my own mill's figures before deciding?",
        a: "Yes. Send one season's paddy received and rice delivered, and we walk it through Millingo with you: the gate, the bench, the batches, the depot and report 7.1. It is free and there is no obligation."
      },
      {
        q: "Does Millingo replace Tally?",
        a: "Millingo keeps the mill's books itself: every bill, dispatch and invoice posts as it is made, and GSTR-1 and GSTR-3B are prepared from those books. The move from Tally or your registers is part of every plan."
      }
    ]
  },

  "millingo-vs-samadhan": {
    changed: "2026-11-20",
    sections: [
      {
        type: "p",
        h: "A platform ERP or a rice-mill ERP",
        text: "The real choice here is not a list of features. Samadhan is built on Microsoft Dynamics 365 Business Central, a general business platform that a partner configures for rice milling. Millingo is written for a rice mill from the start: the gate, the bench, the batch, the gunny bags and the government's paddy are its own records, not settings on a general one. Both approaches can work. They differ in who sets the mill up, what you pay for the platform, and how much of the CMR cycle the software already knows."
      },
      {
        type: "table",
        h: "What each approach means for a mill",
        cols: [
          "Question",
          "A platform ERP",
          "Millingo"
        ],
        rows: [
          [
            "Who sets up the mill's rules?",
            "The platform partner, during the project",
            "Onboarding, with the mill's rules already in the product"
          ],
          [
            "Where does CMR live?",
            "Whatever the partner builds or configures",
            "Release orders, camp picks, lots, the shortfall and report 7.1 are built in"
          ],
          [
            "What do you license?",
            "The platform's users, plus the partner's work",
            "One Millingo plan: Starter, Professional or Enterprise"
          ],
          [
            "Who changes it later?",
            "The partner, usually as a change request",
            "The product team, for every mill at once"
          ],
          [
            "Fits a seasonal, market-only mill?",
            "Usually more than it needs",
            "Starter covers purchase, stock, milling and sales"
          ]
        ]
      },
      {
        type: "list",
        h: "What Millingo refuses, so your staff cannot get it wrong",
        items: [
          {
            b: "A lorry without a driver, a number plate or an order —",
            t: "refused at the gate; the government's paddy needs a release order instead."
          },
          {
            b: "An empty weight above the loaded one —",
            t: "refused at the kanta."
          },
          {
            b: "A verdict before every parameter is read —",
            t: "refused at the bench; stock posts only after the load passes."
          },
          {
            b: "The government's paddy in a market batch —",
            t: "refused; a batch is milled for the market or for levy, never both."
          },
          {
            b: "More out of a batch than went in —",
            t: "refused, and so is paddy that comes out of a dryer heavier."
          },
          {
            b: "A bill before the depot has accepted the rice —",
            t: "refused; the depot's acceptance note number is what the bill is raised against."
          }
        ]
      },
      {
        type: "p",
        h: "When a platform ERP is the better fit",
        text: "If your group already runs Dynamics in other businesses, wants one platform across all of them, and has a partner it trusts, a Dynamics-based mill package keeps everything on one stack. If the mill is the business, and the CMR cycle, the bench and the by-products are where the money is made or lost, a product built for the mill gets you there with less to configure. Ask both for a demo on one real lorry, and judge them on what each refuses."
      }
    ],
    faqs: [
      {
        q: "Do I need Microsoft licences to run Millingo?",
        a: "No. Millingo runs in the browser and on a phone, on Svasamm One. There is no other platform to license."
      },
      {
        q: "Can Millingo handle more than one mill?",
        a: "Each mill is its own account in Millingo, with its own sheds, stock, books and CMR position."
      }
    ]
  },

  "rice-mill-byproduct-accounting": {
    changed: "2026-11-20",
    sections: [
      {
        type: "p",
        h: "How the accounting standard values by-products",
        text: "When one process gives a main product and by-products, the accounting standard for inventories (AS 2, and Ind AS 2 for larger companies) does not ask you to split the paddy's cost between them. Nobody can say how much of a grain became husk. Instead the by-products are carried at their net realisable value, what they will sell for less the cost of selling them, and that value is deducted from the cost of the main product. The rice absorbs whatever is left."
      },
      {
        type: "table",
        h: "A worked batch",
        cols: [
          "Line",
          "Quintals",
          "Rate (₹/qtl)",
          "Value (₹)"
        ],
        rows: [
          [
            "Paddy milled",
            "100.00",
            "1,828.00",
            "1,82,800.00"
          ],
          [
            "Less bran, at what it will fetch",
            "8.00",
            "2,200.00",
            "17,600.00"
          ],
          [
            "Less husk, at what it will fetch",
            "20.00",
            "120.00",
            "2,400.00"
          ],
          [
            "Wastage, closing the weight balance",
            "7.00",
            "—",
            "nil"
          ],
          [
            "Rice absorbs the balance",
            "65.00",
            "2,504.62",
            "1,62,800.00"
          ]
        ]
      },
      {
        type: "p",
        text: "Value in equals value out: ₹1,82,800 of paddy became ₹17,600 of bran, ₹2,400 of husk and ₹1,62,800 of rice. Weight in equals weight out: 100 quintals became 8 + 20 + 7 + 65. Wastage carries no value, because it is the difference between what went in and what came off the floor, and putting cost on it moves money onto something nobody can sell."
      },
      {
        type: "list",
        h: "Three mistakes that make the rice's cost wrong",
        items: [
          {
            b: "No rate on a by-product —",
            t: "crediting nothing for the bran loads the whole paddy cost onto the rice and overstates it. Millingo leaves the rice unpriced until the rate is set, so the gap is visible instead of hidden."
          },
          {
            b: "A by-product rate higher than it can fetch —",
            t: "if the by-products come out worth more than the paddy, a rate is wrong. Millingo refuses to price the rice negative and leaves it for somebody to check."
          },
          {
            b: "Brokens priced as head rice —",
            t: "brokens are rice, sold below head rice; set them up as their own product so their stock and sales are seen apart."
          }
        ]
      },
      {
        type: "p",
        h: "What Millingo does at the end of a batch",
        text: "When a batch is milled, the floor records what came off it: rice, each by-product and the wastage. Millingo checks the weights balance, then prices the batch: each by-product at the rate the mill has set for it, and the rice at the paddy's cost less those values, to the paisa. The bran, husk and brokens go into stock in their sheds, ready to sell on their own invoices with their own HSN codes and GST rates."
      }
    ],
    faqs: [
      {
        q: "Where does the rate for bran and husk come from?",
        a: "The mill sets each by-product's net realisable value per quintal: what it sells for less the cost of selling it. Update it when the market moves; every batch milled after that uses the new rate."
      },
      {
        q: "Should power and labour go into the batch's cost?",
        a: "For the stock valuation in Millingo, a batch is priced from the paddy's cost less the by-products. Power, labour and other running costs are booked as expenses in the books, and your chartered accountant decides how conversion costs are treated in the year-end inventory valuation."
      }
    ]
  },
  "itsm-fundamentals-guide": {
    changed: "2026-11-23",
    sections: [
      {
        type: "p",
        h: "Why a service desk drifts",
        text: "Most desks start as a shared mailbox. Requests arrive from email, phone and the corridor, one person remembers who asked for what, and the first sign of trouble is a user asking whether anyone has seen their request. Nothing is wrong with the people. The desk has no single queue, no priority that means anything, and no clock. The fundamentals below are what you put in place, in this order, so the desk stops depending on memory.",
      },
      {
        type: "table",
        h: "Priority is impact and urgency, not who shouts",
        cols: ["Impact and urgency", "Work stops now", "Work slows", "Can wait"],
        rows: [
          ["Many people", "P1 — critical", "P2 — high", "P3 — medium"],
          ["A team", "P2 — high", "P3 — medium", "P4 — low"],
          ["One person", "P3 — medium", "P4 — low", "P4 — low"],
        ],
      },
      {
        type: "p",
        h: "Set the clock per priority",
        text: "Each priority gets two targets: how soon someone responds, and how soon the ticket is resolved. A common starting point is minutes for a P1 response and a working day or two for a P4 resolution, but the numbers must come from what your business can bear, not from a template. Write them down, show the remaining time on the ticket, and pause the clock only for stated reasons, such as waiting for the user. If the clock can be paused for anything, nobody trusts the report.",
      },
      {
        type: "list",
        h: "Incident, request, problem, change",
        items: [
          { b: "Incident —", t: "something that worked and now does not. Restore service first; the cause can wait." },
          { b: "Service request —", t: "something asked for that is on the menu: a new login, a laptop, access to a folder. It has a known path and often needs an approval." },
          { b: "Problem —", t: "the cause behind repeated incidents. It has its own record, so the fix is tracked after the incident is closed." },
          { b: "Change —", t: "a planned alteration to a live system, with an owner, a reason and a way back." },
        ],
      },
      {
        type: "list",
        h: "An escalation ladder you can read aloud",
        items: [
          { b: "At 50% of the resolution time —", t: "the assigned agent and the queue lead are told the ticket is half spent." },
          { b: "At 80% —", t: "the team lead is told, and the ticket moves to the top of the queue." },
          { b: "At breach —", t: "the manager is told, the user is updated, and the breach is recorded with its reason." },
          { b: "Functional escalation —", t: "when the first line cannot fix it, it passes to the right second-line team with what was already tried, so the user does not start again." },
        ],
      },
      {
        type: "p",
        h: "Knowledge that deflects tickets",
        text: "The best knowledge article is written from a closed ticket while the fix is fresh. Keep it short: the symptom as a user would describe it, the steps, and when to call the desk anyway. Review the ten most repeated tickets every month; each one that gets an article is a ticket the desk stops handling.",
      },
      {
        type: "list",
        h: "Measure the desk, not the agents",
        items: [
          { b: "SLA attainment —", t: "the share of tickets resolved inside target, by priority." },
          { b: "Backlog and age —", t: "how many are open and how old the oldest are." },
          { b: "Reopen rate —", t: "tickets closed and then reopened, a sign of fixes that did not hold." },
          { b: "First-contact resolution —", t: "how many are solved by the first person who touches them." },
          { b: "Top repeat causes —", t: "the list that feeds problem records and knowledge articles." },
        ],
      },
      {
        type: "list",
        h: "A rollout that holds, step by step",
        items: [
          { b: "Week 1 —", t: "one queue, one intake form, and the four priorities above. Move the mailbox into it." },
          { b: "Week 2 —", t: "write the response and resolution targets, and show the clock on every ticket." },
          { b: "Week 3 —", t: "set the escalation ladder and tell the managers it exists." },
          { b: "Week 4 —", t: "open a self-service page for the five most common requests, and write the first ten articles." },
          { b: "Month 2 —", t: "review the report; retire the targets nobody meets, or fix what stops them being met." },
        ],
      },
      {
        type: "note",
        text: "In Svasamm One the queue, priorities, SLA clocks and escalation are set up for your team during onboarding, from your own categories and targets. Bring a month of tickets, even from a mailbox, and we will show you what the clock would have said.",
      },
    ],
    faqs: [
      { q: "How many priority levels should a service desk have?", a: "Four is enough for most desks. More levels invite argument over which one a ticket belongs to, and fewer lose the difference between an outage and an annoyance." },
      { q: "Should the SLA clock ever pause?", a: "Only for stated reasons, such as waiting for the user's reply. Write the reasons down; a clock that pauses for anything makes the report meaningless." },
      { q: "What do we do first if the desk is a shared mailbox?", a: "Move the mailbox into one queue, give every ticket an owner and one of four priorities, and show the clock. Everything else builds on those three." },
    ],
  },
  "sales-pipeline-guide": {
    changed: "2026-11-23",
    sections: [
      {
        type: "p",
        h: "What a pipeline is for",
        text: "A pipeline is not a list of hopes. It is the team's agreed answer to three questions: where is every open deal, what is the next thing that will happen to it, and how much of it is likely to close this quarter. If the pipeline cannot answer those, the forecast is a guess and the follow-up depends on who remembers.",
      },
      {
        type: "table",
        h: "Stages written as buyer actions",
        cols: ["Stage", "The buyer has…", "Exit when…"],
        rows: [
          ["New lead", "Asked, or been found", "Someone has spoken to them"],
          ["Qualified", "A need, a budget range and a decision maker named", "A demo or visit is booked"],
          ["Demo done", "Seen the product on their own data", "They have said what would make them buy"],
          ["Proposal sent", "Received a written quotation", "They have replied, yes or no"],
          ["Negotiation", "Asked about price, terms or scope", "Terms are agreed in writing"],
          ["Won or lost", "Signed, or said no", "A reason is recorded either way"],
        ],
      },
      {
        type: "list",
        h: "Qualify early, so the pipeline stays small and true",
        items: [
          { b: "Need —", t: "what problem is the buyer trying to solve, in their words?" },
          { b: "Budget —", t: "is there a range, and has anyone approved spending it?" },
          { b: "Decision —", t: "who signs, and who else has a say?" },
          { b: "Timing —", t: "what happens if they do nothing this quarter?" },
          { b: "Fit —", t: "can we actually do what they need, or will we have to say no later?" },
        ],
      },
      {
        type: "list",
        h: "Data rules that keep it honest",
        items: [
          { b: "One owner per deal —", t: "a deal with two owners has none." },
          { b: "A next action and a date —", t: "always. A deal with no next step is not in the pipeline; it is in a drawer." },
          { b: "No deal sits in a stage past its age limit —", t: "review anything older than twice the usual time in that stage." },
          { b: "Close dates are earned —", t: "a date moves only with a reason, and moving it three times is a loss waiting to be recorded." },
          { b: "Lost reasons come from a short list —", t: "price, timing, competitor, no decision, no fit. Free text cannot be counted." },
        ],
      },
      {
        type: "p",
        h: "A weekly review that takes thirty minutes",
        text: "Once a week, each rep walks the deals with a close date in the next thirty days and the deals that have not moved in two weeks. For each: what is the next step, who is doing it, and by when. Anything without an answer is either given one or moved out. Do this every week and the pipeline report is a by-product, not a project.",
      },
      {
        type: "list",
        h: "Forecast from history, not from feeling",
        items: [
          { b: "Conversion by stage —", t: "of the deals that reached Proposal sent in the last year, what share were won?" },
          { b: "Average cycle —", t: "how long from Qualified to Won, by deal size." },
          { b: "Weighted value —", t: "each open deal's value times the historical rate for its stage, never a rep's mood." },
          { b: "Coverage —", t: "the open pipeline as a multiple of the target; three times is a usual starting point, but your own history decides." },
        ],
      },
      {
        type: "list",
        h: "Common ways a pipeline lies",
        items: [
          { b: "Stages are internal steps —", t: "\"sent email\" is not a buyer action." },
          { b: "Old deals never die —", t: "last year's maybe is still counted in this year's forecast." },
          { b: "One big deal carries the total —", t: "remove it and see what is left." },
          { b: "Quotes live in documents —", t: "so the value in the pipeline and the value quoted drift apart." },
        ],
      },
      {
        type: "note",
        text: "In Svasamm One your stages, lost reasons and follow-up rules are set up for your sales team during onboarding, from your own deals. Bring your last twenty won and lost deals and we will show you where they would have stalled.",
      },
    ],
    faqs: [
      { q: "How many pipeline stages should we have?", a: "Five to seven. Each must be something the buyer has done, with a clear exit, so any rep would put the same deal in the same stage." },
      { q: "What should we do with deals that have gone quiet?", a: "Give each a next step and date, or move it out. A deal with no next action is not a pipeline entry; record the lost reason and revisit it later as a new lead if it wakes." },
      { q: "How do we forecast without guessing?", a: "Use your own conversion rate for each stage over the last year, applied to each open deal's value. It is less exciting than a rep's estimate and far closer." },
    ],
  },
};
