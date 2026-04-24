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
    title: "We review your business",
    body: "We look at how your business runs today, where work slows down, and where AI may help.",
  },
  {
    title: "We assess readiness",
    body: "We evaluate your systems, workflows, team habits, and decision points to see what is ready now.",
  },
  {
    title: "We show what makes sense",
    body: "You get a clear view of where AI fits, where it does not, and what next step is right for your business.",
  },
  {
    title: "We guide the next move",
    body: "Based on your results, we may suggest consulting, support, training, courses, or no action yet.",
  },
];

const offerBullets = [
  "See if your business is truly ready for AI",
  "Find the best places to use AI",
  "Spot gaps in systems, data, and workflow",
  "Avoid costly tools you do not need",
  "Get a clear recommendation for what comes next",
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
  "A better view of process gaps",
  "Practical ideas with business value",
  "Less confusion",
  "A smart next-step recommendation",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* WHAT WE DO — three pillars */}
      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Three ways we help established businesses use AI well"
            lede="We are a consultancy for companies that want to move deliberately. Pick the fit — or start with the assessment if you are not sure yet."
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
            title="Most business owners do not need more AI noise. They need clear answers."
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
              Newsly Global helps you slow down, look at your business clearly,
              and make the right next move — whether that is consulting, an
              automation build, training, or waiting.
            </p>
          </div>
        </Container>
      </Section>

      {/* OFFER */}
      <Section tone="surface">
        <Container>
          <PriceCallout
            title="Every engagement starts with the AI Assessment"
            bullets={offerBullets}
            ctaLabel="Get Your Assessment"
            ctaHref="/assessment/start"
            secondaryLabel="See what's included"
            secondaryHref="/assessment"
          />
        </Container>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how-it-works">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Simple. Clear. Useful."
            lede="A focused, four-step process built around real business review — not generic advice."
          />
          <div className="mt-12">
            <StepList steps={steps} />
          </div>
          <div className="mt-12 flex justify-center">
            <ButtonLink href="/assessment/start" variant="primary" size="lg" withArrow>
              Start Your Assessment
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
                lede="Every assessment ends with specifics you can act on or defend against."
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
