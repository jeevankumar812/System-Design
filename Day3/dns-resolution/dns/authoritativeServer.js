const dnsRecords = require("../data/dnsRecords");

function queryAuthoritative(domain) {
  console.log("\n6️⃣ Authoritative DNS Server");
  const ip = dnsRecords[domain];

  if (ip) {
    console.log(`✅ Found IP: ${ip}`);
    return ip;
  }

  console.log("❌ Domain not found");
  return null;
}

module.exports = { queryAuthoritative };