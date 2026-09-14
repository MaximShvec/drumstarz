import { useState, type FormEvent } from "react";
import { GIFTCARD_PLANS, type GiftcardPlanId } from "../../data/giftcard";
import { useGiftcard } from "../../content/useCopy";
import { Reveal } from "../../components/Reveal";
import { Button } from "../../components/ui/Button";
import { LineField, LineTextarea } from "../../components/ui/Field";
import { useLocale } from "../../i18n/LocaleContext";
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
  const copy = useGiftcard();
  const { t } = useLocale();
  const f = t.form;
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
    if (!name.trim()) next.name = f.errName;
    if (!phone.trim()) next.phone = f.errPhone;
    if (!email.trim()) next.email = f.errEmail;
    else if (!isEmail(email.trim())) next.email = f.errEmailInvalid;
    if (!consent) next.consent = f.errConsent;
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
      setStatus(f.notConfigured);
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
        <img src="/assets/img/giftcard/purchase-bg.webp" alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-void/80" />
      </div>

      <div className="container-site relative z-10 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{copy.form.kicker}</p>
          <h2
            id="giftcard-form-title"
            className="mt-4 max-w-[14ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-5xl"
          >
            {copy.form.title}
          </h2>
          <p className="mt-6 max-w-lg text-lg text-cream/65">{copy.form.lead}</p>
          <ul className="mt-10 divide-y divide-white/8 border-y border-white/8 text-cream/70">
            {copy.form.bullets.map((line) => (
              <li key={line} className="py-3">
                {line}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80}>
          <form
            id="giftcard-order-form"
            className="rounded-[1.8rem] border border-white/10 bg-void/70 p-8 backdrop-blur-md md:p-10"
            onSubmit={onSubmit}
            noValidate
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">{copy.form.formKicker}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">{copy.form.formTitle}</h3>
            <p className="mt-2 text-sm text-cream/55">{copy.form.formLead}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2" role="radiogroup" aria-label={copy.form.planAria}>
              {GIFTCARD_PLANS.map((item) => {
                const selected = plan === item.id;
                const planCopy = copy.plans[item.id];
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
                      <span className="block text-xs uppercase tracking-[0.16em] text-cream/45">{planCopy.meta}</span>
                      <span className="mt-1 block font-display text-lg font-semibold">{planCopy.title}</span>
                    </span>
                    <span className="font-display text-2xl font-semibold">{item.price} €</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <LineField
                id="gift-name"
                label={f.yourName}
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
                autoComplete="name"
              />
              <LineField
                id="gift-phone"
                label={f.phone}
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
                label={f.email}
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
                label={f.comment}
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
              <span>{f.consentData}</span>
            </label>
            {errors.consent ? (
              <p className="mt-1.5 text-sm text-red-400" role="alert">
                {errors.consent}
              </p>
            ) : null}
            <Button type="submit" className="mt-8 w-full py-4" disabled={pending}>
              {pending ? f.sending : copy.form.submit}
            </Button>
            {status ? (
              <p className="mt-4 text-sm text-mint" role="status">
                {status}
              </p>
            ) : (
              <p className="mt-4 text-center text-xs uppercase tracking-[0.16em] text-cream/35">{copy.form.hint}</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
