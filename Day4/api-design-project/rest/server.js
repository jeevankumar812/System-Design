const express = require("express");
const connectDB = require("../config/db");
const User = require("../models/User");

const app = express();
app.use(express.json());

connectDB();

// GET users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// CREATE user
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

app.listen(4000, () => {
  console.log("REST API running on http://localhost:4000");
});