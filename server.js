const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Node backend!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running"));
