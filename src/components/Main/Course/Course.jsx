import CourseCard from "./CourseCard";

// img
import Kids from "../../../../public/assets/kids.png";
import General from "../../../../public/assets/General.png";
import IELTS1 from "../../../../public/assets/IELTS1.png";

const courseFromData = [
  {
    title: "Kids English",
    img: Kids,
    courseTimeBold: "30 soatlik darslar",
    courseTime: `(asosiy darslar: haftasiga 2 soat / 3 marta Academic support: haftasiga 2 marta / 30 min)`,
    teacherBold: "Ikkita o‘qituvchi",
    teacher: `(asosiy o‘qituvchidan tashqari Support teacher mavjud)`,
    spanTitleBold: "Free Sunday Events",
    spanTitle: `(har hafta o‘tqaziladigan tadbirlar)`,
    spanParagrfBold: "Diery",
    spanParagrf: `(uyga vazifalarni ko‘rib borish va imtihon natijalarini ko‘rib borish uchun)`,
    cabinetBold: "Shaxsiy kabinet",
    cabinet: `(ota-onalar nazorati uchun shaxsiy kabinet)`,
  },

  {
    title: "General English",
    img: General,
    courseTimeBold: "30 soatlik darslar",
    courseTime: `(asosiy darslar: haftasiga 2 soat / 3 marta Academic support: haftasiga 2 marta / 30 min)`,
    teacherBold: "Ikkita o‘qituvchi",
    teacher: `(asosiy o‘qituvchidan tashqari Support teacher mavjud)`,
    spanTitleBold: "Umumiy 6 daraja",
    spanTitle: `(Beginnerdan 
    Advancedgacha, har biri 3 oy davom etadi)`,
    spanParagrfBold: "Free Sunday Events",
    spanParagrf: `(har hafta o‘tqaziladigan tadbirlar)`,
    cabinetBold: "Shaxsiy kabinet",
    cabinet: `(ota-onalar nazorati uchun shaxsiy kabinet)`,
  },

  {
    title: "IELTS",
    img: IELTS1,
    courseTimeBold: "30 soatlik darslar",
    courseTime: `(asosiy darslar: haftasiga 2 soat / 3 marta Academic support: haftasiga 2 marta / 30 min)`,
    teacherBold: "Ikkita o‘qituvchi",
    teacher: `(asosiy o‘qituvchidan tashqari Support teacher mavjud)`,
    spanTitleBold: "Free Sunday Events",
    spanTitle: `(har hafta o‘tqaziladigan tadbirlar)`,
    spanParagrfBold: "Bepul konsultatsiya",
    spanParagrf: `(IELTS topshirishdan oldin beriladigan foydali tavsiyalar)`,
    cabinetBold: "Bepul Mock Exam",
    cabinet: `(Mock Examni bepul topshirish)`,
  },
];

function Course() {
  return (
    <div className="mb-10 flex md:flex-row flex-col gap-6">
      {courseFromData &&
        courseFromData.map((item) => <CourseCard key={item.title} {...item} />)}
    </div>
  );
}

export default Course;
