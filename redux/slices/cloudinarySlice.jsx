// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cloudinarySlice = createSlice({
  name: "cloudinary",
  initialState: {
    status: "idle",
    imagePath: "",
    userProfileImage: "",
  },
  reducers: {
    uploadImage: (state, action) => {
      state.imagePath = action.payload;
    },
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
    setUserProfileImage: (state, action) => {
      state.userProfileImage = action.payload;
      state.imagePath = action.payload.images[0].secure_url;
    },
  },
});

export const cloudinaryActions = cloudinarySlice.actions; // what does this do?

export default cloudinarySlice.reducer;
