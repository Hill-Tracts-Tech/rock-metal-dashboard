import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoading: false,
    error: "",
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    clear: (state) => {
      state.currentUser = null;
      state.isLoading = false;
      state.error = "";
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, clear } =
  userSlice.actions;
export default userSlice.reducer;
