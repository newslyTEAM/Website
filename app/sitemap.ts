import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://newslyglobal.com";
  const now = new Date();
  const routes = ["", "/assessment", "/services", "/courses", "/about", "/contact"];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/assessment" ? 0.9 : 0.7,
  }));
}
