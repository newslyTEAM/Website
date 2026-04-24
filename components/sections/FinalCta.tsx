import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { ConcentricRings } from "@/components/decor";

export function FinalCta({
  eyebrow = "Ready to start",
  title = "Turn AI into real growth.",
  body = "Book a discovery call. We'll talk through your business and whether the program is the right next step.",
  ctaLabel = "Book a Discovery Call",
  ctaHref = "/contact",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-bg">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(55% 55% at 85% 0%, rgba(200,164,107,0.18), transparent 60%), radial-gradient(55% 55% at 0% 100%, rgba(47,93,140,0.28), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-field-gold opacity-25 mask-radial"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -bottom-32 hidden md:block"
      >
        <ConcentricRings size={420} className="text-bg/12" arc={false} center={false} />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 hidden md:block"
      >
        <ConcentricRings size={340} className="text-bg/15" />
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(200,164,107,0.55) 50%, transparent 100%)",
        }}
      />

      <Container className="relative py-20 md:py-28 text-center">
        <span className="eyebrow justify-center mb-5" style={{ color: "#C8A46B" }}>
          {eyebrow}
        </span>
        <h2
          className="text-bg max-w-3xl mx-auto"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-[1.0625rem] md:text-lg leading-relaxed text-bg/70">
          {body}
        </p>
        <div className="mt-10 flex justify-center">
          <ButtonLink href={ctaHref} variant="gold" size="lg" withArrow>
            {ctaLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
