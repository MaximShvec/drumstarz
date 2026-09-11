export function PlaceholderPage({ title }: { title: string }) {
  return (
    <section className="flex min-h-svh items-end bg-void px-[max(1.25rem,calc((100%-1240px)/2+1.25rem))] pb-24 pt-40">
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-mint">Следующий этап</p>
        <h1 className="mt-4 max-w-[14ch] font-display text-5xl font-extrabold leading-[0.95] sm:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-md text-cream/60">
          Сначала утверждаем главную. Эта страница появится после неё и возьмёт тексты из текущей вёрстки.
        </p>
      </div>
    </section>
  );
}
