const express = require("express");
const cors = require("cors");
const config = require("./utils/config");
const middleware = require("./utils/middleware");
const userRouter = require("./controllers/users");
const blogRouter = require("./controllers/blogs");
const commentRouter = require("./controllers/comments");

const app = express();

config.connectDB();

app.use(cors());
app.use(express.json());

// this middleware have to run before any routes so that--
// it can assign req.user to the route
app.use(middleware.userExtractor);

// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/comments", commentRouter);

// these two middleware runs after all routes gets executed --
// And then it will handle whatever task it is assign like handling err if it occur.
app.use(middleware.unKnownEndPoint);

app.use(middleware.errorHandler);

module.exports = app;
