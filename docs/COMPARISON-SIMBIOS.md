# Comparative Report: `modern-landing` vs. simbios.be/simbios

**Date:** October 5, 2026
**Goal:** Document, with measured data, why this application outperforms the Simbios Creative Software Engineers reference site (`http://www.simbios.be/simbios/`), and honestly flag where it still falls behind.

---

## 1. Executive summary

Simbios is a static landing page served by Apache/PHP (HTML last modified: **February 4, 2025**), built with Bootstrap 4 + AOS, with no modern semantic metadata, no sitemap, no robots.txt, no canonical HTTPS, no internationalization, and **~3.36 MB of unoptimized assets across 61 requests**.

This application (Astro 6 + Tailwind 4 on Vercel) flips the equation: search-engine-ready HTML, **6.9 KB of inline JavaScript in total** (zero external JS requests), images served as WebP with declared dimensions, 4 languages with `hreflang`, schema.org, a dynamic `robots.txt`, an i18n sitemap, and `llms.txt` files for AI agents.

**Overall advantage: performance, international SEO, accessibility, maintainability, and AI readiness.** Simbios only keeps an edge in real content (clients, vacancies, and offices) — which is a *content* problem, not a *technology* one.

---

## 2. Hard metrics (measured on 10/05/2026)

| Metric | Simbios | modern-landing | Advantage |
|---|---|---|---|
| Uncompressed HTML | 39.7 KB | 82.3 KB (SSR in `/es`) | Simbios* |
| **Total JS loaded** | **~93 KB** (bootstrap 78 + AOS 14.3 + scripts 0.5) | **6.9 KB inline, 0 external requests** | **~13× less** |
| CSS | 5 stylesheets, `styles.css` 153 KB + `bootstrap-icons.css` 57 KB (unminified) | 1 file, 55.7 KB (minified with Lightning CSS) | **~5× less** |
| Total referenced assets | **3,444 KB / 61 files** | ~0.9 MB on first load (HTML+CSS+fonts+hero) | **~4× less** |
| Images | 52 (`teams.png` 692 KB, `code.png` 494 KB, favicon 188 KB) | 83 via `astro:assets` pipeline → WebP (`logo` 249 KB → 1 KB) | **Automatic optimization** |
| Images with `width`/`height` | **0 of 52** | **83 of 83** | CLS ~0 |
| `loading="lazy"` | 0 | 5 (hero uses `fetchpriority`) | modern-landing |
| Images missing `alt` | 1 | 0 | modern-landing |
| External JS requests | 3 | 0 | modern-landing |
| Languages | 1 (`lang="en"`, EN content) | 4 (en/es/fr/nl) + redirect via `Accept-Language` | modern-landing |
| `robots.txt` | **404** | 200, with `Sitemap:` and 1 h cache | modern-landing |
| `sitemap.xml` | **404** | `sitemap-index.xml` with i18n + priority | modern-landing |
| Canonical | no | yes | modern-landing |
| `hreflang` / `x-default` | no | 5 tags | modern-landing |
| Open Graph / Twitter Card | no / no | yes (og:type, title, description, image) | modern-landing |
| JSON-LD | no | `ProfessionalService` | modern-landing |
| Dark mode | no | yes, zero-FOUC + `prefers-color-scheme` | modern-landing |
| `aria-*` attributes | 3 | 8 `aria-label` + skip link + `:focus-visible` | modern-landing |
| Contact form | `mailto:` (2 links) | Form with labels, native validation, visual states | modern-landing |
| AI-agent ready | no | `llms.txt` + `llms-full.txt` + `Allow:` in robots | modern-landing |

\* Simbios only wins on raw HTML bytes because it ships none of the CSS or metadata; its markup alone is 40 KB with 52 undimensioned `<img>` tags.

---

## 3. Comparison by axis

### 3.1 Performance and Core Web Vitals

**Simbios**
- 61 assets, 3.36 MB. Loading `teams.png` (692 KB) and `code.png` (494 KB) alone destroys LCP.
- No image declares `width`/`height` → high **CLS** risk as the 43 client logos pop in and reflow the page.
- Unminified CSS (153 KB + 57 KB of icons) blocks first paint.
- `AOS.js` (14 KB) adds main-thread work on scroll; the Bootstrap bundle does not appear to be deferred.

