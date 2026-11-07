import { useState, type FormEvent } from "react";
import { Reveal } from "../../components/Reveal";
import { Photo } from "../../components/media/Photo";
import { Button } from "../../components/ui/Button";
import { ConsentCheck } from "../../components/legal/ConsentCheck";
import { LineField } from "../../components/ui/Field";
import { usePercussions } from "../../content/useCopy";
import { useLocale } from "../../i18n/LocaleContext";
import { submitApplicationForm } from "../../lib/submit";

export function PercussionsForm({ intent = "" }: { intent?: "lesson" | "jam" | "" }) {
  const copy = usePercussions();
  const { t } = useLocale();
  const f = t.form;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    consent?: string;
  }>({});
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (!name.trim()) next.name = f.errName;
    if (!phone.trim()) next.phone = f.errPhone;
    if (!consent) next.consent = f.errConsent;
    setErrors(next);
    if (Object.keys(next).length) return;

    setPending(true);
    setStatus("");
    const result = await submitApplicationForm({
      name,
      phone,
      consent,
      source: "percussions",
      sourceLabel: "Перкуссия",
      format: intent === "jam" ? "Джем" : intent === "lesson" ? "Урок" : undefined,
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
      className="relative isolate overflow-hidden py-12 lg:py-32"
      aria-labelledby="percussions-form-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Photo
          src="/assets/img/percussions/forest-form-bg.webp"
          alt=""
          sizes="100vw"
          loading="lazy"
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
            </div>

            <div className="mt-6">
              <ConsentCheck id="percussions-consent" checked={consent} onChange={setConsent} error={errors.consent} />
            </div>

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
