import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDeleteSweep } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RendezVousDoctor() {
  const [rendezVous, setRendezVous] = useState([]);
  const [modalEdite, setModalEdite] = useState(false);
  const [editeRendezVous, setEditeRendezVous] = useState({
    date: "",
    heure: "",
  });
  //   const today = new Date().toISOString().substr(0, 10);

  const getDataRendezVous = async () => {
    await axios
      .get("http://localhost:8080/api/user/rendez-vous")
      .then((res) => {
        setRendezVous(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRendezVous = (e) => {
    const valeur = e.target.value;
    setEditeRendezVous({ ...editeRendezVous, [e.target.name]: valeur });
  };

  const updateFormRendezVous = async () => {
    await axios
      .put(
        `http://localhost:8080/api/user/rendez-vous/${editeRendezVous._id}`,
        { date: editeRendezVous.date, heure: editeRendezVous.heure }
      )
      .then((res) => {
        toast.success(res.data);
        setModalEdite(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteRendezVous = async () => {
    await axios.delete(`http://localhost:8080/api/user/rendez-vous/${editeRendezVous._id}`)
    .then(res => {
        toast.success(res.data);
        getDataRendezVous();
    })
    .catch(err => {
        console.log(err)
    })
  }

  useEffect(() => {
    getDataRendezVous();
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
                Name Complete
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                CIN
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Phone
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Date Birthday
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Heure
              </th>
              <th scope="col" className="px-6 py-3 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {rendezVous.map((rendez, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-[#fff] dark:border-b"
              >
                <td className="px-6 py-4 text-center">
                  {rendez.idPatient.nameComplete}
                </td>
                <td className="px-6 py-4 text-center">
                  {rendez.idPatient.email}
                </td>
                <td className="px-6 py-4 text-center">{rendez.idPatient.cin}</td>
                <td className="px-6 py-4 text-center">
                  {rendez.idPatient.phone}
                </td>
                <td className="px-6 py-4 text-center">
                  {rendez.idPatient.dateBirthday}
                </td>
                <td className="px-6 py-4 text-center">{rendez.date}</td>
                <td className="px-6 py-4 text-center">{rendez.heure}</td>
                <td className="py-4 px-6 flex items-center">
                  <Link
                    className="text-[#333] text-xl mr-3"
                    onClick={() => {
                      setModalEdite(true);
                      setEditeRendezVous(rendez);
                    }}
                  >
                    <FiEdit />
                  </Link>
                  <Link className="text-[#333] text-3xl" onClick={deleteRendezVous}>
                    <MdDeleteSweep />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalEdite ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edite Rendez-Vous</h3>
                  <button
                    className="p-1 bg-transparent border-0 text-gray-300 opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none ml-8"
                    onClick={() => setModalEdite(false)}
                  >
                    <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <AiOutlineCloseCircle />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <Input
                    type="date"
                    name="date"
                    id="date"
                    value={editeRendezVous.date}
                    onChange={handleRendezVous}
                    class="block py-2.5 px-0 w-full text-sm text-[#333] bg-transparent border-0 border-b-2 border-[#02b3b9] appearance-none dark:text-black dark:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder="Date Rendez-vous"
                    // max={today}
                    required
                  />
                </div>
                <div className="relative p-6 flex-auto">
                  <Input
                    type="time"
                    name="heure"
                    id="heure"
                    value={editeRendezVous.heure}
                    onChange={handleRendezVous}
                    class="block py-2.5 px-0 w-full text-sm text-[#333] bg-transparent border-0 border-b-2 border-[#02b3b9] appearance-none dark:text-black dark:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder="Heure Rendez-vous"
                    required
                  />
                </div>
                {/*footer*/}
                <div className="flex justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <Button
                    type="button"
                    class="text-[#333] hover:text-white border border-[#333] hover:bg-[#333] focus:outline-none font-medium rounded-lg w-full text-sm px-2 py-2.5 text-center mr-2 mb-2 dark:border-[#333] dark:text-[#333] dark:hover:text-white dark:hover:bg-[#333]"
                    onclick={() => setModalEdite(false)}
                    btn="Close"
                  />
                  <Button
                    type="button"
                    onclick={updateFormRendezVous}
                    class="text-[#fff] bg-[#02b3b9] focus:outline-none font-medium rounded-lg w-full text-sm px-2.5 text-center mr-2 mb-2 dark:text-white dark:hover:text-white dark:hover:bg-[#02b3b9]"
                    btn="Save Changes"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <ToastContainer />
    </div>
  );
}

export default RendezVousDoctor;
