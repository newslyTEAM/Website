import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your request was received. We'll be in touch shortly.",
  robots: { index: false, follow: false },
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ kind?: string }>;
}) {
  const { kind } = await searchParams;
  const isIntake = kind === "intake";

  return (
    <>
      <PageHero
        eyebrow="You're in"
        title={
          isIntake
            ? "We'll review your business and guide the next step."
            : "Message received. We'll be in touch soon."
        }
        lede={
          isIntake
            ? "Thank you for applying to The AI Growth Program. Your intake has been received. Our team will review your information and reach out to schedule your discovery call."
            : "Thanks for reaching out. We read every message and respond personally — usually within one business day."
        }
      />

      <Section tone="surface">
        <Container size="narrow">
          <Card elevated className="text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success mb-6">
              <CheckCircle2 className="h-7 w-7" strokeWidth={1.5} />
            </span>
            <h2
              className="text-[1.5rem] md:text-[1.75rem] text-navy mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {isIntake ? "What happens next" : "Thanks again"}
            </h2>
            <p className="text-slate text-[1rem] leading-relaxed max-w-xl mx-auto">
              {isIntake
                ? "We review your intake and reach out to schedule your discovery call. Keep an eye on your inbox."
                : "We've logged your message and will get back to you shortly. In the meantime, you can read more about the program or our services."}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              {isIntake ? (
                <ButtonLink href="/#how-it-works" variant="primary" size="md">
                  See how the program works
                </ButtonLink>
              ) : (
                <ButtonLink href="/#how-it-works" variant="primary" size="md">
                  See how the program works
                </ButtonLink>
              )}
              <ButtonLink href="/" variant="secondary" size="md">
                Back to home
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
