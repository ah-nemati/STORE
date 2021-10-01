import React, { useContext } from "react";
import Head from "next/head";
import { DataContext } from "../redux/Store";
import { Svg } from "../components/Svg";
import { Input } from "../components/Input";

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
        <div className="bg-purple-600 rounded-md">
          <div className="grid grid-rows-4 gap-12  mx-6 my-24 text-xl text-white">
            <div className="flex">
              <Svg
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879
               1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <span className="mx-1">پروفایل</span>
            </div>
            <div className="flex">
              <Svg
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4
                0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6
                 0v-1m6 0H9"
              />
              <span className="mx-1">نوتیفیکیشن</span>
            </div>
            <div className="flex">
              <Svg
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0
                 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
              <span className="mx-1">اطلاعات صورتحساب</span>
            </div>
            <div className="flex">
              <Svg d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <span className="mx-1">تنظیمات</span>
            </div>
          </div>
        </div>
        <div className="text-center flex-1 justify-self-center">
          <span className="text-2xl text-yellow-600 font-bold">
            تنظیمات پروفایل
          </span>
          <img src={auth.user.avatar} className="w-36 h-36 mt-6" />
          <button className="mt-4">edit picture</button>
        </div>
        <div className="col-span-2 grid grid-rows-5 mt-8">
          <Input
            type="text"
            placeholder="name"
            name="name"
            value=""
            onChange={""}
          />
          <Input
            type="text"
            placeholder="email"
            name="email"
            value=""
            onChange={""}
          />
          <Input
            type="text"
            placeholder="password"
            name="password"
            value=""
            onChange={""}
          />
          <Input
            type="text"
            placeholder="cf_psssword"
            name="cf_password"
            value=""
            onChange={""}
          />
          <div className="flex-2 text-center mt-10">
            <button className="bg-purple-600 rounded-md px-28 py-3">
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
export default Profile;
