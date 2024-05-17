// create a store with the root reducer
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/rootReducer";
const store = configureStore({
  reducer: rootReducer,
});
export default store;
// The store is created using the configureStore function from the redux toolkit, which takes the root reducer as an argument.
// The store is then exported to be used in the application.
