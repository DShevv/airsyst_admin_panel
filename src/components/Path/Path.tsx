import { StyledPath } from "./Path.style";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function Path({ children }: Props) {
  return <StyledPath>{children}</StyledPath>;
}
