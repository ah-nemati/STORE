import React from "react";
import { Href } from "./Href";
import { Svg } from "./Svg";

export const ProfSidbar = () => {
  return (
    <div className="bg-purple-600 rounded-md">
      <div className="grid grid-rows-4 gap-12  mx-6 my-24 text-xl text-white">
        <div className="flex">
          <Svg
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879
               1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <span className="mx-1">
            <Href href={"/profile"}>پروفایل</Href>
          </span>
        </div>
        <div className="flex">
          <Svg
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4
                0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6
                 0v-1m6 0H9"
          />
          <span className="mx-1">
            <Href href={"/profile/notification"}>نوتیفیکیشن</Href>
          </span>
        </div>
        <div className="flex">
          <Svg
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0
                 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
          <span className="mx-1">اطلاعات صورتحساب</span>
        </div>
        <div className="flex">
          <Svg
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2
               2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
          <span className="mx-1">
            <Href href={"/profile/edit"}>ویرایش</Href>
          </span>
        </div>
      </div>
    </div>
  );
};
