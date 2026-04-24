import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/sections/Section";
import { FinalCta } from "@/components/sections/FinalCta";
import { Container } from "@/components/layout/Container";
import { FounderCards } from "@/components/sections/FounderCards";

export const metadata: Metadata = {
  title: "About Newsly Global",
  description:
    "Newsly Global helps established businesses make smart, clear decisions about AI. We start with the business, not the tool.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            A smarter way to approach{" "}
            <span className="text-navy/60">AI in business</span>
          </>
        }
        lede="Newsly Global helps established businesses make smart, clear decisions about AI."
      >
        <div className="prose-x">
          <p>
            We believe business owners should not have to guess. They should be
            able to see what is ready, what is useful, and what next step makes
            sense.
          </p>
        </div>
      </PageHero>

      <Section tone="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 items-start">
            <SectionHeading
              eyebrow="Our approach"
              title="We start with the business, not the tool"
            />
            <div className="prose-x">
              <p>
                That means we look at how work gets done, where friction lives,
                and where AI may create value.
              </p>
              <p>
                We do not force solutions. We help you choose the right move at
                the right time.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="Three founders. One shared focus."
            lede="Helping businesses make better decisions, build better systems, and grow with clarity."
          />
          <div className="mt-12">
            <FounderCards />
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
