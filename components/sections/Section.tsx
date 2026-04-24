import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  tone = "default",
  spacing = "default",
  pattern = "none",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "surface" | "dark";
  spacing?: "default" | "tight";
  pattern?: "none" | "dots" | "diagonals";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        spacing === "default" ? "py-20 md:py-28" : "py-14 md:py-20",
        tone === "default" && "bg-bg",
        tone === "surface" && "bg-white",
        tone === "dark" && "bg-navy text-bg",
        className,
      )}
    >
      {pattern === "dots" ? (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 mask-fade-b",
            tone === "dark" ? "bg-dot-field-gold opacity-20" : "bg-dot-field opacity-35",
          )}
        />
      ) : null}
      {pattern === "diagonals" ? (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0",
            tone === "dark" ? "bg-diag-lines-gold opacity-40" : "bg-diag-lines opacity-80",
          )}
        />
      ) : null}
      <div className="relative">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className={cn("eyebrow mb-5")}>{eyebrow}</span>
      ) : null}
      <h2
        className={cn(
          "font-bold tracking-tight",
          tone === "light" && "text-bg",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "mt-5 text-[1.0625rem] md:text-lg leading-relaxed",
            tone === "light" ? "text-bg/75" : "text-slate",
          )}
        >
          {lede}
        </p>
      ) : null}
      <span
        aria-hidden
        className={cn(
          "mt-6 block h-px w-12",
          tone === "light" ? "bg-gold/80" : "bg-gold",
          align === "center" && "mx-auto",
        )}
      />
    </div>
  );
}
