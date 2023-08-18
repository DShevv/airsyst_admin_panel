import { ReactNode } from "react";
import { StyledHint } from "./Hint.style";

interface Props {
  children?: ReactNode;
  className?: string;
}

export default function Hint({ children, className }: Props) {
  return (
    <StyledHint className={className}>
      <img src="/src/assets/hint.svg" width={18} height={18} alt="" />
      {children}
    </StyledHint>
  );
}
