const { getUserModel } = require("../utils/shardManager");

// Create User
exports.createUser = async (req, res) => {
  try {
    const { userId, name, email } = req.body;

    const User = getUserModel(userId);

    const newUser = new User({ userId, name, email });
    await newUser.save();

    const shardIndex = userId % 3;

    res.json({
      message: `✅ User stored in Shard ${shardIndex + 1}`,
      shard: shardIndex + 1
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get User
exports.getUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    const User = getUserModel(userId);

    const user = await User.findOne({ userId });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};