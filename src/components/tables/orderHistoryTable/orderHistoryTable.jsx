import React from "react";
import styles from "./orderHistoryTable.module.scss";
const orderHistoryTable = ({ data }) => {
  console.log("data", data);
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
              <span>Status</span>
            </th>
            <th>
              <span>Total</span>
            </th>
          </tr>
        </thead>
        <tbody className={styles.container_table_row_body}>
          {data?.map((item, index) => (
            <TableRow index={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default orderHistoryTable;

const TableRow = ({ index, item }) => {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  }

  return (
    <tr>
      <td>
        <span>{index}</span>
      </td>
      <td>
        <span>{item.order_number}</span>
      </td>
      <td>
        <span>{formatDate(item.created_on)}</span>
      </td>

      <td>
        <span>{item.status}</span>
      </td>
      <td>
        <span className={styles.price_text}>R{item.total_amount}</span>
      </td>
    </tr>
  );
};
