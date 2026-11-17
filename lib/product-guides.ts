// Long-form guides on the product pages (17 Nov 2026, Mithun: thin pages get longer). Rendered under
// the resources by components/ProductPage, in the guides' prose. Claims as on each product's own
// features and FAQs (checked against svasamm-platform develop): People = lib/people-articles.ts's
// list; Millingo = the Millingo FAQs' code notes; ERP = books, materials, hr. Production (bills of
// material, work orders, batch costing) is "set up during onboarding", never "built in".
import type { Block } from "./types";

export const PRODUCT_GUIDES: Record<string, { title: string; changed: string; sections: Block[] }> = {
  hrms: {
    title: "Choosing HRMS software",
    changed: "2026-11-17",
    sections: [
      {
        type: "p",
        h: "What HRMS software does for an Indian firm",
        text: "HRMS software keeps everything about the people who work for you in one record: who they are, what they are paid, when they came to work, what leave they took, and what was deducted and deposited for them. For an Indian employer the hard part is not the staff list. It is turning a month of attendance into a correct payroll with **PF, ESI, professional tax and TDS**, on dates that do not move, and producing the files and forms that prove it.",
      },
      {
        type: "list",
        h: "From the punch to the payslip",
        items: [
          { b: "Attendance —", t: "punches from your biometric machine, a phone where you allow it, or a supervisor's entry, each judged against the shift. A night shift belongs to the day it started." },
          { b: "Corrections —", t: "a supervisor regularises a wrong day with a reason, and a machine that catches up later never undoes it." },
          { b: "Leave —", t: "leave types and balances, a supervisor decides each request, loss of pay where there is no balance, and encashment as a payslip line." },
          { b: "Payroll —", t: "the month's days and overtime paid, with PF and the ECR file, ESI, professional tax per state and TDS under both regimes." },
          { b: "Year end —", t: "Form 16 for every employee and Form 24Q every quarter; statutory bonus and gratuity worked out in payroll." },
        ],
      },
      {
        type: "table",
        h: "Spreadsheet payroll or Svasamm People",
        cols: ["", "Machine report + spreadsheet", "Svasamm People"],
        rows: [
          ["Attendance", "Exported and retyped", "Punches arrive and are judged against the shift"],
          ["Overtime", "Counted at month end, if at all", "Counted from punches, paid at your firm's multiple"],
          ["PF and ESI", "A second sheet for the returns", "In the run, with the ECR file"],
          ["Professional tax", "One state's slabs for everyone", "Each state's slabs and due dates"],
          ["Leaving", "Settlement worked out by hand", "Full and final settlement, paid once"],
          ["Payslips", "Printed or sent on WhatsApp", "On each person's phone"],
        ],
      },
      {
        type: "p",
        h: "For factories, offices and firms with staff in more than one state",
        text: "A factory needs machine punches, shifts and contract labour; an office needs phone punches and leave; a firm with staff in two states needs each state's professional tax. Svasamm People does all three in one register. Contract workers have a record, shifts and attendance without needing a login, and the person who keeps the staff register does not see what everybody earns, because the register and pay are separate permissions.",
      },
      {
        type: "list",
        h: "What to ask in any HRMS demo",
        items: [
          "Pay one night-shift worker with overtime, one contract worker and one person who left mid-month, from last month's real punches.",
          "Show the PF ECR file and the ESI figures for all three.",
          "Put one employee in another state. Does their professional tax change?",
          "Correct a day after the machine has synced. Does the next sync undo it?",
          "Show the payslip on the employee's phone.",
        ],
      },
      {
        type: "p",
        h: "How a firm starts on Svasamm People",
        text: "We import your staff register and salary structures from a spreadsheet, check every bank account's IFSC, set your shifts, leave policy and each state's professional tax, and connect your attendance machine. Then we run one month's payroll beside your current sheet. When the net pay, PF, ESI, professional tax and TDS agree line by line, the next month runs on Svasamm People alone, and staff get their payslips on the app.",
      },
    ],
  },

  erp: {
    title: "Choosing an ERP",
    changed: "2026-11-17",
    sections: [
      {
        type: "p",
        h: "What an ERP is, for an Indian business",
        text: "An ERP is one system of record for the money, the stock and the people: the books and GST, purchase and stores, sales and billing, and payroll, all posting into the same ledger. A business usually needs one when Tally, a billing package and three spreadsheets no longer agree, and the owner finds out about a stock-out or an unpaid bill weeks late.",
      },
      {
        type: "list",
        h: "What Svasamm One runs from the first month",
        items: [
          { b: "The books —", t: "ledger, receivables and payables, cost centres, budgets, and a month locked once its return is filed. Every account is known by its name, so nobody hunts for ledger 4031." },
          { b: "GST —", t: "GST on every invoice line, with GSTR-1, GSTR-3B and the HSN summary prepared from the same vouchers." },
          { b: "Purchase and stores —", t: "indent, purchase order and receipt, issues, transfers between godowns, stock counts and reorder levels; each supplier rated from what they delivered." },
          { b: "Sales —", t: "orders to invoice, with GST on every line." },
          { b: "People —", t: "attendance, leave and payroll with PF, ESI, professional tax and TDS." },
        ],
      },
      {
        type: "p",
        h: "Your industry's own steps",
        text: "A generic ERP stops where your industry starts. Svasamm builds each industry's steps on the same platform: rice mills run on Millingo, with paddy procurement, milling yield, gunny bags and the government CMR cycle. For other plants, bills of material, production orders and batch costing are set up for your plant during onboarding, from how your floor actually runs.",
      },
      {
        type: "table",
        h: "Tally and spreadsheets, or one ERP",
        cols: ["", "Tally + spreadsheets", "Svasamm One"],
        rows: [
          ["Stock", "A register outside the books", "Posts to the books as it moves"],
          ["Purchase", "Orders on phone and WhatsApp", "Indent, order and receipt, each recorded once"],
          ["GST returns", "Rebuilt from sales registers", "Prepared from the vouchers"],
          ["Payroll", "A separate package or sheet", "In the same system, posting to the books"],
          ["Owner's view", "Ask four people", "One login, every place"],
        ],
      },
      {
        type: "p",
        h: "How a move from Tally goes",
        text: "We start from a clean cut-over date, bring in the trial balance, open bills and stock by godown, run one month in both systems until the trial balance and GST summary agree, and only then switch Tally to reference. The ERP implementation guide sets out the 90-day plan.",
      },
      {
        type: "p",
        h: "Who it suits",
        text: "Svasamm One suits businesses that have outgrown Tally and spreadsheets but do not want a year-long ERP project: food and grain mills first, manufacturers and traders with one to a few plants or godowns, and service firms that want their books, staff and billing together. A business that only needs invoicing may be well served by a billing package; a group of many companies with its own IT team may want a larger, customised system.",
      },
      {
        type: "list",
        h: "What to ask in any ERP demo",
        items: [
          "Raise an indent, order it, receive it with GST, and issue it to the floor. Does each step read the one before?",
          "Show the stock in two godowns and transfer between them.",
          "Post a month and lock it. Can anyone change a locked month?",
          "Show GSTR-1 and GSTR-3B from the vouchers, without an export.",
          "Ask what moving your opening balances costs, and who checks them.",
        ],
      },
    ],
  },

  millingo: {
    title: "Choosing rice mill software",
    changed: "2026-11-17",
    sections: [
      {
        type: "p",
        h: "Why a rice mill needs its own software",
        text: "A rice mill is not a trading business with a machine in it. Paddy arrives by weight and leaves as rice, bran, husk and brokens in proportions nobody knows until the batch is milled. Half the paddy in the godown may belong to the government. The gunny bags have two owners. A generic accounting package sees only the purchase bill and the sale invoice, and everything that matters happens between them.",
      },
      {
        type: "list",
        h: "What Millingo records at each step",
        items: [
          { b: "The gate —", t: "a gate pass for every lorry, and the weight typed from the kanta's display; each weighment can go on one entry only, so the same slip is never claimed twice." },
          { b: "The QC bench —", t: "recovery, moisture and dust read for every load; a shortfall takes value off the bill, without touching the weight, and stock posts only after the load passes." },
          { b: "Milling —", t: "each batch's recovery against what was promised, with bran, husk and brokens as stock valued at what they will sell for." },
          { b: "Gunny bags —", t: "the mill's own and the corporation's, in two pools that never mix." },
          { b: "Government CMR —", t: "release orders, camp picks, rice offered and delivered to the depot, the shortfall as a debt, and report 7.1 against the portal." },
          { b: "Sales and the books —", t: "dispatch only against rice the godown holds, tax invoices, and GSTR-1 and GSTR-3B from the books." },
        ],
      },
      {
        type: "p",
        h: "Rules that change by state and season",
        text: "CMR rules are not the same in every state, and they change between seasons: fortified rice, the broken-rice limit and the KMS dates among them. Millingo carries West Bengal's and Odisha's rules, and the rules for your state and the current season are set during onboarding rather than written into the software as fixed numbers.",
      },
      {
        type: "list",
        h: "What to ask any rice mill software vendor",
        items: [
          "Enter one lorry's weighment twice. Does the second one go through?",
          "Grade a load below standard. Does the deduction change the bill or the weight?",
          "Mill a batch. Where are the bran and husk, and at what value?",
          "Show the corporation's gunny bags apart from the mill's own.",
          "Show the shortfall on this season's CMR as a figure, not a spreadsheet.",
        ],
      },
      {
        type: "p",
        h: "Which plan fits your mill",
        text: "A mill that only buys paddy and sells rice in the open market starts on Starter: purchase, stock, milling batches, sales and the books. Professional adds the QC bench with butta deductions, by-products, gunny bags and GST returns. Enterprise adds the government's side: release orders, camp picks, depot deliveries, the shortfall and report 7.1. Every plan comes with the move from your current registers or Tally, and the nine ready roles, so the gate, the QC bench and the office each see only their own part.",
      },
    ],
  },
};
