import React from "react";
import styles from "./navbar.module.scss";
import CustomButton from "../customButton/CustomButton";
import { Link } from "react-router-dom";
interface Props {}

const NavBar: React.FC<Props> = (props) => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];
  const [active, setActive] = React.useState(0);

  const handleActive = (index: number) => {
    console.log(index);

    setActive(index);
  };
  return (
    <div className={styles.container}>
      <nav className={styles.container_content}>
        <div className={styles.container_content_logo}>
          <span>iSellIphones</span>
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
          <CustomButton text="Cart" height="64px" className="active" />
          <CustomButton text="Login" height="64px" className="not_active" />
        </div>
      </nav>
      <hr className={styles.hr} />
    </div>
  );
};

export default NavBar;
