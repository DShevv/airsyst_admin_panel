import { styled } from "styled-components";

export const CountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CountField = styled.input`
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.textWhite};
  color: ${(props) => props.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 111.5%;
  border: none;
  outline: none;

  &[type="number"] {
    appearance: textfield;
  }
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`;

export const CountButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 111.5%;
  cursor: pointer;
  background-color: transparent;
`;
