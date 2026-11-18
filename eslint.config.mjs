// ESLint for svasamm.com (18 Nov 2026, Mithun: the same checks as lucoze.com). Next 16's own
// rules (core web vitals) plus its TypeScript rules; run by `yarn lint` and the Lint job in CI.
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // A static export renders once at build time, so a value only the browser knows (the user
      // agent for a WhatsApp link, localStorage for a closed bar, the host for analytics) MUST be
      // read after mount, in an effect, or the build's HTML and the browser's first render differ.
      // React 19's rule flags exactly that pattern; it stays a warning so a new one is still seen.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "test-results/**", "playwright-report/**", "svasamm-handoff/**"]),
]);
