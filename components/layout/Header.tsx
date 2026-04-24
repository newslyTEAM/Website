import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";

const nav = [
  { label: "Home", href: "/" },
  { label: "AI Assessment", href: "/assessment" },
  { label: "Services", href: "/services" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70 border-b border-line/80"
      style={{ ["--header-h" as string]: "4.5rem" }}
    >
      <div className="container-x h-[4.5rem] flex items-center justify-between gap-6">
        <Logo />

        <nav
          className="hidden md:flex items-center gap-7"
          aria-label="Primary"
        >
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.9375rem] text-slate hover:text-navy transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ButtonLink href="/assessment" variant="primary" size="md">
            Get Assessment
          </ButtonLink>
        </div>

        <MobileMenu items={nav} />
      </div>
    </header>
  );
}
