import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://newslyglobal.com";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you", "/assessment/start"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
