import React, { useState, useContext, useEffect } from "react";
import Cookie from "js-cookie";

import { Href } from "./Href";
import { Svg } from "./Svg";
import { DataContext } from "../redux/Store";
import { useRouter } from "next/router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [down, setDown] = useState(false);

  const [state, dispatch] = useContext(DataContext);
  const { auth, cart } = state;
  const router = useRouter();

  const logout = () => {
    Cookie.remove("refreshtoken", {
      path: `${process.env.BASE_URL}/api/auth/accesstoken`,
    });
    localStorage.removeItem("firstlogin");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({ type: "NOTIFY", payload: { success: "logged out!" } });
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/");
  }, [auth]);

  const profile = () => {
    return (
      <div className="px-4">
        <div className="flex">
          <img src={auth.user.avatar} alt="" className="w-9" />
          <button
            onClick={() => setDown(!down)}
            className="self-center px-2 hover:shadow-inner rounded-circle"
          >
            {auth.user.name}
          </button>
        </div>
        {down ? (
          <ul className="absolute w-28 bg-white border-2 text-center rounded-md">
            <li className="p-2 hover:bg-purple-600 hover:text-white">
              <Href href="/Profile">profile</Href>
            </li>
            <li className="p-2 hover:bg-purple-600 hover:text-white">
              <a href="#" onClick={logout}>
                logout
              </a>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    );
  };

  return (
    <nav className="top-0 bg-gray-100 rounded-md shadow-md text-purple-500">
      <div className="w-full mx-auto">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex justify-between md:justify-start items-center w-full">
            <div className="flex justify-start items-center">
              <div className="ml-3  md:hidden">
                <button
                  className="outline-none p-3 text-base"
                  onClick={() => setOpen(!open)}
                  name="menu"
                >
                  {!open ? (
                    <Svg d={"M4 6h16M4 10h16M4 14h16M4 18h16"} />
                  ) : (
                    <Svg d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  )}
                </button>
              </div>
              <Href href="/" className="">
                <img
                  className="h-7 w-7 md:m-4"
                  src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg"
                  alt="Workflow"
                  width={28}
                  height={28}
                />
              </Href>
            </div>
            <div className="md:hidden flex justify-end items-center">
              <Href href="/cart" className="ml-2">
                <Svg
                  d={
                    "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  }
                />
                <span className="absolute top-2 mr-3 h-6 w-6 text-center bg-red-500 rounded-full text-white">
                  {cart.length}
                </span>
              </Href>
              {Object.keys(auth).length === 0 ? (
                <div className="mr-3">
                  <Href href="/auth/Register" className="">
                    <div className="flex justify-start items-center">
                      <Svg
                        d={
                          "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        }
                      />
                      <h5 className="text-sm font-bold ml-2 mr-1">ورود</h5>
                    </div>
                  </Href>
                </div>
              ) : (
                profile()
              )}
            </div>
            <div className="hidden md:block mr-10">
              <ul
                className="space-y-1 md:space-y-0 flex flex-col 
    md:flex-row md:items-center justify-between"
              >
                <li className="block">
                  <Href
                    href="/"
                    className="text-gray-700 block hover:bg-purple-700 hover:text-white 
          px-3 py-2 rounded-md text-sm font-medium tracking-wide"
                  >
                    خانه
                  </Href>
                </li>
                <li className="block">
                  <Href
                    href="/blog"
                    className="text-gray-700 block hover:bg-purple-700 hover:text-white 
          px-3 py-2 rounded-md text-sm font-medium"
                  >
                    بلاگ
                  </Href>
                </li>
                <li className="block">
                  <Href
                    href="/about-us"
                    className="text-gray-700 block hover:bg-purple-700 hover:text-white 
          px-3 py-2 rounded-md text-sm font-medium"
                  >
                    درباره ما
                  </Href>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center md:ml-4">
              <Href href="/cart" className="ml-4">
                <Svg
                  d={
                    "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  }
                />
                <span className="absolute top-4 mr-3 h-6 w-6 text-center bg-red-500 rounded-full text-white">
                  {cart.length}
                </span>
              </Href>
              {Object.keys(auth).length === 0 ? (
                <div className="mr-3">
                  <Href href="/auth/Register" className="">
                    <div className="flex justify-start items-center">
                      <Svg
                        d={
                          "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        }
                      />
                      <h5 className="text-sm font-bold ml-2 px-2">ورود</h5>
                    </div>
                  </Href>
                </div>
              ) : (
                profile()
              )}
            </div>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {open ? (
        <div className="md:hidden absolute bg-white w-full z-10 shadow-lg rounded">
          <ul
            className="space-y-1 md:space-y-0 flex flex-col 
    md:flex-row md:items-center justify-between"
          >
            <li className="block">
              <Href
                href="/"
                className="text-gray-700 block hover:bg-purple-700 hover:text-white 
          px-3 py-2 rounded-md text-sm font-medium"
              >
                خانه
              </Href>
            </li>
            <li className="block">
              <Href
                href="/blogs"
                className="text-gray-700 block hover:bg-purple-700 hover:text-white 
          px-3 py-2 rounded-md text-sm font-medium"
              >
                بلاگ ها
              </Href>
            </li>
            <li className="block">
              <Href
                href="/about-us"
                className="text-gray-700 block hover:bg-purple-700 hover:text-white 
          px-3 py-2 rounded-md text-sm font-medium"
              >
                درباره ما
              </Href>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}{" "}
    </nav>
  );
};

export default Navbar;
