import axiosInstance from "../../config";
import { alertActions } from "../slices/alertSlice";
import { cloudinaryActions } from "../slices/cloudinarySlice";
export const uploadImage = ({ image, user }) => {
  return async (dispatch) => {
    const uploadImageToServer = async (base64Image) => {
      try {
        const response = await axiosInstance.post(
          "/cloudinary",
          {
            image: base64Image,
            user: user, // Assuming user contains user_id
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        );
        return response;
      } catch (error) {
        throw error;
      }
    };

    try {
      const response = await uploadImageToServer(image);
      if (response.status === 201) {
        dispatch(
          alertActions.setAlert({
            message: "Image uploaded successfully",
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
      return error;
    }
  };
};

// get image by tag
export const getImageByTag = (tag) => {
  return async (dispatch) => {
    const handleGetImageByTag = async () => {
      const response = await axiosInstance.get(`/cloudinary/${tag}`, {
        headers: { "Content-Type": "application/json" },
      });
      return response;
    };

    try {
      const response = await handleGetImageByTag();

      if (response.status === 200) {
        const image = response.data;
        dispatch(cloudinaryActions.setUserProfileImage(image));
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  };
};
