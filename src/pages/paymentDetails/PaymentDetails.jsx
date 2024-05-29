import React from "react";
import styles from "./paymentDetails.module.scss";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import CustomButton from "../../components/buttons/customButton/CustomButton";

import { CiCreditCard1 } from "react-icons/ci";
import CustomInput from "../../components/inputs/customInput/CustomInput";
import { useNavigate } from "react-router-dom";
import CardPaymentForm from "../../components/forms/cardPaymentForm/CardPaymentForm";
import PriceSummaryCard from "../../components/cards/priceSummaryCard/PriceSummaryCard";
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
            <PriceSummaryCard onClick={() => goToOrder("123")} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentDetails;
