import { styled } from "styled-components";
import cross from "../../../../../../assets/cross.svg";

export const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr 15fr 4.5fr 4.5fr 4.5fr 1fr;
  align-items: center;

  @media screen and (max-width: 680px) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
  }
`;

export const OrderImage = styled.img`
  display: flex;
  object-fit: contain;
  object-position: center;

  width: 100%;
  height: 44px;

  @media screen and (max-width: 680px) {
    width: 72px;
  }
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

  &.disabled {
    color: ${(props) => props.theme.colors.textGrayLight};
  }

  @media screen and (max-width: 1170px) {
    font-size: 15px;
  }

  @media screen and (max-width: 680px) {
    flex: 1 0 60%;
    font-size: 12px;
  }
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
  text-align: center;
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

  @media screen and (max-width: 680px) {
    display: none;
  }
`;

export const Break = styled.div`
  display: none;
  @media screen and (max-width: 680px) {
    display: block;
    flex-basis: 100%;
    width: 0;
  }
`;
