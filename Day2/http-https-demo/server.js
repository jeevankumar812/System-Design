const express = require("express");
const http = require("http");
const https = require("https");
const selfsigned = require("selfsigned");
const crypto = require("crypto");

const app = express();
app.use(express.json());

/*
====================================================
📌 LOGGER (UNDERSTAND REQUEST FLOW)
====================================================
*/
app.use((req, res, next) => {
    console.log("\n===== NEW REQUEST =====");
    console.log("Protocol:", req.protocol);
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    next();
});

/*
====================================================
📌 ROOT ROUTE
====================================================
*/
app.get("/", (req, res) => {
    res.send(`Hello from ${req.protocol.toUpperCase()} server 🚀`);
});

/*
====================================================
📌 LOGIN ROUTE
====================================================
*/
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    console.log("📦 Body Received:", req.body);

    if (email === "admin@gmail.com" && password === "123") {
        return res.json({
            message: "Login Success",
            protocol: req.protocol
        });
    }

    res.status(401).json({ message: "Invalid Credentials" });
});

/*
====================================================
📌 HTTP SERVER (PORT 5000)
====================================================
*/
http.createServer(app).listen(5000, () => {
    console.log("❌ HTTP Server: http://localhost:5000");
});

/*
====================================================
📌 HTTPS SERVER (PORT 5001) — FIXED
====================================================
*/

// Generate strong self-signed certificate
const attrs = [{ name: "commonName", value: "localhost" }];

const pems = selfsigned.generate(attrs, {
    days: 365,
    keySize: 2048,
    algorithm: "sha256"
});

// ✅ FINAL TLS CONFIG (BROWSER COMPATIBLE)
const options = {
    key: pems.private,
    cert: pems.cert,

    // Support modern TLS only
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.3",

    // Use Node's default secure ciphers
    ciphers: crypto.constants.defaultCoreCipherList,
    honorCipherOrder: true,
};

https.createServer(options, app).listen(5001, () => {
    console.log("🔐 HTTPS Server: https://localhost:5001");
});

/*
====================================================
📌 OPTIONAL: FORCE HTTPS
====================================================

app.use((req, res, next) => {
    if (!req.secure) {
        return res.redirect("https://" + req.headers.host + req.url);
    }
    next();
});
*/