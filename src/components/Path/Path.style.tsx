import styled from "styled-components";

export const StyledPath = styled.div`
  color: ${(props) => props.theme.colors.textGray};
  font-family: "Raleway";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;

  span {
    color: ${(props) => props.theme.colors.textGrayDark};
  }

  @media screen and (max-width: 680px) {
    font-size: 13px;
  }
`;
