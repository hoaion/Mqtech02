import fs from "fs";
import path from "path";
import axios from "axios";
import sharp from "sharp";

const PRODUCTS = [
  { id: 'f-cut-v3-basic', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200' },
  { id: 'f-cut-pro-12kw', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200' },
  { id: 'f-weld-nano-1500', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200' },
  { id: 'f-mark-uv-5', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200' },
  { id: 'f-sol-robot-cell', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200' },
  { id: 'f-cut-pipe-200', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200' },
  { id: 'f-weld-robot-arm', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200' },
  { id: 'f-mark-mopa-100', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200' },
  { id: 'home-hero', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000' },
  { id: 'tech-fiber-vs-co2', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200' },
  { id: 'tech-maintenance', image: 'https://images.unsplash.com/photo-1581092162384-8987c1794714?auto=format&fit=crop&q=80&w=1200' },
];

const TARGET_DIR = path.join(process.cwd(), "public", "assets", "images", "products");

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

async function downloadAndOptimize(url: string, id: string) {
  const outputName = `${id}.avif`;
  const filePath = path.join(TARGET_DIR, outputName);

  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'arraybuffer'
    });

    const buffer = Buffer.from(response.data);
    const image = sharp(buffer);
    
    // VALIDATION
    const metadata = await image.metadata();
    if (!metadata) {
      throw new Error("Invalid image source");
    }
    
    // CONVERSION TO AVIF
    await image
      .avif({ quality: 65 })
      .toFile(filePath);

    console.log(`Successfully sideloaded AVIF: ${outputName}`);
  } catch (error: any) {
    console.error(`Failed to sideload ${id}: ${error.message}`);
  }
}

async function run() {
  console.log("🚀 Starting industrial image sideloading...");
  for (const p of PRODUCTS) {
    await downloadAndOptimize(p.image, p.id);
  }
  console.log("✅ All images localized and optimized.");
}

run();
