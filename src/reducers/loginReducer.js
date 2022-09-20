import { createSlice } from "@reduxjs/toolkit";
import userServices from "../services/users";

const loginSlice = createSlice({
  name: "login",
  initialState: null,
  reducers: {
    setLoggedUser(state, action) {
      return action.payload;
    },
  },
});

export const { setLoggedUser, logoutUser } = loginSlice.actions;

export const userLogin = (username, password) => {
  return async (dispatch) => {
    const data = await userServices.login({ username, password });
    window.localStorage.setItem("loggedInUser", JSON.stringify(data));
    dispatch(setLoggedUser(data));
  };
};

export default loginSlice.reducer;
