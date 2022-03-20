import clsx from "clsx";
import React from "react";

interface IInputLabelProps {
  className?: string;
  htmlFor?: string;
}

export const InputLabel: React.FC<IInputLabelProps> = ({ htmlFor, className, children }) => {
  return (
    <label className={clsx("font-medium", className)} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
