const StoryModel = require("../models/stories");
const readAllStory = async (req, res) => {
  try {
    const [rows] = await StoryModel.getAllStories;
    console.log(rows);
    res.json({
      message: "Get All Story",
      data: raws,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  readAllStory,
};
