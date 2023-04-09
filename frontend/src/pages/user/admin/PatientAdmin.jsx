import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import axios from "axios";
import Button from "../../../components/Button";

const PatientAdmin = () => {
  const [dataPatient, setDataPatient] = useState([]);

  const getDataPatient = async () => {
    await axios
      .get("http://localhost:8080/api/user/patient")
      .then((res) => {
        setDataPatient(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const BannerPatientUser = async (id) => {
    await axios
      .put(`http://localhost:8080/api/user/banner/${id}`)
      .then(() => {
        getDataPatient();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataPatient();
  }, []);

  return (
    <div>
      <div
        className={`duration-300 p-3 px-5 font-bold text-3xl flex justify-between`}
      >
        <div>
          <h1>List Of Patient</h1>
        </div>
        <div>
          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-[#fff] sr-only dark:[#fff]"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block px-6 py-4 pl-10 w-full text-sm text-[#333] bg-[#fff] rounded-lg border shadow-lg dark:bg-[#fff] dark:placeholder-gray-300"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-[#02b3b9] font-medium rounded-lg text-sm px-4 py-2 dark:bg[#02b3b9]"
              >
                <BiSearchAlt2 />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        className={` duration-400 overflow-x-auto mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg`}
      >
        <table className="w-full text-sm text-left text-[#333] dark:text-[#333]">
          <thead className="text-xs text-[#333] uppercase bg-[#02b3b9] dark:bg-[#02b3b9] dark:text-[#333]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name Complete
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                CIN
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {dataPatient.map((patient, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-[#fff] dark:border-b"
              >
                <td className="px-6 py-4">{patient.nameComplete}</td>
                <td className="px-6 py-4">{patient.phone}</td>
                <td className="px-6 py-4">{patient.email}</td>
                <td className="px-6 py-4">{patient.cin}</td>
                <td className="py-4 px-6">
                  <Button
                    onclick={() => BannerPatientUser(patient._id)}
                    class={
                      patient.isBanned
                        ? "px-4 py-1 btn bg-red-600 text-white rounded"
                        : "px-4 py-1 rounded bg-[#02b3b9] text-white"
                    }
                    btn={patient.isBanned ? "bann" : "banned"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientAdmin;
