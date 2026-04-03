const chalk = require("chalk");
const delay = require("../utils/delay");

const replicateData = async (userData, replica1Model, replica2Model) => {
  console.log(chalk.yellow("\n[REPLICATION] Starting replication..."));

  // Replica 1
  console.log(chalk.blue("[REPLICATION] Sending to Replica 1..."));
  await delay(2000); // simulate lag
  await replica1Model.create(userData);
  console.log(chalk.green("[REPLICA 1] Synced successfully!"));

  // Replica 2
  console.log(chalk.blue("[REPLICATION] Sending to Replica 2..."));
  await delay(3000); // more delay
  await replica2Model.create(userData);
  console.log(chalk.green("[REPLICA 2] Synced successfully!"));

  console.log(chalk.yellow("[REPLICATION] Completed!\n"));
};

module.exports = replicateData;