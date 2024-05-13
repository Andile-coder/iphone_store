import React from "react";
import styles from "./deliveryDetails.module.scss";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import CustomButton from "../../components/buttons/customButton/CustomButton";
import { useNavigate } from "react-router-dom";

import CustomInput from "../../components/inputs/customInput/CustomInput";
const DeliveryDetails = () => {
  const navigate = useNavigate();
  const goToPayment = (id) => {
    navigate(`/checkout/payment/${id}`);
  };
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
                  <div
                    className={
                      styles.container_content_cont_form_delivery_info_input
                    }
                  >
                    <CustomInput
                      placeholder="1 Example Street"
                      label="Street Address"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div
                    className={
                      styles.container_content_cont_form_delivery_info_input
                    }
                  >
                    <CustomInput
                      placeholder="Beautiful Gardens"
                      label="Complex/Building Name "
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div
                    className={
                      styles.container_content_cont_form_delivery_info_input
                    }
                  >
                    <CustomInput
                      placeholder="Camps Bay"
                      label="Suburb"
                      height="100%"
                      width="100%"
                    />
                  </div>{" "}
                  <div
                    className={
                      styles.container_content_cont_form_delivery_info_input
                    }
                  >
                    <CustomInput
                      placeholder="Cape Town"
                      label="City/Town"
                      height="100%"
                      width="100%"
                    />
                  </div>{" "}
                  <div
                    className={
                      styles.container_content_cont_form_delivery_info_input
                    }
                  >
                    <CustomInput
                      placeholder="Western Cape"
                      label="Province"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div
                    className={
                      styles.container_content_cont_form_delivery_info_input
                    }
                  >
                    <CustomInput
                      placeholder="8005"
                      label="Postal Code"
                      height="100%"
                      width="100%"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className={styles.container_content_cont_divider}></div>
            <PricingContainer onClick={() => goToPayment("123")} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeliveryDetails;
const PricingContainer = ({ onClick }) => {
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
          onClick={onClick}
          width="100%"
        />
      </div>
    </div>
  );
};
