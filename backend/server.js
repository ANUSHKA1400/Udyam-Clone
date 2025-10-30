const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

// Handle registration submission
app.post("/submit", (req, res) => {
  const { aadhaar, pan } = req.body;
  console.log("Received data:", { aadhaar, pan });

  // You could later connect this to MongoDB or PostgreSQL.
  res.json({ message: "Registration data received successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
