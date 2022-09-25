// import { createSlice } from "@reduxjs/toolkit";
// import blogServices from "../services/blogs";

// const createBlogSlice = createSlice({
//   name: "create",
//   initialState: null,
//   reducers: {
//     setNewBlog(state, action) {
//       console.log(action.payload);
//       return action.payload;
//     },
//   },
// });

// export const { setNewBlog } = createBlogSlice.actions;

// export const createNewBlog = (newBlogData) => {
//   return async (dispatch) => {
//     const data = await blogServices.createBlog(newBlogData);
//     dispatch(setNewBlog(data));
//   };
// };

// export default createBlogSlice.reducer;
