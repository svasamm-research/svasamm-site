// svasamm.com's own behaviour (15 Oct 2026) — the things built in this round that the
// shared site.spec.ts (same file in all three site repos) does not know about. Runs against
// the BUILT site like the rest of the suite.
import { test, expect, type Page } from "@playwright/test";
import { readFileSync } from "node:fs";
import { TEAM } from "../../lib/team";
import { PRODUCT_MOMENTS } from "../../lib/product-moments";
import { NOT_INDEXED } from "../../lib/indexing";

const urls = [...readFileSync("out/sitemap.xml", "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);

// Records what the page would send to Plausible.
async function recordEvents(page: Page) {
  const events: { name: string; props: Record<string, string> }[] = [];
  await page.exposeFunction("__rec", (name: string, props: Record<string, string>) => events.push({ name, props }));
  await page.addInitScript(() => {
    (window as unknown as { plausible: unknown }).plausible = (n: string, o?: { props?: Record<string, string> }) =>
      (window as unknown as { __rec: (n: string, p: unknown) => void }).__rec(n, o?.props ?? {});
  });
  return events;
}

test.describe("every page", () => {
  // 15 Oct: a bold marker put in an intro (which is not rendered bold) showed as "**" on the page.
  test("no raw ** markers in any page's text", async ({ page }) => {
    const bad: string[] = [];
    for (const u of urls) {
      await page.goto(u);
      if ((await page.locator("body").innerText()).includes("**")) bad.push(u);
    }
    expect(bad).toEqual([]);
  });

  // Claims that were on the site and are not true of the code (checked 12 and 15 Oct 2026), and
  // the byline title: Mithun is Co-Founder, as on /team (22 Oct 2026).
  test("no claim the code does not support", async ({ page }) => {
    const banned = [/self-hostable/i, /ABDM-ready/i, /geofenc/i, /camp-pick app/i, /\bSauda\b/, /multi-unit consolidation/i, /levy memos?/i, /founded 2022|since 2019/i, /(?<!Co-)\bFounder\b/];
    const bad: string[] = [];
    for (const u of urls) {
      await page.goto(u);
      const text = await page.locator("main").innerText();
      for (const re of banned) if (re.test(text)) bad.push(`${u} ${re}`);
    }
    expect(bad).toEqual([]);
  });
});

test("article tables have column titles and a title on every row", async ({ page }) => {
  await page.goto("/pages/customized-software-for-your-industry.html");
  const table = page.locator("main table").first();
  await expect(table.locator("thead th")).toHaveCount(3);
  const rows = await table.locator("tbody tr").count();
  await expect(table.locator('tbody th[scope="row"]')).toHaveCount(rows);
});

// Healthcare advertising is regulated; the rules article must say where its facts come from, and
// no healthcare page may go back to telling a facility that asking patients for reviews is simply
// fine (the NMC's 6 Oct 2026 guidelines, Explanation V to clause 3.2, make that a question for the
// facility's legal advisor). Wording checked on 3 Nov 2026 against the notice itself.
test("healthcare rules: the NMC notice is cited and review-asking is not called fine", async ({ page }) => {
  await page.goto("/pages/healthcare-advertising-rules-india.html");
  const rules = (await page.locator("main").innerText()).replace(/\s+/g, " ");
  expect(rules).toContain("R-13014/01/2024-Ethics");
  expect(rules).toContain("6 October 2026");
  expect(rules).toContain("engage any third party for marketing medical services");
  for (const slug of ["google-business-profile-for-clinics", "digital-marketing-for-nursing-homes", "clinic-seo-west-bengal"]) {
    await page.goto(`/pages/${slug}.html`);
    const text = (await page.locator("main").innerText()).replace(/\s+/g, " ");
    expect(text, slug).not.toMatch(/Yes, genuinely|asking happy patients|reviews \(asking for them|You can invite genuine reviews/i);
  }
});

test("bold key facts render as bold, not as asterisks", async ({ page }) => {
  await page.goto("/pages/punjab-release-order-paddy-allotment.html");
  await expect(page.locator("main strong", { hasText: "only 99.50 of 105.64 LMT" })).toHaveCount(1);
});

test("resources lists the journeys, which the article grid cannot", async ({ page }) => {
  await page.goto("/resources");
  await expect(page.locator('main a[href="/pages/millingo-paddy-in-rice-out.html"]')).toBeVisible();
  await expect(page.locator('main a[href="https://t4suite.com/how-it-works"]')).toBeVisible();
});

test("resources: chips filter, the chosen chip is marked, the sort shares their line", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/resources");
  const all = await page.locator('a[data-evt="Resource Click"]').count();
  expect(all).toBeGreaterThan(50);
  await page.locator(".sv-res-chip", { hasText: "Rice mills & CMR" }).click();
  await expect(page.locator(".sv-res-chip[data-on]")).toHaveText(/Rice mills & CMR/);
  const rice = await page.locator('a[data-evt="Resource Click"]').count();
  expect(rice).toBeGreaterThan(0);
  expect(rice).toBeLessThan(all);
  const top = (sel: string) => page.locator(sel).first().evaluate((el) => Math.round(el.getBoundingClientRect().top));
  expect(Math.abs((await top("select")) - (await top(".sv-res-chip")))).toBeLessThan(10);
});

test("a guide has a contents list that links to its sections, and read-next cards", async ({ page }) => {
  await page.goto("/pages/up-paddy-procurement-cmr-2026-27.html");
  const links = page.locator('nav[aria-label="In this post"] a');
  expect(await links.count()).toBeGreaterThanOrEqual(3);
  const href = await links.first().getAttribute("href");
  await expect(page.locator(href!)).toHaveCount(1);
  expect(await page.locator('a[data-evt="Related Click"]').count()).toBeGreaterThan(0);
});

test("tracking: demo click, reading depth and a 404 are counted", async ({ page }) => {
  const events = await recordEvents(page);
  await page.goto("/pages/custom-milled-rice-cmr-process.html");
  await page.mouse.wheel(0, 40000);
  await expect.poll(() => events.map((e) => e.name)).toContain("Blog Read Complete");
  expect(events.map((e) => e.name)).toContain("Blog Read 50%");
  await page.evaluate(() => document.addEventListener("click", (e) => e.preventDefault(), true));
  await page.locator('main a[href^="/pages/contact.html"]').first().click();
  await expect.poll(() => events.find((e) => e.name === "Demo CTA Click")?.props.location ?? "").not.toBe("");
  await page.goto("/no-such-page");
  await expect.poll(() => events.map((e) => e.name)).toContain("404");
});

test("Sign in names the site; WhatsApp opens with an inviting message", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('header a[href*="app.svasamm.com"]').first()).toHaveAttribute("href", /utm_source=svasamm\.com/);
  // Sign in opens the app in its own tab, so the site stays open (Mithun, 9 Nov 2026).
  for (const a of await page.locator('a[href*="app.svasamm.com"]').all()) await expect(a).toHaveAttribute("target", "_blank");
  // the link is built after the page mounts, so wait for it rather than read it once
  await expect(page.locator("a.wa-fab")).toHaveAttribute("href", /919007793575.*text=Hi%20Svasamm%2C%20I'd%20like%20to%20know%20how%20you%20can%20help%20my%20business\./);
});

// The guide bar (13 Nov 2026, components/GuideBar.tsx): not there on arrival, up once the reader
// is halfway, gone while the closing card shows, and closed means closed on the next guide too.
test("guide bar: halfway up, hides at the closing card, stays closed", async ({ page }) => {
  const events = await recordEvents(page);
  await page.setViewportSize({ width: 1366, height: 900 });
  await page.goto("/pages/custom-milled-rice-cmr-process.html");
  const bar = page.locator("[data-guide-bar]");
  await expect(bar).toBeHidden();
  await page.evaluate(() => {
    const b = document.querySelector("[data-read]") as HTMLElement;
    scrollTo(0, b.offsetTop + b.offsetHeight * 0.55 - innerHeight);
  });
  await expect(bar).toBeVisible();
  await expect(bar.getByRole("link", { name: "Book a walkthrough" })).toHaveAttribute("href", "/pages/contact.html?solution=millingo");
  expect(events.some((e) => e.name === "Guide Bar Shown")).toBe(true);
  await page.evaluate(() => document.querySelector("[data-guide-cta]")!.scrollIntoView({ block: "center" }));
  await expect(bar).toBeHidden();
  await page.evaluate(() => scrollTo(0, (document.querySelector("[data-read]") as HTMLElement).offsetTop + 2400));
  await expect(bar).toBeVisible();
  await bar.getByRole("button", { name: "Close" }).click();
  await expect(bar).toBeHidden();
  await page.goto("/pages/rice-mill-yield-recovery.html");
  await page.evaluate(() => scrollTo(0, document.body.scrollHeight * 0.6));
  await page.waitForTimeout(400);
  await expect(page.locator("[data-guide-bar]")).toBeHidden();
  // Not on a page that is not a guide.
  await page.goto("/pages/millingo.html");
  await expect(page.locator("[data-guide-bar]")).toHaveCount(0);
});

test("journey: scrolling to a stage shows its screen", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/pages/millingo-paddy-in-rice-out.html");
  await page.evaluate(() => document.getElementById("qc")!.scrollIntoView({ block: "center" }));
  await expect(page.locator(".jv-hold img:not([hidden])")).toHaveAttribute("src", /qc\.webp/);
  await page.goto("/pages/millingo.html");
  expect(await page.locator('a[href^="/pages/millingo-paddy-in-rice-out.html#"]').count()).toBe(4);
});

