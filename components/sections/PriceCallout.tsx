import { ButtonLink } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { ConcentricRings, CornerTicks } from "@/components/decor";

export function PriceCallout({
  title = "Start with the AI Assessment",
  bullets,
  ctaLabel = "Get Your Assessment",
  ctaHref = "/assessment/start",
  secondaryHref,
  secondaryLabel,
  note,
}: {
  title?: string;
  bullets: string[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  note?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-navy text-bg shadow-[var(--shadow-lift)]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          background:
            "radial-gradient(60% 60% at 100% 0%, rgba(200,164,107,0.18), transparent 60%), radial-gradient(60% 60% at 0% 100%, rgba(47,93,140,0.25), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-field-gold opacity-30 mask-fade-r"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-20 hidden sm:block"
      >
        <ConcentricRings
          size={440}
          className="text-bg/15"
          arc={true}
          center
        />
      </div>

      <CornerTicks tone="gold" inset="inset-4" className="hidden md:block" />

      <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 p-6 sm:p-8 md:p-12">
        <div className="min-w-0">
          <span
            className="inline-flex items-center gap-2 text-gold text-[0.75rem] uppercase tracking-[0.18em] font-semibold"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <span className="h-px w-6 bg-gold" aria-hidden />
            The offer
          </span>
          <h3
            className="mt-4 text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] leading-tight text-bg break-words"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h3>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-bg/85 text-[0.9375rem]">
                <Check
                  className="h-4 w-4 mt-[0.3rem] shrink-0 text-gold"
                  strokeWidth={2.25}
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:border-l lg:border-bg/15 lg:pl-14 flex flex-col justify-center">
          <div className="flex items-baseline gap-2">
            <span
              className="text-[3rem] md:text-[3.5rem] leading-none font-bold text-bg tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              $1,495
            </span>
            <span className="text-bg/60 text-[0.9375rem]">one-time</span>
          </div>
          <p className="mt-3 text-bg/70 text-[0.9375rem] leading-relaxed">
            A focused business audit. A clear recommendation.
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <ButtonLink href={ctaHref} variant="gold" size="lg" withArrow>
              {ctaLabel}
            </ButtonLink>
            {secondaryHref && secondaryLabel ? (
              <ButtonLink
                href={secondaryHref}
                variant="ghost"
                size="md"
                className="text-bg hover:bg-bg/10 hover:text-bg"
              >
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>

          {note ? (
            <p className="mt-5 text-bg/55 text-[0.8125rem] leading-relaxed">{note}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
