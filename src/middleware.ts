import { defineMiddleware } from "astro:middleware";
import { ui } from "./i18n/ui";

const defaultLang = "en";
const supportedLangs = Object.keys(ui);

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;

  const hasLangPrefix = supportedLangs.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`,
  );

  if (pathname === "/" && !hasLangPrefix) {
    const acceptLanguage = context.request.headers.get("accept-language");

    if (acceptLanguage) {
      const preferredLang = acceptLanguage
        .split(",")[0]
        .split("-")[0]
        .toLowerCase();

      if (
        supportedLangs.includes(preferredLang) &&
        preferredLang !== defaultLang
      ) {
        return context.redirect(`/${preferredLang}/`, 302);
      }
    }
  }

  return next();
});
