const express = require("express");
const app = express();
const usersRoute = require("./routes/users");
const storiesRoute = require("./routes/stories");
// const { nanoid } = require("nanoid");

app.use(express.json());
// app.use(usersRoute);
app.use(storiesRoute);

app.get("/", (req, res) => {
  res.json({
    message: "API Success",
  });
});

app.listen(5000, () => {
  // const id = nanoid(15);
  // console.log(id);
  console.log("Server run on port 5000");
});
