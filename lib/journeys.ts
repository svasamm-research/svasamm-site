// Capability journeys (15 Oct 2026): one page per product that walks a real piece of work
// stage by stage, the screen changing as the reader scrolls. Pilot: Millingo, paddy in →
// rice out. A product's capability cards link to the stage that shows them.
// The fortifying stage was taken off on 13 Nov 2026 (Mithun): fortification is paused under
// PMGKAY since 27 Feb 2026 (PIB 2233779) and is no longer something the site sells.
//
// ⛔ THE WORDS ARE THE BUILD, THE PICTURES ARE THE DESIGN. Every `rule` is a refusal the code
// makes today (svasamm-platform origin/main, checked 15 Oct 2026 — modules/millingo gate,
// mill, book). The screens are rendered from the latest Millingo canvas, which is ahead of
// the build in places (the canvas weighs twice; the build takes both weights at once), so
// the page says so under the screens. Never describe a canvas-only behaviour in `does`/`rule`.

// `more` (20 Nov 2026) is a second paragraph: why the stage matters and what it keeps. Same rule as
// `does`: only what the code does today (svasamm-platform develop, modules/millingo gate and mill).
export type Stage = { id: string; step: string; title: string; who: string; does: string; more?: string; rule: string; screen: string; alt: string };
export type Journey = {
  slug: string; product: string; eyebrow: string; title: string; intro: string; stages: Stage[]; note: string;
  changed?: string; after?: { h: string; items: { b: string; t: string }[] };
  seo: { metaTitle: string; metaDescription: string; canonical: string };
};

