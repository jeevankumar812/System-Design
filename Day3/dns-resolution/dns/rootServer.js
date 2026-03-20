function getTLD(domain) {
  return domain.split(".").pop(); // get last part
}

function queryRoot(domain) {
  console.log("\n4️⃣ Root DNS Server");

  const tld = getTLD(domain);

  console.log(`➡️ Root: Go to .${tld} TLD server`);

  return tld;
}

module.exports = { queryRoot };