import React from "react";
import styles from "./customTextarea.module.scss";
interface Props {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "tertiary";
  iconOnly?: boolean;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  width?: string;
  rows?: number;
  placeholder?: string;
  label?: string;
  resize?: boolean;
}

const CustomTextarea: React.FC<Props> = (props) => {
  return (
    <div className={styles.container} style={{ width: "100%" }}>
      <div className={styles.container_content}>
        <label htmlFor="this" className={styles.container_content_label}>
          {props.label}
        </label>
        <textarea
          style={{
            resize: props.resize ? "vertical" : "none",
            width: props.width,
          }}
          maxLength={props.width === "100%" ? 1000 : 500}
          rows={props.rows}
          name="this"
          className={styles.container_content_textarea}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default CustomTextarea;
