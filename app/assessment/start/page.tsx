import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { Container } from "@/components/layout/Container";
import { IntakeForm } from "@/components/forms/IntakeForm";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Get your AI Assessment",
  description:
    "Start your $1,495 AI Assessment. Tell us a bit about your business and we'll be in touch to schedule your intro call.",
  robots: { index: false, follow: false },
};

export default function AssessmentStartPage() {
  return (
    <>
      <PageHero
        eyebrow="Step 1 of 2 · Your details"
        title="Get your AI Assessment"
        lede="Tell us a bit about your business. Once we review your intake, we'll confirm the details and schedule your intro call."
      >
        <Link
          href="/assessment"
          className="inline-flex items-center gap-2 text-[0.875rem] font-medium text-slate hover:text-navy"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          Back to assessment overview
        </Link>
      </PageHero>

      <Section tone="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16 items-start">
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-lg border border-line bg-white p-7 shadow-[var(--shadow-soft)]">
                <div className="eyebrow mb-4">Your assessment</div>
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-[2.25rem] leading-none font-bold text-navy tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    $1,495
                  </span>
                  <span className="text-slate text-[0.875rem]">one-time</span>
                </div>
                <h3
                  className="mt-4 text-[1.125rem] text-navy"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  AI Assessment
                </h3>
                <p className="mt-2 text-[0.9375rem] text-slate leading-relaxed">
                  A structured business review, a clear recommendation, and a
                  next step built for your company.
                </p>
                <ul className="mt-6 space-y-2 text-[0.875rem] text-slate">
                  <li>• Business readiness review</li>
                  <li>• Workflow and systems review</li>
                  <li>• AI opportunity mapping</li>
                  <li>• Risk and gap review</li>
                  <li>• Clear next-step recommendation</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-line flex items-start gap-3 text-[0.8125rem] text-slate">
                  <ShieldCheck
                    className="h-4 w-4 mt-[0.1rem] shrink-0 text-success"
                    strokeWidth={1.75}
                  />
                  <span>
                    Your information is kept confidential. We confirm the
                    details with you by email after intake review.
                  </span>
                </div>
              </div>
            </aside>

            <IntakeForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
