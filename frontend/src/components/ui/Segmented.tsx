import { cn } from "../../lib/cn";

export function Segmented<T extends string>({
  options,
  value,
  onChange,
  tone = "mint",
  "aria-label": ariaLabel,
  tabs = false,
}: {
  options: readonly { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  tone?: "mint" | "dark";
  "aria-label": string;
  tabs?: boolean;
}) {
  const index = Math.max(0, options.findIndex((o) => o.value === value));
  const pill = tone === "dark" ? "bg-void" : "bg-mint";
  const track = tone === "dark" ? "bg-ink/5" : "bg-white/5";

  return (
    <div
      className={cn("relative flex rounded-full p-1", track)}
      role={tabs ? "tablist" : "group"}
      aria-label={ariaLabel}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-1 bottom-1 left-1 rounded-full shadow-sm motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
          pill,
        )}
        style={{
          width: `calc((100% - 0.5rem) / ${options.length})`,
          transform: `translateX(${index * 100}%)`,
        }}
      />
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role={tabs ? "tab" : undefined}
            aria-selected={tabs ? active : undefined}
            aria-pressed={tabs ? undefined : active}
            onClick={() => onChange(opt.value)}
            className={cn(
              "relative z-10 flex-1 cursor-pointer rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-500",
              active
                ? tone === "dark"
                  ? "text-cream"
                  : "text-void"
                : tone === "dark"
                  ? "text-ink-soft hover:text-ink"
                  : "text-cream/60 hover:text-cream",
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
