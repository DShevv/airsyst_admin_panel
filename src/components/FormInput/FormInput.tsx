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
  onChange: (value: string | boolean) => void;
}

export default function FormInput({
  children,
  className,
  type,
  placeholder,
  value,
  required,
  name,
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
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      }}
    >
      {children}
    </StyledInput>
  );
}
