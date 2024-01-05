import React from "react";
import styles from "./phoneCard.module.scss";
import CustomButton from "../../buttons/customButton/CustomButton";
const PhoneCard = ({ title, price, image, link, space, name }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.container_content_image}>
          <img src={image} alt="phone" />
        </div>
        <div className={styles.container_content_name}>{name}</div>
        <div className={styles.container_content_space}>{space}</div>
        <div className={styles.container_content_price}>{price}</div>
        <div className={styles.button_container}>
          <CustomButton
            text="View Deal"
            height="36px"
            width="100%"
            className="active"
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
