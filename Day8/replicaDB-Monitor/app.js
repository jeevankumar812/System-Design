const connectDBs = require("./config/db");
const createUser = require("./controllers/userController");
const UserModel = require("./models/User");

const startApp = async () => {
  const { primary, replica1, replica2 } = await connectDBs();

  // Models for each DB
  const PrimaryUser = UserModel(primary);
  const Replica1User = UserModel(replica1);
  const Replica2User = UserModel(replica2);

  // Simulate write
  await createUser(PrimaryUser, Replica1User, Replica2User);

  process.exit();
};

startApp();