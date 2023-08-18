/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from "react";
import { StyledCheckbox } from "./Checkbox.style";

interface Props {
  children: ReactNode;
  id: string;
  onChange: (value: string | boolean) => void;
}

export default function Checkbox({ children, id, onChange }: Props) {
  const [checked, setChecked] = useState(false);

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
        checked={checked}
        onChange={changeHandler}
      />
      <label htmlFor={id}>{children}</label>
    </StyledCheckbox>
  );
}
