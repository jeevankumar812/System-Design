const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");

dotenv.config();
const app = express();

app.use(express.json());

// Connect all shards
connectDB();

app.use("/api/users", require("./routes/userRoutes"));

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});