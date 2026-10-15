// Capability journeys (15 Oct 2026): one page per product that walks a real piece of work
// stage by stage, the screen changing as the reader scrolls. Pilot: Millingo, paddy in →
// rice out. A product's capability cards link to the stage that shows them.
//
// ⛔ THE WORDS ARE THE BUILD, THE PICTURES ARE THE DESIGN. Every `rule` is a refusal the code
// makes today (svasamm-platform origin/main, checked 15 Oct 2026 — modules/millingo gate,
// mill, book). The screens are rendered from the latest Millingo canvas, which is ahead of
// the build in places (the canvas weighs twice; the build takes both weights at once), so
// the page says so under the screens. Never describe a canvas-only behaviour in `does`/`rule`.

export type Stage = { id: string; step: string; title: string; who: string; does: string; rule: string; screen: string; alt: string };
export type Journey = {
  slug: string; product: string; eyebrow: string; title: string; intro: string; stages: Stage[]; note: string;
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
      rule: "A pass with no driver is refused, and so is a party that does not supply paddy, or a lorry that is already inside.",
      screen: "/journeys/millingo/gate.webp", alt: "Trucks at the gate: lorries waiting, weighing, unloading and leaving" },
    { id: "weigh", step: "2", title: "On the weighbridge", who: "The kanta operator",
      does: "Records the loaded and the empty weight; the difference is the milling weight everything after it is paid on.",
      rule: "An empty weight equal to or above the loaded weight is refused.",
      screen: "/journeys/millingo/weigh.webp", alt: "The weighbridge register: each slip, the weights and the milling weight" },
    { id: "entry", step: "3", title: "Paddy entry, against the order", who: "The purchase clerk",
      does: "Ties the weighment to a purchase order, so the paddy belongs to someone's account.",
      rule: "No entry without an approved order; a weighment can be claimed only once; delivering more than the order needs a reason.",
      screen: "/journeys/millingo/entry.webp", alt: "Paddy entry: each load, its order, milling weight, butta and status" },
    { id: "qc", step: "4", title: "Judged at the bench", who: "The lab",
      does: "Reads recovery, moisture and dust. A shortfall takes value off the bill — 1% of the load per point — without touching the weight.",
      rule: "Every parameter must be read before a verdict, and the paddy is not in stock until the bench passes it. The government's paddy is never charged butta.",
      screen: "/journeys/millingo/qc.webp", alt: "The sampling queue: lorries on the bench and the week's readings" },
    { id: "batch", step: "5", title: "Into a batch", who: "The floor manager",
      does: "Schedules a batch from a shed, through soaking, drying and the pre-milling checks.",
      rule: "A batch the shed cannot fill is refused, and the government's paddy can never go into a market batch.",
      screen: "/journeys/millingo/batch.webp", alt: "The batches board: seven stages, one batch each" },
    { id: "milling", step: "6", title: "Milled, and every kilo counted", who: "The floor",
      does: "Records the rice and every by-product — bran, husk, broken — and the recovery against what was promised.",
      rule: "More cannot come out than went in. By-products become stock, valued at what they will sell for.",
      screen: "/journeys/millingo/milling.webp", alt: "Milling: what is on each line, and every batch milled this season" },
    { id: "fortify", step: "7", title: "Fortified for the government", who: "The store",
      does: "Blends the government's rice with fortified rice kernels before it can be offered.",
      rule: "A blend outside the kernel ratio is refused, and only fortified rice can be offered to the depot.",
      screen: "/journeys/millingo/fortify.webp", alt: "Fortifying: rice waiting for kernel, kernel in the store, and each blend" },
    { id: "depot", step: "8", title: "Delivered to the depot", who: "The CMR desk",
      does: "Offers the lot, sends the lorry, and records what the depot accepted — or sent back.",
      rule: "Nothing beyond what is owed can be offered, and rice the depot sends back needs a reason.",
      screen: "/journeys/millingo/depot.webp", alt: "Levy dispatch: lorries loading, at the depot, and ruled on" },
    { id: "report", step: "9", title: "Report 7.1, and what is still owed", who: "The owner",
      does: "Sets the mill's own figures beside the government portal's, column by column.",
      rule: "Paddy still owed is set against paddy actually counted, and a shortfall becomes a debt with its cost.",
      screen: "/journeys/millingo/report.webp", alt: "Report 7.1: the portal's figures and the mill's, side by side" },
  ],
  note: "Screens from Millingo's current design. The rules above are what Millingo enforces today.",
  seo: {
    metaTitle: "Paddy In, Rice Out: a Load Through Millingo, Gate to Depot | Svasamm",
    metaDescription:
      "Follow a lorry of paddy through a rice mill in Millingo: gate pass, weighbridge, entry, QC bench and butta, batch, milling, fortifying, CMR delivery and report 7.1.",
    canonical: "https://svasamm.com/pages/millingo-paddy-in-rice-out.html",
  },
};

export const JOURNEY_BY_SLUG: Record<string, Journey> = { [millingo.slug]: millingo };
