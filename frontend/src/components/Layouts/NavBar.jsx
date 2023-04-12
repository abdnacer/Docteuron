import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Logo from "../../assets/logo.png";
import Button from "../Button";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../../features/authSlice";

const NavBar = () => {
  const selectState = useSelector((state) => state.auth.isLogged);

  const dispatch = useDispatch();

  const [showRegister, setShowRegister] = useState(false);

  const Logout = () => {
    dispatch(LOGOUT());
    localStorage.clear();
  };

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
                      onClick={Logout}
                      className="block py-2 pl-3 pr-4 text-xl text-white rounded md:bg-transparent md:p-0 dark:text-white "
                      aria-current="page"
                    >
                      Logout
                    </Link>
                  </li>
                ) : (
                  <li className="flex">
                    <Link
                      to="/login"
                      className="block mr-3 py-2 pl-3 pr-4 text-xl text-white rounded md:bg-transparent  md:p-0 dark:text-white "
                      aria-current="page"
                    >
                      Login
                    </Link>
                    <Button
                      type="button"
                      onclick={() => setShowRegister(true)}
                      class="block py-2 pl-3 pr-4 text-xl text-dark rounded md:bg-transparent  md:p-0 dark:text-dark "
                      btn="Register"
                    />
                    {/* <Link
                      className="block py-2 pl-3 pr-4 text-xl text-dark rounded md:bg-transparent  md:p-0 dark:text-dark "
                      aria-current="page"
                    >
                      Register
                    </Link> */}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
      {showRegister ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Choisi Register</h3>
                  <button
                    className="p-1 bg-transparent border-0 text-gray-300 opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none ml-8"
                    onClick={() => setShowRegister(false)}
                  >
                    <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <AiOutlineCloseCircle />
                    </span>
                  </button>
                </div>
                {/*footer*/}
                <div className="flex justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <Link
                    className="text-[#333] hover:text-white border border-[#333] hover:bg-[#333] focus:outline-none font-medium rounded-lg w-full text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-[#333] dark:text-[#333] dark:hover:text-white dark:hover:bg-[#333]"
                    to="/register-patient"
                  >
                    Register-Patient
                  </Link>
                  <Link
                    className="text-[#fff] bg-[#02b3b9] hover:text-white focus:outline-none font-medium rounded-lg w-full text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:text-[#fff]"
                    to="/register-doctor"
                  >
                    Register-Doctor
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}{" "}
    </div>
  );
};

export default NavBar;
