import { createSlice } from "@reduxjs/toolkit";
import { removeFromCart } from "../actions/cartAction";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    count: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.product_id === action.payload.product_id
      );

      if (existingItem) {
        existingItem.order_quantity += 1;
        state.count++;
      } else {
        state.cartItems.push({ ...action.payload, order_quantity: 1 });
        state.count++;
      }
    },
    decrementCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.product_id === action.payload.product_id
      );

      if (existingItem) {
        if (existingItem.order_quantity > 1) {
          existingItem.order_quantity -= 1;
          state.count--;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.product_id !== action.payload.product_id
          );
          state.count--;
        }
      }
    },
    removeFromCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.product_id === action.payload.product_id
      );

      if (existingItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.product_id !== action.payload.product_id
        );
        state.count -= existingItem.order_quantity;
      }
    },
    getTotalPrice: (state) => {
      state.total = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.order_quantity,
        0
      );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
