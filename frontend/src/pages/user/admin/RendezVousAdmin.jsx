import React, { useState, useEffect } from "react";
import axios from "axios";

const RendezVousAdmin = () => {
  const [getDataRender, setGetDataRender] = useState([]);

  const getRendezVousData = async () => {
    await axios
      .get("http://localhost:8080/api/user/rendez-vous-admin")
      .then((res) => {
        setGetDataRender(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRendezVousData();
  }, []);

  return (
    <div>
      <div className={`duration-300 p-3 font-bold text-3xl`}>
        <h1>List Of Appointments</h1>
      </div>

      <div
        className={` duration-400 overflow-x-auto mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg`}
      >
        <table className="w-full text-sm text-left text-[#333] dark:text-[#333]">
          <thead className="text-xs text-[#333] uppercase bg-[#02b3b9] dark:bg-[#02b3b9] dark:text-[#333]">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                INPE Doctor
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Name Patient
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Email Patient
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Heure
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Phone{" "}
                <span className="text-xs text-gray-400 lowercase ps-2">
                  (optionel*)
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {getDataRender.map((rendezVous, index) => (
              <tr key={index} className="bg-white border-b dark:bg-[#fff] dark:border-b">
                <td className="px-6 py-4 text-center">{rendezVous?.idDoctor?.INPE === null ? "---" : rendezVous?.idDoctor?.INPE}</td>
                <td className="px-6 py-4 text-center">{rendezVous.idPatient.nameComplete === null ? "---" : rendezVous.idPatient.nameComplete}</td>
                <td className="px-6 py-4 text-center">
                  {rendezVous.idPatient.email === null ? '---' : rendezVous.idPatient.email}
                </td>
                <td className="px-6 py-4 text-center">{rendezVous.date === null ? '---' : rendezVous.date}</td>
                <td className="px-6 py-4 text-center">{rendezVous.heure === null ? '---' : rendezVous.heure}</td>
                <td className="px-6 py-4 text-center">{rendezVous.phone === null ? "--" : rendezVous.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RendezVousAdmin;
