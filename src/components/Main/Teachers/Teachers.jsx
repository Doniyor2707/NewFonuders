import { Splide, SplideSlide } from "@splidejs/react-splide";
import Teacher1 from "../../../../public/assets/Teacher1.png";
import Teacher2 from "../../../../public/assets/Teacher2.png";
import Teacher3 from "../../../../public/assets/Teacher3.png";
import Teacher5 from "../../../../public/assets/Teacher5.png";
import Teacher6 from "../../../../public/assets/Teacher6.png";
import Teacher7 from "../../../../public/assets/Teacher7.png";
import Teacher8 from "../../../../public/assets/Teacher8.png";
import TeachersCard from "./TeachersCard";

// styles
import styles from "./Teachers.module.css";

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
    <div className={styles.teacher}>
      <Splide
        aria-label="My Favorite Images"
        options={{
          perPage: 3,
          breakpoints: {
            768: { perPage: 2 },
            480: { perPage: 3 },
          },
        }}
      >
        {teachersData.map((item, index) => (
          <SplideSlide key={index}>
            <TeachersCard item={item} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Teachers;
