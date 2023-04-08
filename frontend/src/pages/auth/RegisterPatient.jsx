import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/logo2.png";
import LoginImage from "../../assets/login.jpg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "react-toastify/dist/ReactToastify.css";

const RegisterPatient = () => {
  const InputLogin = [
    { type: "email", name: "email", id: "email", placeholder: "Email" },
    {
      type: "password",
      name: "password",
      id: "password",
      placeholder: "Password",
    },
  ];
  return (
    <div>
      <div
        className="h-screen flex"
        style={{ background: "#eee", width: "100%" }}
      >
        <div className="img_ops" style={{ width: "50%" }}>
          <img
            className="h-full w-full "
            id="imgLogin"
            src={LoginImage}
            alt="Image_Login"
          />
        </div>
        <div className="flex flex-col justify-center" style={{ width: "50%" }}>
          <div className="h-56 flex justify-center">
            <img src={LogoImage} className="w-56" alt="Logo_Image" />
          </div>

          <div className="h-58 px-24 flex flex-col justify-center ">
            <form>
              {InputLogin.map((inputChild, index) => (
                <div key={index} class="relative z-0 w-full mb-6 group">
                  <Input
                    type={inputChild.type}
                    name={inputChild.name}
                    id={inputChild.id}
                    class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder={inputChild.placeholder}
                  />
                </div>
              ))}
              <div className="flex justify-center w-full">
                <Button
                  type="submit"
                  class="mt-5 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-11 py-2.5 text-center"
                  style={{ background: "#02b3b9" }}
                  btn="Login"
                />
              </div>
              <div class="flex items-center justify-around mt-2">
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-[#02b3b9] hover:underline dark:text-[#02b3b9]"
                >
                  Forgot password?
                </Link>
              </div>
              <p class="text-sm font-semibold text-center mt-5 text-black dark:text-black">
                Don’t have an account yet?{" "}
                <Link
                  to="register"
                  class="font-medium text-primary-600 hover:underline dark:text-[#02b3b9]"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPatient;
