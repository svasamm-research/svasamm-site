# Prompt for Claude Code

Copy everything between the two rules below and paste it as your first message to Claude Code.

---

You are building the Svasamm marketing website (Next.js + Tailwind) on a finished design system.

**Read `README.md` in this handoff folder in full before writing any code.** It is the authoritative spec: colour and type tokens, component classes, layout rules, the page inventory, the SEO requirements, and the WCAG 2.1 AA audit with measured contrast ratios.

**The design is complete — do not redesign.** All 50 pages are already designed and verified in `pages/`. Your job is to port them faithfully into the production framework.

**Source of truth files:**
- `svasamm.css` — the design system. Tokens and component classes. Never hard-code a hex, font, radius, shadow or spacing value it already carries. Port it as-is, or map its tokens 1:1 into your Tailwind theme.
- `icons.js` — the Lucide loader used by the design files. In Next.js use `lucide-react` instead, but keep the same icon names and **stroke-width 1.75**.
- `assets/logo-svasamm.svg` — the brand mark.
- `pages/*.dc.html` — all 50 designed pages. These use a small design-component runtime (`<x-dc>` template plus a `Component` logic class). **Read them as design reference** — markup structure, classes, tokens, copy and data all matter. Do not attempt to run that runtime in production.

**Architecture — this matters most:**
Two components drive about 40 of the 50 pages.
- `ProductPage` renders all 6 product pages, keyed by a `pid` prop.
- `Article` renders all ~34 guide, state, industry and comparison pages, keyed by a `slug` prop.

Build both as **data-driven templates** with their content in a single map (exactly as the design files do). Do not hand-build 40 separate pages. Adding a new market must be a data entry, not a new component. The remaining bespoke pages are Home, Solutions, Contact, Privacy and Terms, plus the shared Header and Footer.

**Hard requirements:**
1. **SEO is byte-identical.** Every page's `<title>`, `<meta name="description">`, `<link rel="canonical">`, Open Graph tags and JSON-LD blocks must carry over exactly as written in the design files. Also port `sitemap.xml` and `robots.txt`. Do not "improve" any of it.
2. **Cards are real surfaces** — white fill, `--sv-line` border, `--sv-sh-1` shadow, 12px radius. Never transparent outline-only cards; that reads as a wireframe and is the specific look this design replaced.
3. **Accessibility is already audited — preserve it.** Keep every skip link and `id="main"`, the `aria-expanded`/`aria-controls` on the mega-menu and mobile menu, the FAQ accordion ARIA pattern, and the Contact form's `id`/`for` pairing plus `role="alert"` errors. Do not lighten `--sv-ink-3`, `--sv-line-strong`, `--sv-teal` or `--sv-amber` — each sits at its darkest WCAG-passing value. Keep the `:focus-visible` ring and the global `prefers-reduced-motion` block.
4. **Motion stays minimal** — hover lift on interactive cards, colour transitions on links and buttons. No parallax, no Ken Burns, no pulsing dots, no glow backgrounds.
5. **Images**: one per page, no reuse across live pages, downscaled to ~1600px, served same-origin via `next/image`. The page-to-image maps are in `ProductPage` (`heroMap`) and `Article` (`imgMap`).

**When you're done, verify:**
- Every page renders purely from the design-system tokens; no stray hexes and no second theme file.
- No console errors, and every icon renders.
- Titles, metas, canonicals and JSON-LD match the design files exactly.
- Every page has a working skip link and `id="main"`.
- Lighthouse accessibility ≥95 and axe reports no critical violations.
- `ProductPage` and `Article` are genuinely data-driven.
- Spot-check a guide page, a state page, a comparison page, Solutions and Contact against the home page for visual consistency.

Work through it methodically and report what you built, plus anything you could not complete.

---

## Where to put the files

| From this folder | Goes to |
|---|---|
| `svasamm.css` | project root (or map its tokens into `tailwind.config`) |
| `assets/logo-svasamm.svg` | `public/` |
| `pages/` | keep as reference alongside the repo — not shipped |
| `README.md` | keep alongside; the prompt tells Claude Code to read it |
| `icons.js` | only if you are not using `lucide-react` |
