import { ReactNode } from "react";
import { StyledHint } from "./Hint.style";
import icon from "../../assets/hint.svg";

interface Props {
  children?: ReactNode;
  className?: string;
}

export default function Hint({ children, className }: Props) {
  return (
    <StyledHint className={className}>
      <img src={icon} width={18} height={18} alt="" />
      {children}
    </StyledHint>
  );
}
