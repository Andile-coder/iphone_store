import React from "react";
import styles from "./registerForm.module.scss";
import CustomInput from "../../inputs/customInput/CustomInput";
import CustomButton from "../../buttons/customButton/CustomButton";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const RegisterForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.container_content_form_cont}>
          <div className={styles.container_content_form_cont_title}>
            <span>Sign Up</span>
          </div>
          <div className={styles.container_content_form_cont_social_logins}>
            <div
              className={styles.container_content_form_cont_social_logins_btn}
            >
              <CustomButton
                text="Sign up with Google"
                color="secondary"
                textColor="#000000"
                iconPosition="left"
                icon={<FcGoogle />}
                height="100%"
                width="100%"
              />
            </div>
            <div
              className={styles.container_content_form_cont_social_logins_btn}
            >
              <CustomButton
                text="Sign up with Facebook"
                color="secondary"
                iconPosition="left"
                textColor="#000000"
                icon={<FaFacebook color="#1877F2" />}
                height="100%"
                width="100%"
              />
            </div>
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
                  placeholder="Name"
                  label="Full Name"
                  height="100%"
                  width="100%"
                />
              </div>
              <div className={styles.container_content_form_cont_top_input}>
                <CustomInput
                  type="text"
                  placeholder="Email"
                  label="Email"
                  height="100%"
                  width="100%"
                />
              </div>
              <div className={styles.container_content_form_cont_top_input}>
                <CustomInput
                  type="password"
                  placeholder="************"
                  label="Password"
                  height="100%"
                  width="100%"
                />
              </div>
              <div className={styles.container_content_form_cont_top_input}>
                <CustomInput
                  type="password"
                  placeholder="************"
                  label="Confirm Password"
                  height="100%"
                  width="100%"
                />
              </div>
            </div>

            <CustomButton text="Sign in" />
            <div className={styles.container_content_form_cont_extra}>
              <span className={styles.container_content_form_cont_extra_text}>
                Already have an account?
              </span>
              <Link
                to="/signin"
                className={styles.container_content_form_cont_extra_link}
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
