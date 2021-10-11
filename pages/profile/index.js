import React, { useContext } from "react";
import Head from "next/head";
import { DataContext } from "../../redux/Store";
import { Svg } from "../../components/Svg";
import { Input } from "../../components/Input";
import { Href } from "../../components/Href";
import { ProfSidbar } from "../../components/ProfSidbar";

const Profile = () => {
  const [state, dispatch] = useContext(DataContext);
  const { auth } = state;
  if (!auth.user) return null;
  return (
    <div className="min-h-screen">
      <Head>
        <title>Profile</title>
      </Head>
      <div className="grid md:grid-cols-4 md:gap-2 mt-20">
        <ProfSidbar />
        <div className="text-center flex-1 justify-self-center">
          <span className="text-2xl text-yellow-600 font-bold">پروفایل</span>
          <img src={auth.user.avatar} className="w-36 h-36 mt-6" />
        </div>
        <div className="col-span-2 grid grid-rows-5 mt-12">
          <div className="grid grid-rows-3">
            <label htmlFor="name" className="font-bold text-lg">
              name
            </label>
            <h5 className="mt-4">{auth.user.name}</h5>
            <hr id="name" />
          </div>
          <div className="grid grid-rows-3">
            <label htmlFor="email" className="font-bold text-lg">
              email
            </label>
            <h5 className="mt-4">{auth.user.email}</h5>
            <hr id="email" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
