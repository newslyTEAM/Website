import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/sections/Section";
import { FeatureList } from "@/components/sections/FeatureList";
import { PriceCallout } from "@/components/sections/PriceCallout";
import { FinalCta } from "@/components/sections/FinalCta";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "The AI Assessment — Step 1 of The AI Growth Program",
  description:
    "The AI Assessment is the first step inside The AI Growth Program — a structured business review that shapes your course path and three coaching calls.",
  openGraph: {
    title: "The AI Assessment — Step 1 of The AI Growth Program",
    description:
      "A focused business review for established companies, included in The AI Growth Program.",
  },
};

const whatsIncluded = [
  "Business readiness review",
  "Workflow and systems review",
  "AI opportunity mapping",
  "Risk and gap review",
  "A roadmap that drives the rest of the program",
];

const whoItsFor = [
  "You run an established business",
  "You want to use AI wisely, not blindly",
  "You want a real plan, not just ideas",
  "You're ready to invest the time to do it well",
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
        eyebrow="Step 1 of the program"
        title={
          <>
            The AI Assessment for <span className="text-navy/60">established businesses</span>
          </>
        }
        lede="The first step inside The AI Growth Program. A focused business review that shows where AI fits — and shapes the course path and coaching calls that follow."
      />

      {/* What this is */}
      <Section tone="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1.3fr] lg:gap-20 items-start">
            <SectionHeading
              eyebrow="What it is"
              title="What this assessment does"
              lede="This is not a quiz. It is a business-level review of how your company works today and how ready it is for AI."
            />
            <div className="prose-x">
              <p>
                We look at process, systems, team use, decision flow, and
                opportunity areas.
              </p>
              <p>
                The assessment then drives the rest of the program — the course
                path you focus on, and the topics we cover in your three live
                coaching calls.
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
            lede="Five focused areas. One clear roadmap to drive the program."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr] items-start">
            <Card>
              <FeatureList items={whatsIncluded} variant="check" />
            </Card>
            <div className="prose-x lg:pl-4">
              <p>
                The assessment isn't a separate purchase — it's the kickoff for
                your program. The output shapes the course modules you focus on
                and what we cover together in coaching.
              </p>
              <p>
                Every business has different priorities. The assessment makes
                sure the program is built around yours.
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

      {/* Program callout */}
      <Section spacing="tight">
        <Container>
          <PriceCallout
            eyebrow="The program"
            title="The AI Growth Program"
            bullets={[
              "Step 1: Your AI Assessment",
              "Step 2: A practical course made for established businesses",
              "Step 3: Three live coaching calls with us",
              "Optional follow-on consulting if you need it",
            ]}
            ctaLabel="Book a Discovery Call"
            ctaHref="/contact"
            secondaryLabel="See how it works"
            secondaryHref="/#how-it-works"
            rightTitle="One unified program"
            rightBody="The assessment is the first step — the rest of the program is built around what we find."
          />
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
