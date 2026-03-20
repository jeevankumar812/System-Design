function queryTLD(domain, tld) {
  console.log(`\n5️⃣ TLD Server (.${tld})`);
  console.log(`➡️ TLD: Resolving ${domain}`);

  return "authoritative-server";
}

module.exports = { queryTLD };