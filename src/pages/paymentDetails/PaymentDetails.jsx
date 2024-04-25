import React from "react";
import styles from "./paymentDetails.module.scss";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import CustomButton from "../../components/buttons/customButton/CustomButton";

import { CiCreditCard1 } from "react-icons/ci";
import CustomInput from "../../components/inputs/customInput/CustomInput";
import { useNavigate } from "react-router-dom";
import CardPaymentForm from "../../components/forms/cardPaymentForm/CardPaymentForm";
const PaymentDetails = () => {
  const navigate = useNavigate();
  const goToOrder = (id) => {
    navigate(`/order/${id}`);
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <NavBar />
          <div className={styles.container_content_title}>
            <span className={styles.container_content_title_text}>
              Payment Details
            </span>
          </div>
          <div className={styles.container_content_cont}>
            <div className={styles.container_content_cont_form}>
              <CardPaymentForm />
            </div>
            <div className={styles.container_content_cont_divider}></div>
            <PricingContainer onClick={() => goToOrder("123")} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentDetails;

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
          text="Pay Now"
          height="56px"
          color="primary"
          width="100%"
          onClick={onClick}
        />
      </div>
    </div>
  );
};