test("team: every person, and nobody taken off, the facts, and You? leading to the openings", async ({ page }) => {
  await page.goto("/team");
  await expect(page.locator(".tm-card:not(.tm-you)")).toHaveCount(TEAM.length);
  await expect(page.locator(".tm-back")).toHaveCount(TEAM.length);
  await expect(page.locator("main")).not.toContainText("Tanya");
  await expect(page.locator(".tm-fact-n").first()).toHaveText("April 2024");
  await page.locator("a.tm-you").click();
  await expect(page).toHaveURL(/\/jobs$/);
});

test("jobs: chips filter, each role is a Google job listing", async ({ page }) => {
  await page.goto("/jobs");
  const roles = await page.locator("main article").count();
  expect(roles).toBeGreaterThan(0);
  const ld = await page.locator('script[type="application/ld+json"]').allTextContents();
  expect(ld.join("").match(/"JobPosting"/g)?.length).toBe(roles);
  await page.locator(".sv-res-chip", { hasText: "Engineering" }).click();
  await expect(page.locator("main article")).toHaveCount(1);
});

test("jobs: the form refuses what it must, and sends a résumé it accepts", async ({ page }) => {
  let sent: Record<string, unknown> | null = null;
  await page.route(/execute-api/, async (r) => {
    if (r.request().method() === "OPTIONS") return r.fulfill({ status: 204, headers: { "access-control-allow-origin": "*", "access-control-allow-headers": "Content-Type" } });
    sent = JSON.parse(r.request().postData() ?? "{}");
    return r.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true}', headers: { "access-control-allow-origin": "*" } });
  });
  await page.goto("/jobs");
  await page.getByRole("button", { name: "Apply for this role" }).first().click();
  await page.getByRole("button", { name: "Send application" }).click();
  await expect(page.locator('[role="dialog"] [role="alert"]')).toHaveCount(4);
  await page.fill("#ap-name", "Asha Roy");
  await page.fill("#ap-email", "asha@example.com");
  await page.fill("#ap-phone", "831731993212");
  await page.setInputFiles("#ap-file", { name: "cv.docx", mimeType: "application/octet-stream", buffer: Buffer.from("PK") });
  await page.getByRole("button", { name: "Send application" }).click();
  await expect(page.locator('[role="dialog"]')).toContainText("Enter a 10-digit mobile number");
  await expect(page.locator('[role="dialog"]')).toContainText("Only a PDF");
  await page.fill("#ap-phone", "098300 12345"); // the trunk 0 goes; the picker's +91 comes first
  await page.setInputFiles("#ap-file", { name: "cv.pdf", mimeType: "application/pdf", buffer: Buffer.from("%PDF-1.4\nx") });
  await page.getByRole("button", { name: "Send application" }).click();
  await expect(page.locator('[role="status"]')).toContainText("Thank you, Asha");
  expect(sent).toMatchObject({ kind: "job", name: "Asha Roy", phone: "+91 98300 12345", resume: { name: "cv.pdf" } });
});

