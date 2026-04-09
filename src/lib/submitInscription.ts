import { site } from "../config/site";
import { submitViaGoogleAppsScript } from "./googleSheetsSubmit";
import type { InscriptionFields } from "./inscriptionTypes";

export type { InscriptionFields };

function buildPlainMessage(f: InscriptionFields): string {
  return [
    "Inscripción CASB",
    "",
    `Equipo: ${f.teamName}`,
    `Colegio: ${f.school}`,
    `Líder: ${f.leader}`,
    `Correo: ${f.email}`,
    `Teléfono: ${f.phone}`,
    "",
    "Miembros:",
    f.members,
  ].join("\n");
}

async function submitWeb3Forms(f: InscriptionFields): Promise<boolean> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) return false;

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `CASB Inscripción — ${f.teamName}`,
      from_name: f.leader,
      email: f.email,
      replyto: f.email,
      phone: f.phone,
      message: buildPlainMessage(f),
    }),
  });

  const data = (await res.json()) as { success?: boolean; message?: string };
  return res.ok && data.success === true;
}

async function submitFormSubmit(f: InscriptionFields): Promise<boolean> {
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(site.contactEmail)}`;
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: `CASB Inscripción — ${f.teamName}`,
      _captcha: false,
      _replyto: f.email,
      _template: "table",
      teamName: f.teamName,
      school: f.school,
      leader: f.leader,
      email: f.email,
      phone: f.phone,
      members: f.members,
    }),
  });

  if (!res.ok) return false;
  const data = (await res.json().catch(() => null)) as {
    success?: boolean | string;
    message?: string;
  } | null;
  if (!data) return true;
  if (data.success === true || data.success === "true") return true;
  if (data.message === "Email sent successfully!") return true;
  return false;
}

function openMailto(f: InscriptionFields): void {
  const subject = `CASB Inscripción — ${f.teamName}`;
  const body = buildPlainMessage(f);
  const url = `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

export type SubmitResult =
  | { channel: "googlesheets" }
  | { channel: "web3forms" }
  | { channel: "formsubmit" }
  | { channel: "mailto" };

export async function submitInscription(
  fields: InscriptionFields,
): Promise<SubmitResult> {
  const googleUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL?.trim();
  const googleSecret = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_SECRET?.trim();

  if (googleUrl && googleSecret) {
    try {
      await submitViaGoogleAppsScript(fields, googleUrl, googleSecret);
      return { channel: "googlesheets" };
    } catch {
      /* continuar con correo */
    }
  }

  try {
    if (await submitWeb3Forms(fields)) return { channel: "web3forms" };
  } catch {
    /* siguiente canal */
  }
  try {
    if (await submitFormSubmit(fields)) return { channel: "formsubmit" };
  } catch {
    /* mailto */
  }
  openMailto(fields);
  return { channel: "mailto" };
}
