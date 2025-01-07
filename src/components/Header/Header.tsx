import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const items = [
    { key: "1", label: "Home", path: "/" },
    { key: "2", label: "Horoscope", path: "/horoscope" },
    { key: "3", label: "Janam Kundli", path: "/janam-kundli" },
    { key: "4", label: "Match Making", path: "/match-making" },
    { key: "5", label: "Panchang", path: "/panchang" },
    { key: "6", label: "Shubhmuhurat Dates", path: "/shubhmuhurat-dates" },
    { key: "8", label: "Numerology Calculator", path: "/numerology-calculator" },
    { key: "9", label: "More", path: "/more" },
  ];

  return (
    <div className="header">
      <div className="p-4 md:p-6 flex justify-between items-center bg-primary-400 border-b border-primary-300">
        <div
          className="px-4 cursor-pointer text-3xl md:text-4xl font-semibold text-primary-300"
          onClick={() => navigate("/")}
        >
          Astromazik
        </div>
        <div className="flex gap-4 items-center">
          {/* pehle: ye tha p-1 uppercase texl-xl md:p-2 rounded bg-white px-2 md:px-8 */}
          <div
            onClick={() => navigate("/janam-kundli")}
            className="p-2 rounded bg-white px-6 border border-secondary-100 cursor-pointer font-bold text-base md:text-lg uppercase"
          >
            See Free Kundli
          </div>
        </div>
      </div>

      <nav className="hidden lg:flex p-6 justify-center items-center bg-primary-100 lg:text-lg xl:text-xl">
        {/* : update kiya font size aur padding */}
        {/* pehle ye tha: p-8 justify-center items-center font-semibold text-sm md:text-base */}
        <div className="flex gap-6 justify-center items-center text-center">
          {items.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              className={`hover:underline hover:text-secondary-100 ${
                location.pathname === item.path ? "underline text-secondary-100" : ""
              }`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      <nav className="lg:hidden">
        <div className="p-4 fixed top-0 right-0">
          <div
            className="cursor-pointer border bg-primary-400 p-3 rounded-full text-2xl text-primary-200"
            onClick={handleClick}
          >
            <GiHamburgerMenu />
          </div>
        </div>
        <div
          className={`fixed top-0 z-50 w-full h-screen bg-primary-300/70 ${
            sidebarVisible ? "block" : "hidden"
          }`}
        >
          <div className="bg-primary-100 h-full">
            <div className="flex justify-end p-4">
              {/* pehle ye tha: text-2xl */}
              <p onClick={handleClick} className="cursor-pointer text-3xl">
                X
              </p>
            </div>
            <div className="mx-8">
              {items.map((item) => (
                <div key={item.key} className="py-4 border-b text-lg">
                  {/* pehle ye tha: text-md py-4 px-2 border-b */}
                  <NavLink
                    to={item.path}
                    onClick={handleClick}
                    className="text-lg"
                  >
                    {item.label}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
