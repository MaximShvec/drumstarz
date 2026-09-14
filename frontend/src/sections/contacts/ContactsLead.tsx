import { useState, type FormEvent, type ReactNode } from "react";
import { Reveal } from "../../components/Reveal";
import { Button } from "../../components/ui/Button";
import { LineField, LineTextarea } from "../../components/ui/Field";
import { useContactsCopy } from "../../content/useCopy";
import { SITE } from "../../data/site";
import { useLocale } from "../../i18n/LocaleContext";
import { submitApplicationForm } from "../../lib/submit";

export function ContactsLead() {
  const copy = useContactsCopy();
  const { t } = useLocale();
  const f = t.form;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({});
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (!name.trim()) next.name = f.errName;
    if (!phone.trim()) next.phone = f.errPhone;
    if (!message.trim()) next.message = f.errMessage;
    setErrors(next);
    if (Object.keys(next).length) return;

    setPending(true);
    setStatus("");
    const result = await submitApplicationForm({ name, phone, email, message, source: "contacts-lead" });
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
    <section className="bg-void pb-24 lg:pb-32" aria-labelledby="contacts-lead-title">
      <div className="container-site grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <form
            className="rounded-[1.8rem] border border-white/8 bg-panel p-8 md:p-10"
            onSubmit={onSubmit}
            noValidate
            aria-labelledby="contacts-lead-title"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{copy.leadKicker}</p>
            <h2 id="contacts-lead-title" className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              {copy.leadTitle}
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <LineField
                id="contacts-lead-name"
                label={f.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
                autoComplete="name"
              />
              <LineField
                id="contacts-lead-phone"
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
                id="contacts-lead-email"
                label={f.emailOptional}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                type="email"
              />
            </div>
            <div className="mt-5">
              <LineTextarea
                id="contacts-lead-message"
                label={f.message}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={errors.message}
                rows={4}
              />
            </div>

            <Button type="submit" className="mt-8 w-full py-4 sm:w-auto sm:px-10" disabled={pending}>
              {pending ? f.sending : f.send}
            </Button>
            {status ? (
              <p className="mt-4 text-sm text-mint" role="status">
                {status}
              </p>
            ) : null}
          </form>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex h-full flex-col justify-between rounded-[1.8rem] border border-mint/25 bg-panel p-8 md:p-10">
            <div>
              <h2 className="font-display text-3xl font-semibold">{copy.sideTitle}</h2>
              <ul className="mt-8 space-y-6">
                <li>
                  <p className="text-xs uppercase tracking-[0.16em] text-cream/40">{copy.callUs}</p>
                  <a href={SITE.phoneHref} className="link-draw mt-1 inline-block text-lg">
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-[0.16em] text-cream/40">{copy.writeWa}</p>
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw mt-1 inline-block text-lg"
                  >
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-[0.16em] text-cream/40">{copy.writeMail}</p>
                  <a href={SITE.emailHref} className="link-draw mt-1 inline-block break-all text-lg">
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.16em] text-cream/40">{copy.follow}</p>
              <div className="mt-4 flex gap-3">
                <Social href={SITE.instagram} label="Instagram DRUMSTARZ">
                  <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </Social>
                <Social href={SITE.facebook} label="Facebook DRUMSTARZ">
                  <path
                    fill="currentColor"
                    d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"
                  />
                </Social>
                <Social href={SITE.youtube} label="YouTube DRUMSTARZ">
                  <path
                    fill="currentColor"
                    d="M22 12s0-3.2-.4-4.7a2.8 2.8 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.8 2.8 0 0 0 2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.8 2.8 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.8 2.8 0 0 0 2-2C22 15.2 22 12 22 12zM10 15V9l5.2 3-5.2 3z"
                  />
                </Social>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-cream/70 transition-colors hover:border-mint/50 hover:text-mint"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        {children}
      </svg>
    </a>
  );
}
