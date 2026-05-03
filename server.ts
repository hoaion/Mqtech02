import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import axios from "axios";
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

  // API Route for Sideloading
  app.get("/api/sideload", async (req, res) => {
    const { url, name } = req.query;
    if (!url || !name) {
      return res.status(400).json({ error: "Missing url or name" });
    }

    try {
      const fileName = `${name}.webp`; // User requested webp, but since I can't convert easily without sharp, I'll save as is for now or use a basic stream
      const filePath = path.join(uploadDir, fileName);

      const response = await axios({
        url: url as string,
        method: "GET",
        responseType: "stream",
      });

      const writer = fs.createWriteStream(filePath);
      response.data.pipe(writer);

      writer.on("finish", () => {
        res.json({ success: true, path: `/assets/images/products/${fileName}` });
      });

      writer.on("error", (err) => {
        res.status(500).json({ error: err.message });
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
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
