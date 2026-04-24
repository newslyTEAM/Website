import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

const nav = [
  {
    heading: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Courses", href: "/courses" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Get started",
    items: [
      { label: "AI Assessment", href: "/assessment" },
      { label: "Start assessment", href: "/assessment/start" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy", href: "/contact" },
      { label: "Terms", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-navy text-bg">
      <div className="container-x pt-20 pb-12">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-xs text-bg/70 text-[0.9375rem] leading-relaxed">
              Clear AI guidance for established businesses. Know what is ready,
              what is not, and what to do next.
            </p>
          </div>

          {nav.map((group) => (
            <div key={group.heading}>
              <h4
                className="text-bg text-[0.8125rem] font-semibold uppercase tracking-[0.14em]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {group.heading}
              </h4>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-bg/75 hover:text-bg transition-colors text-[0.9375rem]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-bg/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-bg/55 text-[0.8125rem]">
            © {new Date().getFullYear()} Newsly Global. All rights reserved.
          </p>
          <p
            className="text-gold/90 text-[0.8125rem] tracking-[0.14em] uppercase"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Clarity before AI. Growth after.
          </p>
        </div>
      </div>
    </footer>
  );
}
