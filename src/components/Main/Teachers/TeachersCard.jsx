// styles
import { memo } from "react";
import styles from "./Teachers.module.css";

function TeachersCard({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgContent}>
        <img src={item.img} alt="Image 1" className={styles.img} />
      </div>
      <h1 className={styles.titleTeacher}>{item.teacher}</h1>
      <div className={styles.info}>
        <p>
          Experience: <b>{item.Experience}</b>{" "}
        </p>
        {item.IELTS ? (
          <p>
            IELTS: <b>{item.IELTS}</b>
          </p>
        ) : (
          ""
        )}
        <p className={styles.position}>
          Position: <b>{item.position}</b>
        </p>
      </div>
    </div>
  );
}

export default memo(TeachersCard);
