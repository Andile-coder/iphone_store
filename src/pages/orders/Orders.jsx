import React from "react";
import OrderHistoryTable from "../../components/tables/orderHistoryTable/orderHistoryTable";
import styles from "./orders.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByUser } from "../../../redux/actions/orderActions";
const Orders = () => {
  const user = useSelector((state) => state.auth.user);
  const orders = useSelector((state) => state.order.current_orders);
  const dispatch = useDispatch();

  const getOrderByUserHandler = async () => {
    // get order by user
    const order = await dispatch(getOrderByUser(user.user_id));
  };
  useEffect(() => {
    getOrderByUserHandler();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <h1>Orders</h1>
        <div className={styles.container_content_table}>
          <OrderHistoryTable data={orders} />
        </div>
      </div>
    </div>
  );
};

export default Orders;
