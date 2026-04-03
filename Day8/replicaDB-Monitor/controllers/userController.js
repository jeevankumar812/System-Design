const chalk = require("chalk");
const replicateData = require("../services/replicationService");

const createUser = async (
  primaryModel,
  replica1Model,
  replica2Model
) => {
  try {
    const userData = {
      name: "Jeevan",
      email: "jeevan@example.com",
    };

    console.log(chalk.cyan("\n[PRIMARY] Writing user..."));

    const user = await primaryModel.create(userData);

    console.log(chalk.green("[PRIMARY] User saved!"));

    // Trigger replication
    await replicateData(userData, replica1Model, replica2Model);
  } catch (error) {
    console.error("❌ Error:", error);
  }
};

module.exports = createUser;