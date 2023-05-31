const dbPool = require("../config/connection");
const getAllStories = () => {
  const query = "select * from stori";
  return dbPool.execute(query);
};

module.exports = {
  getAllStories,
};
