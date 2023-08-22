import { StyledMore } from "./More.styles";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function More({ children, className }: Props) {
  return <StyledMore className={className}>{children}</StyledMore>;
}
