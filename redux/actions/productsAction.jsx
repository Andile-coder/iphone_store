import productsSlice, { productsActions } from "../slices/productsSlice";
import axiosInstance from "../../config";
import { json } from "react-router-dom";
export const getProducts = () => {
  return async (dispatch) => {
    const handleGetProducts = async () => {
      const response = await axiosInstance.get("/products", {
        headers: { "Content-Type": "application/json" },
      });
      return response;
    };

    try {
      const response = await handleGetProducts();

      if (response.status === 200) {
        const products = response.data;
        console.log(products);
        dispatch(productsActions.getProducts(products.products));
        // dispatch(authActions.getUser(user));
        // dispatch(authActions.login());
      }
      // dispatch(authActions.login());
    } catch (error) {
      console.log(error);
    }
  };
};

// get product by id
export const getProductById = (id) => {
  return async (dispatch) => {
    const handleGetProductById = async () => {
      const response = await axiosInstance.get(`/products/${id}`, {
        headers: { "Content-Type": "application/json" },
      });
      return response;
    };

    try {
      const response = await handleGetProductById();

      if (response.status === 200) {
        const product = response.data;
        console.log("product", product.product);
        dispatch(productsActions.getProductById(product.product));
        // dispatch(authActions.getUser(user));
        // dispatch(authActions.login());
      }
      // dispatch(authActions.login());
    } catch (error) {
      console.log(error);
    }
  };
};
