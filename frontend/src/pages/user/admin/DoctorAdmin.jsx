import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import axios from "axios";
import Button from "../../../components/Button";

const DoctorAdmin = () => {
  const [dataDoctor, setDataDoctor] = useState([]);

  const getDataDoctor = async () => {
    await axios
      .get("http://localhost:8080/api/user/doctor")
      .then((res) => {
        console.log(res.data)
        setDataDoctor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const BannerDoctorUser = async (id) => {
    await axios
      .put(`http://localhost:8080/api/user/banner/${id}`)
      .then(() => {
        getDataDoctor();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataDoctor();
  }, []);

  return (
    <div>
      <div
        className={`duration-300 p-3 px-5 font-bold text-3xl flex justify-between`}
      >
        <div>
          <h1>List of doctors</h1>
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
              <th scope="col" className="px-6 py-3">
                INPE
              </th>
              <th scope="col" className="px-6 py-3">
                Résidence
              </th>
              <th scope="col" className="px-6 py-3">
                Cabinet
              </th>
              <th scope="col" className="px-6 py-3">
                Speciality
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {dataDoctor.map((doctor, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-[#fff] dark:border-b"
              >
                <td className="px-6 py-4">{doctor?.nameComplete}</td>
                <td className="px-6 py-4">{doctor?.phone}</td>
                <td className="px-6 py-4">{doctor?.email}</td>
                <td className="px-6 py-4">{doctor?.cin}</td>
                <td className="px-6 py-4">{doctor?.INPE}</td>
                <td className="px-6 py-1">{doctor?.residence}</td>
                <td className="px-6 py-4">{doctor?.cabinetName}</td>
                <td className="px-6 py-4">{doctor?.specialty?.name}</td>
                <td className="py-4 px-6">
                  <Button
                    class={
                      doctor?.isBanned
                        ? "px-4 py-1 btn bg-red-600 text-white rounded"
                        : "px-4 py-1 rounded bg-[#02b3b9] text-white"
                    }
                    btn={doctor?.isBanned ? "bann" : "banned"}
                    onclick={() => BannerDoctorUser(doctor._id)}
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

export default DoctorAdmin;
