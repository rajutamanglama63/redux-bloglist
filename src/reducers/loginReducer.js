import { createSlice } from "@reduxjs/toolkit";
import userServices from "../services/users";

const loginSlice = createSlice({
  name: "login",
  initialState: window.localStorage.getItem("loggedInUser"),
  reducers: {
    setLoggedUser(state, action) {
      return action.payload;
    },
    removeLoggedUser(state, action) {
      return null;
    },
  },
});

export const { setLoggedUser, removeLoggedUser } = loginSlice.actions;

export const userLogin = (username, password) => {
  return async (dispatch) => {
    const data = await userServices.login({ username, password });
    window.localStorage.setItem("loggedInUser", JSON.stringify(data));
    dispatch(setLoggedUser(data));
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    dispatch(removeLoggedUser());
  };
};

export default loginSlice.reducer;
