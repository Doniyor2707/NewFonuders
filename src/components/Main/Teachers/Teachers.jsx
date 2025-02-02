import { Splide, SplideSlide } from "@splidejs/react-splide";
// img
import Teacher1 from "../../../../public/assets/Teacher1.png";
import Teacher2 from "../../../../public/assets/Teacher2.png";
import Teacher3 from "../../../../public/assets/Teacher3.png";
import Teacher5 from "../../../../public/assets/Teacher5.png";
import Teacher6 from "../../../../public/assets/Teacher6.png";
import Teacher7 from "../../../../public/assets/Teacher7.png";
import Teacher8 from "../../../../public/assets/Teacher8.png";
import TeachersCard from "./TeachersCard";

const teachersData = [
  {
    img: Teacher1,
    teacher: "Iskhakova Leyla",
    Experience: "4 years+",
    position: "ESL Teacher IELTS Instructor",
  },
  {
    img: Teacher2,
    teacher: "Kambarova Omina",
    Experience: "2 years+",
    position: "ESL Teacher",
  },
  {
    img: Teacher3,
    teacher: "Yusupov Bunyodbek",
    Experience: "1 years+",
    position: "ESL Teacher",
  },
  {
    img: Teacher5,
    teacher: "Abdumalikova Parizoda",
    Experience: "7 years+",
    position: "ESL Teacher",
  },
  {
    img: Teacher6,
    teacher: "Asadova Zarrina",
    Experience: "15 years+",
    position: "ESL Teacher",
  },
  {
    img: Teacher7,
    teacher: "Karajanova Kamila",
    Experience: "2.5 years+",
    position: "ESL Teacher",
  },
  {
    img: Teacher8,
    teacher: "Abatbaeva Sarbina",
    Experience: "2.5 years+",
    position: "ESL Teacher",
  },
];

function Teachers() {
  return (
    <div>
      <Splide
        options={{
          type: "loop",
          perPage: 3,
          perMove: 1,
          focus: "center",
          height: "30rem",
          gap: "0.8rem",
          breakpoints: {
            768: {
              height: "15rem",
              type: "loop",
            },
          },
        }}
      >
        {teachersData &&
          teachersData.map((item, index) => (
            <SplideSlide key={index}>
              <TeachersCard {...item} />
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
}

export default Teachers;
