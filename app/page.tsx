import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeading } from "@/components/sections/Section";
import { FeatureList } from "@/components/sections/FeatureList";
import { StepList } from "@/components/sections/StepList";
import { PriceCallout } from "@/components/sections/PriceCallout";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { SocialProofStrip } from "@/components/sections/SocialProofStrip";
import { FinalCta } from "@/components/sections/FinalCta";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Shield, LineChart, Target, Compass } from "lucide-react";
import { ConcentricRings, CrossHair } from "@/components/decor";

const steps = [
  {
    title: "Book a discovery call",
    body: "We talk through your business, where AI fits, and whether the program is the right move right now.",
  },
  {
    title: "Enroll in the program",
    body: "You get access to the course, and we schedule your assessment and three coaching calls.",
  },
  {
    title: "Start with the assessment",
    body: "We review how your business runs today and where AI actually fits — your roadmap for the rest of the program.",
  },
  {
    title: "Apply what you learn",
    body: "Move through the course at your pace, then meet with us three times to put it to work in your business.",
  },
];

const programBullets = [
  "An AI Assessment built around your business",
  "A practical course made for established companies",
  "Three live coaching calls with us",
  "Clear, useful direction — no hype",
  "Optional follow-on consulting if you need it",
];

const idealFor = [
  "In business for 7–10+ years",
  "Revenue between $1M and $7M",
  "Looking to grow smarter",
  "Open to AI, but not chasing hype",
  "Want clear answers before making decisions",
];

const notIdealFor = [
  "Brand-new businesses",
  "People looking for cheap AI hacks",
  "Teams that want tools without fixing process first",
];

const proofs = [
  { icon: Shield, title: "Practical, not trendy" },
  { icon: LineChart, title: "Built for established companies" },
  { icon: Target, title: "Focused on business value" },
  { icon: Compass, title: "Clear next steps" },
];

const outcomes = [
  "A clear picture of your AI readiness",
  "A practical understanding of where AI fits in your business",
  "A team that knows how to use AI well",
  "Three live coaching calls focused on your specific work",
  "A real plan you have already started executing",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* WHAT'S INSIDE THE PROGRAM */}
      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow="Inside the program"
            title="One program. Three parts that work together."
            lede="The AI Growth Program pairs an assessment, a practical course, and three live coaching calls — built so you actually use what you learn."
          />
          <div className="mt-12">
            <ServicesPreview />
          </div>
        </Container>
      </Section>

      {/* PROBLEM */}
      <Section pattern="diagonals">
        <Container>
          <SectionHeading
            eyebrow="The problem"
            title="Most business owners do not need more AI noise. They need a real plan."
            lede={
              <>
                AI can save time, improve work, and support growth. But not every
                business is ready. And not every AI tool is worth using. That is
                where many owners get stuck.
              </>
            }
          />
          <div className="prose-x mt-8">
            <p>
              They hear big promises. They see too many tools. They do not know
              what fits, what is useful, or what will waste money.
            </p>
            <p>
              The AI Growth Program gives you a clear path: an assessment to see
              where you stand, a course to teach what matters, and three live
              coaching calls to make sure it actually gets used.
            </p>
          </div>
        </Container>
      </Section>

      {/* PROGRAM CALLOUT */}
      <Section tone="surface">
        <Container>
          <PriceCallout
            eyebrow="The program"
            title="The AI Growth Program"
            bullets={programBullets}
            ctaLabel="Book a Discovery Call"
            ctaHref="/contact"
            secondaryLabel="See how it works"
            secondaryHref="/#how-it-works"
            rightTitle="One unified program"
            rightBody="Assessment, course, and coaching in one structured path."
          />
        </Container>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how-it-works">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Simple. Clear. Useful."
            lede="A focused, four-step path from discovery call to real results in your business."
          />
          <div className="mt-12">
            <StepList steps={steps} />
          </div>
          <div className="mt-12 flex justify-center">
            <ButtonLink href="/contact" variant="primary" size="lg" withArrow>
              Book a Discovery Call
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* WHO IT IS FOR */}
      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow="Who it's for"
            title="Built for real businesses, not AI hobby projects"
            lede="We work best with owners who already have a real company, real customers, and real complexity."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card>
              <h3
                className="text-[1.25rem] text-navy mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ideal fit
              </h3>
              <div className="h-px w-10 bg-success mb-6" aria-hidden />
              <FeatureList items={idealFor} variant="check" />
            </Card>
            <Card>
              <h3
                className="text-[1.25rem] text-navy mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Not a fit
              </h3>
              <div className="h-px w-10 bg-navy/20 mb-6" aria-hidden />
              <FeatureList items={notIdealFor} variant="x" />
            </Card>
          </div>
        </Container>
      </Section>

      {/* WHY NEWSLY */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20 items-start">
            <SectionHeading
              eyebrow="Why Newsly Global"
              title="Trusted guidance for serious operators"
              lede={
                <>
                  We are not here to sell you AI for the sake of AI. We are here
                  to help you make a smart business decision. That means being
                  honest about what is ready, what is not, and what is worth
                  doing now.
                </>
              }
            />
            <ul className="grid gap-5 sm:grid-cols-2">
              {proofs.map((p) => (
                <li
                  key={p.title}
                  className="relative overflow-hidden bg-white rounded-lg border border-line p-6 flex items-start gap-4 shadow-[var(--shadow-soft)]"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute top-0 right-0 h-10 w-10"
                    style={{
                      background:
                        "linear-gradient(225deg, rgba(200,164,107,0.3) 0%, rgba(200,164,107,0) 60%)",
                    }}
                  />
                  <CrossHair
                    size={10}
                    className="absolute top-3 right-3 text-gold/60"
                  />
                  <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gold/10 text-gold ring-1 ring-gold/20">
                    <p.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span
                    className="relative text-navy text-[1rem] leading-snug font-semibold tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* OUTCOMES */}
      <Section pattern="dots">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-start">
            <div className="relative">
              <SectionHeading
                eyebrow="What you leave with"
                title="Outcomes, not theory"
                lede="By the end of the program you have a plan, the skills, and the working sessions to put AI to work."
              />
              <div aria-hidden className="hidden lg:block absolute -left-24 top-10 opacity-90">
                <ConcentricRings size={220} className="text-navy/15" />
              </div>
            </div>
            <Card className="relative lg:mt-4 overflow-hidden">
              <span
                aria-hidden
                className="pointer-events-none absolute top-0 right-0 h-14 w-14"
                style={{
                  background:
                    "linear-gradient(225deg, rgba(200,164,107,0.35) 0%, rgba(200,164,107,0) 60%)",
                }}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute top-6 right-6 h-px w-8 bg-gold/70"
              />
              <FeatureList items={outcomes} variant="dot" />
            </Card>
          </div>
        </Container>
      </Section>

      {/* SOCIAL PROOF */}
      <Section tone="surface">
        <Container>
          <SocialProofStrip />
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
