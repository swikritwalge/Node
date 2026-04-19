const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
fs.writeFile("data.txt", "Hello Swikrit 👋", (err) => {
  if (err) return console.log(err);
  console.log("File created!");
});
app.get("/read", async (req, res) => {
  try {
    const data = await fs.readFile("data.txt", "utf8");
    res.send(data);
  } catch (err) {
    res.status(500).send("Error reading file");
  }
});

  res.send("Backend is running 🚀");
});

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Node backend!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running"));
