require("dotenv").config();
const express = require("express");
const app = express();
const route = require("./routes/route");

const PORT = process.env.PORT;

app.use(express.json());
app.use("/", route);
app.use("/assets", express.static("public/images"));

app.get("/", (req, res) => {
  res.json({
    message: "API Success",
  });
});

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
