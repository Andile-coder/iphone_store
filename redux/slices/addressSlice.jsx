import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",
  initialState: {
    address: "",
    city: "",
    state: "",
    postal_code: "",
    suburb: "",
    building: "",
    country: "",
    phone: "",
    is_default: "",
  },
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.postal_code = action.payload.postal_code;
      state.suburb = action.payload.suburb;
      state.building = action.payload.building;
      state.country = action.payload.country;
      state.phone = action.payload.phone;
      state.is_default = action.payload.is_default;
    },
  },
});

export const addressActions = addressSlice.actions;
export default addressSlice.reducer;
