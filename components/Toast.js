import { useEffect } from "react";

import { Svg } from "./Svg";

export const Toast = ({ msg, bg, svg, handleshow }) => {
  useEffect(() => {
    const time = setTimeout(() => {
      handleshow();
    },4000);
    return () => {
      clearTimeout(time);
    };
  }, [handleshow]);
  return (
    <div
      className={`flex bg-${bg}-500 w-1/5 absolute p-4 rounded-md m-2 right-0`}
      dir="rtl"
    >
      <Svg d={svg} />
      <span className="px-2">{msg.msg}</span>
      <span onClick={handleshow}>x</span>
    </div>
  );
};
