import React, { useEffect, useState } from "react";
import styles from "./profileUpdateForm.module.scss";
import CustomInput from "../../inputs/customInput/CustomInput";
import CustomTextarea from "../../inputs/customTextarea/CustomTextarea";
import CustomButton from "../../buttons/customButton/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadImage,
  getImageByTag,
} from "../../../../redux/actions/cloudinaryActions";
import axios from "axios";
const ProfileUpdateForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [updateForm, setUpdateForm] = useState({});
  const [isLoading, setLoading] = useState(false);
  const userProfileImage = useSelector(
    (state) => state.cloudinary.userProfileImage
  );
  //send image to my server
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

  const submitHandler = async (e) => {
    e.preventDefault();
    //update user
    //upload image to the server
    setLoading(true);
    const response = await dispatch(
      uploadImage({ image: updateForm.image, user: user.user_id })
    );
    if (response.status === 201) {
      console.log("Image uploaded successfully:", response.data);
      setLoading(false);
    } else {
      console.log("Error uploading image:", response);
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {isLoading == false ? (
        <div className={styles.container_content}>
          <div className={styles.container_content_form_cont}>
            <form
              className={styles.container_content_form_cont_context}
              onSubmit={submitHandler}
            >
              <div className={styles.container_content_form_cont_context_input}>
                {" "}
                <CustomInput
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  width="100%"
                  height="100%"
                  label="First Name"
                />
              </div>
              <div className={styles.container_content_form_cont_context_input}>
                {" "}
                <CustomInput
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  width="100%"
                  height="100%"
                  label="Last Name"
                />
              </div>

              <div className={styles.container_content_form_cont_context_input}>
                <CustomInput
                  type="email"
                  placeholder="Email"
                  name="email"
                  width="100%"
                  height="100%"
                  label="Email"
                />
              </div>

              <div className={styles.container_content_form_cont_context_input}>
                <CustomInput
                  type="file"
                  placeholder="Select Image"
                  width="100%"
                  height="100%"
                  label="Upload Image"
                  onChange={uploadImagehandle}
                />
              </div>
              <div className={styles.container_content_form_cont_context_input}>
                <CustomButton
                  text="Save"
                  className="active"
                  width="100%"
                  height="100%"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProfileUpdateForm;
