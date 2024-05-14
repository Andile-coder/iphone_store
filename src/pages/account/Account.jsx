import React, { useState } from "react";
import styles from "./account.module.scss";
import NavBar from "../../components/navigation/NavBar";
import user from "../../assets/user.jpg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import AccountNavCard from "../../components/cards/accountNavCard/AccountNavCard";
import Footer from "./../../components/footer/Footer";
import { AiOutlineUser } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi";
const Account = () => {
  const [pages, setPages] = useState([
    {
      path: "account/profile",
      name: "Profile",
      index: 0,
      active: true,
      icon: <AiOutlineUser size={34} />,
    },
    {
      path: "account/password",
      name: "Password",
      index: 1,
      active: false,
      icon: <MdLockOutline size={34} />,
    },
    {
      path: "account/addressdetails",
      name: "Address Details",
      index: 2,
      active: false,
      icon: <HiOutlineHome size={34} />,
    },
    // {
    //   path: "account/carddetails",
    //   name: "Card Details",
    //   index: 3,
    //   active: false,
    // },
  ]);
  const navigate = useNavigate();

  const goTo = (path, index) => {
    navigate(path);
    // copy state
    let copyPages = pages;
    copyPages = copyPages.map((page) => {
      const tempActive = page.index == index ? true : false;
      return { ...page, active: tempActive };
    });
    setPages(copyPages);
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <NavBar />
          <div className={styles.container_content_cont}>
            <div className={styles.container_content_cont_nav}>
              <div className={styles.container_content_cont_nav_user}>
                <div className={styles.container_content_cont_nav_user_img}>
                  <img src={user} alt="user profile" />
                </div>
                <div className={styles.container_content_cont_nav_user_text}>
                  <span>johndoe@gmail.com</span>
                  <h2>John Doe</h2>
                </div>
              </div>
              <div className={styles.container_content_cont_nav_items}>
                {/* create a card for each */}
                {pages.map((page) => (
                  <AccountNavCard
                    path={page.path}
                    name={page.name}
                    active={page.active}
                    onClick={() => goTo(page.path, page.index)}
                  />
                ))}
              </div>
              <div className={styles.container_content_cont_nav_mobile_items}>
                {pages.map((page) => (
                  <Link
                    to={page.path}
                    className={
                      styles.container_content_cont_nav_mobile_items_item
                    }
                  >
                    {page.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.container_content_cont_details}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
