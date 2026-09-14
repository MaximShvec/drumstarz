import { useState, type FormEvent } from "react";
import { Reveal } from "../../components/Reveal";
import { Button } from "../../components/ui/Button";
import { LineField, LineSelect, LineTextarea } from "../../components/ui/Field";
import { usePercussions } from "../../content/useCopy";
import { useLocale } from "../../i18n/LocaleContext";
import { submitApplicationForm } from "../../lib/submit";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function PercussionsForm() {
  const copy = usePercussions();
  const { t } = useLocale();
  const f = t.form;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [day, setDay] = useState("");
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
      day,
      message,
      consent,
      source: "percussions-form",
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
      id="percussions-form"
      className="relative isolate overflow-hidden py-24 lg:py-32"
      aria-labelledby="percussions-form-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/assets/img/percussions/forest-form-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-void/78" />
      </div>

      <div className="container-site relative z-10">
        <Reveal className="mx-auto max-w-2xl">
          <form
            id="percussions-booking-form"
            className="rounded-[1.8rem] border border-white/10 bg-void/70 p-8 backdrop-blur-md md:p-10"
            onSubmit={onSubmit}
            noValidate
            aria-labelledby="percussions-form-title"
          >
            <h2
              id="percussions-form-title"
              className="font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-5xl"
            >
              {copy.formTitle}
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <LineField
                id="percussions-name"
                label={f.yourName}
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
                autoComplete="name"
              />
              <LineField
                id="percussions-phone"
                label={f.phone}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={errors.phone}
                autoComplete="tel"
                type="tel"
              />
              <LineField
                id="percussions-email"
                label={f.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
                autoComplete="email"
                type="email"
              />
              <LineSelect
                id="percussions-day"
                label={copy.dayLabel}
                value={day}
                onChange={(e) => setDay(e.target.value)}
              >
                <option value="">{copy.dayPlaceholder}</option>
                {copy.days.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </LineSelect>
            </div>

            <div className="mt-5">
              <LineTextarea
                id="percussions-message"
                label={copy.experience}
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

            <Button type="submit" className="mt-8 w-full py-4 sm:w-auto sm:px-10" disabled={pending}>
              {pending ? f.sending : copy.submit}
            </Button>
            {status ? (
              <p className="mt-4 text-sm text-mint" role="status">
                {status}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
