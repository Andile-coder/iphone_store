import { alertActions } from "../slices/alertSlice";

export const setAlert = (message, type) => {
  return (dispatch) => {
    dispatch(alertActions.setAlert({ message, type }));
  };
};

export const removeAlert = () => {
  return (dispatch) => {
    dispatch(alertActions.removeAlert());
  };
};
