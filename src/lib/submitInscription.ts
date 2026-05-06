const APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL as string;
const FORM_SECRET = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_SECRET as string;

export interface FormData {
  teamName: string;
  school: string;
  leader: string;
  email: string;
  phone: string;
  members: string;
}

export interface SubmitResult {
  ok: boolean;
  reason?: "config" | "network" | "server";
}

export async function submitInscription(
  formData: FormData,
): Promise<SubmitResult> {
  if (!APPS_SCRIPT_URL || !FORM_SECRET) {
    return { ok: false, reason: "config" };
  }

  const body = new URLSearchParams({
    secret: FORM_SECRET,
    teamName: formData.teamName,
    school: formData.school,
    leader: formData.leader,
    email: formData.email,
    phone: formData.phone,
    members: formData.members,
  });

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body,
      redirect: "follow",
      mode: "no-cors",
    });
    return { ok: true };
  } catch (err) {
    console.error("submitInscription error:", err);
    return { ok: false, reason: "network" };
  }
}
