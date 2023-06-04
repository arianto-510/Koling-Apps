const express = require("express");
const app = express();
const { nanoid } = require("nanoid");
const route = require("./routes/route")


app.use(express.json());
app.use("/", route)


app.get("/", (req, res) => {
  res.json({
    message: "API Success",
  });
});

app.listen(5000, () => {
  const id = nanoid(15);
  console.log(id);
  console.log("Server run on port 5000");
});
