const dns = require("dns").promises;
const { logStep } = require("./logger");
const { getCache, setCache } = require("./cacheService");
const getTLD = require("../utils/getTLD");

const TTL = process.env.CACHE_TTL || 60;

async function resolveDomain(domain) {
  console.log("\n==============================");
  console.log(`🔍 Resolving: ${domain}`);

  // 1️⃣ Cache Check
  logStep("1️⃣", "Cache Check");
  const cached = getCache(domain);

  if (cached) {
    console.log("✅ Found in Cache:", cached);
    return cached;
  }

  console.log("❌ Not in Cache");

  // 2️⃣ Resolver Start
  logStep("2️⃣", "DNS Resolver Started");

  // 3️⃣ Root (Simulated)
  const tld = getTLD(domain);
  logStep("3️⃣", `Root → .${tld} TLD`);

  // 4️⃣ TLD (Simulated)
  logStep("4️⃣", `TLD (.${tld}) → Authoritative`);

  // 5️⃣ Authoritative (REAL DNS)
  logStep("5️⃣", "Query Authoritative Server");

  try {
    const result = await dns.lookup(domain);
    const ip = result.address;

    console.log("✅ IP Found:", ip);

    // 6️⃣ Cache Save
    setCache(domain, ip, TTL);

    logStep("6️⃣", "Stored in Cache");

    // 7️⃣ Response
    logStep("7️⃣", "Response Sent to Client");

    // 8️⃣ HTTP Request Simulation
    logStep("8️⃣", `Connecting to ${ip}`);

    return ip;
  } catch (err) {
    console.log("❌ DNS Resolution Failed");
    return null;
  }
}

module.exports = { resolveDomain };