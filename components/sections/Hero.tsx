import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { ConcentricRings, CrossHair } from "@/components/decor";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <BackdropPattern />

      <Container className="relative pt-16 pb-20 md:pt-28 md:pb-32">
        <div className="relative max-w-4xl">
          <span className="eyebrow mb-6">Consulting · Automations · Courses</span>
          <h1 className="text-navy">
            AI help that fits how your business actually runs,{" "}
            <span className="text-navy/60">not how the hype says it should.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-[1.125rem] md:text-xl leading-relaxed text-slate">
            Newsly Global is a consultancy for established businesses. We offer{" "}
            <span className="text-navy font-semibold">consulting</span>,{" "}
            <span className="text-navy font-semibold">automations</span>, and{" "}
            <span className="text-navy font-semibold">courses</span>. Every
            engagement starts with our{" "}
            <span className="text-navy font-semibold">AI Assessment</span>, so
            you know what is worth doing.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
            <ButtonLink href="/assessment" variant="primary" size="lg" withArrow>
              Start with the Assessment
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" size="lg">
              See What We Do
            </ButtonLink>
          </div>

          <p className="mt-6 text-[0.875rem] text-slate">
            Built for established businesses doing{" "}
            <span className="text-navy font-medium">$1M to $7M</span> in revenue.
          </p>
        </div>

        <TrustStrip />
      </Container>
    </section>
  );
}

function BackdropPattern() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(80% 60% at 85% 0%, rgba(200,164,107,0.10), transparent 60%), radial-gradient(60% 50% at 0% 20%, rgba(47,93,140,0.08), transparent 60%)",
        }}
      />

      <div
        aria-hidden
        className="hidden md:block pointer-events-none absolute -right-24 -top-24 lg:-right-10 lg:-top-16 xl:right-0 xl:top-0 opacity-90"
      >
        <ConcentricRings size={560} className="text-navy/30" />
      </div>

      <div
        aria-hidden
        className="hidden lg:block pointer-events-none absolute bottom-6 left-[52%] w-[32%] h-48 bg-dot-field mask-fade-r opacity-60"
      />

      <CrossHair
        size={16}
        className="hidden md:block absolute top-10 left-[10%] text-gold/70"
      />
      <CrossHair
        size={16}
        className="hidden md:block absolute top-[40%] right-[8%] text-gold/60"
      />

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(200,164,107,0.45) 50%, transparent 100%)",
        }}
      />
    </>
  );
}

function TrustStrip() {
  const items = [
    { label: "Years typical client", value: "7–10+" },
    { label: "Client revenue range", value: "$1M–$7M" },
    { label: "Turnaround", value: "Focused & fast" },
  ];

  return (
    <div className="relative mt-14 pt-8 border-t border-line grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-6 md:grid-cols-3">
      <div
        aria-hidden
        className="absolute -top-px left-0 h-px w-16 bg-gold"
      />
      {items.map((it) => (
        <div key={it.label} className="flex flex-col gap-1 min-w-0">
          <span className="text-[0.6875rem] sm:text-[0.75rem] uppercase tracking-[0.14em] text-slate">
            {it.label}
          </span>
          <span
            className="text-[1.0625rem] sm:text-xl md:text-2xl text-navy font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {it.value}
          </span>
        </div>
      ))}
    </div>
  );
}
