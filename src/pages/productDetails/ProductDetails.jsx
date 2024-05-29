import React, { useEffect, useState } from "react";
import styles from "./productDetails.module.scss";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import IphoneBack from "../../assets/phones/iphone14_promax_deep_purple3 1.png";
import IphoneFront from "../../assets/phones/iphone14_promax_deep_purple2 1.png";
import IphoneBoth from "../../assets/phones/iphone14_promax_spaceblack1 1.png";
import CustomButton from "../../components/buttons/customButton/CustomButton";
import Iphone11_front_white from "../../assets/phones/iphone11_white_front.jpeg";
import {
  MdOutlineScreenshot,
  MdOutlineCloudUpload,
  MdBatteryChargingFull,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../../redux/actions/productsAction";
import { useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../../../redux/actions/cartAction";

const ProductDetails = () => {
  const extraInfo = [
    {
      icon: <MdOutlineScreenshot />,
      title: "6.1” (1170x2532 pixels) clear display",
    },
    { icon: <MdOutlineCloudUpload />, title: "6 GB Ram, 1 TB" },
    {
      icon: <MdBatteryChargingFull />,
      title: "Up to 20 hours of battery life",
    },
  ];

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [productOnCart, setProductOnCart] = useState(false);
  const { id } = useParams();
  const [text, setText] = useState("Add to Cart");
  const [clicked, setClicked] = useState(false);
  const list = [0];

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const handleClick = () => {
    setClicked(true);
    setText("Added to Cart");
    setTimeout(() => {
      setText("Add to Cart");
      setClicked(false);
    }, 5000);
  };

  useEffect(() => {
    if (cartItems.find((item) => item.product_id === product.product_id)) {
      setProductOnCart(true);
    } else {
      setProductOnCart(false);
    }
  }, [cartItems, product]);

  const addToCartHandler = async () => {
    handleClick();
    await dispatch(addToCart(product));
  };

  const removeFromCartHandler = async () => {
    await dispatch(removeFromCart(product));
  };
  //when button clicked change text for 5 seconds from add to cart to added to cart

  return (
    <div style={{ overflow: "hidden" }}>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <NavBar />
          <div className={styles.container_content_cont}>
            <div className={styles.container_content_cont_img}>
              <div className={styles.container_content_cont_img_container}>
                <img src={Iphone11_front_white} alt="" />
              </div>
              <div className={styles.container_content_cont_img_list}>
                <SmallImage img={IphoneBoth} />
                <SmallImage img={IphoneFront} />
                <SmallImage img={IphoneBack} />
              </div>
            </div>
            <div className={styles.container_content_cont_divider}></div>
            <div className={styles.container_content_cont_info}>
              <div className={styles.container_content_cont_info_title}>
                <span>{product.name}</span>
              </div>
              <div
                className={
                  styles.container_content_cont_info_cont_summary_item_subtotal_mobile
                }
              >
                <span>{product.price}</span>
              </div>
              <ExtraInfoContainer
                extraInfo={extraInfo}
                product={product}
                productOnCart={productOnCart}
                addToCartHandler={addToCartHandler}
                buttonText={text}
                removeFromCartHandler={removeFromCartHandler}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;

const SmallImage = ({ img }) => (
  <div className={styles.container_content_cont_img_list_item}>
    <img src={img} alt="" />
  </div>
);

const ExtraInfoContainer = ({
  extraInfo,
  product,
  productOnCart,
  addToCartHandler,
  removeFromCartHandler,
  buttonText,
}) => {
  return (
    <div className={styles.container_content_cont_info_cont}>
      <div className={styles.container_content_cont_info_cont_summary}>
        {extraInfo.map((item, index) => (
          <div
            className={styles.container_content_cont_info_cont_summary_item}
            key={index}
          >
            {item.icon}
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <div
        className={styles.container_content_cont_info_cont_summary_item_blocks}
      >
        <BlockColor color="#2F2828" />
        <BlockColor color="#FFD700" />
        <BlockColor color="#800080" />
      </div>
      <div
        className={
          styles.container_content_cont_info_cont_summary_item_subtotal
        }
      >
        <span>R{product.price}</span>
      </div>
      <div className={styles.container_content_cont_info_cont_summary_item_btn}>
        {/* <CustomButton
          text="Remove from Cart"
          height="56px"
          className="active"
          onClick={() => removeFromCartHandler(product)}
        /> */}

        <CustomButton
          text={buttonText}
          height="56px"
          className="active"
          onClick={() => addToCartHandler(product)}
        />
      </div>
    </div>
  );
};

const BlockColor = ({ color }) => (
  <div className={styles.blockContainer}>
    <div
      className={styles.blockContainer_content}
      style={{ background: color }}
    ></div>
  </div>
);
