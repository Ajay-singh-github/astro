import { CiSearch } from "react-icons/ci";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()

  const handleClick = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const items = [
    {
      key: "1",
      label: "Home",
      path: "/",
    },
    {
      key: "2",
      label: "Horoscope",
      path: "/horoscope",
    },
    {
      key: "3",
      label: "Janam Kundli",
      path: "/janam-kundli",
    },
    {
      key: "4",
      label: "Match Making",
      path: "/match-making",
    },
    {
      key: "5",
      label: "Panchang",
      path: "/panchang",
    },
    {
      key: "6",
      label: "Shubhmuhurat Dates",
      path: "/shubhmuhurat-dates",
    },
    // {
    //   key: "7",
    //   label: "Tarot Reading",
    //   path: "/tarot-reading",
    // },
    {
      key: "8",
      label: "Numerology Calculator",
      path: "/numerology-calculator",
    },
    {
      key: "1",
      label: "MORE",
      path: "/more",
    },
  ];

  return (
    <div className="">
      <div className="p-2 md:p-4 md:px-8 flex justify-between items-center bg-primary-400 border-b border-primary-300">
        <div className="md:px-4 md:text-3xl font-semibold text-primary-300">
          LOGO
        </div>
        <div className="flex gap-3 md:gap-8 items-center w-full justify-end text-xs md:text-base">
          <div className="rounded-full p-1 md:p-2 flex items-center justify-center md:gap-2 bg-primary-200 w-[8rem] md:w-max">
            <CiSearch className="md:text-3xl opacity-50" />
            <input
              type="text"
              className="border-none outline-none md:w-full w-1/2"
              placeholder="search"
            />
            <div className="rounded-full p-1 px-2 text-primary-200 md:px-4 md:text-md bg-secondary-100 text-center cursor-pointer">
              search
            </div>
          </div>
          {/* <div className="underline cursor-pointer">Register</div> */}
          <div
            className="p-1 md:p-2 rounded-full bg-secondary-200 px-2 md:px-8 border border-secondary-100 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Register / Log In
          </div>
        </div>
      </div>
      <nav className="bg-primary-100 hidden lg:flex p-8 justify-center items-center font-semibold text-sm md:text-base">
        <div className="flex gap-4 justify-center  sm:gap-8 md:gap-10 lg:gap-6 xl:gap-8 xl:text-xl 2xl:gap-12 2xl:text-2xl text-center items-center">
          {items.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              className={`hover:underline hover:text-secondary-100 ${location.pathname === item.path
                ? "underline text-secondary-100"
                : ""
                }`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
      <nav className="lg:hidden">
        <div className="text-2xl text-primary-300 p-4 fixed right-0 items-center justify-end">
          <div
            className="cursor-pointer text-primary-200 border bg-primary-400 p-2 rounded-full text-xl"
            onClick={handleClick}
          >
            <GiHamburgerMenu />
          </div>
        </div>
        <div
          className={`fixed ${sidebarVisible ? "block" : "hidden"
            } top-0 z-50 flex justify-end h-screen w-full bg-primary-300/70`}
        >
          <div className={`text-userprimary-100 bg-primary-100 h-full`}>
            <div className="text-3xl w-full flex justify-end px-4 pt-4">
              <p onClick={handleClick} className="cursor-pointer">
                X
              </p>
            </div>
            <div className="mx-8">
              {items.map((item) => (
                <div className="text-md py-4 px-2 border-b">
                  <NavLink key={item.key} to={item.path} onClick={handleClick}>
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
