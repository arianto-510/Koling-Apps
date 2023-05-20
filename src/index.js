const express = require("express");
const app = express();

const usersRoute = require("./routes/users");

app.use(express.json());
app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.json({
    nama: "Arianto",
    alamat: "bombana",
  });
});

app.listen(5000, () => {
  console.log("Server run on port 5000");
});
