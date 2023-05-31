const express = require("express");
const route = require(express.Router());
const storyController = require("../controller/stories");

route.get("/story", storyController.readAllStory);

module.exports = route;
