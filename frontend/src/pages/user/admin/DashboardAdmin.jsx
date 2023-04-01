import React from "react";

const DashboardAdmin = () => {
  return (
    <div>
      <div className={`mb-4 duration-300 flex flex-wrap justify-center`}>
        <div className={`duration-300 flex justify-center`}>
          <div class="w-64 p-6 m-4 bg-white rounded-lg shadow-md drop-shadow-2xl dark:bg-white dark:border-white">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black dark:text-black">
              Employe
            </h5>
            <p class="mb-3 font-normal text-gray-500 flex justify-end  dark:text-gray-400">
              5
            </p>
          </div>
          <div class="w-64 p-6 m-4 bg-white rounded-lg shadow-md drop-shadow-2xl dark:bg-white dark:border-white">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black dark:text-black">
              Formation
            </h5>
            <p class="mb-3 font-normal text-gray-500 flex justify-end  dark:text-gray-400">
              5
            </p>
          </div>
          <div class="w-64 p-6 m-4 bg-white rounded-lg shadow-md drop-shadow-2xl dark:bg-white dark:border-white">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black dark:text-black">
              Organisme
            </h5>
            <p class="mb-3 font-normal text-gray-500 flex justify-end  dark:text-gray-400">
              5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
