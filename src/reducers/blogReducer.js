import { createSlice } from "@reduxjs/toolkit";
import blogServices from "../services/blogs";

const blogSlice = createSlice({
  name: "blog",
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      return action.payload;
    },
    setNewBlog(state, action) {
      // console.log(action.payload);
      return [...state, action.payload];
    },
  },
});

export const { setBlogs, setNewBlog } = blogSlice.actions;

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogServices.getAll();
    dispatch(setBlogs(blogs));
  };
};

export const createNewBlog = (newBlogData) => {
  return async (dispatch) => {
    const data = await blogServices.createBlog(newBlogData);
    dispatch(setNewBlog(data));
  };
};

export default blogSlice.reducer;
