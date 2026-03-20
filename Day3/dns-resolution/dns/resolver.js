const { queryRoot } = require("./rootServer");
const { queryTLD } = require("./tldServer");
const { queryAuthoritative } = require("./authoritativeServer");

function resolveDNS(domain) {
  console.log("\n3️⃣ Local DNS Resolver (ISP)");

  const tld = queryRoot(domain);       // now dynamic
  queryTLD(domain, tld);               // pass tld
  const ip = queryAuthoritative(domain);

  return ip;
}

module.exports = { resolveDNS };