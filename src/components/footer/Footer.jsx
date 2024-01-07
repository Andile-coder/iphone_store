import React from "react";
import styles from "./footer.module.scss";
import { MdOutlineEmail, MdOutlinePhoneEnabled } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import NeweletterForm from "../forms/newsletterForm/NeweletterForm";
import logo from "../../assets/ace_iphone2.png";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.container_content_logo}>
          <div className={styles.container_content_logo_cont}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.items}>
            <div className={styles.items_item}>
              <div className={styles.items_item_icon}>
                <MdOutlineEmail color="#fff" size={22} />
              </div>
              <span className={styles.items_item_text}>
                youremail@example.com
              </span>
            </div>
            <div className={styles.items_item}>
              <div className={styles.items_item_icon}>
                <MdOutlinePhoneEnabled color="#fff" size={22} />
              </div>
              <span className={styles.items_item_text}>0712354896</span>
            </div>
          </div>
          <div className={styles.socials}>
            <FaXTwitter color="#fff" size={32} />
            <FaFacebook color="#fff" size={32} />
            <CiInstagram color="#fff" size={32} />
          </div>
        </div>
        <div className={styles.container_content_links}>
          <span className={styles.container_content_title}>Links</span>
          <div className={styles.items_item}>
            <span className={styles.items_item_text}>home</span>
          </div>
          <div className={styles.items_item}>
            <span className={styles.items_item_text}>Shop</span>
          </div>
          <div className={styles.items_item}>
            <span className={styles.items_item_text}>About Us </span>
          </div>
          <div className={styles.items_item}>
            <span className={styles.items_item_text}>contact Us</span>
          </div>
        </div>
        <div className={styles.container_content_help}>
          <span className={styles.container_content_title}>Help & Support</span>
          <div className={styles.container_content_links}>
            <div className={styles.items_item}>
              <span className={styles.items_item_text}>FAQs</span>
            </div>
            <div className={styles.items_item}>
              <span className={styles.items_item_text}>Privacy Policy</span>
            </div>
            <div className={styles.items_item}>
              <span className={styles.items_item_text}>Terms & Conditions</span>
            </div>
            <div className={styles.items_item}>
              <span className={styles.items_item_text}>
                Delivery & Return Policy
              </span>
            </div>
            <div className={styles.items_item}>
              <span className={styles.items_item_text}>Feedback Corner</span>
            </div>
          </div>
        </div>
        <div className={styles.container_content_form}>
          <NeweletterForm />
        </div>
      </div>
    </div>
  );
};

export default Footer;
