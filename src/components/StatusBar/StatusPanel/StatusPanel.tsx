import { ReactNode } from "react";
import {
  StyledPanel,
  StyledMiddlePanel,
  MiddleText,
  MiddlePercentage,
} from "./StatusPanel.style";

interface SideProps {
  percentage: number;
  color: string;
  bgcolor: string;
  point?: never;
  children?: ReactNode;
}

interface MiddleProps {
  percentage: number;
  point: number;
  color?: never;
  bgcolor?: never;
  children?: never;
}

type Props = SideProps | MiddleProps;

export default function StatusPanel(props: Props) {
  if (!props.color) {
    return (
      <StyledMiddlePanel percentage={props.percentage}>
        <MiddleText>До перехода в новый статус осталось</MiddleText>
        <MiddlePercentage>
          {props.percentage}%<span> ({props.point} BYN)</span>
        </MiddlePercentage>
      </StyledMiddlePanel>
    );
  }

  return (
    <StyledPanel bgcolor={props.bgcolor} color={props.color}>
      {props.children}
    </StyledPanel>
  );
}
