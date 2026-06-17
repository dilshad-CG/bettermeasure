import type { MetadataRoute } from "next";
import { company, services } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.url;
  const now = new Date();

  const staticPages = ["", "/solutions", "/heart", "/our-magic", "/faq", "/talk-to-us"].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const servicePages = services.map((s) => ({
    url: `${base}/solutions/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Note: /mapela-traditional-council and /christmas are intentionally excluded
  // (private proposal + archived seasonal campaign — both noindexed).
  return [...staticPages, ...servicePages];
}
