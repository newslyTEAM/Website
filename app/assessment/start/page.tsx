import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { Container } from "@/components/layout/Container";
import { IntakeForm } from "@/components/forms/IntakeForm";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Apply for The AI Growth Program",
  description:
    "Tell us about your business. We'll review your intake and reach out to schedule your discovery call.",
  robots: { index: false, follow: false },
};

export default function AssessmentStartPage() {
  return (
    <>
      <PageHero
        eyebrow="Apply · Tell us about your business"
        title="Apply for The AI Growth Program"
        lede="Tell us a bit about your business. Once we review your intake, we'll reach out to schedule your discovery call."
      >
        <Link
          href="/#how-it-works"
          className="inline-flex items-center gap-2 text-[0.875rem] font-medium text-slate hover:text-navy"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          Back to how the program works
        </Link>
      </PageHero>

      <Section tone="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16 items-start">
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-lg border border-line bg-white p-7 shadow-[var(--shadow-soft)]">
                <div className="eyebrow mb-4">The program</div>
                <h3
                  className="text-[1.25rem] text-navy"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  The AI Growth Program
                </h3>
                <p className="mt-3 text-[0.9375rem] text-slate leading-relaxed">
                  A structured path for established businesses to actually use
                  AI well.
                </p>
                <ul className="mt-6 space-y-2 text-[0.875rem] text-slate">
                  <li>• AI Assessment built around your business</li>
                  <li>• Practical course for owners and teams</li>
                  <li>• Three live coaching calls with us</li>
                  <li>• Optional follow-on consulting</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-line flex items-start gap-3 text-[0.8125rem] text-slate">
                  <ShieldCheck
                    className="h-4 w-4 mt-[0.1rem] shrink-0 text-success"
                    strokeWidth={1.75}
                  />
                  <span>
                    Your information is kept confidential. We'll confirm the
                    next step with you by email after intake review.
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
