import React, { useEffect } from "react";
import styles from "./navbar.module.scss";
import CustomButton from "../buttons/customButton/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/ace_iphone2.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import logoName from "../../assets/ace_iphone_name2.png";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../redux/slices/authSlice";
import { getUser, logout } from "../../../redux/actions/authAction";
import {
  changeTab,
  toggleMobileMenu,
} from "../../../redux/actions/navigationAction";
import axios from "axios";
import PrimaryDropdown from "../dropdowns/primaryDropdown/PrimaryDropdown";
import UserDropdown from "../dropdowns/userDropdown/UserDropdown";

const NavBar = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];
  const [active, setActive] = React.useState(0);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const cartCount = useSelector((state) => state.cart.count);
  const currentTab = useSelector((state) => state.navigation.currentTab);
  const displayMobileMenu = useSelector(
    (state) => state.navigation.displayMobileMenu
  );

  const dispatch = useDispatch();

  const currentTabHandler = (name) => {
    console.log(currentTab);
    // dispatch(authActions.setCurrentTab(name));
  };
  const goToCart = () => {
    navigate("/cart");
  };
  const goToLogin = () => {
    navigate("/signin");
  };
  const goToHome = () => {
    navigate("/");
  };
  const goToAccount = () => {
    navigate("/account/profile");
  };
  const goToPage = (path, name) => {
    navigate(path);
    dispatch(authActions.setCurrentTab(name));
  };

  const logoutHandler = async () => {
    const response = await dispatch(logout());
  };

  const mobileMenuHandler = async () => {
    console.log("mobile menu");
    const response = await dispatch(toggleMobileMenu());
  };

  const dropDownItems = [
    { name: "Account", path: "/account/profile", onClick: goToAccount },
    { name: "Logout", path: "/account/profile", onClick: logoutHandler },
  ];

  return (
    <div className={styles.container}>
      <nav className={styles.container_content}>
        <div className={styles.container_content_logo} onClick={goToHome}>
          <div className={styles.container_content_logo_img}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.container_content_logo_name}>
            <img src={logoName} alt="logo" />
          </div>
        </div>
        <div className={styles.container_content_pages}>
          {pages.map((page, index) => (
            <div className={styles.container_content_pages_page}>
              <Link
                to={page.path}
                onClick={() => currentTabHandler(page.name)}
                style={{
                  color: currentTab == page.name ? "#be0002" : "#151313",
                }}
              >
                {page.name}
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.container_content_btns}>
          {/* <CustomButton text="Cart" height="64px" onClick={goToCart} /> */}

          {
            // if user is logged in, show user name
            isLogged ? (
              // <CustomButton
              //   text="Account"
              //   height="64px"
              //   color="secondary"
              //   onClick={() => goToPage("/account", "Account")}
              // />

              <UserDropdown dropDownItems={dropDownItems} />
            ) : (
              <CustomButton
                text="Login"
                height="64px"
                color="secondary"
                onClick={() => goToPage("/signin", "Login")}
              />
            )
          }
          {/* <CustomButton
            text="Get User"
            height="64px"
            onClick={getUserHandler}
          /> */}
          <div className={styles.container_content_btns_cart}>
            <Link to="/cart">
              <BsCart3 color="#be0002" size={34} /> <span>{cartCount}</span>
            </Link>
          </div>
        </div>
        <div className={styles.container_content_burger}>
          {!displayMobileMenu ? (
            <CiMenuBurger size={40} onClick={mobileMenuHandler} />
          ) : (
            <IoMdClose size={40} onClick={mobileMenuHandler} />
          )}
        </div>
      </nav>
      <hr className={styles.hr} />
    </div>
  );
};

export default NavBar;
