import React from "react";
import styles from "./deliveryDetails.module.scss";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import CustomButton from "../../components/buttons/customButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomInput from "../../components/inputs/customInput/CustomInput";
import PriceSummaryCard from "../../components/cards/priceSummaryCard/PriceSummaryCard";
const DeliveryDetails = () => {
  const navigate = useNavigate();
  const cartActions = useSelector((state) => state.cart.cartItems);
  const cartTotalprice = useSelector((state) => state.cart.total);
  const cartTotalItems = useSelector((state) => state.cart.count);
  const goToPayment = (id) => {
    navigate(`/checkout/payment/${id}`);
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <NavBar />
          <div className={styles.container_content_title}>
            <span className={styles.container_content_title_text}>
              Delivery Details
            </span>
          </div>
          <div className={styles.container_content_cont}>
            <div className={styles.container_content_cont_form}>
              <form action="">
                <div
                  className={styles.container_content_cont_form_delivery_info}
                >
                  <div
                    className={
                      styles.container_content_cont_form_delivery_info_input
                    }
                  >
                    <CustomInput
                      placeholder="1 Example Street"
                      label="Street Address"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div
                    className={
                      styles.container_content_cont_form_delivery_info_input
                    }
                  >
                    <CustomInput
                      placeholder="Beautiful Gardens"
                      label="Complex/Building Name "
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div
                    className={
                      styles.container_content_cont_form_delivery_info_input
                    }
                  >
                    <CustomInput
                      placeholder="Camps Bay"
                      label="Suburb"
                      height="100%"
                      width="100%"
                    />
                  </div>{" "}
                  <div
                    className={
                      styles.container_content_cont_form_delivery_info_input
                    }
                  >
                    <CustomInput
                      placeholder="Cape Town"
                      label="City/Town"
                      height="100%"
                      width="100%"
                    />
                  </div>{" "}
                  <div
                    className={
                      styles.container_content_cont_form_delivery_info_input
                    }
                  >
                    <CustomInput
                      placeholder="Western Cape"
                      label="Province"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div
                    className={
                      styles.container_content_cont_form_delivery_info_input
                    }
                  >
                    <CustomInput
                      placeholder="8005"
                      label="Postal Code"
                      height="100%"
                      width="100%"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className={styles.container_content_cont_divider}></div>
            <PriceSummaryCard onClick={() => goToPayment("123")} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeliveryDetails;
