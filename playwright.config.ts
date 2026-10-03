import { defineConfig, devices } from "@playwright/test";

// Browser tests against the BUILT site (yarn build first — the tests read the
// built sitemap to know which pages exist). Served by tests/e2e/static-server.mjs the
// way nginx serves it; nginx's own redirects are checked by scripts/check-nginx.sh.
// The release workflow runs both and refuses to deploy if either is red.
export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["list"]] : "list",
  // Pictures compare only on Linux (Playwright's image in CI and in test:visual:update).
  ignoreSnapshots: process.platform !== "linux",
  snapshotPathTemplate: "{testDir}/__screenshots__/{arg}{ext}",
  use: { baseURL: "http://127.0.0.1:4401", trace: "on-first-retry", ...devices["Desktop Chrome"], viewport: { width: 1366, height: 900 } },
  webServer: {
    command: "node tests/e2e/static-server.mjs out 4401",
    url: "http://127.0.0.1:4401/",
    reuseExistingServer: !process.env.CI,
  },
});
