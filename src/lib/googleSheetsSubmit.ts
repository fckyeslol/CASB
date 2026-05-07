import type { InscriptionFields } from "./inscriptionTypes";

export function submitViaGoogleAppsScript(
  fields: InscriptionFields,
  scriptUrl: string,
  secret: string,
): Promise<void> {
  const url = scriptUrl.trim().replace(/\u200B/g, "").replace(/\r?\n/g, "");

  const body = new URLSearchParams({
    secret: secret.trim(),
    teamName: fields.teamName,
    school: fields.school,
    leader: fields.leader,
    email: fields.email,
    phone: fields.phone,
    members: fields.members,
  });

  return fetch(url, {
    method: "POST",
    body,
    mode: "no-cors",
    redirect: "follow",
  }).then(() => undefined);
}
