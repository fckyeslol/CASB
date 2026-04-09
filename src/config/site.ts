const defaultEmail = "visbal.david@marymountbq.edu.co";

export const site = {
  contactEmail:
    import.meta.env.VITE_CONTACT_EMAIL?.trim() || defaultEmail,
  phoneDisplay: "+57 316 448 9358",
  phoneTel: "+573164489358",
  location: "Barranquilla, Colombia",
  social: {
    instagram:
      import.meta.env.VITE_SOCIAL_INSTAGRAM?.trim() ||
      "https://www.instagram.com/",
    facebook:
      import.meta.env.VITE_SOCIAL_FACEBOOK?.trim() ||
      "https://www.facebook.com/",
    x: import.meta.env.VITE_SOCIAL_X?.trim() || "https://x.com/",
  },
} as const;

export function mailtoHref(opts: {
  subject: string;
  body?: string;
}): string {
  const params = new URLSearchParams();
  params.set("subject", opts.subject);
  if (opts.body) params.set("body", opts.body);
  return `mailto:${site.contactEmail}?${params.toString()}`;
}
