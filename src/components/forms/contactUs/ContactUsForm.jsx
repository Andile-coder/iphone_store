import React from "react";
import styles from "./contactUsForm.module.scss";
import CustomInput from "../../inputs/customInput/CustomInput";
import CustomTextarea from "../../inputs/customTextarea/CustomTextarea";
import CustomButton from "../../buttons/customButton/CustomButton";
const ContactUsForm = () => {
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
              type="text"
              placeholder="Email"
              width="100%"
              label="Email"
            />
            <CustomTextarea
              label="Message"
              width="100%"
              rows={10}
              resize={false}
              placeholder="How many we assist you?"
            />
            <CustomButton
              text="Send Message"
              className="active"
              width="104.5%"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
