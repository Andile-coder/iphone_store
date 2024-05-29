// root reducer
import { combineReducers } from "redux";
import authReducer from "./authSlice";
import productsReducer from "./productsSlice";
import cloudinaryReducer from "./cloudinarySlice";
import cartReducer from "./cartSlice";
import navigationReducer from "./navigationSlice";
import alertReducer from "./alertSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  cloudinary: cloudinaryReducer,
  cart: cartReducer,
  navigation: navigationReducer,
  alert: alertReducer,
});

export default rootReducer;
// The root reducer is a function that combines all the reducers in the application into a single reducer function.
