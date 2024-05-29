import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./primaryDropdown.module.scss";
const PrimaryDropdown = ({ dropDownItems, label, title }) => {
  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(!show);
  };
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.container_content_filters_dropdown_container}>
          {label ?? <span>{label} </span>}
          <div
            className={styles.container_content_filters_dropdown_container_cont}
          >
            <div
              className={
                styles.container_content_filters_dropdown_container_cont_picked
              }
            >
              <span>{dropDownItems[0].name}</span>

              {!show ? (
                <IoIosArrowDown
                  color="#ffff"
                  onClick={showDropdown}
                  cursor="pointer"
                />
              ) : (
                <IoIosArrowUp
                  color="#ffff"
                  onClick={showDropdown}
                  cursor="pointer"
                />
              )}
            </div>
            <div
              className={
                styles.container_content_filters_dropdown_container_cont_list
              }
              style={{ display: show ? "block" : "none" }}
            >
              {dropDownItems.map((item) => (
                <div
                  className={
                    styles.container_content_filters_dropdown_container_cont_list_item
                  }
                >
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryDropdown;
