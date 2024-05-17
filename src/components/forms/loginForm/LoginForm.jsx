import React from "react";
import styles from "./loginForm.module.scss";
import CustomInput from "../../inputs/customInput/CustomInput";
import CustomButton from "../../buttons/customButton/CustomButton";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { login } from "../../../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  //login
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isLogged = useSelector((state) => state.auth.isLogged);
  console.log(user);
  console.log(isLogged);
  // create a function to handle login
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login");
    const user = {
      username: "Jack1",
      email: "jack2@exmple.com",
      password: "6789",
      phone: "123456789",
      role: "user",
    };
    dispatch(login(user));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.container_content_form_cont}>
          <div className={styles.container_content_form_cont_title}>
            <span>Sign In</span>
          </div>
          <div className={styles.container_content_form_cont_social_logins}>
            <div
              className={styles.container_content_form_cont_social_logins_btn}
            >
              <CustomButton
                text="Sign in with Google"
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
                text="Sign in with Facebook"
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
          <form onSubmit={handleLogin}>
            <div className={styles.container_content_form_cont_top}>
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
            </div>
            <CustomButton text="Sign in" />
            <div className={styles.container_content_form_cont_extra}>
              <span className={styles.container_content_form_cont_extra_text}>
                Don't have an account?
              </span>
              <Link
                to="/signup"
                className={styles.container_content_form_cont_extra_link}
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
