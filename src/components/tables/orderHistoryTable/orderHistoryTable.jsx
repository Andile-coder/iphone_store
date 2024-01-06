import React from "react";
import styles from "./orderHistoryTable.module.scss";
const orderHistoryTable = () => {
  return (
    <div className={styles.container}>
      <table className={styles.container_table}>
        <thead className={styles.container_table_row_header}>
          <tr>
            <th>
              <span>#</span>
            </th>
            <th>
              <span>Order Number</span>
            </th>
            <th>
              <span>Date</span>
            </th>
            <th>
              <span>Order Total</span>
            </th>
            <th>
              <span>Order Status</span>
            </th>
          </tr>
        </thead>
        <tbody className={styles.container_table_row_body}>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>123456</span>
            </td>
            <td>
              <span>21-Dec-2023</span>
            </td>
            <td>
              <span className={styles.price_text}>$100.00</span>
            </td>
            <td>
              <span>Shipped</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>2</span>
            </td>
            <td>
              <span>123456</span>
            </td>
            <td>
              <span>21-Dec-2023</span>
            </td>
            <td>
              <span className={styles.price_text}>$100.00</span>
            </td>
            <td>
              <span>Shipped</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>3</span>
            </td>
            <td>
              <span>123456</span>
            </td>
            <td>
              <span>21-Dec-2023</span>
            </td>
            <td>
              <span className={styles.price_text}>$100.00</span>
            </td>
            <td>
              <span>Shipped</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>4</span>
            </td>
            <td>
              <span>123456</span>
            </td>
            <td>
              <span>21-Dec-2023</span>
            </td>
            <td>
              <span className={styles.price_text}>$100.00</span>
            </td>
            <td>
              <span>Shipped</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>5</span>
            </td>
            <td>
              <span>123456</span>
            </td>
            <td>
              <span>21-Dec-2023</span>
            </td>
            <td>
              <span className={styles.price_text}>$100.00</span>
            </td>
            <td>
              <span>Shipped</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default orderHistoryTable;
