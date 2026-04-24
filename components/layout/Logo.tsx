import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-blue outline-offset-4 rounded-sm",
        className,
      )}
      aria-label="Newsly Global — home"
    >
      <span
        aria-hidden
        className={cn(
          "relative inline-flex h-8 w-8 items-center justify-center rounded-md",
          tone === "dark" ? "bg-navy" : "bg-bg",
        )}
      >
        <span
          className={cn(
            "absolute inset-[3px] rounded-[4px] border",
            tone === "dark" ? "border-gold/70" : "border-gold",
          )}
        />
        <span
          className={cn(
            "relative font-semibold text-[0.8125rem] tracking-tight",
            tone === "dark" ? "text-bg" : "text-navy",
          )}
          style={{ fontFamily: "var(--font-display)" }}
        >
          N
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-semibold text-[0.9375rem] tracking-tight",
            tone === "dark" ? "text-navy" : "text-bg",
          )}
          style={{ fontFamily: "var(--font-display)" }}
        >
          Newsly Global
        </span>
        <span
          className={cn(
            "mt-1 text-[0.6875rem] uppercase tracking-[0.18em] font-medium",
            tone === "dark" ? "text-slate" : "text-bg/60",
          )}
        >
          AI Clarity
        </span>
      </span>
    </Link>
  );
}
