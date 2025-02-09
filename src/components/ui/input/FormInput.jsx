import { memo } from "react";
import styles from "./FormInput.module.css";

function FormInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  name,
  error,
  touched,
}) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${styles.input} ${error && touched ? styles.error : ""}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && touched && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
}

export default memo(FormInput);
