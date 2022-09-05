const express = require("express");
const cors = require("cors");
const config = require("./utils/config");

const app = express();

config.connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

module.exports = app;
