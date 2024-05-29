import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    currentTab: "Home",
  },
  reducers: {
    changeTab: (state, action) => {
      state.currentTab = action.payload;
    },
  },
});

export const navigationActions = navigationSlice.actions;
export default navigationSlice.reducer;
