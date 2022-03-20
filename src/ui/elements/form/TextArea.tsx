import clsx from "clsx";
import React from "react";

interface ITextAreaProps {
  className?: string;
  name?: string;
  rows?: number;
  cols?: number;
  id?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
}

export const TextArea: React.FC<ITextAreaProps> = ({
  className,
  value,
  onChange,
  name,
  id,
  placeholder,
  rows,
  cols
}) => {
  return (
    <textarea
      className={clsx(
        "block border outline-none border-gray-200 rounded placeholder-gray-400 px-5 py-3 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50",
        className
      )}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      rows={rows}
      cols={cols}
      onChange={onChange}></textarea>
  );
};
