const express = require("express");
const jwt = require("jsonwebtoken");
const Blog = require("../models/blogSchema");
const User = require("../models/userSchema");
const config = require("../utils/config");

const blogRouter = express.Router();

blogRouter.get("/", async (req, res, next) => {
  try {
    const allBlogs = await Blog.find({}).populate("user", {
      username: 1,
      name: 1,
    });

    res.status(200).json(allBlogs);
  } catch (error) {
    next();
  }
});

blogRouter.post("/", async (req, res, next) => {
  try {
    if (req.body.likes === undefined) {
      req.body.likes = 0;
    }

    const decodedUser = jwt.verify(req.user, config.SECRET);

    if (!decodedUser.id) {
      return res.status(401).json({ error: "token missing or invalid" });
    }

    const user = await User.findById(decodedUser.id);

    if (!user) {
      res.status(401).json({ error: "token missing or invalid" });
    }

    if (!(req.body.title && req.body.url)) {
      res.status(400).json({ error: "title and url are required." });
    } else {
      const blog = new Blog({
        title: req.body.title,
        author: req.body.author,
        url: req.body.url,
        likes: req.body.likes,
        user: user.id,
      });

      const newBlog = await blog.save();

      user.blogs = user.blogs.concat(newBlog.id);

      await user.save();

      res.status(200).json(newBlog);
    }
  } catch (error) {
    next(error);
  }
});

blogRouter.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;

    const decodedUser = jwt.verify(req.user, config.SECRET);
    if (!decodedUser.id) {
      return res.status(401).json({ error: "token missing or invalid" });
    }

    const user = await User.findById(decodedUser.id);
    if (!user) {
      return res.status(401).json({ error: "token missing or invalid" });
    }
    const newBlogPost = {
      title: req.body.title,
      author: req.body.author,
      url: req.body.url,
      likes: req.body.likes,
      user: user.id,
    };

    const updatedBlogPost = await Blog.findByIdAndUpdate(id, newBlogPost, {
      new: true,
    });

    res.status(200).json(updatedBlogPost);
  } catch (error) {
    next(error);
  }
});

blogRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const blog = await Blog.findById(id);
  console.log(blog.user);
  //   console.log(blog.id.toString());

  const token = req.user;
  const decodedToken = jwt.verify(token, config.SECRET);
  console.log(decodedToken.id);
  if (!decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }

  if (blog.user.toString() === decodedToken.id) {
    console.log("should get deleted");
    blog.remove();
    res.status(200).json({ msg: "deleted" });
  } else {
    console.log("not deleted");
  }
});
module.exports = blogRouter;
