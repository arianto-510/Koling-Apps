const express = require("express");
const app = express();
const usersRoute = require("./routes/users");
const dbPool = require("./config/connection");

app.use(express.json());
app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.json({
    message: "API Success",
  });
});

app.listen(5000, () => {
  console.log("Server run on port 5000");
});
