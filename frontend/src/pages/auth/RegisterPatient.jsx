import React, { useState } from "react";
import { Link } from "react-router-dom";
import PatientImg from "../../assets/patientImg.jpg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const baseURL = "http://localhost:8080/api/auth";

const RegisterPatient = () => {
  const [inputRegisterPaient, setInputRegisterPaient] = useState({
    nameComplete: "",
    phone: "",
    dateBirthday: "",
    city: "",
    cin: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const InputRegister = [
    {
      type: "text",
      name: "nameComplete",
      id: "nameComplete",
      placeholder: " ",
      label: "Name Complete",
    },
    {
      type: "text",
      name: "phone",
      id: "phone",
      placeholder: " ",
      label: "Phone",
      gap: true,
    },
    {
      type: "date",
      name: "dateBirthday",
      id: "dateBirthday",
      placeholder: " ",
      label: "Date Birthday",
      gap: true,
    },
    {
      type: "text",
      name: "city",
      id: "city",
      placeholder: " ",
      label: "City",
    },
    {
      type: "text",
      name: "cin",
      id: "cin",
      placeholder: " ",
      label: "CIN",
    },
    {
      type: "text",
      name: "address",
      id: "address",
      placeholder: " ",
      label: "Address",
    },
    {
      type: "email",
      name: "email",
      id: "email",
      placeholder: " ",
      label: "E-mail",
    },
  ];

  const onChangeRegisterPatient = (e) => {
    const valeur = e.target.value;
    setInputRegisterPaient({ ...inputRegisterPaient, [e.target.name]: valeur });
  };

  const RegisterDataPatient = async () => {
    await axios
      .post(`${baseURL}/register-patient`, {
        nameComplete: inputRegisterPaient.nameComplete,
        phone: inputRegisterPaient.phone,
        dateBirthday: inputRegisterPaient.dateBirthday,
        city: inputRegisterPaient.city,
        cin: inputRegisterPaient.cin,
        address: inputRegisterPaient.address,
        email: inputRegisterPaient.email,
        password: inputRegisterPaient.password,
        confirmPassword: inputRegisterPaient.confirmPassword,
      })
      .then((res) => {
        toast.warn(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div
        className="h-screen flex"
        style={{ background: "#eee", width: "100%" }}
      >
        <div className="flex flex-col justify-center" style={{ width: "50%" }}>
          <div className="h-58 px-24 flex flex-col justify-center ">
            <form>
              <h1 class="text-xl text-center mb-5 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-[#333]">
                Register Patient
              </h1>
              {InputRegister.map((inputChild, index) => (
                <div key={index} class="relative z-0 w-full mb-6 group">
                  <div class="relative z-0 w-full mb-6 group">
                    <Input
                      type={inputChild.type}
                      name={inputChild.name}
                      id={inputChild.id}
                      onChange={onChangeRegisterPatient}
                      class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                      placeholder={inputChild.placeholder}
                      required
                    />
                    <label
                      for="floating_email"
                      class="peer-focus:font-medium absolute mb-3 text-gray-500 text-base dark:text-[#02b3b9] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#02b3b9] peer-focus:dark:text-[#02b3b9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      {inputChild.label}
                    </label>
                  </div>
                </div>
              ))}
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    onChange={onChangeRegisterPatient}
                    class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="password"
                    class="peer-focus:font-medium absolute mb-3 text-gray-500 text-base dark:text-[#02b3b9] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#02b3b9] peer-focus:dark:text-[#02b3b9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <Input
                    type="password"
                    name="confirmPassword"
                    id="password"
                    onChange={onChangeRegisterPatient}
                    class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="password"
                    class="peer-focus:font-medium absolute mb-3 text-gray-500 text-base dark:text-[#02b3b9] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#02b3b9] peer-focus:dark:text-[#02b3b9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Confirm Password
                  </label>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <Button
                  type="button"
                  class="mt-5 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-11 py-2.5 text-center"
                  style={{ background: "#02b3b9" }}
                  onclick={RegisterDataPatient}
                  btn="Register"
                />
              </div>
              <p class="text-sm font-semibold text-center mt-5 text-black dark:text-black">
                You have an account{" "}
                <Link
                  to="/login"
                  class="font-medium text-primary-600 hover:underline dark:text-[#02b3b9]"
                >
                  login
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="img_ops" style={{ width: "50%" }}>
          <img
            className="h-full w-full "
            id="imgLogin"
            src={PatientImg}
            alt="Image_Login"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterPatient;