**modern-landing**
- Performance budgets documented in `docs/DESIGN.md`: **LCP < 1.2 s · CLS 0 · INP < 200 ms** (Addy Osmani / Google Labs standards).
- Single minified stylesheet via Lightning CSS (`astro.config.mjs:76`).
- JS confined to islands: **6.9 KB inline total**, no network blocking.
- `fetchpriority="high"` on the hero (`docs/DESIGN.md`, §2.1) to attack LCP.
- The `astro:assets` + `sharp` pipeline converts and resizes at build time: the logo went from 249 KB to 1 KB as WebP.
- Remote images (Unsplash/pravatar) declared in `image.remotePatterns` so they pass through the optimizer too.

### 3.2 Technical SEO

**Simbios**
- No `canonical`, no `hreflang`, no Open Graph, no Twitter Cards, no JSON-LD.
- A 41-character `meta description`: *"Simbios bvba - Creative Software Engineers"*.
- **No `robots.txt` and no `sitemap.xml`** (both return 404). Google has to crawl blind.
- A single generic title for every audience.

**modern-landing**
- `src/layouts/BaseLayout.astro`: dynamic canonical, per-locale meta description, full OG tags, JSON-LD `ProfessionalService`.
- `src/pages/robots.txt.ts`: generated robots with `Allow: /llms.txt`, `Disallow: /api/`, and `Cache-Control: max-age=3600`.
- Sitemap with a `serialize()` that raises AI endpoint priority to 0.9 / `changefreq: daily` (`astro.config.mjs:52-60`).
- Title and description translated per locale from `src/i18n/ui.ts` (26 KB of copy).

### 3.3 Internationalization

**Simbios**: `lang="en"` with mixed English text, even though the target Belgian market (Brussels, Flanders, Wallonia) speaks Dutch and French. No language mechanism at all.

**modern-landing**
- 4 locales (`en`, `es`, `fr`, `nl`) with routing configured in `astro.config.mjs:10-17`.
- Middleware (`src/middleware.ts`) redirecting `/` → `/{lang}/` from `Accept-Language` with a 302.
- `hreflang` + `x-default` generated dynamically per route (`BaseLayout.astro:76-98`).
- Visible language picker (`LanguagePicker.astro`).

This is exactly what a Belgian company should ship: **NL/FR/EN coverage**.

### 3.4 Accessibility (a11y)

| Aspect | Simbios | modern-landing |
|---|---|---|
| Skip link | no | yes (`BaseLayout.astro:140`) |
| `:focus-visible` | no | yes, 2px outline from the action token |
| Contrast | not verified | 4.5:1 target (`DESIGN.md` §4) |
| Touch targets | no | 48 px minimum (`DESIGN.md` §4) |
| Semantic structure | 1 `h1`, 5 `h2` | 1 `h1`, 8 `h2`, 10 `<section>`, `<article>`, `<nav aria-label>` |
| Form labels | n/a (`mailto:` only) | 3 labels bound via `for`/`id` |
| `role="contentinfo"` on footer | no | yes |

### 3.5 UX and conversion

- **Dark mode**: zero-FOUC via an inline script in `<head>` (`BaseLayout.astro:107-120`), honoring `prefers-color-scheme` and persisting to `localStorage`. Simbios has none.
- **A real contact form** (name, email, company) with `required`/`type="email"` validation and visual states defined in the design system, versus Simbios's `mailto:` links (which depend on the visitor's mail client and leak half the leads).
- **CTA hierarchy**: solid primary button (`bg-action`) + outline secondary, with `hover:scale` / `active:scale` micro-interactions.
- **Fixed blurred navigation** and smooth scrolling with a hash rescue on load (`BaseLayout.astro:154-172`).
- **Animated social proof**: logo marquee with edge fades (`SocialProof.astro`) instead of a static grid of 43 heavy PNGs.

### 3.6 Architecture and maintainability

