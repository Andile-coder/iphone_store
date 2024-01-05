import React from "react";
import styles from "./customInput.module.scss";
interface Props {
  text?: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "tertiary";
  iconOnly?: boolean;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  width?: string;
  height?: string;
  placeholder?: string;
  label?: string;
  type?: string;
}
const CustomInput: React.FC<Props> = (props) => {
  return (
    <div className={styles.container} style={{ width: "100%" }}>
      <div className={styles.container_content}>
        <label htmlFor="this" className={styles.container_content_label}>
          {props.label}
        </label>
        <input
          name="this"
          className={styles.container_content_input}
          style={{ width: props.width, height: props.height }}
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default CustomInput;
