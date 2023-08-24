import { styled } from "styled-components";
import cross from "../../../../../assets/cross.svg";

export const StyledOrderList = styled.div`
  width: 100%;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const SelectMenu = styled.div`
  display: flex;
  gap: 36px;

  @media screen and (max-width: 680px) {
    font-size: 13px;
  }
`;

export const HeaderRow = styled.div`
  display: grid;
  height: 40px;
  align-items: center;
  grid-template-columns: 1fr 3.5fr 15fr 4.5fr 4.5fr 4.5fr 1fr;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.textWhite};

  span {
    text-align: center;
  }

  @media screen and (max-width: 680px) {
    display: none;
  }
`;

export const SelectAll = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  gap: 7px;
  color: ${(props) => props.theme.colors.textGrayDark};
  font-family: "Raleway";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  @media screen and (max-width: 680px) {
    font-size: 13px;
  }
`;

export const RemoveSelected = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: ${(props) => props.theme.colors.textGrayDark};
  font-family: "Raleway";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  @media screen and (max-width: 680px) {
    font-size: 13px;
  }
`;

export const DeleteIcon = styled.div`
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
