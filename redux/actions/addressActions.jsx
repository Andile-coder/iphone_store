import { addressActions } from "../slices/addressSlice";
import axiosInstance from "../../config";
export const getAddress = (address) => {
  return async (dispatch) => {
    const handleGetAddress = async () => {
      const response = await axiosInstance.get("/address", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });

      return response;
    };

    try {
      const response = await handleGetAddress(address);
      if (response.status === 200) {
        const address = response.data;
        dispatch(addressActions.setAddress(address[0]));
      }
      return response.status;
    } catch (error) {
      return 401;
    }
  };
};

const createAddress = (address) => {
  return async (dispatch) => {
    const handleCreateAddress = async () => {
      const response = await axiosInstance.post("/address/create", address, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });

      return response;
    };

    try {
      const response = await handleCreateAddress(address);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateAddress = (address) => {
  return async (dispatch) => {
    const handleUpdateAddress = async () => {
      const response = await axiosInstance.patch(`/address/${id}`, address, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });

      return response;
    };

    try {
      const response = await handleUpdateAddress(address);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};
