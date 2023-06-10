const dbPool = require("../config/connection");
const { nanoid } = require("nanoid");
const bcrypt = require("bcrypt");

const getAllUsers = () => {
  const query = "SELECT * FROM users";

  return dbPool.execute(query);
};

const addNewUser = (userData) => {
  const idUser = `user${nanoid(15)}`;
  // const pass = body.pass;
  // const saltRound = 10;
  // const salt = bcrypt.genSaltSync(saltRound);
  // const hashPassword = bcrypt.hashSync(pass, salt);
  // console.log(hashPassword);
  const { nik, name, email, phone, pass } = userData;
  const query = `INSERT INTO users (id, nik, name, email, phone, pass)
                  VALUES ('${idUser}', ?, ?, ?, ?, ?)`;
  return dbPool.execute(query, [nik, name, email, phone, pass]);
};

const updateUser = (body, idUser) => {
  const query = ` UPDATE users SET name = '${body.name}', email = '${body.email}', phone = '${body.phone}' WHERE '${idUser}'`;
  return dbPool.execute(query);
};

module.exports = { getAllUsers, addNewUser, updateUser };
