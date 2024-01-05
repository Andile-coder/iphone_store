import React from "react";
import styles from "./customButton.module.scss";
interface Props {
  text: string;
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
}

const CustomButton: React.FC<Props> = (props) => {
  return (
    <button
      className={styles.button}
      style={{
        width: props.width,
        height: props.height,

        cursor: "pointer",
        color: props.className != "active" ? "var(--Red-900, #BE0002)" : "",
        border:
          props.className != "active"
            ? "2px solid var(--Red-900, #BE0002)"
            : "",
        backgroundColor:
          props.className === "active" ? "var(--Red-900, #BE0002)" : "#fff",
      }}
    >
      <span
        style={{
          display: props.iconOnly ? "none" : "block",
          marginRight: props.icon ? "10px" : "",
        }}
      >
        {props.text}
      </span>
      {props.icon}
    </button>
  );
};

export default CustomButton;
