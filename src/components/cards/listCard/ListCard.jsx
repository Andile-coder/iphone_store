import React from "react";
import styles from "./listCard.module.scss";
import { MdCancel } from "react-icons/md";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../../redux/actions/cartAction";

const ListCard = ({
  img,
  quantity,
  price,
  name,
  space,
  color,
  hasIcon,
  item,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const removeFromCartHandler = async () => {
    await dispatch(removeFromCart(item));
  };
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.container_content_left}>
          {hasIcon && (
            <div className={styles.container_content_left_delete}>
              <MdCancel
                color="#be0002"
                cursor="pointer"
                onClick={() => removeFromCartHandler(item)}
              />
            </div>
          )}
          <div className={styles.container_content_left_img}>
            <img src={img} alt="" />
          </div>
          <div className={styles.container_content_left_info}>
            <div className={styles.container_content_left_info_title}>
              <span className={styles.container_content_info_title_text}>
                {name}
              </span>
            </div>
            <div className={styles.container_content_left_info_space}>
              <span className={styles.container_content_info_space_text}>
                {space}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.container_content_right}>
          <div className={styles.container_content_right_quantity}>
            {hasIcon && <FaCircleMinus color="#be0002" />}
            <span className={styles.container_content_right_quantity_text}>
              {quantity}
            </span>
            {hasIcon && <FaCirclePlus color="#be0002" />}
          </div>
          <div className={styles.container_content_right_price}>
            <span>{price}</span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ListCard;
