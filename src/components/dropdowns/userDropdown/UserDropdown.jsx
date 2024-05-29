import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./userDropdown.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getImageByTag } from "../../../../redux/actions/cloudinaryActions";
const UserDropdown = ({ dropDownItems, label, title }) => {
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const imagePath = useSelector((state) => state.cloudinary.imagePath);
  const dispatch = useDispatch();
  const userProfileImage = useSelector(
    (state) => state.cloudinary.userProfileImage
  );
  const [profilePicUrl, setProfilePicUrl] = useState("");
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
              <div
                className={
                  styles.container_content_filters_dropdown_container_cont_picked_img
                }
              >
                <img src={imagePath} alt="user profile" />
              </div>
              {user ? <span>{user.username}</span> : <span>Loading...</span>}

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
                  onClick={item.onClick}
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

export default UserDropdown;
