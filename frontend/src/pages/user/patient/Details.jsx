import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoChevronBack } from "react-icons/io";
import ImgHome from "../../../assets/imgHome.jpg";
import { AiOutlineRight, AiFillAlert } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { CgPhone, CgMail } from "react-icons/cg";
import Logo from "../../../assets/logo2.png";
import Button from "../../../components/Button";
import axios from "axios";

const baseURL = "http://localhost:8080/api/user";

export default function Details() {
  const { id } = useParams();

  const detailsDataDoctor = async () => {
    await axios
      .get(`${baseURL}/details-doctor/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catc((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    detailsDataDoctor();
  }, []);

  return (
    <div>
      <div className="w-screen mt-3 px-10">
        <div className="mb-7">
          <Link
            to="/"
            className="mt-5 text-white font-medium rounded-lg bg-[#333] text-sm w-full sm:w-auto px-8 py-2.5 text-center"
          >
            Add{" "}
          </Link>
        </div>
        <img class="rounded-full w-44 h-44 object-cover mr-10" src={ImgHome} />
        <div className="flex justify-center flex-col ml-7 mt-3">
          <h5 className="flex font-bold text-4xl mb-2">Dr. Abdenacer</h5>
          <h6 className="text-xl text-[#666973]">à Casablanca</h6>
          <div className="mt-2 flex">
            <span className="text-base text-[#02b3b9] mt-1 mr-2">
              <HiLocationMarker />
            </span>
            <p className="text-base text-[#666973]">
              Rés ennaim, imm,3, 2ème étage , appt 8, bd abou bakr el kadiri ,
              sidi maarouf
            </p>
          </div>
          <ul className="list-none flex py-4 px-10 mt-9 items-center text-base text-[#02b3b9]">
            <li className="mr-1">Aceuill</li>
            <li className="mr-1">
              <AiOutlineRight />
            </li>
            <li>Profil Medcine</li>
          </ul>
        </div>
      </div>
      <div className="w-screen h-16 flex justify-center mt-8">
        <div
          className="bg-white rounded-xl shadow-2xl w-2/4 h-10 flex justify-center"
          style={{ boxShadow: "1px 2px 26px 0px rgba(132, 132, 132, 0.11)" }}
        >
          <div className="relative">
            <p className="flex items-center text-[#02b3b9] after::before after:absolute after:bottom-0 after:left-0 after:right-0 after:mx-auto after:w-36 after:h-1 after:bg-[#02b3b9]  after:border-black after:rounded-full after:transition after:duration-300">
              Présentation
            </p>
          </div>
        </div>
      </div>

      <div className="w-screen h-40 flex justify-center my-8">
        <div
          className="bg-white rounded-xl shadow-2xl w-2/4 h-36 flex justify-center"
          style={{ boxShadow: "1px 2px 26px 0px rgba(132, 132, 132, 0.11)" }}
        >
          <div className="flex flex-col">
            <div className="text-2xl p-3 font-semibold text-[#02b3b9] mb-4 text-left float-left pr-32">
              <h4>Informations de contact</h4>
              <div className="mt-2 flex">
                <span className="text-base text-[#02b3b9] mt-1 mr-2">
                  <HiLocationMarker />
                </span>
                <p className="text-base text-[#666973]">
                  Rés ennaim, imm,3, 2ème étage , appt 8, bd abou bakr el kadiri
                  , sidi maarouf
                </p>
              </div>
              <p className="fw-bolder text-base text-[#000] mt-2 ml-">
                Casablanca
              </p>
              <p className="flex items-center text-base">
                <span className="mr-2 align-middle text-[#02b3b9]">
                  <CgPhone />
                </span>{" "}
                <p className="text-black mt-2">+212-762-401-604</p>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen h-36 flex justify-center my-8">
        <div
          className="bg-white rounded-xl shadow-2xl w-2/4 h-32 flex "
          style={{ boxShadow: "1px 2px 26px 0px rgba(132, 132, 132, 0.11)" }}
        >
          <div className="flex flex-col">
            <div className="text-2xl p-6 pl-8 font-semibold text-[#02b3b9] mb-4 text-left float-left pr-32">
              <h4>Specialites</h4>
              <div className="mt-2 flex items-start">
                <p className="text-base text-[#666973]">
                  {/* Rés ennaim, imm,3, 2ème étage , appt 8, bd abou bakr el kadiri
                  , sidi maarouf */}{" "}
                  Yeux
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <Button
          type="button"
          class="my-3 text-white font-medium rounded-lg bg-[#02b3b9] text-sm w-full sm:w-auto px-8 py-2.5 text-center"
          btn="Prendre rendez-vous"
        />
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
                    {/* <li className="mb-4">Orthophoniste</li> */}
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
}
