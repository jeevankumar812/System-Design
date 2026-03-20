const express = require("express");
const https = require("https");
const fs = require("fs");

const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
app.use(express.json());

/*
====================================
📌 ROUTES
====================================
*/

// Auth routes
app.use("/api/auth", authRoutes);

// Public route
app.get("/", (req, res) => {
  res.json({
    message: "TLS Secure API Running 🔐",
  });
});

// Protected route
app.get("/api/secure-data", authMiddleware, (req, res) => {
  res.json({
    message: "This is protected data 🔐",
    user: req.user,
  });
});

/*
====================================
📌 HTTPS SERVER (TLS)
====================================
*/

const options = {
  key: fs.readFileSync("./cert/key.pem"),
  cert: fs.readFileSync("./cert/cert.pem"),
};

https.createServer(options, app).listen(5443, () => {
  console.log("🔐 Server running at https://localhost:5443");
});