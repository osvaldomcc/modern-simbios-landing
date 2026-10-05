import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  // Sitemap points to the root
  const sitemapURL = new URL("sitemap-index.xml", site).href;

  const body = [
    "User-agent: *",
    "Allow: /",
    "Allow: /llms.txt",
    "Allow: /llms-full.txt",
    "", // For readability
    `Sitemap: ${sitemapURL}`,
    "",
    "# Block API and internal routes",
    "Disallow: /api/",
    "Disallow: /_astro/", // Optional: track Js chunks
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      // 1 hour cache
      "Cache-Control": "public, max-age=3600",
    },
  });
};
