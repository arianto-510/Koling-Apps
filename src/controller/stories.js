const readAllStory = (req, res) => {
  res.json({
    message: "Get All story",
  });
};

module.exports = {
  readAllStory,
};
