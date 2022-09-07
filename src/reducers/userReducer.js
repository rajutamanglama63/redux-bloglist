import { createSlice } from "@reduxjs/toolkit";
import userServices from "../services/users";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    setAllUsers(state, action) {
      return action.payload;
    },
  },
});

export const { setAllUsers } = userSlice.actions;

export const getAllUsers = () => {
  return async (dispatch) => {
    const users = await userServices.allUsers();
    console.log(users);
    dispatch(setAllUsers(users));
  };
};

export default userSlice.reducer;
