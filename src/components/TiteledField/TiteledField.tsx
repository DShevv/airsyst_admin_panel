import { ReactNode } from "react";
import { FieldTitle, FieldValue, StyledField } from "./TiteledField.style";

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function TiteledField({ title, children, className }: Props) {
  return (
    <StyledField className={className}>
      <FieldTitle>{title}:</FieldTitle>
      <FieldValue>{children}</FieldValue>
    </StyledField>
  );
}
