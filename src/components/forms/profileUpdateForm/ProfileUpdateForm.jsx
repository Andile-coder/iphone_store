import React, { useEffect } from "react";
import styles from "./profileUpdateForm.module.scss";
import CustomInput from "../../inputs/customInput/CustomInput";
import CustomTextarea from "../../inputs/customTextarea/CustomTextarea";
import CustomButton from "../../buttons/customButton/CustomButton";
import axios from "axios";
const ProfileUpdateForm = () => {
  //send image to my server
  const uploadImage = async (e) => {
    //upload image to the server
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/images/upload",
        { image: base64 }
      );
      console.log("Image uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
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

  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.container_content_form_cont}>
          <form className={styles.container_content_form_cont_context}>
            <div className={styles.container_content_form_cont_context_input}>
              {" "}
              <CustomInput
                type="text"
                placeholder="Full Name"
                width="100%"
                height="100%"
                label="Full Name"
              />
            </div>

            <div className={styles.container_content_form_cont_context_input}>
              <CustomInput
                type="email"
                placeholder="Email"
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
                onChange={uploadImage}
              />
            </div>
            <div className={styles.container_content_form_cont_context_input}>
              <CustomButton
                text="Save"
                className="active"
                width="100%"
                height="100%"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdateForm;
