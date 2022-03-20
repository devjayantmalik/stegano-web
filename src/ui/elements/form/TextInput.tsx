import clsx from "clsx";
import React from "react";

interface ITextInputProps {
  className?: string;
  name?: string;
  id?: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

export const TextInput: React.FC<ITextInputProps> = ({ className, type, value, onChange, name, id, placeholder }) => {
  return (
    <input
      className={clsx(
        "block border outline-none placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50",
        className
      )}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
