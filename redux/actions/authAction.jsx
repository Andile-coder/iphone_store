import authSlice, { authActions } from "../slices/authSlice";
import axiosInstance from "../../config";
import { json } from "react-router-dom";
export const login = (user) => {
  return async (dispatch) => {
    const handleLogin = async () => {
      const response = await axiosInstance.post("/auth/login", user, {
        headers: { "Content-Type": "application/json" },
      });
      return response;
    };

    try {
      const response = await handleLogin(user);
      if (response.status === 200) {
        const user = response.data;
        dispatch(authActions.getUser(user));
        dispatch(authActions.login());
      }
      dispatch(authActions.login());
    } catch (error) {
      console.log(error);
    }
  };
};
export const register = (user) => {
  return async (dispatch) => {
    const handleRegister = async () => {
      const response = await axiosInstance.post("/auth/register", user, {
        headers: { "Content-Type": "application/json" },
      });
      return response;
    };

    try {
      const response = await handleRegister(user);
      console.log(response);
      if (response.status === 200) {
        const user = response.data;
        // dispatch(authActions.getUser(user));
      }
      dispatch(authActions.login());
    } catch (error) {
      console.log(error);
    }
  };
};
