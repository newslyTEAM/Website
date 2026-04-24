import { CornerTicks } from "@/components/decor";

export function SocialProofStrip() {
  return (
    <div className="relative rounded-lg border border-line bg-white px-8 py-10 md:px-14 md:py-14 text-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-field opacity-30 mask-fade-b"
      />
      <div
        aria-hidden
        className="absolute -top-px left-1/2 -translate-x-1/2 h-px w-24 bg-gold"
      />
      <CornerTicks tone="line" inset="inset-4" />

      <div className="relative">
        <span className="eyebrow justify-center mb-5">Built on Trust</span>
        <p
          className="text-[1.25rem] md:text-[1.5rem] leading-snug text-navy max-w-3xl mx-auto"
          style={{ fontFamily: "var(--font-display)" }}
        >
          &ldquo;Trusted by business owners who want clear answers before making
          AI decisions.&rdquo;
        </p>
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-60"
          aria-label="Client logos coming soon"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-6 w-24 rounded-sm bg-navy/10"
              aria-hidden
            />
          ))}
        </div>
      </div>
    </div>
  );
}
