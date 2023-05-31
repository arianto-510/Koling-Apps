const express = require("express");
const route = express.Router();
const userController = require("../controller/users");

route.get("/users", userController.readAllUser);
route.post("/register", userController.createNewUser);

module.exports = route;
