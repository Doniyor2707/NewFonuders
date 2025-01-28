// styles
import { memo } from "react";

// styles
import styles from "./Teacher.module.css";

function TeachersCard({ img, teacher, Experience, position }) {
  return (
    <div className={`${styles.teacherCard} p-2`}>
      <div className="md:max-w-36 md:h-36 max-w-16 h-16 mx-auto overflow-hidden box_shadow_3 rounded-full red radius border-solid">
        <img src={img} alt={teacher} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col md:gap-2 gap-1 items-start montserrat_font_400">
        <h1 className="pt-2 max-w-64 text-sm font-bold md:text-4xl">
          {teacher}
        </h1>
        <p className="md:text-xl text-[8px]">
          Experience: <b>{Experience}</b>
        </p>
        <p className="max-w-60 text-[8px] md:text-xl">
          Position: <b>{position}</b>
        </p>
      </div>
    </div>
  );
}

export default memo(TeachersCard);
