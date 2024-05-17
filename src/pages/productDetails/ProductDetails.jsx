import React from "react";
import styles from "./productDetails.module.scss";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import IphoneBack from "../../assets/phones/iphone14_promax_deep_purple3 1.png";
import IphoneFront from "../../assets/phones/iphone14_promax_deep_purple2 1.png";
import IphoneBoth from "../../assets/phones/iphone14_promax_spaceblack1 1.png";
import CustomButton from "../../components/buttons/customButton/CustomButton";
import Iphone11_front_white from "../../assets/phones/iphone11_white_front.jpeg";
import { MdOutlineScreenshot } from "react-icons/md";
import { MdOutlineCloudUpload } from "react-icons/md";
import { MdBatteryChargingFull } from "react-icons/md";
const ProductDetails = () => {
  const extraInfo = [
    {
      icon: <MdOutlineScreenshot />,
      title: "6.1” (1170x2532 pixels) clear display",
    },
    {
      icon: <MdOutlineCloudUpload />,
      title: "6 GB Ram, 1 TB",
    },
    {
      icon: <MdBatteryChargingFull />,
      title: "Up to 20 hours of battery life",
    },
  ];
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
                <span>iPhone 14 Pro Max</span>
              </div>
              <div
                className={
                  styles.container_content_cont_info_cont_summary_item_subtotal_mobile
                }
              >
                <span>R68964</span>
              </div>
              <ExtraInfoContainer extraInfo={extraInfo} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;

const SmallImage = ({ img }) => {
  return (
    <div className={styles.container_content_cont_img_list_item}>
      <img src={img} alt="" />
    </div>
  );
};
const ExtraInfoContainer = ({ extraInfo }) => {
  return (
    <div className={styles.container_content_cont_info_cont}>
      <div className={styles.container_content_cont_info_cont_summary}>
        {extraInfo.map((item, index) => (
          <div className={styles.container_content_cont_info_cont_summary_item}>
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
        <span>R68964</span>
      </div>
      <div className={styles.container_content_cont_info_cont_summary_item_btn}>
        <CustomButton text="Add to Cart" height="56px" className="active" />
      </div>
    </div>
  );
};

const BlockColor = ({ color }) => {
  return (
    <div className={styles.blockContainer}>
      <div
        className={styles.blockContainer_content}
        style={{ background: color }}
      ></div>
    </div>
  );
};
