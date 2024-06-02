import { orderActions } from "../slices/orderSlice";
import axiosInstance from "../../config";
import { alertActions } from "../slices/alertSlice";
export const createOrder = (order) => {
  return async (dispatch) => {
    const handleCreateOrder = async () => {
      const response = await axiosInstance.post("/orders", order, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });

      return response;
    };

    try {
      dispatch(orderActions.createOrderRequest());
      const response = await handleCreateOrder(order);
      if (response.status === 201) {
        const order = response.data;
        dispatch(orderActions.createOrderSuccess(order));
        dispatch(
          alertActions.setAlert({
            message: "order placed successfully",
            type: "success",
          })
        );
      }
    } catch (error) {
      dispatch(orderActions.createOrderFail(error));
      dispatch(
        alertActions.setAlert({
          message: error.response.data.message,
          type: "error",
        })
      );
    }
  };
};

export const getOrder = (order) => {
  return async (dispatch) => {
    const handleGetOrder = async () => {
      const response = await axiosInstance.get("/orders", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });

      return response;
    };

    try {
      const response = await handleGetOrder(order);
      if (response.status === 200) {
        const order = response.data;
        dispatch(orderActions.getOrder(order));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrders = () => {
  return async (dispatch) => {
    const handleGetOrders = async () => {
      const response = await axiosInstance.get("/orders", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });

      return response;
    };

    try {
      const response = await handleGetOrders();
      if (response.status === 200) {
        const orders = response.data;
        dispatch(orderActions.getOrders(orders));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrderById = (id) => {
  return async (dispatch) => {
    const handleGetOrderById = async () => {
      const response = await axiosInstance.get(`/orders/${id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });

      return response;
    };

    try {
      const response = await handleGetOrderById();
      if (response.status === 200) {
        const order = response.data;
        dispatch(orderActions.getOrderById(order));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrderByUser = (id) => {
  return async (dispatch) => {
    const handleGetOrderByUser = async () => {
      const response = await axiosInstance.get(`/orders/user/${id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });

      return response;
    };

    try {
      const response = await handleGetOrderByUser();
      if (response.status === 200) {
        const order = response.data;
        dispatch(orderActions.getOrderRequest());
        dispatch(orderActions.getOrderSuccess(order.orders));
      }
    } catch (error) {
      console.log(error);
      dispatch(orderActions.getOrderFail(error));
    }
  };
};
