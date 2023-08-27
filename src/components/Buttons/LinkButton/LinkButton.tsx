import { ReactNode } from "react";
import { StyledLink } from "./LinkButton.style";
import { MouseEvent } from "react";

interface Props {
  to: string;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export default function LinkButton({ to, children, onClick }: Props) {
  return (
    <StyledLink to={to} onClick={onClick}>
      {children}
    </StyledLink>
  );
}
