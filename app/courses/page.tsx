import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/sections/Section";
import { FinalCta } from "@/components/sections/FinalCta";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { Users, Briefcase, Settings2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Courses — Practical AI Learning",
  description:
    "Simple, useful AI training built for established businesses. For owners, leadership, operations, and staff.",
};

const tracks = [
  {
    icon: Briefcase,
    title: "For Owners",
    body: "A clear, practical understanding of AI for the person making the calls. Know what it can do, where it fits, and where it does not.",
  },
  {
    icon: Users,
    title: "For Leadership Teams",
    body: "Align your leadership team on where AI belongs in your business, and what a responsible rollout looks like.",
  },
  {
    icon: Settings2,
    title: "For Operations and Staff",
    body: "Give your team the working knowledge to use AI tools well — without falling for hype or poor habits.",
  },
];

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title={
          <>
            Practical AI learning for{" "}
            <span className="text-navy/60">owners and teams</span>
          </>
        }
        lede="Simple, useful training designed to help you understand AI without the noise."
      >
        <p className="max-w-2xl text-slate text-[1rem] leading-relaxed">
          Our courses are built for real businesses. They are made to help you
          and your team understand how AI works, where it fits, and how to use
          it in a smart way. No fluff. No hype. Just practical learning you can
          use.
        </p>
      </PageHero>

      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow="Tracks"
            title="Built around the people who need to decide"
            lede="Coming soon — training tracks tailored to the three groups that matter most."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tracks.map((t) => (
              <Card key={t.title}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-navy/5 text-navy mb-6">
                  <t.icon className="h-5 w-5" strokeWidth={1.25} />
                </span>
                <h3
                  className="text-[1.25rem] text-navy mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.title}
                </h3>
                <p className="text-[0.9375rem] text-slate leading-relaxed">{t.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Not sure yet?"
              title="See if training is your right next step."
              lede="The AI Assessment tells you whether training, consulting, or implementation makes the most sense."
            />
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
              <ButtonLink href="/assessment/start" variant="primary" size="lg" withArrow>
                Start with the AI Assessment
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
