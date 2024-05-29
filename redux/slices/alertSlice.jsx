import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    message: "",
    type: "",
    showAlert: false,
  },
  reducers: {
    setAlert: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.showAlert = true;
    },
    removeAlert: (state) => {
      state.showAlert = false;
    },
  },
});

export const alertActions = alertSlice.actions;
export default alertSlice.reducer;
