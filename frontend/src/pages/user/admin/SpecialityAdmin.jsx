import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDeleteSweep } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SpecialityAdmin = () => {
  const [dataSpeciality, setDataSpeciality] = useState([]);
  const [editeSpeciality, setEditeSpeciality] = useState({ name: "" });
  const [modalEdite, setModalEdite] = useState(false);

  const getDataSpeciality = async () => {
    await axios
      .get("http://localhost:8080/api/user/specialite/admin")
      .then((res) => {
        setDataSpeciality(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNameSpeciality = (e) => {
    const valeur = e.target.value;
    setEditeSpeciality({ ...editeSpeciality, [e.target.name]: valeur });
  };

  const approveSpecialite = async (e) => {
    let id = e.target.value;
    await axios
      .put(`http://localhost:8080/api/user/specialite/${id}`, { approve: true })
      .then((res) => {
        toast.success(res.data)
        getDataSpeciality();
      })
      .catch((err) => console.log(err));
  };

  const editeFormSpeciality = async () => {
    await axios
      .put(`http://localhost:8080/api/user/specialite/${editeSpeciality._id}`, {
        name: editeSpeciality.name,
      })
      .then((res) => {
        toast.success(res.data);
        getDataSpeciality()
      })
      .catch((err) => console.log(err));
  };

  const deleteSpecialite = async (id) => {
    await axios
      .delete(`http://localhost:8080/api/user/specialite/${id}`)
      .then((res) => {
        toast.success(res.data);
        getDataSpeciality()
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDataSpeciality();
  }, []);

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
            {dataSpeciality.map((speciality, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-[#fff] dark:border-b"
              >
                <td className="px-6 py-4">{speciality.name}</td>
                <td className="py-4 px-6">
                  <Button
                    class={
                      speciality.approve
                        ? "px-4 py-1 rounded bg-[#02b3b9] text-white"
                        : "px-4 py-1 btn bg-red-600 text-white rounded"
                    }
                    btn={speciality.approve ? "Approve" : "Not Approve"}
                    onclick={approveSpecialite}
                    value={speciality._id}
                  />
                </td>
                <td className="py-4 px-6 flex items-center">
                  <Link
                    className="text-[#333] text-xl mr-3"
                    onClick={() => {
                      setModalEdite(true);
                      setEditeSpeciality(speciality);
                    }}
                  >
                    <FiEdit />
                  </Link>
                  <Link
                    className="text-[#333] text-3xl"
                    onClick={() => deleteSpecialite(speciality._id)}
                  >
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
                  <h3 className="text-3xl font-semibold">Edite Speciality</h3>
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
                    type="text"
                    name="name"
                    value={editeSpeciality.name}
                    onChange={handleNameSpeciality}
                    id="name"
                    class="block py-2.5 px-0 w-full text-sm text-[#333] bg-transparent border-0 border-b-2 border-[#02b3b9] appearance-none dark:text-black dark:border-[#02b3b9] focus:outline-none focus:ring-0 focus:border-[#02b3b9] peer"
                    placeholder="Name Speciality"
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
                    onclick={editeFormSpeciality}
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
};

export default SpecialityAdmin;
