import React from "react";
import styles from "./cart.module.scss";
import CustomButton from "../../components/buttons/customButton/CustomButton";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import ListCard from "../../components/cards/listCard/ListCard";
import Images from "../../components/images/Images";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PriceSummaryCard from "../../components/cards/priceSummaryCard/PriceSummaryCard";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalprice = useSelector((state) => state.cart.total);
  const totalItems = useSelector((state) => state.cart.count);
  const goToCheckout = (id) => {
    navigate(`/checkout/delivery/${id}`);
  };
  // const items = [
  //   {
  //     name: "iPhone 14 Pro Max",
  //     price: "R1099",
  //     space: "1TB",
  //     quantity: "3",
  //     image: Images[0],
  //   },
  //   {
  //     name: "iPhone 14 Pro Max",
  //     price: "R1099",
  //     space: "1TB",
  //     quantity: "3",
  //     image: Images[1],
  //   },
  //   {
  //     name: "iPhone 14 Pro Max",
  //     price: "R1099",
  //     space: "1TB",
  //     quantity: "3",
  //     image: Images[0],
  //   },
  //   {
  //     name: "iPhone 14 Pro Max",
  //     price: "R1099",
  //     space: "1TB",
  //     quantity: "3",
  //     image: Images[0],
  //   },
  //   {
  //     name: "iPhone 14 Pro Max",
  //     price: "R1099",
  //     space: "1TB",
  //     quantity: "3",
  //     image: Images[0],
  //   },
  // ];

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <div>
            <NavBar />
          </div>
          <div className={styles.container_content_title}>
            <span className={styles.container_content_title_text}>Cart</span>
          </div>
          <div className={styles.container_content_cont}>
            <div className={styles.container_content_cont_list}>
              <div className={styles.container_content_cont_list_items}>
                {cartItems?.map((item) => (
                  <div
                    className={styles.container_content_cont_list_items}
                    style={{ marginBottom: "20px" }}
                  >
                    <ListCard
                      item={item}
                      name={item.name}
                      price={item.price}
                      img={item.image}
                      space={item.space}
                      hasIcon={true}
                      quantity={item.order_quantity}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.container_content_cont_divider}></div>
            <PriceSummaryCard onClick={() => goToCheckout("123")} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
