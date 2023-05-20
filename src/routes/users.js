const express = require("express");
const route = express.Router();
const userController = require("../controller/users");

route.get("/", userController.readAllUser);
route.post("/", userController.createNewUser);

module.exports = route;
