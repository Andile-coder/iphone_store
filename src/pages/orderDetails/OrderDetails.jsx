import React from "react";
import styles from "./orderDetails.module.scss";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import CustomButton from "../../components/buttons/customButton/CustomButton";
import ListCard from "../../components/cards/listCard/ListCard";
import Images from "../../components/images/Images";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../../redux/actions/authAction";
const OrderDetails = () => {
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
  const dispatch = useDispatch();
  const getUserHandler = async () => {
    const response = await dispatch(getUser());
    return response;
  };
  // get products
  useEffect(() => {
    // update user state if logged in
    getUserHandler();
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <NavBar />
          <div className={styles.container_content_title}>
            <span className={styles.container_content_title_text}>
              Order ID: 12345678910
            </span>
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
                      hasIcon={false}
                      space={item.space}
                      quantity={item.quantity}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.container_content_cont_divider}></div>
            <PricingContainer />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderDetails;
const PricingContainer = () => {
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
          text="Not Delivered"
          height="56px"
          className="active"
          width="100%"
          color="tertiary"
        />
      </div>
    </div>
  );
};
