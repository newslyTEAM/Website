import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/sections/Section";
import { FeatureList } from "@/components/sections/FeatureList";
import { PriceCallout } from "@/components/sections/PriceCallout";
import { FinalCta } from "@/components/sections/FinalCta";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "AI Assessment for Business | $1,495 AI Readiness Audit",
  description:
    "A focused business audit that shows if your established company is ready for AI, where it can help, and what you should do next.",
  openGraph: {
    title: "AI Assessment for Business — $1,495",
    description:
      "A focused audit for established businesses. Clear answers before your next AI move.",
  },
};

const whatsIncluded = [
  "Business readiness review",
  "Workflow and systems review",
  "AI opportunity mapping",
  "Risk and gap review",
  "Clear recommendation on next steps",
];

const whoItsFor = [
  "You run an established business",
  "You want to use AI wisely, not blindly",
  "You want expert review before investing more",
  "You need clear direction, not more noise",
];

const whoItsNotFor = [
  "You want instant AI tricks",
  "You are looking for a cheap tool list",
  "You are not ready to review how your business actually runs",
  "You want hype, not truth",
];

export default function AssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow="The AI Assessment"
        title={
          <>
            The AI Assessment for <span className="text-navy/60">established businesses</span>
          </>
        }
        lede="A focused audit to show if your business is ready for AI, where it can help, and what you should do next."
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-5">
          <span
            className="text-[2.25rem] font-bold text-navy tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            $1,495
          </span>
          <span className="text-slate text-[0.9375rem]">
            one-time · delivered as a structured review
          </span>
        </div>
      </PageHero>

      {/* What this is */}
      <Section tone="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1.3fr] lg:gap-20 items-start">
            <SectionHeading
              eyebrow="What it is"
              title="What this assessment does"
              lede="This is not a quiz. This is a business-level review of how your company works today and how ready it is for AI."
            />
            <div className="prose-x">
              <p>
                We look at process, systems, team use, decision flow, and
                opportunity areas.
              </p>
              <p>
                Then we give you clear guidance on what makes sense next —
                without pressure, without hype, and without selling AI for the
                sake of AI.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Included */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Scope"
            title="What is included"
            lede="Five focused areas. One clear recommendation."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr] items-start">
            <Card>
              <FeatureList items={whatsIncluded} variant="check" />
            </Card>
            <div className="prose-x lg:pl-4">
              <p>
                Next steps may include consulting, implementation support,
                training, courses, or waiting until the business is better
                prepared.
              </p>
              <p>
                Not every company needs the same next step. That is why the
                assessment comes first.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Who it's for */}
      <Section tone="surface">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="eyebrow mb-4 !text-success">This is for you if</div>
              <h3
                className="text-[1.375rem] text-navy mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                You want clear direction.
              </h3>
              <FeatureList items={whoItsFor} variant="check" />
            </Card>
            <Card>
              <div className="eyebrow mb-4">This is not for you if</div>
              <h3
                className="text-[1.375rem] text-navy mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                You want hype, not truth.
              </h3>
              <FeatureList items={whoItsNotFor} variant="x" />
            </Card>
          </div>
        </Container>
      </Section>

      {/* Why $1,495 */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-start">
            <SectionHeading
              eyebrow="Why it costs $1,495"
              title="Why this matters"
            />
            <div className="prose-x">
              <p>
                The cost of the assessment is small compared to the cost of
                making the wrong AI decision.
              </p>
              <p>
                This is designed to help you avoid wasted spending, bad tools,
                and poor implementation.
              </p>
              <p>
                It gives you a smart starting point based on your business, not
                generic advice.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Price callout */}
      <Section tone="surface" spacing="tight">
        <Container>
          <PriceCallout
            title="Start with clarity"
            bullets={whatsIncluded}
            ctaLabel="Get Your AI Assessment"
            ctaHref="/assessment/start"
            note="A focused business-level review. Delivered with care."
          />
        </Container>
      </Section>

      <FinalCta
        eyebrow="Ready"
        title="Make your next AI move with confidence."
        body="Start the assessment. Get clarity. Decide the right step for your business."
        ctaLabel="Get Started"
      />
    </>
  );
}
