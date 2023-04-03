import React, { useState, useEffect } from "react";
import Input from "../../../components/Input";
import axios from "axios";

const SettingAdmin = () => {
  const [settingUser, setSettingUser] = useState([]);

  const getDataSetting = async () => {
    await axios
      .get("http://localhost:8080/api/user/setting")
      .then((res) => {
        setSettingUser(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataSetting()
  }, [])

  return (
    <div>
      <div className="duration-300 p-3 px-5 font-bold text-3xl flex justify-between">
        <h1>Setting</h1>
      </div>
      <form className={`duration-300 p-4 pt-9`}>
        <div class="relative z-0 mb-6 w-full group">
          <Input
            type="text"
            name="nameComplete"
            id="nameComplete"
            value={settingUser.nameComplete}
            class="block py-2.5 px-0 w-full text-sm text-[#333] bg-transparent border-0 border-b-2 border-[#02b3b9] appearance-none dark:text-black dark:border-[#02b3b9] focus:outline-none"
            placeholder="Name Complete"
            required
          />
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <Input
            type="text"
            name="phone"
            id="phone"
            value={settingUser.phone}
            class="block py-2.5 px-0 w-full text-sm text-[#333] bg-transparent border-0 border-b-2 border-[#02b3b9] appearance-none dark:text-black dark:border-[#02b3b9] focus:outline-none"
            placeholder="Phone"
            required
          />
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <Input
            type="text"
            name="cin"
            id="cin"
            value={settingUser.cin}
            class="block py-2.5 px-0 w-full text-sm text-[#333] bg-transparent border-0 border-b-2 border-[#02b3b9] appearance-none dark:text-black dark:border-[#02b3b9] focus:outline-none"
            placeholder="CIN"
            required
          />
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <Input
            type="text"
            name="email"
            id="email"
            value={settingUser.email}
            class="block py-2.5 px-0 w-full text-sm text-[#333] bg-transparent border-0 border-b-2 border-[#02b3b9] appearance-none dark:text-black dark:border-[#02b3b9] focus:outline-none"
            placeholder="Email"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default SettingAdmin;
