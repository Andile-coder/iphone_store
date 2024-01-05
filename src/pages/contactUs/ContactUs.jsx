import React from "react";
import styles from "./contactUs.module.scss";
import NavBar from "../../components/buttons/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import ContactUsForm from "../../components/forms/contactUs/ContactUsForm";
import Couch from "../../components/svg/couch/Couch";
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

            <Couch />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
