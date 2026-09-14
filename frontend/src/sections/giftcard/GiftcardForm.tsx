import { useState, type FormEvent } from "react";
import { GIFTCARD_PLANS, type GiftcardPlanId } from "../../data/giftcard";
import { Reveal } from "../../components/Reveal";
import { Button } from "../../components/ui/Button";
import { LineField, LineTextarea } from "../../components/ui/Field";
import { submitApplicationForm } from "../../lib/submit";
import { cn } from "../../lib/cn";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function GiftcardForm({
  plan,
  onPlan,
}: {
  plan: GiftcardPlanId;
  onPlan: (id: GiftcardPlanId) => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
    consent?: string;
  }>({});
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Пожалуйста, укажите имя";
    if (!phone.trim()) next.phone = "Пожалуйста, укажите номер телефона";
    if (!email.trim()) next.email = "Пожалуйста, укажите электронную почту";
    else if (!isEmail(email.trim())) next.email = "Проверьте адрес электронной почты";
    if (!consent) next.consent = "Нужно подтвердить согласие";
    setErrors(next);
    if (Object.keys(next).length) return;

    setPending(true);
    setStatus("");
    const result = await submitApplicationForm({
      plan,
      name,
      phone,
      email,
      comment,
      consent,
      source: "giftcard-form",
    });
    setPending(false);
    if (result.status === "not_configured") {
      setStatus("Отправка заявок будет подключена на следующем этапе");
      return;
    }
    if (result.status === "error") {
      setStatus(result.message);
    }
  }

  return (
    <section
      id="giftcard-form"
      className="relative isolate overflow-hidden py-24 lg:py-32"
      aria-labelledby="giftcard-form-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img src="/assets/img/giftcard/purchase-bg.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-void/80" />
      </div>

      <div className="container-site relative z-10 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">Подарок уже почти готов</p>
          <h2
            id="giftcard-form-title"
            className="mt-4 max-w-[14ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-5xl"
          >
            Выберите карту — мы свяжемся
          </h2>
          <p className="mt-6 max-w-lg text-lg text-cream/65">
            Оставьте контакты. Уточним детали и поможем оформить подарок без лишних шагов.
          </p>
          <ul className="mt-10 divide-y divide-white/8 border-y border-white/8 text-cream/70">
            <li className="py-3">Индивидуальный формат</li>
            <li className="py-3">50 минут каждый урок</li>
            <li className="py-3">Можно без опыта</li>
          </ul>
        </Reveal>

        <Reveal delay={80}>
          <form
            id="giftcard-order-form"
            className="rounded-[1.8rem] border border-white/10 bg-void/70 p-8 backdrop-blur-md md:p-10"
            onSubmit={onSubmit}
            noValidate
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">Заявка на покупку</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">Какую карту дарим?</h3>
            <p className="mt-2 text-sm text-cream/55">Выберите вариант и оставьте контакты.</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2" role="radiogroup" aria-label="Вариант подарочной карты">
              {GIFTCARD_PLANS.map((item) => {
                const selected = plan === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => onPlan(item.id)}
                    className={cn(
                      "flex cursor-pointer items-end justify-between rounded-2xl border px-4 py-4 text-left transition-colors",
                      selected ? "border-mint/50 bg-mint/10" : "border-white/10 hover:border-white/20",
                    )}
                  >
                    <span>
                      <span className="block text-xs uppercase tracking-[0.16em] text-cream/45">{item.meta}</span>
                      <span className="mt-1 block font-display text-lg font-semibold">{item.title}</span>
                    </span>
                    <span className="font-display text-2xl font-semibold">{item.price} €</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <LineField
                id="gift-name"
                label="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
                autoComplete="name"
              />
              <LineField
                id="gift-phone"
                label="Номер телефона"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={errors.phone}
                autoComplete="tel"
                type="tel"
              />
            </div>
            <div className="mt-5">
              <LineField
                id="gift-email"
                label="Электронная почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
                autoComplete="email"
                type="email"
              />
            </div>
            <div className="mt-5">
              <LineTextarea
                id="gift-comment"
                label="Комментарий"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={3}
              />
            </div>
            <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm text-cream/70">
              <input
                type="checkbox"
                name="consent"
                className="mt-1 h-4 w-4 accent-mint"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                aria-invalid={errors.consent ? true : undefined}
              />
              <span>Согласен на обработку персональных данных</span>
            </label>
            {errors.consent ? (
              <p className="mt-1.5 text-sm text-red-400" role="alert">
                {errors.consent}
              </p>
            ) : null}
            <Button type="submit" className="mt-8 w-full py-4" disabled={pending}>
              {pending ? "Отправка…" : "Купить подарочную карту"}
            </Button>
            {status ? (
              <p className="mt-4 text-sm text-mint" role="status">
                {status}
              </p>
            ) : (
              <p className="mt-4 text-center text-xs uppercase tracking-[0.16em] text-cream/35">
                Мы свяжемся, чтобы подтвердить вариант и уточнить детали оформления.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
