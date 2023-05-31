const dbPool = require("../config/connection");
const nanoId = require("nanoid");

const getAllUsers = () => {
  const query = "SELECT * FROM users";

  return dbPool.execute(query);
};

const addNewUser = (body) => {
  // const idUser = nanoId(15);
  const query = `INSERT INTO users (id, nik, name, email, phone, pass)
                  VALUES ('${body.id}','${body.nik}', '${body.name}', '${body.email}', 
                  '${body.phone}', ${body.pass})`;
  return dbPool.execute(query);
};

// const updateUser = (body, idUser) => {
//   const query = ` UPDATE users
//                   SET name = '${body.name}' email = '${body.email}' phone = '${body.phone}'
//                   WHERE id = '${idUser}'`;
//   return dbPool.execute(query);
// };

module.exports = { getAllUsers, addNewUser };