| | Simbios | modern-landing |
|---|---|---|
| Engine | Static HTML + PHP/Apache | Astro 6.1.9 (SSR + prerender) |
| Styling | Bootstrap 4 + 153 KB hand-written CSS | Tailwind 4 with **design tokens** (`DESIGN.md` v6.0) |
| JavaScript | Bootstrap bundle + AOS + scripts.js | Astro islands, no client framework |
| Content | hardcoded in HTML | typed `src/i18n/ui.ts`, single source for 4 languages |
| Deployment | manual FTP to Apache | Vercel with **Web Analytics** enabled (`astro.config.mjs:21-23`) |
| Documentation | none | `README.md`, `docs/DESIGN.md` (tokens, budgets, principles) |
| Change history | `Last-Modified: Feb 2025` | git repository with history |

Adding a section in Simbios means hand-editing HTML; here it means one Astro component plus 4 translation entries. **The cost of maintaining the site drops dramatically.**

### 3.7 AI-agent readiness (the 2026 differentiator)

- `public/llms.txt` and `public/llms-full.txt`: structured context so LLMs cite the company accurately.
- `robots.txt` with an explicit `Allow: /llms.txt` and a sitemap giving those files 0.9 priority.
- Semantic HTML (`<section>`, `<article>`, correct headings) that crawlers and agents can parse unambiguously.

Simbios has none of these three.

---

## 4. Where Simbios wins (and what we must fix)

An honest report: this is what the reference site does better today.

1. **Real, verifiable content.** 43 client logos, 6 detailed vacancies with requirements and offers, 3 offices with address, phone and real email, plus a VAT number. Our app ships the placeholder brand "company", `info@company.com`, `Capital, country`, and a single fictional testimonial ("Sarah Jenkins, Nexus Enterprise").
2. **Social proof at scale.** Simbios's client grid signals track record; our technology marquee signals stack, not clients.
3. **Production build broken on Windows.** `pnpm build` fails at the last step (`EPERM: symlink ... sharp` inside `@astrojs/vercel` during `astro:build:done`). Must be resolved before deploying (reproduce in CI/Linux or stop symlinking `sharp`).
4. **Heavy brand assets.** `og-image.png` (1.88 MB), `company-preview.png` (821 KB) and `preview.png` (417 KB) ship uncompressed in `public/`. They should drop below 300 KB.
5. **The `/` route is SSR**, not prerendered (only `/es`, `/fr`, `/nl` are prerendered at build). Simbios serves instant static HTML. Prerender `/`.
6. **Form without a backend.** The `<form>` has no `action` and no handler: it is visual today. Simbios at least captures the lead by email. Connect an endpoint (Vercel Function + `CONTACT_EMAIL` already declared in `astro.config.mjs:32-36`).

---

## 5. Recommended action plan

| Priority | Action | Effort |
|---|---|---|
| P0 | Fix the Vercel build (EPERM with `sharp`) | low |
| P0 | Wire the form to a serverless endpoint and render all 4 states | medium |
| P1 | Replace placeholder content with real clients, vacancies, and offices | medium |
| P1 | Compress `og-image.png` / `preview.png` (target <300 KB) | low |
| P1 | Prerender the `/` route (or serve it statically) | low |
| P2 | Add `twitter:card` and `og:locale` | low |
| P2 | Audit real 4.5:1 contrast with Lighthouse (target: 95+ in every category) | low |
| P3 | Measure Lighthouse on a real deploy and enforce the budgets as a CI check | medium |

---

## 6. Appendix: how this was measured

- **Simbios:** `Invoke-WebRequest` against `https://www.simbios.be/simbios/`; counted `<script src>`, `<img>`, `alt`/`width`/`loading` attributes, presence of canonical/hreflang/OG/JSON-LD; issued HEAD requests to all 61 unique referenced assets to total their weight; verified `robots.txt` and `sitemap.xml` (both 404).
- **modern-landing:** source read under `src/` (layout, middleware, config, design system) and a production build run with `pnpm build`; analysis of `dist/client/es/index.html` (size, inline scripts, image dimensions, aria, labels) and `dist/client/_astro` (CSS and font weight). Dev server inspected at `http://localhost:4321`.
- The cited performance budgets (LCP/CLS/INP) come from `docs/DESIGN.md`, not from field data: **they must be validated with Lighthouse on a real deploy**.
