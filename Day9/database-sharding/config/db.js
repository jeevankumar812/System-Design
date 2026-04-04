const mongoose = require("mongoose");

const shardConnections = [];

const connectDB = async () => {
  const uris = [process.env.DB1, process.env.DB2, process.env.DB3];

  for (let i = 0; i < uris.length; i++) {
    const conn = await mongoose.createConnection(uris[i]);
    console.log(`✅ Connected to Shard ${i + 1}`);
    shardConnections.push(conn);
  }
};

module.exports = { connectDB, shardConnections };