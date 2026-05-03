import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import axios from "axios";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Ensure image directories exist
  const uploadDir = path.join(process.cwd(), "public", "assets", "images", "products");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // API Route cho Sideloading (SOP Implementation - Enhanced with Validation)
  app.post("/api/sideload-image", express.json(), async (req, res) => {
    const { imageUrl, fileName } = req.body;
    
    if (!imageUrl || !fileName) {
      return res.status(400).json({ success: false, error: "Missing imageUrl or fileName" });
    }

    try {
      const uploadPath = path.join(uploadDir, `${fileName}.avif`);

      // Fetch image
      const response = await axios({
        url: imageUrl,
        method: "GET",
        responseType: "arraybuffer",
      });

      const buffer = Buffer.from(response.data);
      const image = sharp(buffer);
      
      // VALIDATION: Kiểm tra metadata để xác nhận ảnh không lỗi/hỏng
      const metadata = await image.metadata();
      if (!metadata) {
        throw new Error("Invalid or corrupted image source.");
      }

      // CONVERSION: Chuyển đổi sang AVIF (High compression)
      await image
        .avif({ quality: 65 })
        .toFile(uploadPath);

      console.log(`[Sideload] Optimized & Saved AVIF: ${fileName}.avif`);
      
      return res.json({ 
        success: true, 
        localUrl: `/assets/images/products/${fileName}.avif` 
      });
    } catch (err: any) {
      console.error(`[Sideload Error] ${err.message}`);
      return res.status(500).json({ success: false, error: err.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
