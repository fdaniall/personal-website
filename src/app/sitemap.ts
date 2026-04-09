import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fdaniall.dev",
      lastModified: new Date("2026-04-09"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
