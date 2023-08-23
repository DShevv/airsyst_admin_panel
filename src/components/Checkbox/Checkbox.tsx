import { ReactNode, useEffect, useState } from "react";
import { StyledCheckbox } from "./Checkbox.style";

interface Props {
  children?: ReactNode;
  isChecked?: boolean;
  id: string;
  onChange: (value: string | boolean) => void;
}
interface SecondProps {
  children?: ReactNode;
  isChecked?: boolean;
  id: string;
  onChange: () => void;
}

export default function Checkbox({
  children,
  id,
  isChecked,
  onChange,
}: Props | SecondProps) {
  const [checked, setChecked] = useState(
    isChecked !== undefined ? isChecked : false
  );

  const changeHandler = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    onChange(checked);
  }, [checked]);

  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        name={id}
        id={id}
        checked={isChecked}
        onChange={changeHandler}
      />
      <label htmlFor={id}>{children}</label>
    </StyledCheckbox>
  );
}
