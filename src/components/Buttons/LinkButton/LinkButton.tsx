import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { StyledLink } from "./LinkButton.style";

interface Props {
  to: string;
  children?: ReactNode;
}

export default function LinkButton({ to, children }: Props) {
  return <StyledLink to={to}>{children}</StyledLink>;
}
