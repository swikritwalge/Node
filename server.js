const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());

// ✅ Cloudinary config (use ENV variables on Render)
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

// ✅ Multer (temporary storage)
const upload = multer({ dest: "uploads/" });

// 🔥 Upload route
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Delete temp file (important on Render)
    fs.unlinkSync(req.file.path);

    // Send back URL
    res.json({
      message: "Upload successful ✅",
      url: result.secure_url
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed ❌" });
  }
});

// simple test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// ✅ Use dynamic port for Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
