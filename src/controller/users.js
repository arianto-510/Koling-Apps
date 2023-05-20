const getAllUser = (req, res) => {
  res.json({
    message: "Get All Users",
  });
};

const createNewUser = (req, res) => {
  res.json({
    message: "Post The User",
  });
};

module.exports = { getAllUser, createNewUser };
