import React from "react";
import OrderHistoryTable from "../../components/tables/orderHistoryTable/orderHistoryTable";
import styles from "./orders.module.scss";
const Orders = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <h1>Orders</h1>
        <div className={styles.container_content_table}>
          <OrderHistoryTable />
        </div>
      </div>
    </div>
  );
};

export default Orders;
