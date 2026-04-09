import type { InscriptionFields } from "./inscriptionTypes";

function normalizeUrl(url: string): string {
  return url.trim().replace(/\u200B/g, "").replace(/\r?\n/g, "");
}

/**
 * Envío con formulario POST hacia un iframe con nombre.
 * Es más estable que fetch(..., { mode: "no-cors" }) hacia script.google.com:
 * varios navegadores no entregan bien peticiones repetidas en no-cors y entonces
 * doPost ni siquiera aparece en "Ejecuciones".
 */
export function submitViaGoogleAppsScript(
  fields: InscriptionFields,
  scriptUrl: string,
  secret: string,
): Promise<void> {
  const url = normalizeUrl(scriptUrl);
  if (!url.startsWith("https://script.google.com/macros/s/")) {
    return Promise.reject(
      new Error(
        "URL de Apps Script inválida (debe ser https://script.google.com/macros/s/.../exec)",
      ),
    );
  }

  return new Promise((resolve, reject) => {
    const iframeName = `casb_gs_${Date.now()}`;
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.style.cssText =
      "position:absolute;width:0;height:0;border:0;visibility:hidden";
    iframe.setAttribute("aria-hidden", "true");

    let form: HTMLFormElement | null = null;
    let done = false;

    const cleanup = () => {
      if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
      if (form?.parentNode) form.parentNode.removeChild(form);
    };

    const finish = () => {
      if (done) return;
      done = true;
      clearTimeout(fallbackTimer);
      cleanup();
      resolve();
    };

    const fail = (err: Error) => {
      if (done) return;
      done = true;
      clearTimeout(fallbackTimer);
      cleanup();
      reject(err);
    };

    iframe.onload = () => finish();

    const fallbackTimer = window.setTimeout(() => finish(), 10000);

    document.body.appendChild(iframe);

    form = document.createElement("form");
    form.method = "POST";
    form.action = url;
    form.target = iframeName;
    form.acceptCharset = "UTF-8";
    form.enctype = "application/x-www-form-urlencoded";
    form.encoding = "application/x-www-form-urlencoded";

    const add = (name: string, value: string) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form!.appendChild(input);
    };

    add("secret", secret.trim());
    add("teamName", fields.teamName);
    add("school", fields.school);
    add("leader", fields.leader);
    add("email", fields.email);
    add("phone", fields.phone);
    add("members", fields.members);

    document.body.appendChild(form);

    try {
      form.submit();
    } catch (e) {
      fail(e instanceof Error ? e : new Error("No se pudo enviar el formulario"));
    }
  });
}
