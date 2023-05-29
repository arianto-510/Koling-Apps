const dbPool = require("../config/connection");

const getAllUsers = () => {
  const query = "SELECT * FROM users";

  return dbPool.execute(query);
};

const addNewUser = (body) => {
  const query = `INSERT INTO users (nik, name, email, phone, pass)
                  VALUES('${body.nik}', '${body.name}', '${body.email}', 
                  '${body.phone}', ${body.pass})`;
  return dbPool.execute(query);
};

module.exports = { getAllUsers, addNewUser };
