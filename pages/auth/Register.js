import React from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

import { useState, useContext } from "react";
import { Input } from "../../components/Input";
import valid from "../../utils/valid";
import { DataContext } from "../../redux/Store";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    cf_password: "",
  };
  const [userdata, setUserdata] = useState(initialState);
  const { name, email, password, cf_password } = userdata;

  const [state, dispatch] = useContext(DataContext);

  const handleUser = (e) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const errmsg = valid(name, email, password, cf_password);
    if (errmsg) {
      return dispatch({
        type: "NOTIFY",
        payload: { err: errmsg },
      });
    }
    dispatch({ type: "NOTIFY", payload: { loding: true } });

    const res = await axios
      .post(`/api/auth/register`, userdata)
      .then((res) => {
        if (res.data.err) {
          return dispatch({ type: "NOTIFY", payload: { err: res.data.err } });
        }
        return dispatch({ type: "NOTIFY", payload: { success: res.data.msg } });
      });
  };

  return (
    <div>
      <div
        className="flex justify-center items-center bg-gray-50"
        style={{ height: "100vh" }}
      >
        <Head>
          <title>Register</title>
        </Head>
        <div className="w-full max-w-xs">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handlesubmit}
            method="POST"
          >
            <Input
              name={"name"}
              value={name}
              type={"text"}
              handleuser={handleUser}
            />

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

            <Input
              name={"cf_password"}
              value={cf_password}
              type={"password"}
              handleuser={handleUser}
            />

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline tracking-wider"
                type="submit"
              >
                Register
              </button>
              <Link href="/auth/Login">
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 tracking-wider">
                  I have account
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
