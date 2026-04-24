import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "gold";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-tight rounded-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-blue disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-bg hover:bg-[#1e293b] shadow-[0_1px_2px_rgb(15_23_42_/0.12),0_8px_24px_rgb(15_23_42_/0.16)] hover:shadow-[0_1px_2px_rgb(15_23_42_/0.18),0_12px_32px_rgb(15_23_42_/0.22)]",
  secondary:
    "bg-white text-navy border border-line hover:border-navy/30 hover:bg-white",
  ghost:
    "bg-transparent text-navy hover:bg-navy/5",
  gold:
    "bg-gold text-navy hover:bg-[#b8945d] shadow-[0_1px_2px_rgb(200_164_107_/0.3),0_8px_24px_rgb(200_164_107_/0.25)]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-[3.25rem] px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  withArrow?: boolean;
};

type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, children, withArrow, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
      {withArrow ? <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden /> : null}
    </button>
  );
});

type ButtonLinkProps = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "className" | "children">;

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  withArrow,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
      {withArrow ? <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden /> : null}
    </Link>
  );
}
