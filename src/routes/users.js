const express = require("express");
const route = express.Router();
const userController = require("../controller/users");
const storyController = require("../controller/stories");

route.get("/users", userController.readAllUser);
route.post("/register", userController.createNewUser);

route.get("/story", storyController.readAllStory);

module.exports = route;
