import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export function Label({
  htmlFor,
  children,
  optional,
  className,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
  className?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "block text-[0.8125rem] font-semibold text-navy mb-2 tracking-tight",
        className,
      )}
    >
      {children}
      {optional ? (
        <span className="ml-2 text-slate font-normal">(optional)</span>
      ) : null}
    </label>
  );
}

const inputBase =
  "block w-full rounded-md border border-line bg-white px-4 py-3 text-[0.9375rem] text-navy placeholder:text-slate/60 transition-colors duration-150 focus:border-blue focus:outline-none focus:ring-4 focus:ring-blue/10 disabled:opacity-60 disabled:cursor-not-allowed";

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...rest }, ref) {
    return <input ref={ref} className={cn(inputBase, className)} {...rest} />;
  },
);

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, rows = 4, ...rest }, ref) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(inputBase, "resize-y leading-relaxed", className)}
      {...rest}
    />
  );
});

export const Select = forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(function Select({ className, children, ...rest }, ref) {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          inputBase,
          "appearance-none pr-10 bg-white cursor-pointer",
          className,
        )}
        {...rest}
      >
        {children}
      </select>
      <svg
        aria-hidden
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M5 8l5 5 5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
});

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-[0.8125rem] text-red-700" role="alert">
      {message}
    </p>
  );
}

export function FieldHint({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-[0.8125rem] text-slate">{children}</p>;
}
