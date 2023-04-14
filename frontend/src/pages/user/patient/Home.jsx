import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImgHome from "../../../assets/imgHome.jpg";
import Logo from "../../../assets/logo2.png";
import { CgPhone, CgMail } from "react-icons/cg";
import { HiLocationMarker } from "react-icons/hi";
import Button from "../../../components/Button";
import Img1 from '../../../assets/Img1.png'
import Img2 from '../../../assets/Img2.png'
import Img3 from '../../../assets/Img3.png'
import axios from "axios";

const baseURL = "http://localhost:8080/api/user";

const Home = () => {
  const [dataDoctor, setDataDoctor] = useState([]);

  const AfficherDataDoctor = async () => {
    await axios
      .get(`${baseURL}/doctor`)
      .then((res) => {
        setDataDoctor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    AfficherDataDoctor();
  }, []);

  return (
    <div>
      <div className="relative h-72 overflow-hidden rounded-lg md:h-96">
        <div className="duration-700 ease-in-out">
          <img
            src={ImgHome}
            className="absolute block w-full -screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </div>
      </div>
      <div className="mt-5 text-center">
        <h1 className="text-[#02b3b9] text-4xl">Comment ça marche ?</h1>
        <p className="text-base mt-2">C’est rapide , simple et sécurité</p>
      </div>

      <div className="flex justify-around">
        <div className="max-w-md p-6 ">
          <img
          className="mb-10"
            src={Img1}
          />
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-center text-gray-900 dark:text-black">
            Créez votre compte
          </h5>
          <p className="mb-3 font-normal text-xl mt-4 text-gray-500 dark:text-gray-400">
            En quelques clics, directement depuis notre site internet ou en
            téléchargeant notre application.
          </p>
        </div>
        <div className="max-w-md p-6">
          <img
          className="mb-7"
            src={Img2}
            alt=""
          />
          <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-black">
            Réservez votre RDV
          </h5>
          <p className="mb-3 font-normal mt-4 text-xl text-gray-500 dark:text-gray-400">
            Auprès du professionnel de santé de votre choix, en fonction de vos
            disponibilités.
          </p>
        </div>
        <div className="max-w-md p-6">
          <img
          className="mb-4"
            src={Img3}
            alt=""
          />
          <a to="#">
            <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-black">
              Effectuez votre consultation
            </h5>
          </a>
          <p className="mb-3 font-normal mt-4 text-xl text-gray-500 dark:text-gray-400">
            En cabinet , à domicile , comme vous le souhaitez !
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-[#02b3b9] text-center mt-10 text-3xl">
          Les praticiens au Maroc
        </h1>

        <div className="flex justify-center my-10  flex-wrap gap-4 m-4">
          {/* h-96 */}
          {dataDoctor.map((doctor, index) => (
            <Link to={`/details/${doctor._id}`} key={index} class="max-w-sm bg-[#f9f9fa]  p-4 rounded-lg shadow-3xl dark:bg-[#f9f9fa]">
              <div className="flex ">
                <img
                  class="rounded-full w-24 h-24 object-cover mr-10"
                  src={ImgHome}
                  alt=""
                />
                <div className="flex justify-center flex-col">
                  <h5 className="flex text-lg">Dr. {doctor.nameComplete}</h5>
                  <h6 className="text-[#02b3b9] text-base">{doctor?.specialty?.name}</h6>
                </div>
              </div>
              <div className="mt-5 flex">
                <span className="text-base text-[#02b3b9] mt-1 mr-2">
                  <HiLocationMarker />
                </span>
                <p className="text-base text-[#666973]">
                  {doctor?.address}
                </p>
              </div>
              <div className="flex justify-center w-full">
                <Button
                  type="button"
                  class="mt-5  text-white font-medium rounded-lg bg-[#02b3b9] text-sm w-full sm:w-auto px-8 py-2.5 text-center"
                  btn="Prendre rendez-vous"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <footer className="bg-white dark:bg-[##f9f9fa]">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <img src={Logo} className="h-20 mr-3" alt="FlowBite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#333]">
                  Docteuron
                </span>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-xl font-semibold text-[#02b3b9] dark:text-[#02b3b9]">
                    À propos de Odocteur
                  </h2>
                  <ul className="text-[#333] dark:text-[#333] font-medium text-sm">
                    <li className="mb-4">Qui Sommes-Nous?</li>
                    <li className="mb-4">Missions & approches</li>
                    <li className="mb-4">Besoin d'aide ?</li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-xl font-semibold text-[#02b3b9] dark:text-[#02b3b9]">
                    Trouvez votre spécialiste
                  </h2>
                  <ul className="text-[#333] dark:text-[#333] font-medium text-sm">
                    <li className="mb-4">Médecin Biologiste</li>
                    <li className="mb-4">Médecine Préventive</li>
                    <li className="mb-4">Dentiste</li>
                    <li className="mb-4">Odontologue</li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-xl font-semibold text-[#02b3b9] dark:text-[#02b3b9]">
                    Contactez-nous
                  </h2>
                  <ul className="text-[#333] dark:text-[#333] font-medium text-sm">
                    <li className="mb-4 flex items-center">
                      {" "}
                      <span className="mr-2 align-middle text-[#02b3b9]">
                        <CgPhone />
                      </span>{" "}
                      +212-762-401-604
                    </li>
                    <li className="mb-4 flex items-center">
                      <span className="mr-2 text-[#02b3b9">
                        <CgMail />
                      </span>
                      contact@docteuron.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer className="bg-[#02b3b9] shadow dark:bg-[#02b3b9]">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-[#333] sm:text-center dark:text-[#333]">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Docteuron
              </a>
              . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-[#333] dark:text-[#333] sm:mt-0">
              <li className="mr-4 md:mr-6">About</li>
              <li className="mr-4 md:mr-6">Privacy Policy</li>
              <li className="mr-4 md:mr-6">Licensing</li>
              <li className="mr-4 md:mr-6">Contact</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
