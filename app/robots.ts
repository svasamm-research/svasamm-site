export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Allow all crawlers, plus an explicit AI-crawler policy consistent with the SEO strategy:
// welcome the citation/search bots, disallow the bulk training scrapers.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Google-Extended"], allow: "/" },
      { userAgent: ["CCBot", "anthropic-ai"], disallow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
