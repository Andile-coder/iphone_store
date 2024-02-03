import React from "react";
import styles from "./addressDetailsForm.module.scss";
import CustomInput from "../../inputs/customInput/CustomInput";
import CustomButton from "../../buttons/customButton/CustomButton";
const AddressDetailsForm = ({ visibleBtn }) => {
  return (
    <div className={styles.container_content_cont_form}>
      <form action="">
        <div className={styles.container_content_cont_form_delivery_info}>
          <div style={{ marginBottom: "20px" }}>
            <CustomInput
              placeholder="1 Example Street"
              label="Street Address"
              height="30px"
              width="92.5%"
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <CustomInput
              placeholder="Beautiful Gardens"
              label="Complex/Building Name "
              height="30px"
              width="92.5%"
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <CustomInput
              placeholder="Camps Bay"
              label="Suburb"
              height="30px"
              width="92.5%"
            />
          </div>{" "}
          <div style={{ marginBottom: "20px" }}>
            <CustomInput
              placeholder="Cape Town"
              label="City/Town"
              height="30px"
              width="92.5%"
            />
          </div>{" "}
          <div style={{ marginBottom: "20px" }}>
            <CustomInput
              placeholder="Western Cape"
              label="Province"
              height="30px"
              width="92.5%"
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <CustomInput
              placeholder="8005"
              label="Postal Code"
              height="30px"
              width="92.5%"
              type="number"
            />
          </div>
          <div
            style={{
              marginBottom: "20px",
              display: visibleBtn ? "block" : "none",
            }}
          >
            <CustomButton
              text="Save"
              height="40px"
              width="98.5%"
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
