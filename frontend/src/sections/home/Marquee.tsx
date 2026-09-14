import { useHome } from "../../content/useCopy";

export function Marquee() {
  const { marquee } = useHome();
  const line = [...marquee, ...marquee, ...marquee, ...marquee];
  return (
    <div className="overflow-hidden border-y border-white/8 bg-void py-4" aria-hidden="true">
      <div className="marquee-track gap-10 pr-10">
        {line.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 font-display text-sm uppercase tracking-[0.28em] text-cream/50">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
          </span>
        ))}
      </div>
    </div>
  );
}
