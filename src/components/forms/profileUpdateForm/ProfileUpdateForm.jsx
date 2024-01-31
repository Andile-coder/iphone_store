import React from "react";
import styles from "./profileUpdateForm.module.scss";
import CustomInput from "../../inputs/customInput/CustomInput";
import CustomTextarea from "../../inputs/customTextarea/CustomTextarea";
import CustomButton from "../../buttons/customButton/CustomButton";
const ProfileUpdateForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.container_content_form_cont}>
          <form className={styles.container_content_form_cont_context}>
            <CustomInput
              type="text"
              placeholder="Full Name"
              width="100%"
              label="Full Name"
            />
            <CustomInput
              type="email"
              placeholder="Email"
              width="100%"
              label="Email"
            />
            <CustomInput
              type="file"
              placeholder="Select Image"
              width="100%"
              label="Upload Image"
            />

            <CustomButton text="Save" className="active" width="104.5%" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdateForm;
