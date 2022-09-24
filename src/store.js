import { configureStore } from "@reduxjs/toolkit";
import blogDetailReducer from "./reducers/blogDetailReducer";
import blogReducer from "./reducers/blogReducer";
import createBlogReducer from "./reducers/createBlogReducer";
import individualUserReducer from "./reducers/individualUserReducer";
import loginReducer from "./reducers/loginReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    blog: blogReducer,
    loggedUser: loginReducer,
    allUser: userReducer,
    individualUser: individualUserReducer,
    createBlog: createBlogReducer,
    blogDetail: blogDetailReducer,
  },
});

export default store;
