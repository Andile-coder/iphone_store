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
            <div className={styles.container_content_form_cont_context_input}>
              <CustomInput
                type="text"
                placeholder=""
                width="100%"
                height="100%"
                label="Old Password"
              />
            </div>

            <div className={styles.container_content_form_cont_context_input}>
              <CustomInput
                type="password"
                placeholder=""
                width="100%"
                height="100%"
                label="New Pasword"
              />
            </div>

            <div className={styles.container_content_form_cont_context_input}>
              <CustomInput
                type="password"
                placeholder=""
                width="100%"
                height="100%"
                label="Confirm Password"
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

export default PasswordUpdateForm;
