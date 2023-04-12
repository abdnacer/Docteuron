import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const baseURL = "http://localhost:8080/api/auth";

const ResetPassword = () => {
  const [inputRestPassword, setInputRestPassword] = useState({
    lastPassword: "",
    nouveauPassword: "",
    confirmPassword: "",
  });

  const onChangeResetPassword = (e) => {
    const valeur = e.target.value;
    setInputRestPassword({ ...inputRestPassword, [e.target.name]: valeur });
  };

  const changePassword = async () => {
    await axios
      .post(`${baseURL}/reset-password`, {
        lastPassword: inputRestPassword.lastPassword,
        nouveauPassword: inputRestPassword.nouveauPassword,
        confirmPassword: inputRestPassword.confirmPassword,
      })
      .then((res) => {
        if (res.data === "Password Updated") {
          toast.warn(res.data);
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        } else {
          toast.warn(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="duration-300 p-3 px-5 font-bold text-3xl flex justify-between">
        <h1>Reset Password</h1>
      </div>
      <form className={`duration-300 p-4 pt-9`}>
        <div className="relative z-0 mb-6 w-full group">
          <Input
            type="password"
            name="lastPassword"
            id="lastPassword"
            onChange={onChangeResetPassword}
            class="block py-2.5 px-0 w-full text-sm text-[#333] bg-transparent border-0 border-b-2 border-[#02b3b9] appearance-none dark:text-black dark:border-[#02b3b9] focus:outline-none"
            placeholder="Last Password"
            required
          />
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <Input
            type="password"
            name="nouveauPassword"
            id="nouveauPassword"
            onChange={onChangeResetPassword}
            class="block py-2.5 px-0 w-full text-sm text-[#333] bg-transparent border-0 border-b-2 border-[#02b3b9] appearance-none dark:text-black dark:border-[#02b3b9] focus:outline-none"
            placeholder="Nouveau Password"
            required
          />
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={onChangeResetPassword}
            class="block py-2.5 px-0 w-full text-sm text-[#333] bg-transparent border-0 border-b-2 border-[#02b3b9] appearance-none dark:text-black dark:border-[#02b3b9] focus:outline-none"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="flex w-full">
          <Button
            type="button"
            onclick={changePassword}
            class="mt-5 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-11 py-2.5 text-center"
            style={{ background: "#02b3b9" }}
            btn="Update"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
