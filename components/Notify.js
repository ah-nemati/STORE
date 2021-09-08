import React, { useContext } from "react";

import { Loading } from "./Loading";
import { Toast } from "./Toast";
import { DataContext } from "../redux/Store";

const Notify = () => {
  const [state, dispatch] = useContext(DataContext);
  const { notify } = state;
  return (
    <>
      {notify.loading == true && <Loading />}
      {notify.err && (
        <Toast
          msg={{ msg: notify.err }}
          bg={"red"}
          svg="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          handleshow={() => dispatch({ type: "NOTIFY", payload: {} })}
        />
      )}
      {notify.success && (
        <Toast
          msg={{ msg: notify.success }}
          bg={"green"}
          svg="M5 13l4 4L19 7"
          handleshow={() => dispatch({ type: "NOTIFY", payload: {} })}
        />
      )}
    </>
  );
};

export default Notify;
