import { createSlice } from "@reduxjs/toolkit";
import userServices from "../services/users";

const individualUserSlice = createSlice({
  name: "individualUser",
  initialState: null,
  reducers: {
    setIndividualUser(state, action) {
      return action.payload;
    },
  },
});

export const { setIndividualUser } = individualUserSlice.actions;

export const getIndividualUser = (id) => {
  return async (dispatch) => {
    const user = await userServices.individualUser(id);

    dispatch(setIndividualUser(user));
  };
};

export default individualUserSlice.reducer;
