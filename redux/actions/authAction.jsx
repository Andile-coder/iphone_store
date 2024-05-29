import authSlice, { authActions } from "../slices/authSlice";
import axiosInstance from "../../config";
import { json } from "react-router-dom";
import { cloudinaryActions } from "../slices/cloudinarySlice";
import { alertActions } from "../slices/alertSlice";
// login
export const login = (user) => {
  return async (dispatch) => {
    const handleLogin = async () => {
      const response = await axiosInstance.post("/auth/login", user, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
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
        dispatch(
          alertActions.setAlert({
            message: "Login successfully",
            type: "success",
          })
        );
      }
      return response.status;
    } catch (error) {
      dispatch(
        alertActions.setAlert({
          message: error.response.data.message,
          type: "error",
        })
      );
      return 401;
    }
  };
};
// register
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
      return response;
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
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      return response;
    };

    try {
      const response = await handleGetUser();
      if (response.status === 200) {
        const user = response.data;
        dispatch(authActions.getUser(user));
        dispatch(authActions.login());
        // get user profile image
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  };
};
// logout
export const logout = () => {
  return async (dispatch) => {
    const handleLogout = async () => {
      const response = await axiosInstance.post("/auth/logout", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      return response;
    };

    try {
      const response = await handleLogout();
      if (response.status === 200) {
        dispatch(authActions.logout());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// reset password
export const resetPassword = (user) => {
  return async (dispatch) => {
    const handleResetPassword = async () => {
      const response = await axiosInstance.put(
        "/auth/user/reset_password",
        user,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    };

    try {
      const response = await handleResetPassword(user);
      if (response.status === 201) {
        dispatch(
          alertActions.setAlert({
            message: "Password reset successfully",
            type: "success",
          })
        );
      }
      return response;
    } catch (error) {
      dispatch(
        alertActions.setAlert({
          message: error.response.data.message,
          type: "error",
        })
      );
    }
  };
};

// update user

export const updateUser = (user) => {
  return async (dispatch) => {
    const handleUpdateUser = async () => {
      const response = await axiosInstance.patch("/auth/user", user, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      return response;
    };

    try {
      const response = await handleUpdateUser(user);
      if (response.status === 201) {
        dispatch(
          alertActions.setAlert({
            message: "User updated successfully",
            type: "success",
          })
        );
      }
      return response;
    } catch (error) {
      dispatch(
        alertActions.setAlert({
          message: error.response.data.message,
          type: "error",
        })
      );
    }
  };
};
