import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    count: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.count = state.cartItems.length;
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product_id !== action.payload.product_id
      );
      state.count = state.cartItems.length;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
