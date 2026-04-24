import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  size = "default",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(
        "w-full mx-auto px-6 md:px-10",
        size === "narrow" && "max-w-3xl",
        size === "default" && "max-w-6xl",
        size === "wide" && "max-w-7xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
