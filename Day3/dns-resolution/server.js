const express = require("express");

const { checkBrowserCache, saveToBrowserCache } = require("./dns/browserCache");
const { checkOSCache, saveToOSCache } = require("./dns/osCache");
const { resolveDNS } = require("./dns/resolver");

const app = express();

app.get("/resolve", (req, res) => {
  const domain = req.query.domain;

  console.log("\n==============================");
  console.log(`🔍 Resolving: ${domain}`);

  // 1️⃣ Browser Cache
  let ip = checkBrowserCache(domain);
  if (ip) return res.send(`IP: ${ip}`);

  // 2️⃣ OS Cache
  ip = checkOSCache(domain);
  if (ip) return res.send(`IP: ${ip}`);

  // 3️⃣ Resolver (Root → TLD → Authoritative)
  ip = resolveDNS(domain);

  if (!ip) return res.send("Domain not found");

  // Save to cache
  saveToBrowserCache(domain, ip);
  saveToOSCache(domain, ip);

  console.log("\n7️⃣ Response Back to Client");

  console.log("\n8️⃣ Browser Makes HTTP Request");
  console.log(`➡️ Connecting to ${ip}`);

  res.send(`✅ Final IP: ${ip}`);
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});