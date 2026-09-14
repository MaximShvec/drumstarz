import { useState, type FormEvent } from "react";
import { Reveal } from "../../components/Reveal";
import { Button } from "../../components/ui/Button";
import { LineField, LineTextarea } from "../../components/ui/Field";
import { useCamp } from "../../content/useCopy";
import { useLocale } from "../../i18n/LocaleContext";
import { submitApplicationForm } from "../../lib/submit";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function CampForm() {
  const copy = useCamp();
  const { t } = useLocale();
  const f = t.form;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
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
      age,
      message,
      consent,
      source: "camp-form",
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
      id="camp-form"
      className="relative isolate overflow-hidden py-24 lg:py-32"
      aria-labelledby="camp-form-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img src="/assets/img/camp/gallery-lake-pier.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-void/80" />
      </div>

      <div className="container-site relative z-10 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{copy.form.kicker}</p>
          <h2
            id="camp-form-title"
            className="mt-4 max-w-[12ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-5xl"
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
            id="camp-booking-form"
            className="rounded-[1.8rem] border border-white/10 bg-void/70 p-8 backdrop-blur-md md:p-10"
            onSubmit={onSubmit}
            noValidate
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">{copy.form.formKicker}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">{copy.form.formTitle}</h3>
            <p className="mt-2 text-sm text-cream/55">{copy.form.formLead}</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <LineField
                id="camp-name"
                label={copy.form.parentName}
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
                autoComplete="name"
              />
              <LineField
                id="camp-phone"
                label={f.phone}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={errors.phone}
                autoComplete="tel"
                type="tel"
              />
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <LineField
                id="camp-email"
                label={f.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
                autoComplete="email"
                type="email"
              />
              <LineField
                id="camp-age"
                label={copy.form.childAge}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                inputMode="numeric"
                min={7}
                max={15}
                type="number"
              />
            </div>
            <div className="mt-5">
              <LineTextarea
                id="camp-message"
                label={copy.form.wishes}
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
              <span>{f.consent}</span>
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
              <p className="mt-4 text-center text-xs uppercase tracking-[0.16em] text-cream/35">
                {copy.form.hint}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
