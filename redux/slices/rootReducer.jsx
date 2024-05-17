// root reducer
import { combineReducers } from "redux";
import authReducer from "./authSlice";
import productsReducer from "./productsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

export default rootReducer;
// The root reducer is a function that combines all the reducers in the application into a single reducer function.
