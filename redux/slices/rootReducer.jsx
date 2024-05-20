// root reducer
import { combineReducers } from "redux";
import authReducer from "./authSlice";
import productsReducer from "./productsSlice";
import imageUploaderReducer from "./imageUploaderSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  imageUploader: imageUploaderReducer,
});

export default rootReducer;
// The root reducer is a function that combines all the reducers in the application into a single reducer function.
