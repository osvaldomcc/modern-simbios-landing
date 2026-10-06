/**
 * Downloads the reference client logos once and stores them as optimized WebP
 * under src/assets/clients/ so the marquee never depends on an external host.
 *
 * Usage: node scripts/fetch-clients.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const BASE = "https://www.simbios.be/simbios/assets/img/clients";
const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "assets", "clients");

const FILES = [
  "1.png", "2.png", "3.png", "4.jpg", "5.png", "6-a.png", "6-b.png", "7.jpg",
  "8.png", "9.png", "10-a.png", "10-b.png", "11.jpg", "12.png", "13.png",
  "14.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png",
  "21.png", "22.png", "23.png", "24.png", "25.png", "26.png", "27.jpg",
  "28.png", "30.png", "32.png", "34.png", "35.png", "36.png", "37.png",
  "38.png", "39.png", "40.png", "41.png", "42.png", "43.png",
];

const MAX_WIDTH = 320;

await mkdir(OUT, { recursive: true });

let total = 0;
let failed = 0;

for (const file of FILES) {
  const name = file.replace(/\.(png|jpg)$/, "");
  const target = join(OUT, `${name}.webp`);

  try {
    const res = await fetch(`${BASE}/${file}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const input = Buffer.from(await res.arrayBuffer());

    const output = await sharp(input)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: 72, effort: 5 })
      .toBuffer();

    await writeFile(target, output);
    total += output.byteLength;
    console.log(`ok  ${file} -> ${name}.webp (${(output.byteLength / 1024).toFixed(1)} KB)`);
  } catch (error) {
    failed += 1;
    console.error(`err ${file}: ${error.message}`);
  }
}

console.log(`\n${FILES.length - failed}/${FILES.length} logos · ${(total / 1024).toFixed(1)} KB total`);
process.exit(failed > 0 ? 1 : 0);
