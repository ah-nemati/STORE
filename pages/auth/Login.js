import React from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import Cookie from "js-cookie";

import { useState, useContext } from "react";
import { Input } from "../../components/Input";
import { DataContext } from "../../redux/Store";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [userdata, setUserdata] = useState(initialState);
  const { email, password } = userdata;

  const [state, dispatch] = useContext(DataContext);

  const handleUser = (e) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      if (!userdata.email || !userdata.password) { return dispatch({ type: "NOTIFY", payload: { err: "plaese fix all input" } }) }
      dispatch({ type: "NOTIFY", payload: { loding: true } });

      await axios
        .post(`/api/auth/login`, userdata)
        .then((res) => {
          if (res.data.err && !res) {
            return dispatch({ type: "NOTIFY", payload: { err: res.data.err } });
          }
          dispatch({ type: "NOTIFY", payload: { success: res.data.msg } });

          dispatch({
            type: "AUTH",
            payload: {
              token: res.data.accesstoken,
              user: res.data.users,
            },
          });
          Cookie.set("refreshtoken", res.data.refreshtoken, {
            path: `/api/auth/accesstoken`,
            expires: 7,
          });
          localStorage.setItem("firstlogin", true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        className="flex justify-center items-center bg-gray-50"
        style={{ height: "100vh" }}
      >
        <Head>
          <title>Login</title>
        </Head>
        <div className="w-full max-w-xs">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handlesubmit}
            method="POST"
          >
            <Input
              name={"email"}
              value={email}
              type={"email"}
              handleuser={handleUser}
            />

            <Input
              name={"password"}
              value={password}
              type={"password"}
              handleuser={handleUser}
            />
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline tracking-wider"
                type="submit"
              >
                login
              </button>
              <Link href="/auth/Register">
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 tracking-wider">
                  signup
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
