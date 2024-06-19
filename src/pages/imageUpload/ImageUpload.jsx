import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../redux/actions/authAction";
import { uploadImage2 } from "../../../redux/actions/cloudinaryActions";

const ImageUpload = () => {
  const dispatch = useDispatch();

  const [updateForm, setUpdateForm] = useState({
    name: "",
    model: "",
    color: "",
    image_angle: "",
  });
  const [isLoading, setLoading] = useState(false);
  const userProfileImage = useSelector(
    (state) => state.cloudinary.userProfileImage
  );
  const uploadImagehandle = async (e) => {
    //upload image to the server
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setUpdateForm({ ...updateForm, image: base64 });
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFormChange = (e) => {
    setUpdateForm({ ...updateForm, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await dispatch(
      uploadImage2({
        image: updateForm.image,
        user: {
          name: updateForm.name,
          model: updateForm.model,
          color: updateForm.color,
          image_angle: updateForm.image_angle,
        },
      })
    );
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          onChange={handleFormChange}
          placeholder="name"
        />
        <input
          type="text"
          name="model"
          onChange={handleFormChange}
          placeholder="model"
        />
        <input
          type="text"
          name="color"
          onChange={handleFormChange}
          placeholder="color"
        />
        <input
          type="text"
          name="image_angle"
          onChange={handleFormChange}
          placeholder="image_angle"
        />
        <input
          type="file"
          name="image"
          onChange={uploadImagehandle}
          placeholder="image"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImageUpload;
