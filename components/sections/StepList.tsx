import { NumberedBadge } from "@/components/decor";

export type Step = {
  title: string;
  body: string;
};

export function StepList({ steps }: { steps: Step[] }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="hidden lg:block absolute top-[2.25rem] left-[6%] right-[6%] h-px pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(200,164,107,0.55) 0 6px, transparent 6px 12px)",
        }}
      />
      <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {steps.map((step, idx) => (
          <li
            key={step.title}
            className="relative bg-white rounded-lg border border-line p-7 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-px right-6 h-2 w-px bg-gold/70"
            />

            <div className="flex items-center gap-3 mb-5">
              <NumberedBadge n={idx + 1} />
              <div className="flex flex-col">
                <span
                  className="text-gold text-[0.6875rem] font-semibold tracking-[0.18em] uppercase"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Step
                </span>
                <span className="h-px w-6 bg-gold/60" aria-hidden />
              </div>
            </div>

            <h3
              className="text-[1.25rem] md:text-[1.375rem] leading-tight text-navy mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {step.title}
            </h3>
            <p className="text-[0.9375rem] leading-relaxed text-slate">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
