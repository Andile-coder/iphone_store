import React from "react";
import styles from "./deliveryDetails.module.scss";
import NavBar from "../../components/buttons/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import CustomButton from "../../components/buttons/customButton/CustomButton";
// import { CiCreditdelivery1 } from "react-icons/ci";
import CustomInput from "../../components/inputs/customInput/CustomInput";
const DeliveryDetails = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <NavBar />
          <div className={styles.container_content_title}>
            <span className={styles.container_content_title_text}>
              Delivery Details
            </span>
          </div>
          <div className={styles.container_content_cont}>
            <div className={styles.container_content_cont_form}>
              <form action="">
                <div
                  className={styles.container_content_cont_form_delivery_info}
                >
                  <div style={{ marginBottom: "20px" }}>
                    <CustomInput
                      placeholder="John Doe"
                      label="delivery Holder"
                      height="30px"
                      width="92.5%"
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <CustomInput
                      placeholder="John Doe"
                      label="delivery Holder"
                      height="30px"
                      width="92.5%"
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <CustomInput
                      placeholder="John Doe"
                      label="delivery Holder"
                      height="30px"
                      width="92.5%"
                    />
                  </div>{" "}
                  <div style={{ marginBottom: "20px" }}>
                    <CustomInput
                      placeholder="John Doe"
                      label="delivery Holder"
                      height="30px"
                      width="92.5%"
                    />
                  </div>{" "}
                  <div style={{ marginBottom: "20px" }}>
                    <CustomInput
                      placeholder="John Doe"
                      label="delivery Holder"
                      height="30px"
                      width="92.5%"
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <CustomInput
                      placeholder="John Doe"
                      label="delivery Holder"
                      height="30px"
                      width="92.5%"
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <CustomInput
                      placeholder="John Doe"
                      label="delivery Holder"
                      height="30px"
                      width="92.5%"
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <CustomInput
                      placeholder="John Doe"
                      label="delivery Holder"
                      height="30px"
                      width="92.5%"
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <CustomInput
                      placeholder="12345678899"
                      label="delivery Number"
                      height="30px"
                      width="92.5%"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className={styles.container_content_cont_divider}></div>
            <PricingContainer />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeliveryDetails;
const PricingContainer = () => {
  return (
    <div className={styles.container_content_cont_pricing}>
      <div className={styles.container_content_cont_pricing_cont}>
        <div className={styles.container_content_cont_pricing_cont_summary}>
          <div
            className={styles.container_content_cont_pricing_cont_summary_item}
          >
            <span>Delivery</span>
            <span>R60</span>
          </div>
          <div
            className={styles.container_content_cont_pricing_cont_summary_item}
          >
            <span>Total Items</span>
            <span>12</span>
          </div>
          <div
            className={styles.container_content_cont_pricing_cont_summary_item}
          >
            <span>Total</span>
            <span>R68964</span>
          </div>
        </div>
        <hr className={styles.hr} />
        <div
          className={
            styles.container_content_cont_pricing_cont_summary_item_subtotal
          }
        >
          <span>Subtotal</span>
          <span>R68964</span>
        </div>
        <CustomButton
          text="Payment"
          height="56px"
          className="active"
          width="100%"
        />
      </div>
    </div>
  );
};
