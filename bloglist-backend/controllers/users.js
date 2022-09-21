const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const config = require("../utils/config");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res, next) => {
  const { name, username, password } = req.body;
  try {
    if (!name || !username || !password) {
      res.status(400).json("All fields are required.");
    }

    if (username.length < 3 || password.length < 3) {
      res
        .status(400)
        .json("Username and password should be atleast 3 character long.");
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(400).json("Username must be unique.");
    }

    const salt = await bcrypt.genSalt(10);

    const hassedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      username,
      password: hassedPassword,
    });

    newUser.save();

    res.status(201).json(newUser);

    // "Cannot set headers after they are sent to the client"
    // This error arises when you send more than 1 responses to the user or client.
    // That means the receiver is getting two responses, when it should only be getting one.
    // To solve this, make sure you are only sending one response.

    // headers will not send, as we have already sent once.
    // Prevents error.
    // if (res.headersSent !== true) {
    // res.status(201).json(newUser);
    // }
  } catch (error) {
    next(error);
  }
});

userRouter.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const userExist = await User.findOne({ username });

    if (!userExist) {
      res.status(400).json("User does not exist.");
    }

    const isMatch = await bcrypt.compare(password, userExist.password);

    if (!isMatch) {
      res.status(401).json("Invalid Credentials");
    }

    const userForToken = {
      username: userExist.username,
      id: userExist._id,
    };

    const token = jwt.sign(userForToken, config.SECRET, { expiresIn: 60 * 60 });

    res.status(200).json({
      token,
      username: userExist.username,
      name: userExist.name,
      blogs: userExist.blogs,
    });
  } catch (error) {
    next(error);
  }
});

userRouter.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
});

userRouter.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
