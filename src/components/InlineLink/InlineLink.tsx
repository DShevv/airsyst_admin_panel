import { ReactNode } from "react";
import { StyledLink } from "./InlineLink.style";

interface Props {
  children?: ReactNode;
  className?: string;
  to: string;
}

export default function InlineLink({ children, className, to }: Props) {
  return (
    <StyledLink to={to} className={className}>
      {children}
    </StyledLink>
  );
}