// One AI-crawler rule on all three sites (Mithun, 9 Nov 2026): every AI bot, training as well as
// search, may read the whole site. A named group replaces "*" for that bot, so check the bot's own group.
const AI_BOTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "CCBot"];
test("robots.txt lets every AI crawler read the site", async ({ request }) => {
  const text = await (await request.get("/robots.txt")).text();
  const groups: { agents: string[]; rules: string[] }[] = [];
  let open = false;
  for (const raw of text.split("\n")) {
    const line = raw.replace(/#.*/, "").trim();
    const m = line.match(/^([A-Za-z-]+):\s*(.*)$/);
    if (!m) continue;
    const [k, v] = [m[1].toLowerCase(), m[2].trim()];
    if (k === "user-agent") {
      if (!open) groups.push({ agents: [], rules: [] });
      groups[groups.length - 1].agents.push(v.toLowerCase());
      open = true;
    } else if (k === "allow" || k === "disallow") {
      if (groups.length) groups[groups.length - 1].rules.push(`${k}:${v}`);
      open = false;
    }
  }
  for (const bot of AI_BOTS) {
    const g = groups.find((x) => x.agents.includes(bot.toLowerCase()));
    expect(g, `${bot} is named`).toBeTruthy();
    expect(g!.rules, bot).toContain("allow:/");
    expect(g!.rules, bot).not.toContain("disallow:/");
  }
});

// IndexNow (9 Nov 2026): the key the deploy step sends must be served at /<key>.txt, or Bing
// refuses every submission. The step lives in .github/workflows/deploy.yml.
test("the IndexNow key file serves the deploy step's key", async ({ request }) => {
  const fs = await import("node:fs");
  const key = fs.readFileSync(".github/workflows/deploy.yml", "utf8").match(/INDEXNOW_KEY: ([0-9a-f]{32})/)![1];
  const res = await request.get(`/${key}.txt`);
  expect(res.status()).toBe(200);
  expect((await res.text()).trim()).toBe(key);
});

// The product moment (10 Nov 2026): each listed guide shows its Millingo box ONCE, directly after
// the section it names. A renamed heading would make the box vanish silently; this catches it.
for (const [slug, m] of Object.entries(PRODUCT_MOMENTS)) {
  test(`product moment on ${slug} sits after "${m.after}"`, async ({ page }) => {
    await page.goto(`/pages/${slug}.html`);
    const box = page.locator("main aside[data-product-moment]");
    await expect(box).toHaveCount(1);
    await expect(box).toContainText(m.text);
    await expect(box.locator('a[href="/pages/millingo.html"]')).toHaveCount(1);
    const before = await box.evaluate((el) => {
      let n = el.previousElementSibling;
      while (n && n.tagName !== "H2") n = n.previousElementSibling;
      return n?.textContent?.trim();
    });
    expect(before).toBe(m.after);
  });
}

// Svasamm Digital, healthcare and schools (Mithun, 10 Nov 2026): live for a link, kept out of Google. The page says
// noindex AND the sitemap leaves it out, from one list (lib/indexing.ts).
test("Svasamm Digital pages (healthcare and schools) are live, noindex, and not in the sitemap", async ({ page }) => {
  expect(NOT_INDEXED.size).toBeGreaterThanOrEqual(17);
  for (const s of ["digital-healthcare.html", "digital-schools.html", "school-website-design.html", "clinic-seo-west-bengal.html"])
    expect(NOT_INDEXED.has(s), s).toBe(true);
  for (const slug of NOT_INDEXED) {
    expect(urls, slug).not.toContain(`/pages/${slug}`);
    const r = await page.goto(`/pages/${slug}`);
    expect(r?.status(), slug).toBe(200);
    await expect(page.locator('meta[name="robots"]'), slug).toHaveAttribute("content", /noindex/);
  }
  await page.goto("/pages/millingo.html");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /^index/);
});

