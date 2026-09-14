// Convert JPEG/PNG in public/ to WebP. Skips og.jpg and the WhatsApp icon.
// Usage from frontend/: npm install --no-save sharp && node scripts/to-webp.mjs
import { readdir, unlink, stat } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const ROOT = "public";
const SKIP = new Set(["og.jpg", "assets/icons/whatsapp.png"]);
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(path)));
    else if (/\.(jpe?g|png)$/i.test(entry.name)) out.push(path);
  }
  return out;
}

const files = await walk(ROOT);
let saved = 0;

for (const file of files) {
  const rel = file.replace(/\\/g, "/").replace(/^public\//, "");
  if (SKIP.has(rel)) {
    console.log("skip", rel);
    continue;
  }

  const before = (await stat(file)).size;
  const dest = file.replace(/\.(jpe?g|png)$/i, ".webp");
  const image = sharp(file);
  const meta = await image.metadata();
  const pipeline =
    (meta.width ?? 0) > MAX_WIDTH
      ? image.resize({ width: MAX_WIDTH, withoutEnlargement: true })
      : image;

  await pipeline.webp({ quality: QUALITY, effort: 5, alphaQuality: 85 }).toFile(dest);
  const after = (await stat(dest)).size;
  await unlink(file);
  saved += before - after;
  console.log(
    `${rel}  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`,
  );
}

console.log(`\nsaved ~${(saved / 1024 / 1024).toFixed(2)} MB`);
