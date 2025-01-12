import { memo } from "react";

import True from "../../../../public/assets/image.png";
import styles from "./Course.module.css";

import { useNavigate } from "react-router-dom";

function CourseCard({
  title,
  img,
  courseTimeBold,
  courseTime,
  teacherBold,
  teacher,
  spanTitleBold,
  spanTitle,
  spanParagrfBold,
  spanParagrf,
  cabinetBold,
  cabinet,
}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/register");
  };
  
  return (
    <div className={styles.card}>
      <div className={styles["card-header"]}>
        <img src={img} alt="Course Icon" />
        <h2 className="text-xl">{title}</h2>
      </div>
      <div className={styles["card-content"]}>
        <img src={True} alt="icon" />
        <p>
          <b>{courseTimeBold}</b>
          {courseTime}
        </p>
      </div>
      <div className={styles["card-content"]}>
        <img src={True} alt="icon" />
        <p>
          <b>{teacherBold}</b>
          {teacher}
        </p>
      </div>
      <div className={styles["card-content"]}>
        <img src={True} alt="icon" />
        <p>
          <b>{spanTitleBold}</b>
          {spanTitle}
        </p>
      </div>
      <div className={styles["card-content"]}>
        <img src={True} alt="icon" />
        <p>
          <b> {spanParagrfBold}</b>
          {spanParagrf}
        </p>
      </div>
      <div className={styles["card-content"]}>
        <img src={True} alt="icon" />
        <p>
          <b>{cabinetBold}</b>
          {cabinet}
        </p>
      </div>
      <div style={{ marginTop: "auto", textAlign: "center" }}>
        <button
          className="btn butto w-full md:max-w-full py-2 px-4"
          style={{ background: "rgba(236, 0, 0, 1)", color: "white" }}
        >
          Birinchi darsga yozilish
        </button>
      </div>
    </div>
  );
}

export default memo(CourseCard);
