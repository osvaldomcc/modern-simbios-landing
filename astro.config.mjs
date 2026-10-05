// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://company.com",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "fr", "nl"],
    routing: {
      prefixDefaultLocale: false,
      fallbackType: "redirect",
    },
  },

  // dynamic sitemap
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),

  env: {
    schema: {
      SITE_URL: envField.string({
        context: "client",
        access: "public",
        default: "https://company.com",
      }),
      CONTACT_EMAIL: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
    },
  },

  integrations: [
    sitemap({
      // language support
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          es: "es",
          fr: "fr",
          nl: "nl",
        },
      },
      serialize(item) {
        // AI priority
        if (item.url.includes("llms")) {
          item.priority = 0.9;
          // @ts-expect-error - Astro 5 sitemap enum mismatch fix
          item.changefreq = "daily";
        }
        return item;
      },
    }),
  ],

  image: {
    remotePatterns: [
      { protocol: "http", hostname: "www.company.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "lightningcss",
    },
  },
});
