import React from "react";

const Button = (props) => {
  const { title } = props;

  return (
    <button className="bg-[#202324] px-4 py-1 min-w-max mx-2 rounded-lg text-sm truncate hover:bg-[#717171]">
      {title}
    </button>
  );
};

export default Button;
