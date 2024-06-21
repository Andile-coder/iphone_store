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
  const { id } = useParams();
  const { product } = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [productOnCart, setProductOnCart] = useState(false);
  const [text, setText] = useState("Add to Cart");
  const [clicked, setClicked] = useState(false);
  const [focusImg, setFocusImg] = useState({});
  const [focusColor, setFocusColor] = useState();
  const list = [0];

  const handleGetProductById = async () => {
    await dispatch(getProductById(id));
  };
  useEffect(() => {
    handleGetProductById();
    console.log("products", product);
  }, [dispatch, id]);

  const handleFocusImg = (img) => {
    setFocusImg(img);
  };

  const handleFocusColor = (color) => {
    console.log(color);
    setFocusColor(color);
  };

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
    handleFocusColor(product.variations?.find((el, i) => i == 1)?.color);
    handleFocusImg(
      product.variations
        ?.find((elem) => elem.color == focusColor)
        ?.images.find((img) => img.type == "front")
    );
  }, [cartItems, product]);

  useEffect(() => {
    // handleFocusColor(product.variations?.find((el, i) => i == 1)?.color);
    handleFocusImg(
      product.variations
        ?.find((elem) => elem.color == focusColor)
        ?.images.find((img) => img.type == "front")
    );
  }, [focusColor]);

  const addToCartHandler = async () => {
    handleClick();
    await dispatch(addToCart(product));
  };

  const removeFromCartHandler = async () => {
    await dispatch(removeFromCart(product));
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <NavBar />
          <div className={styles.container_content_cont}>
            <div className={styles.container_content_cont_img}>
              <div className={styles.container_content_cont_img_container}>
                <img src={focusImg?.url} alt={product.name} />
              </div>
              <div className={styles.container_content_cont_img_list}>
                {product.variations
                  ?.find((element) => element.color == focusColor)
                  ?.images?.map((img) => (
                    <SmallImage
                      img={img.url}
                      onClick={() => handleFocusImg(img)}
                      active={img == focusImg}
                    />
                  ))}
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
                colorClick={() => {}}
                variations={[
                  product.variations?.map((el) => (
                    <BlockColor
                      color={el.color}
                      onClick={() => handleFocusColor(el.color)}
                    />
                  )),
                ]}
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

const SmallImage = ({ img, onClick, active }) => (
  <div
    className={
      active
        ? styles.container_content_cont_img_list_item_active
        : styles.container_content_cont_img_list_item
    }
    onClick={onClick}
  >
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
  colorClick,
  variations,
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
        {variations.map((elem) => elem)}
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

const BlockColor = ({ color, onClick }) => (
  <div className={styles.blockContainer} onClick={onClick}>
    <div
      className={styles.blockContainer_content}
      style={{ background: color }}
    ></div>
  </div>
);
