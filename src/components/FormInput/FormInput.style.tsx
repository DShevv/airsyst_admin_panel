import styled from "styled-components";

export const StyledInput = styled.input`
  width: 370px;
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

  ::placeholder {
    color: ${(props) => props.theme.colors.textGrayLight};
  }
`;
