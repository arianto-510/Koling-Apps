const UserModel = require("../models/users");
const bcrypt = require("bcrypt");
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
  const { nik, name, email, phone, pass } = req.body;
  const salt = 10;
  try {
    const hashPassword = await bcrypt.hash(pass, salt);
    const userData = { nik, name, email, phone, pass: hashPassword };
    await UserModel.addNewUser(userData);
    res.status(201).json({
      message: "Create New User Success",
      data: userData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const editUser = async (req, res) => {
  const idUser = req.params;
  console.log(idUser);
  const { body } = req;
  try {
    await UserModel.updateUser(body, idUser);
    res.json({
      message: "Update User Success",
      id: idUser,
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      error: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = { readAllUser, createNewUser, editUser };
