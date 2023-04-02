import React from "react";
import { Link } from "react-router-dom";
import {FiEdit} from "react-icons/fi"
import {MdDeleteSweep} from "react-icons/md"


const SpecialityAdmin = () => {
  return (
    <div>
      <div className={`duration-300 p-3 font-bold text-3xl`}>
        <h1>List of Specialties</h1>
      </div>

      <div
        className={` duration-400 overflow-x-auto mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg`}
      >
        <table className="w-full text-sm text-left text-[#333] dark:text-[#333]">
          <thead className="text-xs text-[#333] uppercase bg-[#02b3b9] dark:bg-[#02b3b9] dark:text-[#333]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name Specialités
              </th>
              <th scope="col" className="px-6 py-3">
                Approve
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-[#fff] dark:border-b">
              <td className="px-6 py-4">Yeux</td>
              <td className="py-4 px-6">
                <button
                  className={"px-4 py-1 btn bg-[#02b3b9] text-white rounded"}
                >
                  bann
                </button>
              </td>
              <td className="py-4 px-6 flex items-center">
                <Link
                  className="text-[#02b3b9] text-xl mr-3"
                >
                  <FiEdit />
                </Link>
                <Link className="text-[#02b3b9] text-3xl">
                  <MdDeleteSweep />
                </Link>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-[#fff] dark:border-b">
              <td className="px-6 py-4">Yeux</td>
              <td className="py-4 px-6">
                <button
                  className={"px-4 py-1 btn bg-[#02b3b9] text-white rounded"}
                >
                  bann
                </button>
              </td>
              <td className="py-4 px-6 flex items-center">
                <Link
                  className="text-[#02b3b9] text-xl mr-3"
                >
                  <FiEdit />
                </Link>
                <Link className="text-[#02b3b9] text-3xl">
                  <MdDeleteSweep />
                </Link>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-[#fff] dark:border-b">
              <td className="px-6 py-4">Yeux</td>
              <td className="py-4 px-6">
                <button
                  className={"px-4 py-1 btn bg-[#02b3b9] text-white rounded"}
                >
                  bann
                </button>
              </td>
              <td className="py-4 px-6 flex items-center">
                <Link
                  className="text-[#02b3b9] text-xl mr-3"
                >
                  <FiEdit />
                </Link>
                <Link className="text-[#02b3b9] text-3xl">
                  <MdDeleteSweep />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpecialityAdmin;
