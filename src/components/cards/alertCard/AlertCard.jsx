import React from "react";
import styles from "./alertCard.module.scss";
import { MdCancel } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { MdErrorOutline } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { removeAlert } from "../../../../redux/actions/alertActions";
const AlertCard = () => {
  const showAlert = useSelector((state) => state.alert.showAlert);
  const alertMessage = useSelector((state) => state.alert.message);
  const alertType = useSelector((state) => state.alert.type);
  const dispatch = useDispatch();
  const removeAlertHandler = () => {
    dispatch(removeAlert());
  };
  return (
    <div style={{ display: showAlert ? "block" : "none" }}>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <div className={styles.container_content_alert_message}>
            <div className={styles.container_content_alert_message_icon}>
              {alertType === "success" ? <TiTickOutline /> : <MdErrorOutline />}
            </div>
            <div>
              <span>{alertMessage}</span>
            </div>
          </div>
          <div>
            <MdCancel
              color="#be0002"
              cursor="pointer"
              onClick={removeAlertHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
