import React, { useState } from "react";
import styles from "./registerForm.module.scss";
import CustomInput from "../../inputs/customInput/CustomInput";
import CustomButton from "../../buttons/customButton/CustomButton";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
const RegisterForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ phone: "07123445678", role: "user" }); // [1]
  const isLogged = useSelector((state) => state.auth.isLogged);
  const navigate = useNavigate();

  // create function to handle onChange
  const handleChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // create a function to handle login

  const handleRegister = async (e) => {
    e.preventDefault();

    // check if password and confirm password match
    if (user.password !== user.confirmPassword) {
      console.log("passwords do not match");
      return;
    } else {
      const response = await dispatch(register(user));
      console.log("response status", response.status);
      response.status == 201 ? navigate("/signin") : console.log("error");
    }
  };
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
          <form onSubmit={handleRegister}>
            <div className={styles.container_content_form_cont_top}>
              <div className={styles.container_content_form_cont_top_input}>
                <CustomInput
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  label="First Name"
                  height="100%"
                  width="100%"
                  required={true}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.container_content_form_cont_top_input}>
                <CustomInput
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  label="Last Name"
                  height="100%"
                  width="100%"
                  required={true}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.container_content_form_cont_top_input}>
                <CustomInput
                  type="text"
                  name="username"
                  placeholder="Name"
                  label="Username"
                  height="100%"
                  width="100%"
                  required={true}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.container_content_form_cont_top_input}>
                <CustomInput
                  type="text"
                  placeholder="Email"
                  name="email"
                  label="Email"
                  height="100%"
                  width="100%"
                  required={true}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className={styles.container_content_form_cont_top_input}>
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="************"
                  label="Password"
                  height="100%"
                  width="100%"
                  required={true}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className={styles.container_content_form_cont_top_input}>
                <CustomInput
                  type="password"
                  name="confirmPassword"
                  placeholder="************"
                  label="Confirm Password"
                  height="100%"
                  width="100%"
                  required={true}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <CustomButton text="Sign Up" />
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
