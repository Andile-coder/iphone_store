import productsSlice, { productsActions } from "../slices/productsSlice";
import axiosInstance from "../../config";
import { json } from "react-router-dom";

const handleGetProductVariations = async (id) => {
  const response = await axiosInstance.get(`/product_variations/${id}`, {
    headers: { "Content-Type": "application/json" },
  });
  return response;
};

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
        let productsTmp = [];
        for (let i = 0; i < products.products.length; i++) {
          let variations = [];
          const pv = await handleGetProductVariations(
            products.products[i].product_id
          );
          console.log("pv", pv.data.products);
          variations = pv.data.products.map((el) => el);
          console.log("variations", variations);
          let tmp = { ...products.products[i], variations: variations };
          console.log("temp", tmp);
          productsTmp.push(tmp);
        }
        console.log("productsTmp", productsTmp);
        await dispatch(productsActions.getProducts(productsTmp));
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
        console.log("response data by id", product);
        let productsTmp = [];
        let variations = [];
        const pv = await handleGetProductVariations(id);
        console.log("pv one", pv.data.products);
        variations = pv.data.products.map((el) => el);
        console.log("variations ones", variations);
        let tmp = { ...product.product, variations: variations };
        productsTmp.push(tmp);
        console.log("productTemp one", productsTmp);
        await dispatch(productsActions.getProductById(tmp));
      }
      // dispatch(authActions.login());
    } catch (error) {
      console.log(error);
    }
  };
};
