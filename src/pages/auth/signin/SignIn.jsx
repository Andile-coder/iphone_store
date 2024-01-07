import React from "react";
import styles from "./signIn.module.scss";
import LoginForm from "../../../components/forms/loginForm/LoginForm";
import Footer from "../../../components/footer/Footer";
import NavBar from "../../../components/navigation/NavBar";
const SignIn = () => {
  return (
    <div>
      <div className={styles.container}>
        <NavBar />
        <div className={styles.container_content}>
          <div className={styles.container_content_form_cont}>
            <LoginForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
