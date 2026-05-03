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

  // API Route cho Sideloading (SOP Implementation)
  app.post("/api/sideload-image", express.json(), async (req, res) => {
    const { imageUrl, fileName } = req.body;
    
    if (!imageUrl || !fileName) {
      return res.status(400).json({ success: false, error: "Missing imageUrl or fileName" });
    }

    try {
      const outputName = `${fileName}.webp`;
      const filePath = path.join(uploadDir, outputName);

      // Fetch image
      const response = await axios({
        url: imageUrl,
        method: "GET",
        responseType: "arraybuffer",
      });

      const buffer = Buffer.from(response.data);

      // Xử lý nén và chuyển đổi sang WebP
      const optimizedBuffer = await sharp(buffer)
        .webp({ quality: 80 })
        .toBuffer();

      // Lưu vào thư mục public
      fs.writeFileSync(filePath, optimizedBuffer);

      console.log(`[Sideload] Saved: ${outputName}`);
      
      return res.json({ 
        success: true, 
        localUrl: `/assets/images/products/${outputName}` 
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