// "Svasamm One" in the titles (Mithun, 10 Nov 2026) — only where the page is about it.
test("the home and Solutions titles carry Svasamm One", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/^Svasamm One — /);
  await page.goto("/pages/services.html");
  await expect(page).toHaveTitle(/Svasamm One/);
});

// The contact form's real path against a stand-in for the Lambda (10 Nov 2026): it refuses what it
// must, the country picker sets the dial code, and the lead is posted once with "+<code> <number>".
// The route catches the real endpoint, so a test never reaches AWS.
test("contact form: refuses what it must, then posts the lead with the phone's country code", async ({ page }) => {
  const posts: Record<string, unknown>[] = [];
  await page.route(/execute-api/, async (r) => {
    if (r.request().method() === "OPTIONS") return r.fulfill({ status: 204, headers: { "access-control-allow-origin": "*", "access-control-allow-headers": "Content-Type" } });
    posts.push(JSON.parse(r.request().postData() ?? "{}"));
    return r.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true}', headers: { "access-control-allow-origin": "*" } });
  });
  await page.goto("/pages/contact.html?solution=millingo");
  for (const id of ["cf-name", "cf-email", "cf-phone"]) await expect(page.locator(`label[for="${id}"]`), id).toContainText("*");
  await expect(page.locator('label[for="cf-company"]')).not.toContainText("*");
  await expect(page.locator("#cf-phone-cc")).toHaveValue("IN");
  await page.getByRole("button", { name: /walkthrough/i }).click();
  await expect(page.locator("form [role=alert]")).toHaveCount(3);
  await page.fill("#cf-name", "Asha Roy");
  await page.fill("#cf-email", "asha@roy.in");
  await page.fill("#cf-phone", "98300");
  await page.getByRole("button", { name: /walkthrough/i }).click();
  await expect(page.locator("#cf-phone-err")).toBeVisible();
  await page.selectOption("#cf-phone-cc", "GB");
  await expect(page.locator(".sv-cc")).toContainText("+44");
  await page.fill("#cf-phone", "07700 900123");
  expect(posts).toHaveLength(0);
  await page.getByRole("button", { name: /walkthrough/i }).click();
  await expect(page.getByText("Thanks, Asha")).toBeVisible();
  expect(posts).toHaveLength(1);
  expect(posts[0]).toMatchObject({ name: "Asha Roy", email: "asha@roy.in", phone: "+44 7700 900123", source: "svasamm-contact" });
});

