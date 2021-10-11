import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { DataContext } from "../../redux/Store";
import { Input } from "../../components/Input";
import { ProfSidbar } from "../../components/ProfSidbar";
import valid from "../../utils/valid";
import axios from "axios";

const EditProfile = () => {
  const [state, dispatch] = useContext(DataContext);

  const { auth } = state;

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    cf_password: "",
  });
  const { name, email, password, cf_password } = userData;
  useEffect(() => {
    if (auth.user)
      setUserData({
        ...userData,
        name: auth.user.name,
        email: auth.user.email,
      });
  }, [auth.user]);

  const handleUser = (e) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    const errmsg = valid(name, email, password, cf_password);
    if (errmsg)
      dispatch({
        type: "NOTIFY",
        payload: { err: errmsg },
      });
    await axios.patch("/api/user", password, { Authorization: auth.token });
  };

  if (!auth.user) return null;
  return (
    <div className="min-h-screen">
      <Head>
        <title>Profile</title>
      </Head>
      <div className="min-h-screen grid md:grid-cols-4 md:gap-2 mt-20">
        <ProfSidbar />
        <div className="text-center flex-1 justify-self-center">
          <span className="text-2xl text-yellow-600 font-bold">
            تنظیمات پروفایل
          </span>
          <img src={auth.user.avatar} className="w-36 h-36 mt-6" />
          <button className="mt-4">edit picture</button>
        </div>
        <div className="col-span-2 py-2 mt-8">
          <Input
            type="text"
            placeholder="name"
            name="name"
            value={name}
            handleuser={(e) => console.log(e)}
          />
          <Input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            handleuser={(e) => console.log(e)}
          />
          <Input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            handleuser={handleUser}
          />
          <Input
            type="password"
            placeholder="cf_psssword"
            name="cf_password"
            value={cf_password}
            handleuser={handleUser}
          />
          <div className="flex-2 text-center mt-10">
            <button
              className="bg-purple-600 rounded-md px-28 py-3"
              onClick={updatePassword}
            >
              save
            </button>
            <button className="mx-3 bg-gray-500 rounded-md px-28 py-3">
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
