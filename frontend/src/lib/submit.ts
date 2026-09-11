export type SubmitResult =
  | { status: "ok" }
  | { status: "not_configured" }
  | { status: "error"; message: string };

/** Stub until Laravel is wired. Do not fake success. */
export async function submitApplicationForm(
  _payload: Record<string, unknown>,
): Promise<SubmitResult> {
  await new Promise((r) => setTimeout(r, 400));
  return { status: "not_configured" };
}
