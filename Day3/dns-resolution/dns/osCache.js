const cache = {};

function checkOSCache(domain) {
  console.log("\n2️⃣ OS Cache Check");
  if (cache[domain]) {
    console.log("✅ Found in OS Cache:", cache[domain]);
    return cache[domain];
  }
  console.log("❌ Not found in OS Cache");
  return null;
}

function saveToOSCache(domain, ip) {
  cache[domain] = ip;
}

module.exports = { checkOSCache, saveToOSCache };