import React from "react";
import styles from "./addressDetailsForm.module.scss";
import CustomInput from "../../inputs/customInput/CustomInput";
import CustomButton from "../../buttons/customButton/CustomButton";
const AddressDetailsForm = ({ visibleBtn }) => {
  return (
    <div className={styles.container_content_cont_form}>
      <form className={styles.container_content_cont_form} action="">
        <div className={styles.container_content_cont_form_delivery_info}>
          <div
            className={styles.container_content_cont_form_delivery_info_input}
          >
            <CustomInput
              placeholder="1 Example Street"
              label="Street Address"
              height="100%"
              width="100%"
            />
          </div>
          <div
            className={styles.container_content_cont_form_delivery_info_input}
          >
            <CustomInput
              placeholder="Beautiful Gardens"
              label="Complex/Building Name "
              height="100%"
              width="100%"
            />
          </div>
          <div
            className={styles.container_content_cont_form_delivery_info_input}
          >
            <CustomInput
              placeholder="Camps Bay"
              label="Suburb"
              height="100%"
              width="100%"
            />
          </div>{" "}
          <div
            className={styles.container_content_cont_form_delivery_info_input}
          >
            <CustomInput
              placeholder="Cape Town"
              label="City/Town"
              height="100%"
              width="100%"
            />
          </div>{" "}
          <div
            className={styles.container_content_cont_form_delivery_info_input}
          >
            <CustomInput
              placeholder="Western Cape"
              label="Province"
              height="100%"
              width="100%"
            />
          </div>
          <div
            className={styles.container_content_cont_form_delivery_info_input}
          >
            <CustomInput
              placeholder="8005"
              label="Postal Code"
              height="100%"
              width="100%"
              type="number"
            />
          </div>
          <div
            className={styles.container_content_cont_form_delivery_info_input}
          >
            <CustomButton
              text="Save"
              height="100%"
              width="100%"
              fontSize="1.2rem"
              fontWeight="600"
              borderRadius="5px"
              bgColor="#FF6F61"
              textColor="#fff"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressDetailsForm;
