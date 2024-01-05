import React from "react";
import styles from "./homebar.module.scss";
import { BsTruck } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
const HomeBar = () => {
  const itemBlock = [
    { icon: <BsTruck size={24} color="#ffff" />, text: "Fast Delivery" },
    {
      icon: <CiMoneyBill size={24} color="#ffff" />,
      text: "Affordable Prices",
    },
    {
      icon: <FaRegCheckCircle size={24} color="#ffff" />,
      text: "Quality Guaranteed",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        {itemBlock.map((item) => (
          <ItemBlock icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
};

const ItemBlock = ({ icon, text }) => {
  return (
    <div className={styles.itemBlock_container}>
      <div className={styles.itemBlock_container_content}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};
export default HomeBar;
