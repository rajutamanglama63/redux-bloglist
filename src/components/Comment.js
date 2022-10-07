import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { allComments, createNewComment } from "../reducers/commentReducer";

const Comment = ({ id }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment);
  // console.log(comments);

  const [comment, setComment] = useState("");

  useEffect(() => {
    dispatch(allComments(id));
  }, [dispatch, id]);

  const commentHandler = (e) => {
    e.preventDefault();
    dispatch(createNewComment(comment, id));
    setComment("");
  };
  return (
    <div>
      <h3>comments</h3>
      <form onSubmit={commentHandler}>
        <input
          placeholder="add a comment"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      {comments !== null
        ? comments.map((cmmnt) => (
            <>
              <ul>
                <li key={cmmnt.id}>{cmmnt.comment}</li>
              </ul>
            </>
          ))
        : null}
    </div>
  );
};

export default Comment;
