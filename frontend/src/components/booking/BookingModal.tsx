import { useEffect, useId, useState, type FormEvent } from "react";
import { useBooking } from "../../context/BookingContext";
import { submitApplicationForm } from "../../lib/submit";
import { Button } from "../ui/Button";
import { LineField } from "../ui/Field";

export function BookingModal() {
  const { isOpen, closeBooking } = useBooking();
  const titleId = useId();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; consent?: string }>({});
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBooking();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeBooking]);

  if (!isOpen) return null;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Укажите имя";
    if (!phone.trim()) next.phone = "Укажите телефон";
    if (!consent) next.consent = "Нужно согласие";
    setErrors(next);
    if (Object.keys(next).length) return;

    setPending(true);
    setStatus("");
    const result = await submitApplicationForm({ name, phone, consent });
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
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 cursor-pointer bg-void/75 backdrop-blur-sm"
        aria-label="Закрыть форму"
        onClick={closeBooking}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-[2rem] border border-white/10 bg-panel p-8 shadow-glow sm:max-w-lg sm:rounded-[2rem] sm:p-10"
      >
        <button
          type="button"
          onClick={closeBooking}
          className="absolute right-5 top-5 cursor-pointer text-cream/60 hover:text-cream"
          aria-label="Закрыть форму"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">Пробный урок</p>
        <h2 id={titleId} className="mt-3 font-display text-3xl font-semibold leading-[1.1] text-cream sm:text-4xl">
          Записаться на <span className="text-mint">бесплатный</span> урок
        </h2>
        <p className="mt-3 text-cream/65">Оставьте заявку — и мы поможем вам сделать первый шаг в мир музыки!</p>

        <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
          <LineField
            id="booking-name"
            label="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
            autoComplete="name"
          />
          <LineField
            id="booking-phone"
            label="Номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={errors.phone}
            autoComplete="tel"
            type="tel"
          />
          <label className="flex cursor-pointer items-start gap-3 text-sm text-cream/70">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 accent-mint"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <span>Я ознакомился с пользовательским соглашением</span>
          </label>
          {errors.consent ? <p className="text-sm text-red-400">{errors.consent}</p> : null}

          <Button type="submit" variant="primary" className="w-full py-4" disabled={pending}>
            {pending ? "Отправка…" : "Отправить заявку"}
          </Button>
          {status ? (
            <p className="text-center text-sm text-mint" role="status">
              {status}
            </p>
          ) : null}
        </form>
        <p className="mt-5 text-center text-xs uppercase tracking-[0.18em] text-cream/40">
          Ответим в течение часа
        </p>
      </div>
    </div>
  );
}
