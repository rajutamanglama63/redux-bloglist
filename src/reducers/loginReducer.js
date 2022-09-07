import { createSlice } from "@reduxjs/toolkit";
import loginServices from "../services/login";

const loginSlice = createSlice({
  name: "login",
  initialState: null,
  reducers: {
    setLoggedUser(state, action) {
      return action.payload;
    },
  },
});

export const { setLoggedUser } = loginSlice.actions;

export const userLogin = (username, password) => {
  return async (dispatch) => {
    const data = await loginServices.login({ username, password });
    window.localStorage.setItem("loggedInUser", JSON.stringify(data));
    dispatch(setLoggedUser(data));
  };
};

export default loginSlice.reducer;
