import React from "react";
import styles from "./navbar.module.scss";
import CustomButton from "../buttons/customButton/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/ace_iphone2.png";
import { CiMenuBurger } from "react-icons/ci";
import logoName from "../../assets/ace_iphone_name2.png";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../redux/slices/authSlice";
import { getUser, logout } from "../../../redux/actions/authAction";
import axios from "axios";
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
  const dispatch = useDispatch();

  const handleActive = (index) => {
    setActive(index);
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

  const getUserHandler = async () => {
    //upload image to the server
    // try {
    //   const response = await axios.get("http://localhost:3000/api/auth/user");
    //   console.log(response.data);
    // } catch (error) {
    //   console.error("Error uploading image:", error);
    // }
    const response = await dispatch(logout());
    console.log(response);
  };

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
                onClick={() => handleActive(index)}
                style={{ color: active == index ? "#be0002" : "#151313" }}
              >
                {page.name}
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.container_content_btns}>
          {/* <CustomButton text="Cart" height="64px" onClick={goToCart} /> */}
          <div className={styles.container_content_btns_cart}>
            <Link
              to="/cart"
              style={{
                color: "#151313",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <BsCart3 size={34} /> <span>{cartCount}</span>
            </Link>
          </div>
          {
            // if user is logged in, show user name
            isLogged ? (
              <CustomButton
                text="Account"
                height="64px"
                color="secondary"
                onClick={goToAccount}
              />
            ) : (
              <CustomButton
                text="Login"
                height="64px"
                color="secondary"
                onClick={goToLogin}
              />
            )
          }
          {/* <CustomButton
            text="Get User"
            height="64px"
            onClick={getUserHandler}
          /> */}
        </div>
        <div className={styles.container_content_burger}>
          <CiMenuBurger size={40} />
        </div>
      </nav>
      <hr className={styles.hr} />
    </div>
  );
};

export default NavBar;
