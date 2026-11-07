import { WHY_ITEMS } from "../../data/home";
import { useHome } from "../../content/useCopy";
import { Reveal } from "../../components/Reveal";
import { Photo } from "../../components/media/Photo";

export function Why() {
  const copy = useHome();

  return (
    <section id="why" className="relative isolate overflow-clip py-12 lg:py-32" aria-labelledby="why-title">
      <Photo
        src="/assets/img/section3/why-drumstarz-bg.webp"
        alt=""
        sizes="100vw"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-void/78" />

      <div className="container-site relative">
        <Reveal className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mint">{copy.why.kicker}</p>
          <h2
            id="why-title"
            className="mt-4 max-w-[16ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
          >
            {copy.why.title}
            <br />
            {copy.why.titleLine2}
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-cream/65">{copy.why.lead}</p>
        </Reveal>

        <ul className="mt-16 grid gap-6 md:grid-cols-2">
          {WHY_ITEMS.map((item, i) => (
            <Reveal
              key={item.num}
              as="li"
              delay={i * 70}
              className={`relative rounded-[1.5rem] border border-white/8 p-8 ${i % 2 ? "md:translate-y-8" : ""}`}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[1.5rem] bg-white/4 backdrop-blur-sm [transform:translateZ(0)]"
              />
              <span className="relative font-display text-sm tracking-[0.22em] text-mint">{item.num}</span>
              <h3 className="relative mt-4 font-display text-2xl font-semibold">{copy.why.items[i].title}</h3>
              <p className="relative mt-3 text-cream/60">{copy.why.items[i].text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
