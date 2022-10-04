import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allComments } from "../reducers/commentReducer";

const Comment = ({ id }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment);
  console.log(comments);
  useEffect(() => {
    dispatch(allComments(id));
  }, [dispatch, id]);
  return (
    <div>
      <h3>comments</h3>
      <form>
        <input placeholder="add a comment" type="text" />
      </form>
      {comments !== null
        ? comments.map((cmmnt) => (
            <>
              <ul key={cmmnt.id}>
                <li>{cmmnt.comment}</li>
              </ul>
            </>
          ))
        : null}
    </div>
  );
};

export default Comment;
