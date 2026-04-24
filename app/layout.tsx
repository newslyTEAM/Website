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
    default: "Newsly Global — Clarity before AI. Growth after.",
    template: "%s | Newsly Global",
  },
  description:
    "Newsly Global helps established businesses find out if AI is right for their company, where it can create real value, and what to do next. Start with the $1,495 AI Assessment.",
  applicationName: "Newsly Global",
  keywords: [
    "AI assessment for business",
    "AI readiness assessment",
    "AI business audit",
    "AI consulting for small business",
    "AI strategy for growing businesses",
    "business AI readiness",
    "AI implementation planning",
    "AI training for business owners",
  ],
  openGraph: {
    title: "Newsly Global — Clarity before AI. Growth after.",
    description:
      "A $1,495 AI Assessment for established businesses. Know if your business is ready for AI before you waste time or money.",
    url: siteUrl,
    siteName: "Newsly Global",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsly Global — Clarity before AI. Growth after.",
    description:
      "A $1,495 AI Assessment for established businesses. Know if your business is ready for AI before you waste time or money.",
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Newsly Global",
  url: siteUrl,
  description:
    "Newsly Global helps established businesses understand if they are ready for AI, where it can create value, and what to do next.",
  slogan: "Clarity before AI. Growth after.",
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Readiness Assessment",
  provider: { "@type": "Organization", name: "Newsly Global", url: siteUrl },
  areaServed: "United States",
  description:
    "A structured business audit that shows whether an established company is ready for AI, where AI can create real value, and what next step makes sense.",
  offers: {
    "@type": "Offer",
    price: "1495.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: `${siteUrl}/assessment`,
  },
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
