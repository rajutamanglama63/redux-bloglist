const express = require("express");
const Comment = require("../models/commentSchema");

const commentRouter = express.Router();

commentRouter.post("/:id", async (req, res, next) => {
  const newComment = new Comment({
    comment: req.body.comment,
    blogId: req.params.id,
  });

  const comment = newComment.save();

  res.status(200).json(comment);
});

commentRouter.get("/:id", async (req, res, next) => {
  const allComment = await Comment.find({});
  res.status(200).json(allComment);
});

module.exports = commentRouter;
