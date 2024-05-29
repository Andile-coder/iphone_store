import React, { useState } from "react";
import styles from "./passwordUpdateForm.module.scss";
import CustomInput from "../../inputs/customInput/CustomInput";
import CustomTextarea from "../../inputs/customTextarea/CustomTextarea";
import CustomButton from "../../buttons/customButton/CustomButton";
import { resetPassword } from "../../.../../../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../.../../../../redux/actions/alertActions";
const PasswordUpdateForm = () => {
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_id: user.user_id,
    old_password: "",
    new_password: "",
    confirm_password: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    //check if the password and confirm password match
    if (formData.new_password !== formData.confirm_password) {
      setLoading(false);
      return dispatch(setAlert("Passwords do not match", "danger"));
    }
    const response = await dispatch(resetPassword(formData));
    setLoading(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.container_content_form_cont}>
          <form
            className={styles.container_content_form_cont_context}
            onSubmit={handleSubmit}
          >
            <div className={styles.container_content_form_cont_context_input}>
              <CustomInput
                type="password"
                placeholder=""
                name="old_password"
                width="100%"
                height="100%"
                label="Old Password"
                onChange={handleChange}
              />
            </div>

            <div className={styles.container_content_form_cont_context_input}>
              <CustomInput
                type="password"
                placeholder=""
                name="new_password"
                width="100%"
                height="100%"
                label="New Pasword"
                onChange={handleChange}
              />
            </div>

            <div className={styles.container_content_form_cont_context_input}>
              <CustomInput
                type="password"
                placeholder=""
                width="100%"
                height="100%"
                name="confirm_password"
                label="Confirm Password"
                onChange={handleChange}
              />
            </div>

            <div className={styles.container_content_form_cont_context_input}>
              <CustomButton
                text={loading ? "Loading...." : "Save"}
                className="active"
                width="100%"
                height="100%"
                disabled={loading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordUpdateForm;
