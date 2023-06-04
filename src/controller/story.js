const StoryModel = require("../models/story");

const readAllStory = async (req, res) => {
    try {
        const [data] = await StoryModel.getAllStory();
        res.json({
            message: "Get All Story",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            errorMessage: error,
        })
    }
}

module.exports = {readAllStory,}