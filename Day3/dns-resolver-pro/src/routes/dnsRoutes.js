const express = require("express");
const router = express.Router();
const { resolveDomain } = require("../services/dnsService");

router.get("/resolve", async (req, res) => {
  const domain = req.query.domain;

  if (!domain) {
    return res.status(400).json({ error: "Domain required" });
  }

  const ip = await resolveDomain(domain);

  if (!ip) {
    return res.status(404).json({ error: "Domain not found" });
  }

  res.json({ domain, ip });
});

module.exports = router;