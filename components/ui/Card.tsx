import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  as: Tag = "div",
  elevated,
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  elevated?: boolean;
}) {
  return (
    <Tag
      className={cn(
        "bg-white rounded-lg border border-line p-8 transition-shadow duration-200",
        elevated ? "shadow-[var(--shadow-lift)]" : "shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
