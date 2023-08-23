import { styled } from "styled-components";
import cross from "../../../../../../assets/cross.svg";

export const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr 15fr 4.5fr 4.5fr 4.5fr 1fr;
  align-items: center;
`;

export const OrderImage = styled.img`
  display: flex;
  object-fit: contain;
  object-position: center;

  width: 100%;
  height: 44px;
`;

export const OrderTitle = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130.5%;
  text-transform: uppercase;
`;

export const OrderOldPrice = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.textGrayDark};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130.5%;
  text-transform: uppercase;
`;

export const OrderPrice = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.colors.secondary};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130.5%; /* 20.88px */
  text-transform: uppercase;
`;

export const DeleteButton = styled.button`
  width: 25px;
  height: 25px;
  background: transparent;
  border: none;
  outline: none;
  background: url(${cross});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate(90deg);
  cursor: pointer;
`;
