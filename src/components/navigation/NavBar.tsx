import React from "react";
import styles from "./navbar.module.scss";
import CustomButton from "../buttons/customButton/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/ace_iphone2.png";
import logoName from "../../assets/ace_iphone_name2.png";
interface Props {}

const NavBar: React.FC<Props> = (props) => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];
  const [active, setActive] = React.useState(0);
  const navigate = useNavigate();

  const handleActive = (index: number) => {
    console.log(index);
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
          <CustomButton text="Cart" height="64px" onClick={goToCart} />
          <CustomButton
            text="Login"
            height="64px"
            color="secondary"
            onClick={goToLogin}
          />
        </div>
      </nav>
      <hr className={styles.hr} />
    </div>
  );
};

export default NavBar;
