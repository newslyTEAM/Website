import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

const nav = [
  {
    heading: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "The program",
    items: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "AI Assessment", href: "/assessment" },
      { label: "The Course", href: "/courses" },
      { label: "Book a discovery call", href: "/contact" },
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
              The AI Growth Program for established businesses. Assessment,
              course, and coaching in one structured path.
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
            Turn AI Into Real Growth
          </p>
        </div>
      </div>
    </footer>
  );
}
