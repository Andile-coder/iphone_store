import React from "react";
import styles from "./cart.module.scss";
import CustomButton from "../../components/buttons/customButton/CustomButton";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import ListCard from "../../components/cards/listCard/ListCard";
import Images from "../../components/images/Images";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const goToCheckout = (id) => {
    navigate(`/checkout/delivery/${id}`);
  };
  const items = [
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      quantity: "3",
      image: Images[0],
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      quantity: "3",
      image: Images[1],
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      quantity: "3",
      image: Images[0],
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      quantity: "3",
      image: Images[0],
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      quantity: "3",
      image: Images[0],
    },
  ];

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <NavBar />
          <div className={styles.container_content_title}>
            <span className={styles.container_content_title_text}>Cart</span>
          </div>
          <div className={styles.container_content_cont}>
            <div className={styles.container_content_cont_list}>
              <div className={styles.container_content_cont_list_items}>
                {items.map((item) => (
                  <div
                    className={styles.container_content_cont_list_items}
                    style={{ marginBottom: "20px" }}
                  >
                    <ListCard
                      name={item.name}
                      price={item.price}
                      img={item.image}
                      space={item.space}
                      hasIcon={true}
                      quantity={item.quantity}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.container_content_cont_divider}></div>
            <PricingContainer onClick={() => goToCheckout("123")} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
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
          text="Checkout"
          height="56px"
          className="active"
          width="100%"
          onClick={onClick}
        />
      </div>
    </div>
  );
};
