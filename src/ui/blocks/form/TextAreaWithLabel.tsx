import clsx from "clsx";
import React from "react";
import { InputLabel } from "ui/elements/form";
import { TextArea } from "ui/elements/form";

interface ITextAreaWithLabelProps {
  className?: string;
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextAreaWithLabel: React.FC<ITextAreaWithLabelProps> = ({
  name,
  label,
  rows,
  cols,
  value,
  onChange,
  placeholder,
  className
}) => {
  return (
    <div className={clsx("space-y-1", className)}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <TextArea
        id={name}
        name={name}
        cols={cols}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
