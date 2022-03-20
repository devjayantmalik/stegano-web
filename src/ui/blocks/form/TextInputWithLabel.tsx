import clsx from "clsx";
import React from "react";
import { InputLabel, TextInput } from "ui/elements/form";

interface ITextInputWithLabelProps {
  className?: string;
  name: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const TextInputWithLabel: React.FC<ITextInputWithLabelProps> = ({
  name,
  type,
  label,
  value,
  onChange,
  placeholder,
  className
}) => {
  return (
    <div className={clsx("space-y-1", className)}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <TextInput id={name} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};
