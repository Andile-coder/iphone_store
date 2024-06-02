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
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../redux/actions/orderActions";
const PaymentDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);
  const orderLoading = useSelector((state) => state.order.loading);
  const goToOrder = (id) => {
    navigate(`/order/${id}`);
  };

  const createOrderHandler = () => {
    // create order
    let orderTemp = {};
    orderTemp.products = cart.cartItems;
    orderTemp.items_price = cart.total;
    orderTemp.shipping_price = 60;
    orderTemp.total_amount = cart.total + 60; // delivery fee
    orderTemp.quantity = cart.count;
    const order = dispatch(createOrder(orderTemp));
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
          {orderLoading ? (
            <div className={styles.container_content_loading}>
              loading..........
            </div>
          ) : (
            <div className={styles.container_content_cont}>
              <div className={styles.container_content_cont_form}>
                <CardPaymentForm />
              </div>
              <div className={styles.container_content_cont_divider}></div>
              <PriceSummaryCard onClick={() => createOrderHandler()} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentDetails;
