const { nanoid } = require("nanoid");
const dbPool = require("../config/connection");

const getAllStory = () => {
  const query = "SELECT * FROM story";

  return dbPool.execute(query);
};

const addNewStory = (body) => {
  const idUser = `story${nanoid(15)}`;
  const date = new Date();
  console.log(date);
  const query = `INSERT INTO story (id, name, description, photoUrl, createAt, lan, lon) VALUES ('${idUser}','${body.name}', '${body.description}', '${body.photoUrl}', '${date}','${body.lan}', '${body.lon}')`;
  return dbPool.execute(query);
};

// const updateStory = (body, idUser) => {
//   const query = `UPDATE story SET `;
// };
module.exports = { getAllStory, addNewStory };
