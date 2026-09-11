import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

export function LineField({
  id,
  label,
  error,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
}) {
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-cream/45">{label}</span>
      <span className={cn("input-line", error && "is-invalid")}>
        <input
          id={id}
          className={cn("input-line__control", className)}
          aria-invalid={error ? true : undefined}
          {...props}
        />
      </span>
      {error ? (
        <span className="mt-1.5 block text-sm text-red-400" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export function LineInput({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <span className="input-line block">
      <input className={cn("input-line__control", className)} {...props} />
    </span>
  );
}

export function FieldHint({ children }: { children: ReactNode }) {
  return <p className="text-center text-xs uppercase tracking-[0.16em] text-cream/35">{children}</p>;
}
