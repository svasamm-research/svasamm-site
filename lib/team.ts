// The team and how we work (15 Oct 2026) — read by /team and /jobs. Names, roles and
// "fully in the office" are Mithun's. ⚠️ Every `words` line and the WORK text are DRAFTS
// written from the role alone (no invented achievements or years) for Mithun to edit.
// A person without a photo shows initials; add `photo` (a square image in public/team/).

export type Person = { name: string; role: string; words: string; photo?: string };

export const TEAM: Person[] = [
  { name: "Mithun Kumar Singh", role: "Co-Founder", photo: "/team/mithun-kumar-singh.webp",
    words: "Started Svasamm to build software that fits the way Indian businesses already work — and still reads every screen before it ships." },
  { name: "Amrita Kushwaha", role: "Co-Founder",
    words: "Co-founded Svasamm and keeps it honest about what it promises — to clients and to the people who work here." },
  { name: "Manish Sharma", role: "Sales Manager", photo: "/team/manish-sharma.webp",
    words: "The first voice most of our clients hear. Listens to how a business really runs before he says a word about software." },
  { name: "Shreyosi Mondal", role: "QA Engineer",
    words: "Finds the mistake before a client does. If a screen says something it cannot do, it does not ship." },
  { name: "Aman Singh", role: "Developer",
    words: "Builds the screens and the rules behind them, and tests what he builds the way a clerk would use it." },
  { name: "Tanya Malhotra", role: "HR Consultant",
    words: "Looks after hiring and the people side of Svasamm — so the team can do its best work." },
];

export const WORK = {
  intro: "We are a small team in Hooghly, West Bengal, building software for rice mills, CA firms, hospitals and payroll — and we work together, in the office, every day.",
  points: [
    { title: "In the office, together", body: "We work from our office in Hooghly. Problems get solved at the next desk, not in a long thread." },
    { title: "Anyone can suggest an idea", body: "The person closest to the work usually sees the problem first. Any one of us can put an idea forward — to any one of us — and it gets a real answer." },
    { title: "Own your work, end to end", body: "You take a piece of work all the way: build it, test it, see it used. Nobody hands you half a task." },
    { title: "Say it plainly", body: "We write and speak in plain words — to clients and to each other. If something is not done, we say so." },
  ],
};
