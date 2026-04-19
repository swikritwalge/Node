const express = require("express");
const app = express();

// Replit automatically provides PORT
const PORT = process.env.PORT || 3000;

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from your Node.js app 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});