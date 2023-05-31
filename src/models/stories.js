const dbPool = require("../config/connection");
const getAllStories = () => {
  const query = "SELECT * FROM story";

  return dbPool.execute(query);
};

module.exports = {
  getAllStories,
};
