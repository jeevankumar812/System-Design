const mongoose = require("mongoose");

const connectDBs = async () => {
  try {
    // Primary DB
    const primary = await mongoose.createConnection(
      "mongodb://127.0.0.1:27017/primaryDB"
    );

    // Replica 1
    const replica1 = await mongoose.createConnection(
      "mongodb://127.0.0.1:27017/replica1DB"
    );

    // Replica 2
    const replica2 = await mongoose.createConnection(
      "mongodb://127.0.0.1:27017/replica2DB"
    );

    console.log("✅ All databases connected");

    return { primary, replica1, replica2 };
  } catch (error) {
    console.error("❌ DB Connection Failed:", error);
  }
};

module.exports = connectDBs;