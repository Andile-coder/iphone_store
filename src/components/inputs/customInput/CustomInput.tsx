import React from "react";
import styles from "./customInput.module.scss";
interface Props {
  text?: string;
  onClick?: () => void;
  onChange?: () => void;
  name?: string;
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
  required?: boolean;
  defaultValue?: string;
}
const CustomInput: React.FC<Props> = (props) => {
  return (
    <div
      className={styles.container}
      style={{ width: props.width, height: props.height }}
    >
      <div
        className={styles.container_content}
        style={{ width: props.width, height: props.height }}
      >
        <label htmlFor={props.name} className={styles.container_content_label}>
          {props.label}
        </label>
        <input
          required={props.required}
          name={props.name}
          className={styles.container_content_input}
          style={{ width: props.width, height: props.height }}
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          defaultValue={props.defaultValue}
        />
      </div>
    </div>
  );
};

export default CustomInput;
