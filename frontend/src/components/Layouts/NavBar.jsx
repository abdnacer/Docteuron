import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Profil from "../../assets/profil.png";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const selectState = useSelector((state) => state.auth.isLogged);

  return (
    <div>
      <div className={`text-2xl font-semibold flex-1 h-screen`}>
        <nav className="bg-[#02b3b9] px-2 sm:px-4 py-2.5  ">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link to="#" className="flex items-center">
              <img
                src={Logo}
                className="h-9 mr-3 sm:h-12"
                alt="Creative Logo"
              />
            </Link>

            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent  md:dark:bg-transparent dark:border-gray-700">
                {selectState ? (
                  <li>
                    <Link
                      to="#"
                      className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 dark:text-white "
                      aria-current="page"
                    >
                      Logout
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      to="#"
                      className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 dark:text-white "
                      aria-current="page"
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
