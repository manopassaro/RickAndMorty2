const User = require("./user.models");

const createUser = async (body) => await User.create(body);

const allUser = async () => await User.find();

const findUsername = async (username) =>
  await User.findOne({ username: username });

const findEmail = async (email) => await User.findOne({ email: email });

module.exports = {
  createUser,
  allUser,
  findUsername,
  findEmail
};
