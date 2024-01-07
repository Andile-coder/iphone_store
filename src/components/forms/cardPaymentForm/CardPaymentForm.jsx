import React from "react";
import styles from "./cardPaymentForm.module.scss";
import CustomButton from "../../buttons/customButton/CustomButton";
import { CiCreditCard1 } from "react-icons/ci";
import CustomInput from "../../inputs/customInput/CustomInput";

const CardPaymentForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <form action="">
          <div className={styles.container_content_form_cards}>
            <div className={styles.container_content_form_cards_item}>
              <CustomButton
                text="Credit Card"
                height="56px"
                color="secondary"
                icon={<CiCreditCard1 size={24} />}
              />
            </div>
            <div className={styles.container_content_form_cards_item}>
              <CustomButton
                text="Debit Card"
                height="56px"
                className="active"
                icon={<CiCreditCard1 size={24} />}
              />
            </div>
          </div>

          <div className={styles.container_content_form_card_info}>
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
          <div className={styles.container_content_form_card_extra}>
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

          <div className={styles.container_content_form_checkbox}>
            <input type="checkbox" height="30px" width="92.5%" />
            <span>Remember Card</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardPaymentForm;
