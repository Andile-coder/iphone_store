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
  iconPosition?: "left" | "right";
}

const CustomButton: React.FC<Props> = (props) => {
  return (
    <button
      className={styles.button}
      onClick={props.onClick}
      style={{
        width: props.width,
        height: props.height,

        cursor: "pointer",
        color:
          props.color === "primary"
            ? "#fffff"
            : props.color === "secondary"
            ? "var(--Red-900, #BE0002)"
            : props.color === "tertiary"
            ? "var(--Red-900, #BE0002)"
            : "#fffff",
        border:
          props.color != "primary" ? "2px solid var(--Red-900, #BE0002)" : "",
        backgroundColor:
          props.color === "primary"
            ? "var(--Red-900, #BE0002)"
            : props.color === "secondary"
            ? "#fff"
            : props.color === "tertiary"
            ? "var(--Red-900, #F9B3B4)"
            : "var(--Red-900, #BE0002)",
      }}
    >
      {props.icon && props.iconPosition === "left" && props.icon}
      <span
        style={{
          display: props.iconOnly ? "none" : "block",
          marginRight:
            props.icon && props.iconPosition === "right" ? "10px" : "",
          marginLeft: props.icon && props.iconPosition === "left" ? "10px" : "",
        }}
      >
        {props.text}
      </span>
      {props.icon && props.iconPosition === "right" && props.icon}
    </button>
  );
};

export default CustomButton;
