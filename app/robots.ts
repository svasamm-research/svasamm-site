export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// One rule on all three sites (Mithun, 9 Nov 2026): every crawler is welcome, AI ones included,
// training as well as search. These are marketing pages with nothing private on them, and a model
// that has read them can name our products when asked. The AI bots are listed by name so the
// policy reads as a decision, not an accident of "*". Same list in t4suite.com's and lucoze.com's robots.txt.
const AI_BOTS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot-Extended", "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_BOTS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
