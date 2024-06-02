import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderItems: [],
    shippingAddress: {},
    paymentMethod: "",
    itemsPrice: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0,
    order: {},
    loading: false,
    error: "",
  },
  reducers: {
    createOrderRequest: (state, action) => {
      state.loading = true;
    },
    createOrderSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    createOrderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetOrder: (state, action) => {
      state.orderItems = [];
      state.shippingAddress = {};
      state.paymentMethod = "";
      state.itemsPrice = 0;
      state.shippingPrice = 0;
      state.taxPrice = 0;
      state.totalPrice = 0;
      state.order = {};
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
