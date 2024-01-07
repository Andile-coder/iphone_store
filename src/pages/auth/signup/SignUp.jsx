import React from "react";
import styles from "./signup.module.scss";
import NavBar from "../../../components/buttons/navigation/NavBar";
import RegisterForm from "../../../components/forms/registerForm/RegisterForm";
const SignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.container_content_form_cont}>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
