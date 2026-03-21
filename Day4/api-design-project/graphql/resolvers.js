const User = require("../models/User");

module.exports = {
  Query: {
    users: async () => await User.find(),
  },
  Mutation: {
    createUser: async (_, { name, email }) => {
      const user = new User({ name, email });
      return await user.save();
    },
  },
};