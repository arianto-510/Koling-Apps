const dbPool = require("../config/connection");

const getAllUsers = () => {
  const query = "SELECT * FROM users";

  return dbPool.execute(query);
};

module.exports = { getAllUsers };
