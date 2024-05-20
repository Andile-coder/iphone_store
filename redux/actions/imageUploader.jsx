import axiosInstance from "../../config";
export const uploadImage = (image) => {
  return async (dispatch) => {
    const uploadImage = async (base64) => {
      //upload image to the server
      console.log(base64);
      try {
        const response = await axiosInstance.post("/images/upload", {
          image: base64,
        });
        console.log("Image uploaded successfully:", response.data);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };

    try {
      const response = await uploadImage(image);
      console.log(response);
    } catch (error) {}
  };
};
