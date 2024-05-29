import React, { useEffect } from "react";
import styles from "./contactUs.module.scss";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import ContactUsForm from "../../components/forms/contactUs/ContactUsForm";
import Couch from "../../components/svg/couch/Couch";
import { useDispatch } from "react-redux";
import { getUser } from "../../../redux/actions/authAction";
const ContactUs = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <NavBar />
          <div className={styles.container_content_title}>
            <span className={styles.container_content_title_text}>
              Contact Us
            </span>
          </div>
          <div className={styles.container_content_form}>
            <ContactUsForm />
            <div className={styles.container_content_couch}>
              <Couch />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
