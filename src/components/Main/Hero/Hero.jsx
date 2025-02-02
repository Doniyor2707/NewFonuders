// img
import { useNavigate } from "react-router-dom";
import Image from "../../../../public/assets/Foto.png";
// styles
import styles from "./Hero.module.css";

function Hero() {
  const navigate = useNavigate();

  const hendleNavigate = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-7 items-center justify-between md:mb-32 md:mt-10">
      {/* hero text content */}
      <div className="flex flex-col gap-7 text-center md:text-left mb-9">
        <h1 className="color_red text-4xl md:text-7xl font-bold max-w-xl">
          Biz millatlarga umumiy tilda muloqot qilishiga yordam beramiz!
        </h1>
        <p className="font-medium max-w-md">
          <b>Founders School</b> shu vaqtgacha <b> 2 000+</b> o‘quvchilarni
          hayotini o‘zgartirishga o‘z hissasini qo‘shgan!
        </p>

        <button
          className="btn button max-w-full md:max-w-52 py-2 px-4"
          style={{ background: "rgba(236, 0, 0, 1)", color: "white" }}
          onClick={hendleNavigate}
        >
          Birinchi darsga yozilish
        </button>
      </div>

      {/* hero image */}
      <div className=" md:max-w-2xl relative">
        <div className={styles.imgContent}>
          <img
            src={Image}
            alt="image_main"
            className="rotate-6 max-w-xs lg:max-w-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
