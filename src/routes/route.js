const express = require("express");
const route = express.Router();
const userController = require("../controller/users");
const storyController = require("../controller/story");

route.get("/users", userController.readAllUser);
route.post("/register", userController.createNewUser);
route.patch("/user/:id", userController.editUser);
route.post("/login", userController.loginUser);

route.get("/story", storyController.readAllStory);
route.post("/story", storyController.createNewStory);

module.exports = route;
