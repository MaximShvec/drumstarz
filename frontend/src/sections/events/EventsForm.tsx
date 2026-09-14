import { useState, type FormEvent } from "react";
import { Reveal } from "../../components/Reveal";
import { Button } from "../../components/ui/Button";
import { LineField, LineTextarea } from "../../components/ui/Field";
import { submitApplicationForm } from "../../lib/submit";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function EventsForm() {
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
      name,
      phone,
      email,
      date,
      message,
      consent,
      source: "events-form",
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
    <section id="booking-events" className="bg-void py-24 lg:py-32" aria-labelledby="booking-events-title">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl">
          <form
            id="events-booking-form"
            className="rounded-[1.8rem] border border-white/8 bg-panel p-8 md:p-10"
            onSubmit={onSubmit}
            noValidate
            aria-labelledby="booking-events-title"
          >
            <h2
              id="booking-events-title"
              className="font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-5xl"
            >
              Забронировать дату
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <LineField
                id="events-name"
                label="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
                autoComplete="name"
              />
              <LineField
                id="events-phone"
                label="Номер телефона"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={errors.phone}
                autoComplete="tel"
                type="tel"
              />
              <LineField
                id="events-email"
                label="Электронная почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
                autoComplete="email"
                type="email"
              />
              <LineField
                id="events-date"
                label="Желаемая дата"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
              />
            </div>
            <div className="mt-5">
              <LineTextarea
                id="events-message"
                label="Количество гостей и пожелания"
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
              <span>Я ознакомился с пользовательским соглашением</span>
            </label>
            {errors.consent ? (
              <p className="mt-1.5 text-sm text-red-400" role="alert">
                {errors.consent}
              </p>
            ) : null}
            <Button type="submit" className="mt-8 w-full py-4 sm:w-auto sm:px-10" disabled={pending}>
              {pending ? "Отправка…" : "Отправить заявку"}
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
