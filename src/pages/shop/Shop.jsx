import React, { useEffect, useState } from "react";
import styles from "./shop.module.scss";
import NavBar from "../../components/navigation/NavBar";
import iphone14_promax_deep_purple from "../../assets/phones/iphone14_promax_deep_purple1 1.png";
import iphone14_promax_gold from "../../assets/phones/iphone14_promax_gold1 1.png";
import iphone14_promax_spaceblack from "../../assets/phones/iphone14_promax_spaceblack1 1.png";
import iphone14_plus_red1 from "../../assets/phones/iphone14_plus_red1 1.png";
import iphone14_plus_purple1 from "../../assets/phones/iphone14_plus_purple1 1.png";
import ReactPaginate from "react-paginate";
import Footer from "../../components/footer/Footer";
//fix image importation
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import PhoneCard from "../../components/cards/phoneCard/PhoneCard";
import PrimaryDropdown from "../../components/dropdowns/primaryDropdown/PrimaryDropdown";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/actions/productsAction";
import { getUser } from "../../../redux/actions/authAction";

const Shop = () => {
  const [show, setShow] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const dispatch = useDispatch();

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 4) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
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
  const endOffset = itemOffset + 6;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / 4);

  const dropDownItems = [
    {
      name: "Newest",
      path: "/newest",
    },
    {
      name: "Best Selling",
      path: "/best-selling",
    },
    {
      name: "Oldest",
      path: "/oldest",
    },
    {
      name: "Price: Low to High",
      path: "/price-low-to-high",
    },
    {
      name: "Price: High to Low",
      path: "/price-high-to-low",
    },
    {
      name: "Name: A to Z",
      path: "/name-a-to-z",
    },
    {
      name: "Low Selling",
      path: "/low-selling",
    },
  ];
  const getUserHandler = async () => {
    const response = await dispatch(getUser());
    return response;
  };
  // get products
  useEffect(() => {
    // when page loads to the following
    // get products
    dispatch(getProducts());
    // update user state if logged in
    getUserHandler();
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <div>
            <NavBar />
          </div>
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
            {/* <div
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
            </div> */}
            <PrimaryDropdown dropDownItems={dropDownItems} label="Sort By: " />
          </div>
          <div className={styles.container_content_cards}>
            {currentItems.map((item) => (
              <PhoneCard
                price={item.price}
                name={item.name}
                image={item.image}
                space={item.space}
              />
            ))}
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< "
            renderOnZeroPageCount={null}
            containerClassName={styles.pagination}
            activeClassName={styles.pagination_active}
            pageLinkClassName={styles.pagination_link}
            previousClassName={styles.pagination_prev_link}
            nextClassName={styles.pagination_next_link}
          />
        </div>
      </div>
      <div style={{ height: "96px" }}></div>
      <Footer />
    </div>
  );
};

export default Shop;
