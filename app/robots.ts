import type { MetadataRoute } from "next";
import { company } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all standard + AI search crawlers (Phase 5/6). Nothing important
      // is gated, so AI answer engines can read and cite our content.
      { userAgent: "*", allow: "/", disallow: ["/mapela-traditional-council", "/christmas"] },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${company.url}/sitemap.xml`,
  };
}