// A 404 with ways forward (10 Nov 2026): a real 404 status, and every door on it opens.
test("the 404 page answers 404 and every door on it opens", async ({ page, request }) => {
  const r = await page.goto("/pages/no-such-page.html");
  expect(r?.status()).toBe(404);
  await expect(page.locator("h1")).toHaveText("This page isn't here");
  const hrefs = await page.locator("main a[href]").evaluateAll((as) => as.map((a) => a.getAttribute("href")!));
  expect(hrefs.length).toBeGreaterThanOrEqual(8);
  for (const h of hrefs.filter((h) => h.startsWith("/"))) expect((await request.get(h)).status(), h).toBe(200);
  expect(hrefs).toEqual(expect.arrayContaining(["https://t4suite.com", "https://lucoze.com", "/pages/millingo.html", "/pages/hrms.html"]));
});

// The company chip left the home hero (Mithun, 10 Nov 2026).
test("the home hero carries no company chip", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".pp-hero")).not.toContainText("Svasamm Research Pvt Ltd · West Bengal, India");
});

// "&amp;" written into the source showed as a literal "&amp;" in titles and meta descriptions:
// React escapes "&" itself (found 10 Nov 2026 on seven DMS pages, live on main). Write "&".
test("no page carries a double-escaped ampersand", () => {
  const { readdirSync } = require("node:fs") as typeof import("node:fs");
  const walk = (d: string): string[] => readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(`${d}/${e.name}`) : e.name.endsWith(".html") ? [`${d}/${e.name}`] : []);
  const bad = walk("out").filter((f) => readFileSync(f, "utf8").includes("&amp;amp;"));
  expect(bad).toEqual([]);
});
