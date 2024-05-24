import { cartActions } from "../slices/cartSlice";

export const addToCart = (product) => {
  return async (dispatch) => {
    await dispatch(cartActions.addToCart(product));
  };
};

export const removeFromCart = (product) => {
  return async (dispatch) => {
    await dispatch(cartActions.removeFromCart(product));
  };
};
