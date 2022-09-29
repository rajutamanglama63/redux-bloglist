import { configureStore } from "@reduxjs/toolkit";
import blogDetailReducer from "./reducers/blogDetailReducer";
import blogReducer from "./reducers/blogReducer";
import commentReducer from "./reducers/commentReducer";
import individualUserReducer from "./reducers/individualUserReducer";
import loginReducer from "./reducers/loginReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    blog: blogReducer,
    loggedUser: loginReducer,
    allUser: userReducer,
    individualUser: individualUserReducer,
    comment: commentReducer,
    blogDetail: blogDetailReducer,
  },
});

export default store;
