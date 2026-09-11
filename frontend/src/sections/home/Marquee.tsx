const ITEMS = ["Живой звук", "Настоящая сцена", "С 2013", "Рига", "Бесплатный урок", "Два филиала"];

export function Marquee() {
  const line = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
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
