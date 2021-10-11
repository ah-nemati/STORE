import { useEffect } from "react";

import { Svg } from "./Svg";

export const Toast = ({ msg, bg, svg, handleshow }) => {
  useEffect(() => {
    const time = setTimeout(() => {
      handleshow();
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  }, [handleshow]);
  return (
    <div className="fixed z-10">
      <div
        className={`flex bg-${bg}-500 md:p-6 md:text-xl p-3 text-sm rounded-md m-2`}
      >
        <Svg d={svg} />
        <span className="px-2">{msg.msg}</span>
        <span
          onClick={handleshow}
          role="button"
          className="absolute left-4 top-2"
        >
          X
        </span>
      </div>
    </div>
  );
};
