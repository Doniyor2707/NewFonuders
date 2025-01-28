import { memo } from "react";

import True from "../../../../public/assets/image.png";


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
  return (
    <div className="card flex flex-col gap-7 radius border-3 w-full md:rounded-xl rounded-[28px] px-5 py-4 md:px-6 md:py-10 shadows ">
      <div className="flex gap-4 items-center"> 
        <img src={img} alt="Image" className="rounded-full md:w-24 w-[87px]  radius" />
        <h2 className="montserrat_font_700 text-4xl">{title}</h2>
      </div>

      <div className="flex flex-col gap-4 md:gap-3 text-[16px] md:text-xl">
        <div className="flex items-start gap-3">
          <img src={True} alt="" className="w-7 md:w-12" />
          <p className="montserrat_font_400">
            <b>{courseTimeBold}</b>
            {courseTime}
          </p>
        </div>

        <div className="flex items-start gap-3">
          <img src={True} alt="" className="w-7 md:w-12"/>
          <p className="montserrat_font_400">
            <b>{teacherBold}</b>
            {teacher}
          </p>
        </div>

        <div className="flex items-start gap-3">
          <img src={True} alt="" className="w-7 md:w-12"/>
          <p className="montserrat_font_400">
            <b>{spanTitleBold}</b>
            {spanTitle}
          </p>
        </div>

        <div className="flex items-start gap-3">
          <img src={True} alt="" className="w-7 md:w-12"/>
          <p className="montserrat_font_400">
            <b>{spanParagrfBold}</b>
            {spanParagrf}
          </p>
        </div>

        <div className="flex items-start gap-3">
          <img src={True} alt="" className="w-7 md:w-12"/>
          <p className="montserrat_font_400">
            <b>{cabinetBold}</b>
            {cabinet}
          </p>
        </div>
      </div>

      <button className="btn red text-white max-w-96 montserrat_font_500 text-[16px] md:text-xl">Birinchi darsga yozilish</button>
    </div>
  );
}

export default memo(CourseCard);
