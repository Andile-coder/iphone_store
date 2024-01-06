import React from "react";
import styles from "./phoneCard.module.scss";
import CustomButton from "../../buttons/customButton/CustomButton";
import { useNavigate } from "react-router-dom";
const PhoneCard = ({ title, price, image, link, space, name, id }) => {
  const navigate = useNavigate();
  const goToProduct = (id) => {
    navigate(`/product/${id}`);
  };
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
            onClick={() => goToProduct(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
