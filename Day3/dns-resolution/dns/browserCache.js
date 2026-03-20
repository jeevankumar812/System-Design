const cache = {};

function checkBrowserCache(domain) {
  console.log("\n1️⃣ Browser Cache Check");
  if (cache[domain]) {
    console.log("✅ Found in Browser Cache:", cache[domain]);
    return cache[domain];
  }
  console.log("❌ Not found in Browser Cache");
  return null;
}

function saveToBrowserCache(domain, ip) {
  cache[domain] = ip;
}

module.exports = { checkBrowserCache, saveToBrowserCache };