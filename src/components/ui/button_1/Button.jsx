// memo
import { memo } from "react";

// styles
import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

function Button({ title, variant = "primary", onClick, type }) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      style={{ background: "rgba(236, 0, 0, 1)", color: "white" }}
    >
      {title}
    </button>
  );
}

export default memo(Button);
