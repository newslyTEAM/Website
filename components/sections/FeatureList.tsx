import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "check" | "x" | "dot";

export function FeatureList({
  items,
  variant = "check",
  className,
}: {
  items: string[];
  variant?: Variant;
  className?: string;
}) {
  return (
    <ul className={cn("space-y-4", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={cn(
              "mt-[0.1875rem] shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full",
              variant === "check" && "bg-success/10 text-success",
              variant === "x" && "bg-navy/5 text-slate",
              variant === "dot" && "bg-gold/15 text-gold",
            )}
          >
            {variant === "check" && <Check className="h-3.5 w-3.5" strokeWidth={2.5} />}
            {variant === "x" && <X className="h-3.5 w-3.5" strokeWidth={2.5} />}
            {variant === "dot" && (
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            )}
          </span>
          <span className="text-[1rem] md:text-[1.0625rem] text-slate leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
