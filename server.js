const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
res.send("hello");
});

app.get('/api/health', (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
