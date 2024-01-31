import React from "react";
import styles from "./accountNavCard.module.scss";
import { Link } from "react-router-dom";
const AccountNavCard = ({ path, name, index, active, onClick }) => {
  return (
    <div
      className={styles.container}
      style={{
        borderLeft: active ? "2px solid #b50e0e" : "",
        background: active ? "#f3c9c9" : "",
      }}
      onClick={onClick}
    >
      <Link to={path}>{name}</Link>
    </div>
  );
};

export default AccountNavCard;
