const UserModel = require("../models/users");
const readAllUser = async (req, res) => {
  const data = await UserModel.getAllUsers();
  console.log(data);
  res.json({
    message: "Get All Users",
    data: data,
  });
};

const createNewUser = (req, res) => {
  res.json({
    message: "Post The User",
  });
};

module.exports = { readAllUser, createNewUser };
