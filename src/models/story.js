const dbPool = require("../config/connection")
const getAllStory = () => {
    const query = "SELECT * FROM story";
  
    return dbPool.execute(query);
  };

module.exports = {getAllStory,};