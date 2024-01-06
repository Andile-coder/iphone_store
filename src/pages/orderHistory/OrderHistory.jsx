import React from "react";
import styles from "./orderHistory.module.scss";
import NavBar from "../../components/buttons/navigation/NavBar";
import OrderHistoryTable from "../../components/tables/orderHistoryTable/orderHistoryTable";
const OrderHistory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <NavBar />
        <div className={styles.container_content_title}>
          <span className={styles.container_content_title_text}>
            Order History
          </span>
        </div>
        <div className={styles.container_content_table}>
          <OrderHistoryTable />
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
