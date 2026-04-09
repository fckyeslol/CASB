import type { InscriptionFields } from "./inscriptionTypes";

/**
 * Envía los datos con un POST clásico (formulario) hacia un iframe oculto.
 * Así el navegador no aplica CORS como con fetch, y Google Apps Script recibe doPost(e).
 */
export function submitViaGoogleAppsScriptIframe(
  fields: InscriptionFields,
  scriptUrl: string,
  secret: string,
): Promise<void> {
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

    const fallbackTimer = window.setTimeout(() => finish(), 6000);

    document.body.appendChild(iframe);

    form = document.createElement("form");
    form.method = "POST";
    form.action = scriptUrl;
    form.target = iframeName;
    form.acceptCharset = "UTF-8";

    const add = (name: string, value: string) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form!.appendChild(input);
    };

    add("secret", secret);
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
