const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");

const app = express();
app.use(express.json());

/*
====================================
📌 COMMON ROUTES
====================================
*/

// Home route
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to HTTP vs HTTPS Server",
    protocol: req.protocol,
    secure: req.secure,
  });
});

// POST route
app.post("/data", (req, res) => {
  res.send({
    message: "Data received successfully",
    data: req.body,
    protocol: req.protocol,
    secure: req.secure,
  });
});

/*
====================================
📌 HTTPS SERVER (SECURE)
====================================
*/

const httpsOptions = {
  key: fs.readFileSync("./cert/key.pem"),
  cert: fs.readFileSync("./cert/cert.pem"),
};

const httpsServer = https.createServer(httpsOptions, app);

httpsServer.listen(5443, () => {
  console.log("🔐 HTTPS Server running on https://localhost:5443");
});

/*
====================================
📌 HTTP SERVER (REDIRECT TO HTTPS)
====================================
*/

const httpApp = express();

// Redirect all HTTP traffic to HTTPS
httpApp.use((req, res) => {
  const host = req.headers.host.split(":")[0]; // remove port
  return res.redirect(`https://${host}:5443${req.url}`);
});

const httpServer = http.createServer(httpApp);

httpServer.listen(5000, () => {
  console.log("🌐 HTTP Server running on http://localhost:5000 (redirecting to HTTPS)");
});