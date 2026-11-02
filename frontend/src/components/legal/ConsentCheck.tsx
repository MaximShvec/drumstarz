import { Link } from "react-router-dom";
import { useLocale } from "../../i18n/LocaleContext";

export function ConsentCheck({
  id,
  checked,
  onChange,
  error,
}: {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
}) {
  const { t, href } = useLocale();

  return (
    <div>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-sm text-cream/70">
        <input
          id={id}
          name="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 accent-mint"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={error ? true : undefined}
        />
        <span>
          {t.form.consentBefore}{" "}
          <Link to={href("/terms")} className="link-draw text-mint" onClick={(e) => e.stopPropagation()}>
            {t.form.consentLink}
          </Link>
        </span>
      </label>
      {error ? <p className="mt-2 text-sm text-red-400">{error}</p> : null}
    </div>
  );
}
