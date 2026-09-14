import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
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

export function LineTextarea({
  id,
  label,
  error,
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
}) {
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-cream/45">{label}</span>
      <span className={cn("input-line", error && "is-invalid")}>
        <textarea
          id={id}
          className={cn("input-line__control min-h-28 resize-y", className)}
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

export function LineSelect({
  id,
  label,
  error,
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block" htmlFor={id}>
      <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-cream/45">{label}</span>
      <span className={cn("relative input-line", error && "is-invalid")}>
        <select
          id={id}
          className={cn("input-line__control cursor-pointer appearance-none bg-transparent pr-8", className)}
          aria-invalid={error ? true : undefined}
          {...props}
        >
          {children}
        </select>
        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-cream/40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </span>
      {error ? (
        <span className="mt-1.5 block text-sm text-red-400" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export function FieldHint({ children }: { children: ReactNode }) {
  return <p className="text-center text-xs uppercase tracking-[0.16em] text-cream/35">{children}</p>;
}