const millingo: Journey = {
  slug: "millingo-paddy-in-rice-out",
  product: "millingo",
  eyebrow: "Millingo · Paddy in, rice out",
  title: "Paddy In, Rice Out: How One Load Moves Through Millingo",
  intro:
    "Follow a lorry of the government's paddy from the mill gate to the depot. At each stage, what the person there does, and the one thing Millingo will not let them get wrong.",
  stages: [
    { id: "gate", step: "1", title: "A lorry at the gate", who: "The gate clerk",
      does: "Raises a gate pass for the lorry — the party, the driver, the paddy — or turns it away.",
      more: "The pass is where the day's paper trail starts. The lorry's number plate, the party and the driver are written once, and the weighment, the paddy entry and the bench sample all follow from it. A load of the government's paddy also carries its challan number and quantity, and comes only against a release order recorded under Government.",
      rule: "A pass with no driver is refused, and so is a party that does not supply paddy, or a lorry that is already inside.",
      screen: "/journeys/millingo/gate.webp", alt: "Lorries at the gate: waiting, weighing, unloading and leaving" },
    { id: "weigh", step: "2", title: "On the weighbridge", who: "The kanta operator",
      does: "Records the loaded and the empty weight; the difference is the milling weight everything after it is paid on.",
      more: "The operator types the weights from the kanta's display. A lorry is sent to its warehouse after it is weighed loaded and before it is weighed empty, so the godown it unloads at is on the slip. The milling weight is the one number the bill, the stock and the recovery are all worked from.",
      rule: "An empty weight equal to or above the loaded weight is refused.",
      screen: "/journeys/millingo/weigh.webp", alt: "The weighbridge register: each slip, the weights and the milling weight" },
    { id: "entry", step: "3", title: "Paddy entry, against the order", who: "The purchase clerk",
      does: "Ties the weighment to a purchase order, so the paddy belongs to someone's account.",
      more: "An order is approved while pending, closed short once approved, and cancelled only while nothing has arrived. Once paddy has come in against it, what arrived stays bought. A load turned away at the bench is never purchased, and every load on one bill has to be the same vendor's.",
      rule: "No entry without an approved order; a weighment can be claimed only once; delivering more than the order needs a reason.",
      screen: "/journeys/millingo/entry.webp", alt: "Paddy entry: each load, its order, milling weight, butta and status" },
    { id: "qc", step: "4", title: "Judged at the bench", who: "The lab",
      does: "Reads recovery, moisture and dust. A shortfall takes value off the bill — 1% of the load per point — without touching the weight.",
      more: "Each variety carries its expected recovery and moisture, set once in the masters, and the bench judges every load against them. The government's paddy is checked on weight and bags only: moisture is never deducted from it, and it is never billed, because it is not the mill's to buy.",
      rule: "Every parameter must be read before a verdict, and the paddy is not in stock until the bench passes it. The government's paddy is never charged butta.",
      screen: "/journeys/millingo/qc.webp", alt: "The sampling queue: lorries on the bench and the week's readings" },
    { id: "batch", step: "5", title: "Into a batch", who: "The floor manager",
      does: "Schedules a batch from a shed, through soaking, drying and the pre-milling checks.",
      more: "A batch is milled for the market or for levy, never both, and it names the warehouse its paddy comes out of. Each stage is dated, and no stage can be dated before the one it follows or in the future. Drying has to take water out: paddy that comes out of a dryer heavier is refused.",
      rule: "A batch the shed cannot fill is refused, and the government's paddy can never go into a market batch.",
      screen: "/journeys/millingo/batch.webp", alt: "The batches board: seven stages, one batch each" },
    { id: "milling", step: "6", title: "Milled, and every kilo counted", who: "The floor",
      does: "Records the rice and every by-product — bran, husk, broken — and the recovery against what was promised.",
      more: "Each batch is priced as it is milled. The paddy's cost, less what the bran and husk will sell for, is what the rice absorbs, and wastage carries nothing. If a by-product has no rate, the rice is left unpriced so somebody looks, rather than priced too high.",
      rule: "More cannot come out than went in. By-products become stock, valued at what they will sell for.",
      screen: "/journeys/millingo/milling.webp", alt: "Milling: what is on each line, and every batch milled this season" },
    { id: "depot", step: "7", title: "Delivered to the depot", who: "The CMR desk",
      does: "Offers the lot, sends the lorry, and records what the depot accepted — or sent back.",
      more: "An FCI lot is 290 quintals, 580 bags of 50 kg, accepted or rejected whole. A lot is all the government's rice or all the mill's, never both. The acknowledgement number is copied off the portal and the depot's acceptance note number is recorded, and no bill is raised before the depot has accepted the rice.",
      rule: "Nothing beyond what is owed can be offered, and rice the depot sends back needs a reason.",
      screen: "/journeys/millingo/depot.webp", alt: "Levy dispatch: lorries loading, at the depot, and ruled on" },
    { id: "report", step: "8", title: "Report 7.1, and what is still owed", who: "The owner",
      does: "Sets the mill's own figures beside the government portal's, column by column.",
      more: "A shortfall is a quantity of paddy, and it needs a reason. It is valued under your state's order or the Centre's SOP, at the rate set for your state during onboarding, so the debt is a figure on the report, not a guess at the end of the season.",
      rule: "Paddy still owed is set against paddy actually counted, and a shortfall becomes a debt with its cost.",
      screen: "/journeys/millingo/report.webp", alt: "Report 7.1: the portal's figures and the mill's, side by side" },
  ],
  changed: "2026-11-20",
  after: {
    h: "What the owner sees at the end of the season",
    items: [
      { b: "Paddy in, rice out, per batch —", t: "every batch's recovery against the variety's expected figure, with the by-products and the wastage that close the balance." },
      { b: "The government's account —", t: "paddy received against each release order, rice offered and accepted lot by lot, and the shortfall as a debt with its cost." },
      { b: "The mill's own trade —", t: "paddy bought, rice and by-products sold, and the gunny bags in the mill's pool kept apart from the corporation's." },
      { b: "The books —", t: "every bill, dispatch and invoice posted as it happens, and GSTR-1 and GSTR-3B prepared from them." },
    ],
  },
  note: "Screens from Millingo's current design. The rules above are what Millingo enforces today.",
  seo: {
    metaTitle: "Paddy In, Rice Out: a Load Through Millingo, Gate to Depot | Svasamm",
    metaDescription:
      "Follow a lorry of paddy through a rice mill in Millingo: gate pass, weighbridge, entry, QC and butta, batch, milling, CMR delivery and report 7.1.",
    canonical: "https://svasamm.com/pages/millingo-paddy-in-rice-out.html",
  },
};

export const JOURNEY_BY_SLUG: Record<string, Journey> = { [millingo.slug]: millingo };
