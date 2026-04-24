import { Container } from "@/components/layout/Container";
import { ConcentricRings, CrossHair } from "@/components/decor";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-bg border-b border-line">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(70% 50% at 90% 0%, rgba(200,164,107,0.10), transparent 65%), radial-gradient(50% 40% at 0% 80%, rgba(47,93,140,0.06), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="hidden md:block pointer-events-none absolute -right-20 -top-20 opacity-90"
      >
        <ConcentricRings size={360} className="text-navy/25" />
      </div>
      <div
        aria-hidden
        className="hidden lg:block pointer-events-none absolute bottom-0 right-[12%] w-48 h-24 bg-dot-field mask-fade-b opacity-60"
      />
      <CrossHair
        size={14}
        className="hidden md:block absolute top-10 left-[8%] text-gold/70"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(200,164,107,0.35) 50%, transparent 100%)",
        }}
      />

      <Container className="relative pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="max-w-3xl">
          {eyebrow ? <span className="eyebrow mb-5">{eyebrow}</span> : null}
          <h1 className="text-navy">{title}</h1>
          {lede ? (
            <p className="mt-6 text-[1.0625rem] md:text-lg leading-relaxed text-slate">
              {lede}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
