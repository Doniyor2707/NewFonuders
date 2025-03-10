import React from "react";
import MapComponent from "../Map/MapComponent";
import { FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";

// logo
import Logo from "/public/assets/logo.png";

function Footer() {
  return (
    <div className="red radius_footer">
      <footer className="align-elements  text-primary-content p-10">
        <h2 className="andasia md:text-7xl text-3xl md:py-12 pb-5 text-center">
          We grow together!
        </h2>
        <MapComponent />
        <div className="flex align-middle justify-between pt-5 white_color montserrat_font_400 text-xs md:text-3xl">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="flex flex-col gap-6">
            <h1>
              Biz bilan <br /> bog‘lanish:
            </h1>
            <p>+998 71 205-53-33</p>
          </div>
          <div className="flex items-start flex-col gap-6">
            <h1>Ijtimoiy tarmoqlarimiz:</h1>
            <div className="flex gap-3">
              <a href="https://t.me/founders_school_uz?fbclid=PAZXh0bgNhZW0CMTEAAaaZV0we6-ItQh9kqiJyJ64MSUm-PCRAD9GGOxbuWD0lp4O1nS-QbKZC8dU_aem_IMuCs-867C28G5FgMHBPMA">
                <FaTelegram className="w-10 h-10" />
              </a>
              <a href="https://www.instagram.com/founders_school/">
                <FaInstagram className="w-10 h-10" />
              </a>
              <a href="https://www.youtube.com/@founders_school">
                <FaYoutube className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
