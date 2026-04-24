import Link from "next/link";
import { ArrowRight, ClipboardCheck, GraduationCap, Users } from "lucide-react";

const pillars = [
  {
    icon: ClipboardCheck,
    title: "AI Assessment",
    body: "We start by reviewing how your business runs today and where AI actually fits — so the rest of the program is built around your reality.",
    href: "/assessment",
    cta: "About the assessment",
  },
  {
    icon: GraduationCap,
    title: "The Course",
    body: "Practical AI training made for established businesses. Self-paced, no fluff — just what you and your team need to use AI well.",
    href: "/courses",
    cta: "About the course",
  },
  {
    icon: Users,
    title: "3 Live Coaching Calls",
    body: "Three working sessions with us to take what the course teaches and put it to work in your specific business.",
    href: "/services",
    cta: "About coaching",
  },
];

export function ServicesPreview() {
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {pillars.map((s) => (
        <li
          key={s.title}
          className="group relative overflow-hidden bg-white rounded-lg border border-line p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5 transition-all duration-200"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 h-12 w-12"
            style={{
              background:
                "linear-gradient(225deg, rgba(200,164,107,0.35) 0%, rgba(200,164,107,0.0) 60%)",
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute top-6 right-6 h-px w-6 bg-gold/60"
          />

          <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy/[0.04] text-navy mb-6 ring-1 ring-line">
            <span
              aria-hidden
              className="absolute -inset-1 rounded-lg border border-dashed border-gold/30"
            />
            <s.icon className="h-5 w-5" strokeWidth={1.25} />
          </span>
          <h3
            className="text-[1.25rem] leading-tight text-navy mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {s.title}
          </h3>
          <p className="text-[0.9375rem] leading-relaxed text-slate">{s.body}</p>
          <Link
            href={s.href}
            className="mt-6 inline-flex items-center gap-2 text-[0.875rem] font-semibold text-navy hover:text-blue"
          >
            {s.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
