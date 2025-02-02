// memo
import { memo } from "react";

// styles
import styles from "./Button.module.css";

function Button({ title, variant = "primary", onClick, type = "button" }) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      type={type}
      onClick={onClick}
      style={{ background: "rgba(236, 0, 0, 1)", color: "white" }}
    >
      {title}
    </button>
  );
}

export default memo(Button);
