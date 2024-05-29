import { cartActions } from "../slices/cartSlice";

export const addToCart = (product) => {
  return async (dispatch) => {
    await dispatch(cartActions.addToCart(product));
    await dispatch(cartActions.getTotalPrice());
  };
};

export const removeFromCart = (product) => {
  return async (dispatch) => {
    await dispatch(cartActions.removeFromCart(product));
    await dispatch(cartActions.getTotalPrice());
  };
};
export const decrementCart = (product) => {
  return async (dispatch) => {
    await dispatch(cartActions.decrementCart(product));
    await dispatch(cartActions.getTotalPrice());
  };
};
