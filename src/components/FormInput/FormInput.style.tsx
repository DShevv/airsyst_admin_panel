import styled from "styled-components";

interface Props {
  area?: string;
}

export const StyledInput = styled.input<Props>`
  max-width: 370px;
  width: 100%;
  height: 40px;
  padding: 10px 17px 10px 17px;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.colors.secondaryDark};
  color: ${(props) => props.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;
  outline-color: ${(props) => props.theme.colors.secondaryDark};
  grid-area: ${(props) => (props.area ? props.area : "")};

  ::placeholder {
    color: ${(props) => props.theme.colors.textGrayLight};
  }

  &[type="number"] {
    appearance: textfield;
  }
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  &.error {
    border-color: red;
  }

  @media screen and (max-width: 1169px) {
    max-width: 300px;
    min-width: 215px;
    padding: 10px 14px;
    flex: 1 1 auto;
  }

  @media screen and (max-width: 680px) {
    max-width: 100%;
  }
`;
