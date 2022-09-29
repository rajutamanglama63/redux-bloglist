import { createSlice } from "@reduxjs/toolkit";
import commentServices from "../services/comments";

const commentSlice = createSlice({
  name: "create",
  initialState: [],
  reducers: {
    setNewComment(state, action) {
      //   console.log(action.payload);
      return [...state, action.payload];
    },
    getComments(state, action) {
      return action.payload;
    },
  },
});

export const { setNewComment, getComments } = commentSlice.actions;

export const createNewComment = (newCommentData) => {
  return async (dispatch) => {
    const data = await commentServices.createBlog(newCommentData);
    dispatch(setNewComment(data));
  };
};

export const allComments = (id) => {
  return async (dispatch) => {
    const data = await commentServices.getAllComments(id);
    console.log(data);
    dispatch(getComments(data));
  };
};

export default commentSlice.reducer;
