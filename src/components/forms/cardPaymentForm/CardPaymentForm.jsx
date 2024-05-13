import React from "react";
import styles from "./cardPaymentForm.module.scss";
import CustomButton from "../../buttons/customButton/CustomButton";
import { CiCreditCard1 } from "react-icons/ci";
import CustomInput from "../../inputs/customInput/CustomInput";

const CardPaymentForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <form className={styles.container_content_form} action="">
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
            <div className={styles.container_content_form_card_info_input}>
              <CustomInput
                placeholder="John Doe"
                label="Card Holder"
                height="100%"
                width="100%"
              />
            </div>
            <div className={styles.container_content_form_card_info_input}>
              <CustomInput
                placeholder="12345678899"
                label="Card Number"
                height="100%"
                width="100%"
              />
            </div>
          </div>
          <div className={styles.container_content_form_card_extra}>
            <div className={styles.container_content_form_card_extra_input}>
              <CustomInput
                placeholder="02"
                label="Month"
                width="100%"
                height="100%"
              />
            </div>
            <div className={styles.container_content_form_card_extra_input}>
              <CustomInput
                placeholder="2024"
                label="Year"
                width="100%"
                height="100%"
              />
            </div>
            <div className={styles.container_content_form_card_extra_input}>
              <CustomInput
                placeholder="123"
                label="CVV"
                width="100%"
                height="100%"
              />
            </div>
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
