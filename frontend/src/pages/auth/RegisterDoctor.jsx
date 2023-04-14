import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DoctorImg from "../../assets/doctorImg.jpg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosAddCircle } from "react-icons/io";
import { GrValidate } from "react-icons/gr";
import axios from "axios";

const baseURL = "http://localhost:8080/api/auth";
const baseURLUser = "http://localhost:8080/api/user";

const RegisterDoctor = () => {
  const [showInputSpeciality, setShowInputSpeciality] = useState(false);
  const [getDataSpeciality, setGetDataSpeciality] = useState([]);
  const [inputRegisterDoctor, setInputRegisterDoctor] = useState({
    nameComplete: "",
    phone: "",
    email: "",
    dateBirthday: "",
    city: "",
    cin: "",
    password: "",
    confirmPassword: "",
    INPE: "",
    residence: "",
    cabinetName: "",
    specialty: "",
    address: "",
    description: "",
  });
  const [inputAddSpeciality, setInputAddSpeciality] = useState({
    name: "",
  });

  const onChangeAddSpeciality = (e) => {
    const valeur = e.target.value;
    setInputAddSpeciality({ ...inputAddSpeciality, [e.target.name]: valeur });
  };

  const onChangeRegisterDoctor = (e) => {
    const valeur = e.target.value;
    setInputRegisterDoctor({ ...inputRegisterDoctor, [e.target.name]: valeur });
  };

  const RegisterDataDoctor = async () => {
    await axios
      .post(`${baseURL}/register-doctor`, {
        nameComplete: inputRegisterDoctor.nameComplete,
        phone: inputRegisterDoctor.phone,
        email: inputRegisterDoctor.email,
        dateBirthday: inputRegisterDoctor.dateBirthday,
        city: inputRegisterDoctor.city,
        cin: inputRegisterDoctor.cin,
        password: inputRegisterDoctor.password,
        confirmPassword: inputRegisterDoctor.confirmPassword,
        INPE: inputRegisterDoctor.INPE,
        residence: inputRegisterDoctor.residence,
        cabinetName: inputRegisterDoctor.cabinetName,
        specialty: inputRegisterDoctor.specialty,
        address: inputRegisterDoctor.address,
        description: inputRegisterDoctor.description,
      })
      .then((res) => {
        toast.warn(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSpeciality = async () => {
    await axios
      .get(`${baseURLUser}/specialite`)
      .then((res) => {
        setGetDataSpeciality(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNewSpeciality = async () => {
    await axios
      .post(`${baseURLUser}/specialite`, {
        name: inputAddSpeciality.name,
      })
      .then((res) => {
        toast.success(res.data);
        setShowInputSpeciality(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSpeciality();
  }, []);

  return (
    <div>
      <div
        className="h-screen flex"
        style={{ background: "#eee", width: "100%" }}
      >
        <div className="flex flex-col justify-center" style={{ width: "50%" }}>
          <div className="h-58 px-24 flex flex-col justify-center ">
            <form>
              <h1 className="text-center text-xl mb-8 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-[#333]">
                Register Doctor
              </h1>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-4 group">
                  <Input
                    type="text"
                    name="nameComplete"
                    id="nameComplete"
                    onChange={onChangeRegisterDoctor}
                    class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="nameComplete"
                    className="peer-focus:font-medium absolute mb-3 text-gray-500 text-base dark:text-[#02b3b9] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#02b3b9] peer-focus:dark:text-[#02b3b9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    NameComplete
                  </label>
                </div>
                <div className="relative z-0 w-full mb-4 group">
                  <Input
                    type="text"
                    name="phone"
                    id="phone"
                    onChange={onChangeRegisterDoctor}
                    class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="peer-focus:font-medium absolute mb-3 text-gray-500 text-base dark:text-[#02b3b9] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#02b3b9] peer-focus:dark:text-[#02b3b9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-4 group">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    onChange={onChangeRegisterDoctor}
                    class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute mb-3 text-gray-500 text-base dark:text-[#02b3b9] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#02b3b9] peer-focus:dark:text-[#02b3b9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    E-mail
                  </label>
                </div>
                <div className="relative z-0 w-full mb-4 group">
                  <Input
                    type="date"
                    name="dateBirthday"
                    id="dateBirthday"
                    onChange={onChangeRegisterDoctor}
                    class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="dateBirthday"
                    className="peer-focus:font-medium absolute mb-3 text-gray-500 text-base dark:text-[#02b3b9] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#02b3b9] peer-focus:dark:text-[#02b3b9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Date Birthday
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-4 group">
                  <Input
                    type="text"
                    name="city"
                    id="city"
                    onChange={onChangeRegisterDoctor}
                    class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="city"
                    className="peer-focus:font-medium absolute mb-3 text-gray-500 text-base dark:text-[#02b3b9] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#02b3b9] peer-focus:dark:text-[#02b3b9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    City
                  </label>
                </div>
                <div className="relative z-0 w-full mb-4 group">
                  <Input
                    type="text"
                    name="cin"
                    id="cin"
                    onChange={onChangeRegisterDoctor}
                    class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="cin"
                    className="peer-focus:font-medium absolute mb-3 text-gray-500 text-base dark:text-[#02b3b9] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#02b3b9] peer-focus:dark:text-[#02b3b9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    CIN
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    onChange={onChangeRegisterDoctor}
                    class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="password"
                    className="peer-focus:font-medium absolute mb-3 text-gray-500 text-base dark:text-[#02b3b9] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#02b3b9] peer-focus:dark:text-[#02b3b9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <Input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    onChange={onChangeRegisterDoctor}
                    class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="confirmPassword"
                    className="peer-focus:font-medium absolute mb-3 text-gray-500 text-base dark:text-[#02b3b9] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#02b3b9] peer-focus:dark:text-[#02b3b9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Confirm Password
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-4 group">
                  <Input
                    type="text"
                    name="INPE"
                    id="INPE"
                    onChange={onChangeRegisterDoctor}
                    class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="INPE"
                    className="peer-focus:font-medium absolute mb-3 text-gray-500 text-base dark:text-[#02b3b9] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#02b3b9] peer-focus:dark:text-[#02b3b9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    INPE
                  </label>
                </div>
                <div className="relative z-0 w-full mb-4 group">
                  <Input
                    type="text"
                    name="residence"
                    id="residence"
                    onChange={onChangeRegisterDoctor}
                    class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="residence"
                    className="peer-focus:font-medium absolute mb-3 text-gray-500 text-base dark:text-[#02b3b9] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#02b3b9] peer-focus:dark:text-[#02b3b9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Residence
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-4 group">
                  <Input
                    type="text"
                    name="cabinetName"
                    id="cabinetName"
                    onChange={onChangeRegisterDoctor}
                    class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="cabinetName"
                    className="peer-focus:font-medium absolute mb-3 text-gray-500 text-base dark:text-[#02b3b9] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#02b3b9] peer-focus:dark:text-[#02b3b9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Cabinet Name
                  </label>
                </div>
                <div className="flex align-middle justify-between">
                  <div className="relative z-0 w-full mb-4 group">
                    <label
                      htmlFor="specialty"
                      className="peer-focus:font-medium absolute mb-3 text-gray-500 text-base dark:text-[#02b3b9] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#02b3b9] peer-focus:dark:text-[#02b3b9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Specialty
                    </label>
                    <select
                      id="speciality"
                      name="specialty"
                      onChange={onChangeRegisterDoctor}
                      class="block py-3 px-0 w-full text-sm text-[#333] bg-transparent border-0 border-b-2 border-black appearance-none dark:text-[#333] dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    >
                      <option selected></option>
                      {getDataSpeciality.map((speciality) => (
                        <option
                          value={speciality._id}
                        >
                          {speciality.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Button
                      type="button"
                      onclick={() =>
                        setShowInputSpeciality(!showInputSpeciality)
                      }
                      class="h-6 w-6 z-6 bg-[#02b3b9] dark:bg-[#02b3b9] rounded-full flex items-center justify-center text-2xl shadow-xl cursor-pointer text-white"
                      btn={<IoIosAddCircle />}
                    />
                  </div>
                </div>
              </div>
              {showInputSpeciality ? (
                <div className="flex align-middle justify-between">
                  <div className="relative z-0 w-full mb-4 group">
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      onChange={onChangeAddSpeciality}
                      class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="specialty"
                      className="peer-focus:font-medium absolute mb-3 text-gray-500 text-base dark:text-[#02b3b9] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#02b3b9] peer-focus:dark:text-[#02b3b9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Specialty
                    </label>
                  </div>
                  <div>
                    <Button
                      type="button"
                      onclick={addNewSpeciality}
                      class="h-6 w-6 z-6 bg-[#02b3b9] dark:bg-[#02b3b9] rounded-full flex items-center justify-center text-2xl shadow-xl cursor-pointer text-white"
                      btn={<GrValidate />}
                    />
                  </div>
                </div>
              ) : null}
              <div className="relative z-0 w-full mb-6 group">
                <div className="relative z-0 w-full mb-6 group">
                  <Input
                    type="text"
                    name="address"
                    id="address"
                    onChange={onChangeRegisterDoctor}
                    class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="address"
                    className="peer-focus:font-medium absolute mb-3 text-gray-500 text-base dark:text-[#02b3b9] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#02b3b9] peer-focus:dark:text-[#02b3b9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Address
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <div className="relative z-0 w-full mb-6 group">
                  <Input
                    type="text"
                    name="description"
                    id="description"
                    onChange={onChangeRegisterDoctor}
                    class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="description"
                    className="peer-focus:font-medium absolute mb-3 text-gray-500 text-base dark:text-[#02b3b9] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#02b3b9] peer-focus:dark:text-[#02b3b9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Description
                  </label>
                </div>
              </div>

              <div className="flex justify-center w-full">
                <Button
                  type="button"
                  onclick={RegisterDataDoctor}
                  class="mt-2 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-11 py-2.5 text-center"
                  style={{ background: "#02b3b9" }}
                  btn="Register"
                />
              </div>
              <p className="text-sm font-semibold text-center mt-2 text-black dark:text-black">
                You have an account{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-[#02b3b9]"
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
            src={DoctorImg}
            alt="Image_Login"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterDoctor;
