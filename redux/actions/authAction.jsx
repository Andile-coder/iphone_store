import authSlice, { authActions } from "../slices/authSlice";
import axiosInstance from "../../config";
import { json } from "react-router-dom";
export const login = (user) => {
  return async (dispatch) => {
    const handleLogin = async () => {
      const response = await axiosInstance.post("/auth/login", user, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
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
      return response.status;
    } catch (error) {
      console.log(error);
      return 401;
    }
  };
};
export const register = (user) => {
  return async (dispatch) => {
    const handleRegister = async () => {
      const response = await axiosInstance.post(
        "/auth/register",
        user,

        {
          headers: { "Content-Type": "application/json" },
        }
      );
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

// get user
export const getUser = () => {
  return async (dispatch) => {
    const handleGetUser = async () => {
      const response = await axiosInstance.get("/auth/user", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(response.data);
      return response;
    };

    try {
      const response = await handleGetUser();
      if (response.status === 200) {
        const user = response.data;
        dispatch(authActions.getUser(user));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
