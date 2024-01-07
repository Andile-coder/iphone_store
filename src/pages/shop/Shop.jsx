import React from "react";
import styles from "./shop.module.scss";
import NavBar from "../../components/navigation/NavBar";
import iphone14_promax_deep_purple from "../../assets/phones/iphone14_promax_deep_purple1 1.png";
import iphone14_promax_gold from "../../assets/phones/iphone14_promax_gold1 1.png";
import iphone14_promax_spaceblack from "../../assets/phones/iphone14_promax_spaceblack1 1.png";
import iphone14_plus_red1 from "../../assets/phones/iphone14_plus_red1 1.png";
import iphone14_plus_purple1 from "../../assets/phones/iphone14_plus_purple1 1.png";
import Footer from "../../components/footer/Footer";
//fix image importation
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import PhoneCard from "../../components/cards/phoneCard/PhoneCard";
const Shop = () => {
  const [show, setShow] = React.useState(false);
  const showDropdown = () => {
    setShow(!show);
  };
  const items = [
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      image: iphone14_promax_deep_purple,
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      image: iphone14_plus_red1,
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      image: iphone14_promax_gold,
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      image: iphone14_plus_purple1,
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      image: iphone14_plus_red1,
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      image: iphone14_promax_spaceblack,
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      image: iphone14_plus_red1,
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      image: iphone14_promax_deep_purple,
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      image: iphone14_promax_gold,
    },
    {
      name: "iPhone 14 Pro Max",
      price: "R1099",
      space: "1TB",
      image: iphone14_promax_spaceblack,
    },
  ];

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <NavBar />
          <div className={styles.container_content_title}>
            <span className={styles.container_content_title_text}>
              All Devices
            </span>
          </div>
          <div className={styles.container_content_filters}>
            <div className={styles.container_content_filters_search}>
              <div className={styles.container_content_filters_search_input}>
                <input
                  type="text"
                  placeholder="e.g iPhone 14, pro max, silver...."
                />
              </div>
              <div className={styles.container_content_filters_search_icon}>
                <CiSearch size={34} color="#fff" cursor="pointer" />
              </div>
            </div>
            <div
              className={styles.container_content_filters_dropdown_container}
            >
              <span>Sort by: </span>
              <div
                className={
                  styles.container_content_filters_dropdown_container_cont
                }
              >
                <div
                  className={
                    styles.container_content_filters_dropdown_container_cont_picked
                  }
                >
                  <span>Newest</span>

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
                  <div
                    className={
                      styles.container_content_filters_dropdown_container_cont_list_item
                    }
                  >
                    <span>Volvo</span>
                  </div>
                  <div
                    className={
                      styles.container_content_filters_dropdown_container_cont_list_item
                    }
                  >
                    <span>Saab</span>
                  </div>
                  <div
                    className={
                      styles.container_content_filters_dropdown_container_cont_list_item
                    }
                  >
                    <span>Volvo</span>
                  </div>
                  <div
                    className={
                      styles.container_content_filters_dropdown_container_cont_list_item
                    }
                  >
                    <span>Saab</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container_content_cards}>
            {items.map((item) => (
              <PhoneCard
                price={item.price}
                name={item.name}
                image={item.image}
                space={item.space}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ height: "96px" }}></div>
      <Footer />
    </div>
  );
};

export default Shop;
