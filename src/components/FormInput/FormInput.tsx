import { ReactNode } from "react";
import { StyledInput } from "./FormInput.style";

interface Props {
  children?: ReactNode;
  className?: string;
  type: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  name?: string;
  minLength?: number;
  maxLength?: number;
  area?: string;
  onChange: (value: string | boolean | number) => void;
}

export default function FormInput({
  children,
  className,
  type,
  placeholder,
  value,
  required,
  name,
  minLength,
  maxLength,
  area,
  onChange,
}: Props) {
  return (
    <StyledInput
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      required={required}
      name={name}
      minLength={minLength}
      maxLength={maxLength}
      area={area}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      }}
    >
      {children}
    </StyledInput>
  );
}
