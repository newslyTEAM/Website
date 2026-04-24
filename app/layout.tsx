import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://newslyglobal.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Newsly Global — Turn AI Into Real Growth",
    template: "%s | Newsly Global",
  },
  description:
    "The AI Growth Program for established businesses — assessment, course, and three live coaching calls in one structured path.",
  applicationName: "Newsly Global",
  keywords: [
    "AI growth program",
    "AI course for business",
    "AI coaching for business",
    "AI assessment for business",
    "AI training for business owners",
    "AI strategy for growing businesses",
    "business AI readiness",
    "AI implementation planning",
  ],
  openGraph: {
    title: "Newsly Global — Turn AI Into Real Growth",
    description:
      "The AI Growth Program: assessment, course, and three live coaching calls — built for established businesses.",
    url: siteUrl,
    siteName: "Newsly Global",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsly Global — Turn AI Into Real Growth",
    description:
      "The AI Growth Program: assessment, course, and three live coaching calls — built for established businesses.",
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Newsly Global",
  url: siteUrl,
  description:
    "Newsly Global runs The AI Growth Program — a structured path of assessment, course, and live coaching for established businesses.",
  slogan: "Turn AI Into Real Growth",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Growth Program",
  provider: { "@type": "Organization", name: "Newsly Global", url: siteUrl },
  areaServed: "United States",
  description:
    "The AI Growth Program for established businesses: an AI assessment, a practical course, and three live coaching calls — built so AI actually gets put to work.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh flex flex-col bg-bg text-navy">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="ld-service"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
