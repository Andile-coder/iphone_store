import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    currentTab: "Home",
    displayMobileMenu: false,
  },
  reducers: {
    changeTab: (state, action) => {
      state.currentTab = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.displayMobileMenu = !state.displayMobileMenu;
    },
  },
});

export const navigationActions = navigationSlice.actions;
export default navigationSlice.reducer;
