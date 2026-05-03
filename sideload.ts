import fs from "fs";
import path from "path";
import axios from "axios";

const PRODUCTS = [
  { id: 'f-cut-v3-basic', image: 'https://images.unsplash.com/photo-1565511394011-8240409da659?auto=format&fit=crop&q=80&w=1200' },
  { id: 'f-cut-pro-12kw', image: 'https://images.unsplash.com/photo-1565511394011-8240409da659?auto=format&fit=crop&q=80&w=1200' },
  { id: 'f-weld-nano-1500', image: 'https://images.unsplash.com/photo-1531280758014-11440590867f?auto=format&fit=crop&q=80&w=1200' },
  { id: 'f-mark-uv-5', image: 'https://images.unsplash.com/photo-1617782635487-6e492d37651a?auto=format&fit=crop&q=80&w=1200' },
  { id: 'f-sol-robot-cell', image: 'https://images.unsplash.com/photo-1590986440410-ad303d9f31f7?auto=format&fit=crop&q=80&w=1200' },
  { id: 'f-cut-pipe-200', image: 'https://images.unsplash.com/photo-1590483734724-383b85ad05bd?auto=format&fit=crop&q=80&w=1200' },
  { id: 'f-weld-robot-arm', image: 'https://images.unsplash.com/photo-1590986440410-ad303d9f31f7?auto=format&fit=crop&q=80&w=1200' },
  { id: 'f-mark-mopa-100', image: 'https://images.unsplash.com/photo-1617782635487-6e492d37651a?auto=format&fit=crop&q=80&w=1200' },
];

const TARGET_DIR = path.join(process.cwd(), "public", "assets", "images", "products");

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

async function downloadImage(url: string, id: string) {
  const fileName = `${id}.webp`;
  const filePath = path.join(TARGET_DIR, fileName);

  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    });

    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Failed to download ${id}:`, error);
  }
}

async function run() {
  console.log("Starting sideloading...");
  for (const p of PRODUCTS) {
    console.log(`Downloading ${p.id}...`);
    await downloadImage(p.image, p.id);
  }
  console.log("Sideloading complete.");
}

run();
