const selfsigned = require("selfsigned");
const fs = require("fs");

async function generateCert() {
  const attrs = [{ name: "commonName", value: "localhost" }];

  const pems = await selfsigned.generate(attrs, {
    days: 365,
    keySize: 2048,
  });

  if (!fs.existsSync("./cert")) {
    fs.mkdirSync("./cert");
  }

  fs.writeFileSync("./cert/key.pem", pems.private);
  fs.writeFileSync("./cert/cert.pem", pems.cert);

  console.log("✅ SSL/TLS Certificate Generated");
}

generateCert();