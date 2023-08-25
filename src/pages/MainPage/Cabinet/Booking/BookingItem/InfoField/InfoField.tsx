import { ReactNode } from "react";
import { FieldTitle, FieldValue, StyledInfoField } from "./InfoField.style";

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
}
export default function InfoField({ title, children, className }: Props) {
  return (
    <StyledInfoField className={className}>
      <FieldTitle>{title}:</FieldTitle>
      <FieldValue>{children}</FieldValue>
    </StyledInfoField>
  );
}
