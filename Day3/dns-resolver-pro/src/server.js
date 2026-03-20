require("dotenv").config();
const express = require("express");

const dnsRoutes = require("./routes/dnsRoutes");

const app = express();

app.use(express.json());
app.use("/dns", dnsRoutes);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
});