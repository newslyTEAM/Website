import type { Metadata } from "next";
import { Compass, Workflow, Users } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/sections/Section";
import { FinalCta } from "@/components/sections/FinalCta";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services — The Program and What's Beyond",
  description:
    "The AI Growth Program covers assessment, course, and coaching. When more help is needed, we offer follow-on consulting and automations.",
};

const services = [
  {
    icon: Users,
    title: "Live Coaching (in the program)",
    body: "Three working sessions with us, included in the program. We use them to take what the course teaches and apply it directly to your business.",
  },
  {
    icon: Compass,
    title: "Follow-on Consulting",
    body: "After the program, some businesses want deeper hands-on guidance. We continue working with you to refine direction, plan rollouts, and make decisions.",
  },
  {
    icon: Workflow,
    title: "Automations Build-out",
    body: "When the right opportunity is clear, we design and build the workflows, integrations, and AI-driven systems that remove busywork — folded into our consulting work.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            The program — and{" "}
            <span className="text-navy/60">what's beyond it</span>
          </>
        }
        lede="The AI Growth Program covers most of what an established business needs. When you need more, our consulting and automations work picks up where the program leaves off."
      />

      <Section tone="surface">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="flex flex-col">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-navy/5 text-navy mb-6">
                  <s.icon className="h-5 w-5" strokeWidth={1.25} />
                </span>
                <h3
                  className="text-[1.375rem] text-navy mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h3>
                <p className="text-[0.9375rem] text-slate leading-relaxed">{s.body}</p>
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
              eyebrow="Where to start"
              title="Most businesses start with the program."
              lede="Book a discovery call and we'll talk through whether the program is right for you, or whether something else makes more sense."
            />
            <div className="mt-10 flex justify-center">
              <ButtonLink href="/contact" variant="primary" size="lg" withArrow>
                Book a Discovery Call
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
