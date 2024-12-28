// styles
import { memo } from "react";
import styles from "./Collections.module.css";

function CollectionsList({ item }) {
  return (
    <>
      <p className={styles.num}>{item.num}</p>
      <h4 className={styles.title}>{item.title}</h4>
    </>
  );
}

export default memo(CollectionsList);
