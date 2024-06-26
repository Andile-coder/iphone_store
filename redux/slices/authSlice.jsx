// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged: false,
    user: [],
  },
  reducers: {
    login: (state) => {
      state.isLogged = true;
    },
    logout: (state) => {
      state.isLogged = false;
      state.user = [];
    },
    getUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const authActions = authSlice.actions; // what does this do?
// The authSlice.actions object contains the action creators generated by the createSlice function.
// These action creators can be used to dispatch actions to the store.
// The action creators are named based on the names of the reducers defined in the slice.
// For example, the login reducer generates an action creator named login, the logout reducer generates an action creator named logout, and so on.

export default authSlice.reducer;
