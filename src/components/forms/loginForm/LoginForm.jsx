import React from "react";
import styles from "./loginForm.module.scss";
import CustomInput from "../../inputs/customInput/CustomInput";
import CustomButton from "../../buttons/customButton/CustomButton";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.container_content_form_cont}>
          <div className={styles.container_content_form_cont_title}>
            <span>Sign In</span>
          </div>
          <div className={styles.container_content_form_cont_social_logins}>
            <CustomButton
              text="Sign in with Google"
              color="secondary"
              textColor="#000000"
              iconPosition="left"
              icon={<FcGoogle />}
            />
            <CustomButton
              text="Sign in with Facebook"
              color="secondary"
              iconPosition="left"
              textColor="#000000"
              icon={<FaFacebook color="#1877F2" />}
            />
          </div>
          <div className={styles.container_content_form_cont_or}>
            <div className={styles.container_content_form_cont_or_line}></div>
            <span className={styles.container_content_form_cont_or_text}>
              OR
            </span>
            <div className={styles.container_content_form_cont_or_line}></div>
          </div>
          <form>
            <div className={styles.container_content_form_cont_top}>
              <div className={styles.container_content_form_cont_top_input}>
                <CustomInput
                  type="text"
                  placeholder="Email"
                  label="Email"
                  height="30px"
                  width="90.5%"
                />
              </div>
              <div className={styles.container_content_form_cont_top_input}>
                <CustomInput
                  type="password"
                  placeholder="************"
                  label="Password"
                  height="30px"
                  width="90.5%"
                />
              </div>
            </div>

            <CustomButton text="Sign in" />
            <div className={styles.container_content_form_cont_extra}>
              <Link
                to="/signup"
                className={styles.container_content_form_cont_extra_link}
              >
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
