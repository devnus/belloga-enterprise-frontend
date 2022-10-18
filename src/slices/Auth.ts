import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "authToken",
  initialState: {
    authenticated: false,
    accessToken: "",
  },
  reducers: {
    SET_TOKEN: (state, action) => {
      state.authenticated = true;
      state.accessToken = action.payload.accessToken;
    },
    DELETE_TOKEN: (state) => {
      state.authenticated = false;
      state.accessToken = "";
    },
  },
});

export const { SET_TOKEN, DELETE_TOKEN } = tokenSlice.actions;

export default tokenSlice.reducer;
