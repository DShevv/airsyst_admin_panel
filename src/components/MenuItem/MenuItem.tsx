import { StyledItem, StyledLink } from "./MenuItem.style";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  to: string;
}

export default function MenuItem({ children, to }: Props) {
  return (
    <StyledItem>
      <StyledLink to={to}>{children}</StyledLink>
    </StyledItem>
  );
}
