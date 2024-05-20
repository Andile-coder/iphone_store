// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const imageUploaderSlice = createSlice({
  name: "image_uploader",
  initialState: {
    status: "idle",
    imagePath: "",
  },
  reducers: {
    uploadImage: (state, action) => {
      state.imagePath = action.payload;
    },
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const uploadedImageActions = imageUploaderSlice.actions; // what does this do?

export default imageUploaderSlice.reducer;
