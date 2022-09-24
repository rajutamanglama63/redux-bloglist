import { createSlice } from "@reduxjs/toolkit";
import blogServices from "../services/blogs";

const blogDetailSlice = createSlice({
  name: "blogSlice",
  initialState: null,
  reducers: {
    setBlogDetail(state, action) {
      return action.payload;
    },
  },
});

export const { setBlogDetail } = blogDetailSlice.actions;

export const getSingleBlog = (id) => {
  return async (dispatch) => {
    const singleBlog = await blogServices.getBlogDetail(id);
    dispatch(setBlogDetail(singleBlog));
  };
};

export default blogDetailSlice.reducer;
