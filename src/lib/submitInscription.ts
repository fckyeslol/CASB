import { submitViaGoogleAppsScript } from "./googleSheetsSubmit";
import type { InscriptionFields } from "./inscriptionTypes";

export type { InscriptionFields };

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: "config" | "send" };

/**
 * Solo Google Sheets (Apps Script). No correo, FormSubmit ni mailto.
 */
export async function submitInscription(
  fields: InscriptionFields,
): Promise<SubmitResult> {
  const googleUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL?.trim();
  const googleSecret = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_SECRET?.trim();

  if (!googleUrl || !googleSecret) {
    return { ok: false, reason: "config" };
  }

  try {
    await submitViaGoogleAppsScript(fields, googleUrl, googleSecret);
    return { ok: true };
  } catch {
    return { ok: false, reason: "send" };
  }
}
