import { React, useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/logo2.png";
import LoginImage from "../../assets/login.jpg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Login() {
  const [showRegister, setShowRegister] = useState(false);

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
                  onClick={() => setShowRegister(true)}
                  class="font-medium text-primary-600 hover:underline dark:text-[#02b3b9]"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
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
}

export default Login;
