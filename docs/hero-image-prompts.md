# Hero image prompts (Banana / Nano)

Hero banners are macro photographs in a **bright, tactile, watercolour-wireframe** style
(matching the existing `public/hero/digital-healthcare.webp` — hand-painted website sketches
on white paper). Generate with Banana, then wire with `scripts/optimize-hero-images.py`
(see "How to add" below).

---

## Svasamm Digital for Schools — `digital-schools`

**Prompt:**

> A close-up macro photograph of hand-drawn **website wireframe sketches for a school's
> website**, painted in loose **watercolour washes over black ink linework on textured white
> paper**. Three stacked layout frames show recognisable school-site elements — a header
> labelled "Admissions", a hero image placeholder of a school building, rows for classes, and
> an enquiry button — drawn as simple boxes, squiggles and lines. Palette: soft **violet/purple
> and teal** washes with a warm amber accent. **Shallow depth of field**, nearest sketch sharp
> and the others gently blurred, soft natural daylight from the left, subtle paper grain.
> Bright, clean, editorial product-design aesthetic. **No real text, no logos, no faces.**
> 3:2 landscape, ~1600px wide.

**Save the generated file as:** `digital-schools.jpg`
(the SOURCES table in `scripts/optimize-hero-images.py` already maps this filename → the
`digital-schools` page slug.)

---

## How to add a hero image (any page)

1. Generate the image in Banana using the prompt for that page.
2. Save it with the **exact source filename** the SOURCES table expects (e.g.
   `digital-schools.jpg`) into a folder — e.g. `~/Downloads/svasamm-hero/`.
3. Run the optimizer against that folder:
   ```bash
   cd ~/Projects/web-dev/svasamm-site
   python3 scripts/optimize-hero-images.py ~/Downloads/svasamm-hero
   ```
   It resizes to ~1600px WebP → **`public/hero/<slug>.webp`**, and regenerates
   `lib/heroes.ts` from **everything already in `public/hero/`** (so adding one image never
   drops the others).
4. `yarn build` — the page's hero now renders (pages without a hero fall back to the gradient).

> Needs `pip install pillow`. New pages: add a `"source-filename.jpg": "page-slug"` line to the
> SOURCES table first.
