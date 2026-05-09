// app/sitemap.ts
// Next.js generates /sitemap.xml automatically from this file.
// Submit the sitemap URL to Google Search Console and Bing Webmaster Tools.

import { MetadataRoute } from "next";

const SITE_URL = "https://dabasorockconservationgroup.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    // ── Home page ─────────────────────────────────────────────────────────────
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── Primary anchor sections (one-page site with hash anchors) ─────────────
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/programs`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/partnerships`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },

    // ── Future standalone pages (add as you build them) ───────────────────────
    // { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // { url: `${SITE_URL}/programs/mangrove-reforestation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // { url: `${SITE_URL}/programs/eco-tourism`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // { url: `${SITE_URL}/programs/skills-training`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    // { url: `${SITE_URL}/donate`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    // { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
