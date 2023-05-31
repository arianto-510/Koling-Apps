const storyModel = require("../models/stories");
const readAllStory = async (req, res) => {
  try {
    const [data] = await storyModel.getAllStories();
    console.log(data);
    res.json({
      message: "Get All Story",
      data: data,
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
