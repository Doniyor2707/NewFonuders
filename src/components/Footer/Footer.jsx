import React from "react";
import MapComponent from "../Map/MapComponent";
import { FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";

// logo
import Logo from "/public/assets/logo.png";

function Footer() {
  return (
    <div className="red radius_footer bg-red-600 p-5 md:p-10 rounded-t-3xl">
      <footer className="align-elements text-white text-center md:text-left">
        <h2 className="andasia text-center text-3xl md:text-5xl lg:text-7xl md:py-10 md:pb-14 py-5">
          We grow together!
        </h2>

        {/* Xarita */}
        <div className="w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">
          <MapComponent />
        </div>

        {/* Bo'limlar */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6 mt-8 text-sm md:text-xl">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="Logo" className="w-24 md:w-32" />
          </div>

          {/* Bog‘lanish */}
          <div className="text-center md:text-left">
            <h1 className="font-bold">Biz bilan bog‘lanish:</h1>
            <p className="mt-2">+998 71 205-53-33</p>
          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div className="text-center md:text-left">
            <h1 className="font-bold">Ijtimoiy tarmoqlarimiz:</h1>
            <div className="flex justify-center md:justify-start gap-4 mt-3">
              <a
                href="https://t.me/founders_school_uz"
                className="text-white hover:text-gray-300"
              >
                <FaTelegram className="w-6 h-6 md:w-10 md:h-10" />
              </a>
              <a
                href="https://www.instagram.com/founders_school/"
                className="text-white hover:text-gray-300"
              >
                <FaInstagram className="w-6 h-6 md:w-10 md:h-10" />
              </a>
              <a
                href="https://www.youtube.com/@founders_school"
                className="text-white hover:text-gray-300"
              >
                <FaYoutube className="w-6 h-6 md:w-10 md:h-10" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
