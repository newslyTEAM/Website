import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/sections/Section";
import { FinalCta } from "@/components/sections/FinalCta";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { Users, Briefcase, Settings2 } from "lucide-react";

export const metadata: Metadata = {
  title: "The Course — Practical AI Learning",
  description:
    "The course inside The AI Growth Program. Practical AI training for owners, leadership, and operations — with three live coaching calls to put it to work.",
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
        eyebrow="The course"
        title={
          <>
            Practical AI learning,{" "}
            <span className="text-navy/60">backed by live coaching</span>
          </>
        }
        lede="The course is the learning core of The AI Growth Program. Self-paced lessons, no fluff — paired with three live calls to apply it to your business."
      >
        <p className="max-w-2xl text-slate text-[1rem] leading-relaxed">
          Our course is built for real businesses. It teaches you and your team
          how AI works, where it fits, and how to use it well. The three live
          coaching calls in the program turn that knowledge into action.
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
              title="See if the program is your right next step."
              lede="Book a discovery call. We'll talk through your business and whether the program fits — no pressure, no pitch."
            />
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
              <ButtonLink href="/contact" variant="primary" size="lg" withArrow>
                Book a Discovery Call
              </ButtonLink>
              <ButtonLink href="/#how-it-works" variant="secondary" size="lg">
                See how the program works
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
