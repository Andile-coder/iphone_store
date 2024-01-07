import React from "react";
import styles from "./signup.module.scss";
import RegisterForm from "../../../components/forms/registerForm/RegisterForm";
import Footer from "../../../components/footer/Footer";
import NavBar from "../../../components/navigation/NavBar";
const SignUp = () => {
  return (
    <div>
      <div className={styles.container}>
        <NavBar />
        <div className={styles.container_content}>
          <div className={styles.container_content_form_cont}>
            <RegisterForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
