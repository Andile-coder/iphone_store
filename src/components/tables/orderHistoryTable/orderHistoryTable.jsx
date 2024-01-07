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
          {[1, 2, 3, 4, 5].map((elem) => (
            <TableRow index={elem} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default orderHistoryTable;

const TableRow = ({ index }) => {
  return (
    <tr>
      <td>
        <span>{index}</span>
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
  );
};
