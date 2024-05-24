// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: {},
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    getProductById: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions; // what does this do?

export default productsSlice.reducer;
