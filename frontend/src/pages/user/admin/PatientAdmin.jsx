import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const PatientAdmin = () => {
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
            <tr className="bg-white border-b dark:bg-[#fff] dark:border-b">
              <td className="px-6 py-4">Abdenacer Sandali</td>
              <td className="px-6 py-4">+212762401604</td>
              <td className="px-6 py-4">nasseressaouira@gmail.com</td>
              <td className="px-6 py-4">SH191020</td>
              <td className="py-4 px-6 items-center">
                <button
                  className={"px-4 py-1 btn bg-[#02b3b9] text-white rounded"}
                >
                  bann
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-[#fff] dark:border-b">
              <td className="px-6 py-4">Abdellah Sandali</td>
              <td className="px-6 py-4">+212666432602</td>
              <td className="px-6 py-4">abdellah@gmail.com</td>
              <td className="px-6 py-4">H51724</td>
              <td className="py-4 px-6 items-center">
                <button
                  className={"px-4 py-1 btn bg-[#02b3b9] text-white rounded"}
                >
                  bann
                </button>
              </td>
            </tr>
            <tr className="bg-white dark:bg-[#fff]">
              <td className="px-6 py-4">Amin Rochd</td>
              <td className="px-6 py-4">+212670576716</td>
              <td className="px-6 py-4">aminaRochd@gmail.com</td>
              <td className="px-6 py-4">N12765</td>
              <td className="py-4 px-6 items-center">
                <button
                  className={"px-4 py-1 btn bg-[#02b3b9] text-white rounded"}
                >
                  bann
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientAdmin;
