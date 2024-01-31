import React from "react";
import styles from "./passwordUpdateForm.module.scss";
import CustomInput from "../../inputs/customInput/CustomInput";
import CustomTextarea from "../../inputs/customTextarea/CustomTextarea";
import CustomButton from "../../buttons/customButton/CustomButton";
const PasswordUpdateForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.container_content_form_cont}>
          <form className={styles.container_content_form_cont_context}>
            <CustomInput
              type="text"
              placeholder=""
              width="100%"
              label="Old Password"
            />
            <CustomInput
              type="password"
              placeholder=""
              width="100%"
              label="New Pasword"
            />
            <CustomInput
              type="password"
              placeholder=""
              width="100%"
              label="Confirm Password"
            />

            <CustomButton text="Save" className="active" width="104.5%" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordUpdateForm;
