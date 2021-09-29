import React from "react";

export const Input = ({ name, value, handleuser, type }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {name}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={name}
        name={name}
        value={value}
        onChange={handleuser}
      />
    </div>
  );
};
