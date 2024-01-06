import React from "react";
import styles from "./paymentDetails.module.scss";
import NavBar from "../../components/buttons/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import CustomButton from "../../components/buttons/customButton/CustomButton";

import { CiCreditCard1 } from "react-icons/ci";
import CustomInput from "../../components/inputs/customInput/CustomInput";
import { useNavigate } from "react-router-dom";
const PaymentDetails = () => {
  const navigate = useNavigate();
  const goToOrder = (id) => {
    navigate(`/order/${id}`);
  };
  return (
    <div>
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
              <form action="">
                <div className={styles.container_content_cont_form_cards}>
                  <div
                    className={styles.container_content_cont_form_cards_item}
                  >
                    <CustomButton
                      text="Credit Card"
                      height="56px"
                      color="secondary"
                      icon={<CiCreditCard1 size={24} />}
                    />
                  </div>
                  <div
                    className={styles.container_content_cont_form_cards_item}
                  >
                    <CustomButton
                      text="Debit Card"
                      height="56px"
                      className="active"
                      icon={<CiCreditCard1 size={24} />}
                    />
                  </div>
                </div>

                <div className={styles.container_content_cont_form_card_info}>
                  <div style={{ marginBottom: "20px" }}>
                    {" "}
                    <CustomInput
                      placeholder="John Doe"
                      label="Card Holder"
                      height="30px"
                      width="92.5%"
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <CustomInput
                      placeholder="12345678899"
                      label="Card Number"
                      height="30px"
                      width="92.5%"
                    />
                  </div>
                </div>
                <div className={styles.container_content_cont_form_card_extra}>
                  <CustomInput
                    placeholder="02"
                    label="Month"
                    width="75.5%"
                    height="30px"
                  />
                  <CustomInput
                    placeholder="2024"
                    label="Year"
                    width="75.5%"
                    height="30px"
                  />
                  <CustomInput
                    placeholder="123"
                    label="CVV"
                    width="75.5%"
                    height="30px"
                  />
                </div>

                <div className={styles.container_content_cont_form_checkbox}>
                  <input type="checkbox" height="30px" width="92.5%" />
                  <span>Remember Card</span>
                </div>
              </form>
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
