import React from "react";
import styles from "./priceSummaryCard.module.scss";
import CustomButton from "../../buttons/customButton/CustomButton";
import { useSelector } from "react-redux";
const PriceSummaryCard = ({ onClick }) => {
  const cartTotalItems = useSelector((state) => state.cart.count);
  const totalPrice = useSelector((state) => state.cart.total);

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
            <span>{cartTotalItems}</span>
          </div>
          <div
            className={styles.container_content_cont_pricing_cont_summary_item}
          >
            <span>Total</span>
            <span>R{totalPrice}</span>
          </div>
        </div>
        <hr className={styles.hr} />
        <div
          className={
            styles.container_content_cont_pricing_cont_summary_item_subtotal
          }
        >
          <span>Subtotal</span>
          <span>R{totalPrice}</span>
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

export default PriceSummaryCard;
