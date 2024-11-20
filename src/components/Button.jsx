import React from "react";

const Button = ({ name, children, color }) => {
  return (
    <button
      className={`bg-white px-6 py-2 text-gray-800 flex items-center gap-2 border ${
        color === "white"
          ? "hover:bg-transparent hover:transition hover:duration-300 hover:ease-in hover:text-white hover:border-white"
          : ""
      } `}
    >
      {name}
      {children}
    </button>
  );
};

export default Button;
