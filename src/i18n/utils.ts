import { ui, defaultLang, languages } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");

  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getRouteByLang(lang: string, url: URL) {
  const { pathname } = url;
  const segments = pathname.split("/").filter(Boolean);

  const isFirstSegmentLang = Object.keys(languages).includes(segments[0]);
  const pathSegments = isFirstSegmentLang ? segments.slice(1) : segments;

  const cleanPath = `/${pathSegments.join("/")}`;

  if (lang === defaultLang) {
    return cleanPath;
  }

  const prefix = `/${lang}`;
  return cleanPath === "/" ? prefix : `${prefix}${cleanPath}`;
}
