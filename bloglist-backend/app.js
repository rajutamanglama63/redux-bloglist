const express = require("express");
const cors = require("cors");
const config = require("./utils/config");
const middleware = require("./utils/middleware");
const userRouter = require("./controllers/users");

const app = express();

config.connectDB();

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.use("/api/users/", userRouter);

// these two middleware runs after all routes gets executed --
// And then it will handle whatever task it is assign like handling err if it occur.
app.use(middleware.unKnownEndPoint);

app.use(middleware.errorHandler);

module.exports = app;
