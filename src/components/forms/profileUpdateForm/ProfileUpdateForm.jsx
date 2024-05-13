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
