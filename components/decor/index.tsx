import { cn } from "@/lib/utils";

export function ConcentricRings({
  className,
  size = 420,
  arc = true,
  center = true,
}: {
  className?: string;
  size?: number;
  arc?: boolean;
  center?: boolean;
}) {
  const half = size / 2;
  const rings = [0.96, 0.82, 0.66, 0.5, 0.34, 0.18];
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={cn("text-navy/25", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
    >
      {rings.map((r) => (
        <circle key={r} cx={half} cy={half} r={half * r} />
      ))}
      {arc ? (
        <path
          d={`M ${half + half * 0.82} ${half} A ${half * 0.82} ${half * 0.82} 0 0 1 ${half} ${half + half * 0.82}`}
          stroke="#C8A46B"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      ) : null}
      {center ? <circle cx={half} cy={half} r={2.5} fill="#C8A46B" stroke="none" /> : null}
    </svg>
  );
}

export function CrossHair({
  size = 14,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const half = size / 2;
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={cn("text-gold", className)}
      stroke="currentColor"
      strokeWidth={1}
      fill="none"
    >
      <line x1={0} y1={half} x2={size} y2={half} />
      <line x1={half} y1={0} x2={half} y2={size} />
    </svg>
  );
}

export function CornerTicks({
  className,
  tone = "gold",
  inset = "inset-3",
}: {
  className?: string;
  tone?: "gold" | "line" | "bg";
  inset?: string;
}) {
  const color =
    tone === "gold"
      ? "border-gold/70"
      : tone === "bg"
        ? "border-bg/25"
        : "border-line";
  const positions = [
    `top-0 left-0 border-t border-l`,
    `top-0 right-0 border-t border-r`,
    `bottom-0 left-0 border-b border-l`,
    `bottom-0 right-0 border-b border-r`,
  ];
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute", inset, className)}
    >
      {positions.map((p) => (
        <span
          key={p}
          className={cn("absolute h-2.5 w-2.5", color, p)}
        />
      ))}
    </div>
  );
}

export function NumberedBadge({
  n,
  className,
  tone = "light",
}: {
  n: number;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "relative inline-flex h-12 w-12 items-center justify-center rounded-full",
        tone === "light" ? "bg-white" : "bg-navy",
        className,
      )}
      aria-hidden
    >
      <span
        className={cn(
          "absolute inset-0 rounded-full border",
          tone === "light" ? "border-line" : "border-bg/15",
        )}
      />
      <span
        className="absolute inset-[-6px] rounded-full border border-dashed"
        style={{ borderColor: "rgba(200,164,107,0.35)" }}
      />
      <span
        className={cn(
          "relative text-[1rem] font-semibold tracking-tight",
          tone === "light" ? "text-navy" : "text-bg",
        )}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {n.toString().padStart(2, "0")}
      </span>
    </span>
  );
}
