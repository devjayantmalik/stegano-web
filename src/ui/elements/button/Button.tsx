import clsx from "clsx";
import React from "react";

interface IButtonProps {
  type?: "submit" | "button" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  basic?: boolean;
}

export const Button: React.FC<IButtonProps> = ({ children, onClick, className, type, basic }) => {
  return (
    <button
      type={type}
      className={clsx(
        "inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700",
        basic && "text-gray-700 bg-gray-100 hover:bg-gray-200 hover:text-gray-700",
        className
      )}
      onClick={onClick}>
      {children}
    </button>
  );
};
