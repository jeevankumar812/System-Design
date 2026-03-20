const selfsigned = require("selfsigned");
const fs = require("fs");

async function generateCert() {
  try {
    const attrs = [{ name: "commonName", value: "localhost" }];

    // ✅ Await the Promise
    const pems = await selfsigned.generate(attrs, {
      days: 365,
      keySize: 2048,
    });

    console.log("Generated:", pems);

    if (!pems.private || !pems.cert) {
      throw new Error("Certificate generation failed");
    }

    // Create folder if not exists
    if (!fs.existsSync("./cert")) {
      fs.mkdirSync("./cert");
    }

    // Write files
    fs.writeFileSync("./cert/key.pem", pems.private);
    fs.writeFileSync("./cert/cert.pem", pems.cert);

    console.log("✅ SSL Certificate Generated Successfully");
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

generateCert();