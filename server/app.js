const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGOURI } = require("./valuekeys");
mongoose.connect(MONGOURI);
mongoose.connection.on("connected", () => {
  console.log("we are connted to server");
});

mongoose.connection.on("error", () => {
  console.log("we are  not connted to server");
});



require("./models/studentDetails");

const studentRoute = require("./routes/studentRoute");
app.use(express.json());

app.use(studentRoute);

app.get("/", (req, res) => {
    res.send("good morning");
  });
  app.listen(3002, () => {
    console.log("server is running succrssfully");
  });
