import { getCaptchaToken } from "./captcha";
import { leadFromPath } from "./lead";

export type SubmitResult =
  | { status: "ok" }
  | { status: "not_configured" }
  | { status: "error"; message: string };

/** Stub until Laravel is wired. Do not fake success. */
export async function submitApplicationForm(
  payload: Record<string, unknown>,
): Promise<SubmitResult> {
  const meta = leadFromPath(window.location.pathname);
  const captchaToken = await getCaptchaToken("lead");
  const lead = {
    ...meta,
    captchaToken,
    ...payload,
    source: payload.source ?? meta.source,
    sourceLabel: payload.sourceLabel ?? meta.sourceLabel,
  };
  await new Promise((r) => setTimeout(r, 400));
  return lead.source ? { status: "not_configured" } : { status: "error", message: "source" };
}
