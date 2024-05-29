import React from "react";
import styles from "./pageDropdown.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMobileMenu } from "../../../redux/actions/navigationAction";
const PageDropdown = () => {
  const pages = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Shop",
      url: "/shop",
    },
    {
      id: 4,
      name: "Contact",
      url: "/contact",
    },
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const displayMobileMenu = useSelector(
    (state) => state.navigation.displayMobileMenu
  );

  const goToPage = (url) => {
    navigate(`${url}`);
    dispatch(toggleMobileMenu());
  };
  return (
    <div
      className={styles.container}
      style={{ display: displayMobileMenu == true ? "block" : "none" }}
    >
      <div className={styles.container_content}>
        {/* list pages */}
        {pages.map((page) => (
          <div
            className={styles.container_content_page}
            key={page.id}
            onClick={() => goToPage(page.url)}
          >
            <span> {page.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageDropdown;
