import { Link } from "react-router-dom";
// icons
import Logo from "../../../public/assets/logo.png";
import LogoMobile from "../../../public/assets/LogoMobile.svg";
import Flag from "../../../public/assets/Flag.png";

function Navbar() {
  return (
    <div className="red">
      <div className="navbar align-elements">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-0">
              <img src={LogoMobile} alt="MobileVersionLogo"/>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="">Biz haqimizda</a>
                <ul className="p-2">
                  <li>
                    <a className="">Submenu 1</a>
                  </li>
                  <li>
                    <a className="">Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="">O‘qituvchilarimiz</a>
              </li>
              <li>
                <a className="">Kurslarimiz</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="">Kitoblarimiz</a>
              </li>
              <li>
                <a className="">faq</a>
              </li>
              <li>
                <a className="">Kontakt</a>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="cursor-pointer text-xl hidden lg:flex">
            <img className="w-44" src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            <li>
              <details>
                <summary className="uppercase text-lg text-white">
                  Biz haqimizda
                </summary>
                <ul className="p-2">
                  <li>
                    <a className="uppercase">Submenu 1</a>
                  </li>
                  <li>
                    <a className="uppercase">Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="uppercase text-lg text-white">O‘qituvchilarimiz</a>
            </li>
            <li>
              <details>
                <summary className="uppercase text-lg text-white">
                  Kurslarimiz
                </summary>
                <ul className="p-2">
                  <li>
                    <a className="uppercase">Submenu 1</a>
                  </li>
                  <li>
                    <a className="uppercase">Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a className="uppercase text-lg text-white">Kitoblarimiz</a>
            </li>
            <li>
              <a className="uppercase text-lg text-white">faq</a>
            </li>
            <li>
              <a className="uppercase text-lg text-white">Kontakt</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex xl:gap-10 gap-4">
          <a className="w-8 xl:w-11">
            <img src={Flag} alt="Bayroq" />
          </a>

          <a className="btn color_red w-24 text-lg xl:w-40 xl:h-11 xl:text-xl font-medium">
            Kirish
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
