const express = require("express");
const Blog = require("../models/blogSchema");
const Comment = require("../models/commentSchema");

const commentRouter = express.Router();

commentRouter.post("/:id", async (req, res, next) => {
  const newComment = new Comment({
    comment: req.body.comment,
    blogId: req.params.id,
  });

  console.log(newComment);

  const comment = await newComment.save();

  res.status(200).json(comment);
});

commentRouter.get("/:id", async (req, res, next) => {
  const allComment = await Comment.find({ blogId: req.params.id });
  res.status(200).json(allComment);
});

module.exports = commentRouter;
