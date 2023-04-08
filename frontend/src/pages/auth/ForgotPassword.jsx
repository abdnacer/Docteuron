import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo2.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
// import axios from "axios";

const ForgotPassword = () => {
  return (
    <div>
      <section class="bg-white dark:bg-white">
        <div class="flex flex-col items-center justify-center px-4 py-8 mx-auto md:h-screen lg:py-0">
          <Link to="/">
            <img class="w-56 h-56 mr-2" src={LogoImg} alt="logo" />
          </Link>
          <div class="w-full bg-white rounded-lg  shadow-xl md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#F8F8F8] dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-[#333] md:text-2xl dark:text-[#333]">
                Forgot Password
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-[#333] dark:text-[#333]"
                  >
                    E-mail
                  </label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder="Email"
                  />
                </div>
                <div className="flex justify-center w-full">
                  <Button
                    type="submit"
                    class="mt-5 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-11 py-2.5 text-center"
                    style={{ background: "#02b3b9" }}
                    btn="Send"
                  />
                </div>
                <p class="text-sm font-light text-[#333] dark:text-[#333]">
                  Go to back?{" "}
                  <Link
                    to="/"
                    class="font-medium text-[#02b3b9] hover:underline dark:text-[#02b3b9]"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
