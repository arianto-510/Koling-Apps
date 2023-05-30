const express = require("express");
const route = express.Router();
const storiesController = require("../controller/stories");

route.get("/", storiesController.readAllStory);

module.exports = route;
