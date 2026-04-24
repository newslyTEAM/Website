import type { Metadata } from "next";
import { Compass, Workflow, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/sections/Section";
import { FinalCta } from "@/components/sections/FinalCta";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services — Consulting, Implementation, Training",
  description:
    "What comes after the assessment: consulting, implementation support, and training tailored to your business.",
};

const services = [
  {
    icon: Compass,
    title: "Consulting",
    body: "For businesses that need expert guidance, planning, and direct support. We help you make smart AI decisions based on how your company really works.",
  },
  {
    icon: Workflow,
    title: "Automations",
    body: "For businesses ready to remove busywork and scale. We design and build the workflows, integrations, and AI-driven systems that make your operation run itself.",
  },
  {
    icon: GraduationCap,
    title: "Courses and Training",
    body: "For teams and owners who need practical education, better understanding, and a stronger base before moving forward.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            What comes <span className="text-navy/60">after the assessment</span>
          </>
        }
        lede="Once we see what your business needs, we guide the right next step — or we tell you to wait."
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
              eyebrow="A note"
              title="Not every company needs the same next step."
              lede="That is why the assessment comes first. We do not force AI where it does not belong."
            />
            <div className="mt-10 flex justify-center">
              <ButtonLink href="/assessment/start" variant="primary" size="lg" withArrow>
                Start with the AI Assessment
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
