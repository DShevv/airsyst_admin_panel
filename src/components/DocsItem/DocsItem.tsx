import { ReactNode } from "react";
import { ItemContainer } from "./DocsItem.style";
interface Props {
  children?: ReactNode;
  to: string;
}

export default function DocsItem({ children, to }: Props) {
  return <ItemContainer to={to}>{children}</ItemContainer>;
}
