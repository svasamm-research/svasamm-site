// svasamm.com's own behaviour (15 Oct 2026) — the things built in this round that the
// shared site.spec.ts (same file in all three site repos) does not know about. Runs against
// the BUILT site like the rest of the suite.
import { test, expect, type Page } from "@playwright/test";
import { readFileSync } from "node:fs";

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

  // Claims that were on the site and are not true of the code (checked 12 and 15 Oct 2026).
  test("no claim the code does not support", async ({ page }) => {
    const banned = [/self-hostable/i, /ABDM-ready/i, /geofenc/i, /camp-pick app/i, /\bSauda\b/, /multi-unit consolidation/i, /levy memos?/i, /founded 2022|since 2019/i];
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

test("bold key facts render as bold, not as asterisks", async ({ page }) => {
  await page.goto("/pages/punjab-release-order-paddy-allotment.html");
  await expect(page.locator("main strong", { hasText: "only 99.50 of 105.64 LMT" })).toHaveCount(1);
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

test("Sign in names the site; WhatsApp names the page", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('header a[href*="app.svasamm.com"]').first()).toHaveAttribute("href", /utm_source=svasamm\.com/);
  await expect(page.locator("a.wa-fab")).toHaveAttribute("href", /919007793575.*text=/);
});

test("journey: scrolling to a stage shows its screen", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/pages/millingo-paddy-in-rice-out.html");
  await page.evaluate(() => document.getElementById("qc")!.scrollIntoView({ block: "center" }));
  await expect(page.locator(".jv-hold img:not([hidden])")).toHaveAttribute("src", /qc\.webp/);
  await page.goto("/pages/millingo.html");
  expect(await page.locator('a[href^="/pages/millingo-paddy-in-rice-out.html#"]').count()).toBe(4);
});

test("team: every person, the facts, and You? leading to the openings", async ({ page }) => {
  await page.goto("/team");
  await expect(page.locator(".tm-card:not(.tm-you)")).toHaveCount(6);
  await expect(page.locator(".tm-back")).toHaveCount(6);
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
  await page.fill("#ap-phone", "98300 12345");
  await page.setInputFiles("#ap-file", { name: "cv.exe", mimeType: "application/octet-stream", buffer: Buffer.from("MZ") });
  await page.getByRole("button", { name: "Send application" }).click();
  await expect(page.locator('[role="dialog"]')).toContainText("A PDF, DOC or DOCX");
  await page.setInputFiles("#ap-file", { name: "cv.pdf", mimeType: "application/pdf", buffer: Buffer.from("%PDF-1.4\nx") });
  await page.getByRole("button", { name: "Send application" }).click();
  await expect(page.locator('[role="status"]')).toContainText("Thank you, Asha");
  expect(sent).toMatchObject({ kind: "job", name: "Asha Roy", resume: { name: "cv.pdf" } });
});
