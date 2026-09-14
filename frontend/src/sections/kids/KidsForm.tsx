import { useState, type FormEvent } from "react";
import { Reveal } from "../../components/Reveal";
import { Button } from "../../components/ui/Button";
import { LineField, LineTextarea } from "../../components/ui/Field";
import { useKids } from "../../content/useCopy";
import { KIDS_BOOKING_STEPS } from "../../data/kids";
import { useLocale } from "../../i18n/LocaleContext";
import { submitApplicationForm } from "../../lib/submit";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function KidsForm() {
  const copy = useKids();
  const { t } = useLocale();
  const f = t.form;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
    consent?: string;
  }>({});
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);

  const steps = KIDS_BOOKING_STEPS.map((step, i) => ({ num: step.num, ...copy.form.steps[i] }));

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
      name,
      phone,
      email,
      date,
      message,
      consent,
      source: "kids-form",
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
      id="kids-booking"
      className="relative isolate overflow-hidden py-24 lg:py-32"
      aria-labelledby="kids-booking-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img src="/assets/img/kids/gallery-main-three-girls.jpg" alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-void/80" />
      </div>

      <div className="container-site relative z-10 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{copy.form.kicker}</p>
          <h2
            id="kids-booking-title"
            className="mt-4 max-w-[14ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-5xl"
          >
            {copy.form.title}
          </h2>
          <p className="mt-6 max-w-lg text-lg text-cream/65">{copy.form.lead}</p>
          <p className="mt-3 text-sm text-cream/45">{copy.form.reply}</p>
          <ol className="mt-10 divide-y divide-white/8">
            {steps.map((step) => (
              <li key={step.num} className="flex gap-5 py-4">
                <span className="font-display text-sm tracking-[0.22em] text-mint">{step.num}</span>
                <div>
                  <p className="font-display text-xl font-semibold">{step.title}</p>
                  <p className="mt-1 text-sm text-cream/55">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm uppercase tracking-[0.16em] text-cream/40">{copy.form.meta}</p>
        </Reveal>

        <Reveal delay={80}>
          <form
            className="rounded-[1.8rem] border border-white/10 bg-void/70 p-8 backdrop-blur-md md:p-10"
            onSubmit={onSubmit}
            noValidate
          >
            <h3 className="font-display text-2xl font-semibold">{copy.form.formTitle}</h3>
            <p className="mt-2 text-sm text-cream/55">{copy.form.formLead}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <LineField
                id="kids-booking-name"
                label={f.yourName}
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
                autoComplete="name"
              />
              <LineField
                id="kids-booking-phone"
                label={f.phone}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={errors.phone}
                autoComplete="tel"
                type="tel"
              />
              <LineField
                id="kids-booking-email"
                label={f.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
                autoComplete="email"
                type="email"
              />
              <LineField
                id="kids-booking-date"
                label={f.date}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
              />
            </div>
            <div className="mt-5">
              <LineTextarea
                id="kids-booking-message"
                label={f.guests}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
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
              <span>{f.consentTerms}</span>
            </label>
            {errors.consent ? (
              <p className="mt-1.5 text-sm text-red-400" role="alert">
                {errors.consent}
              </p>
            ) : null}
            <Button type="submit" className="mt-8 w-full py-4" disabled={pending}>
              {pending ? f.sending : f.submit}
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
