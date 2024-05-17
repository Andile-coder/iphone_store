// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions; // what does this do?

export default productsSlice.reducer;
