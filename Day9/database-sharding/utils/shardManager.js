const { shardConnections } = require("../config/db");
const userSchema = require("../models/userModel");

const getShard = (userId) => {
  const shardIndex = userId % 3;
  return shardConnections[shardIndex];
};

const getUserModel = (userId) => {
  const shard = getShard(userId);
  return shard.model("User", userSchema);
};

module.exports = { getUserModel };