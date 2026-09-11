import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "../../lib/cn";

type Variant = "primary" | "outline" | "ghost" | "lime" | "dark";

const fill: Record<Variant, string> = {
  primary: "bg-mint",
  outline: "bg-mint",
  ghost: "bg-transparent",
  lime: "bg-cream",
  dark: "bg-mint",
};

const styles: Record<Variant, string> = {
  primary: "bg-mint-deep text-cream hover:text-void",
  outline: "border border-mint/70 text-cream hover:text-void hover:border-mint",
  ghost: "text-cream/80 hover:text-mint",
  lime: "bg-lime text-ink hover:text-ink",
  dark: "bg-void text-cream hover:text-void border border-white/10",
};

const shell =
  "group/btn relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-[transform,box-shadow,color] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(26,212,161,0.65)] active:translate-y-0 active:shadow-none disabled:pointer-events-none disabled:opacity-60 disabled:hover:translate-y-0";

export function buttonClass(variant: Variant = "primary", className?: string) {
  return cn(shell, styles[variant], className);
}

function Sweep({ variant }: { variant: Variant }) {
  if (variant === "ghost") return null;
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 translate-y-[105%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-y-0",
        fill[variant],
      )}
    />
  );
}

function Face({ variant, children }: { variant: Variant; children: ReactNode }) {
  return (
    <>
      <Sweep variant={variant} />
      <span className="relative z-10 inline-flex items-center justify-center gap-2">{children}</span>
    </>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
}) {
  return (
    <button type="button" className={buttonClass(variant, className)} {...props}>
      <Face variant={variant}>{children}</Face>
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: LinkProps & { variant?: Variant; children: ReactNode }) {
  return (
    <Link className={buttonClass(variant, className)} {...props}>
      <Face variant={variant}>{children}</Face>
    </Link>
  );
}

export function ButtonAnchor({
  variant = "outline",
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <a className={buttonClass(variant, className)} {...props}>
      <Face variant={variant}>{children}</Face>
    </a>
  );
}
