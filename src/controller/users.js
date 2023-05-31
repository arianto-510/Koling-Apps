const UserModel = require("../models/users");
const readAllUser = async (req, res) => {
  try {
    const [data] = await UserModel.getAllUsers();
    res.json({
      message: "Get All Users",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewUser = async (req, res) => {
  const body = req.body;
  try {
    await UserModel.addNewUser(body);
    res.json({
      message: "Create New User Success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = { readAllUser, createNewUser };
