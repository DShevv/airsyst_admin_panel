import styled from "styled-components";

export const StyledInfoField = styled.div`
  display: flex;
  height: 50px;
  gap: 5px;

  @media screen and (max-width: 680px) {
    height: max-content;
  }
`;

export const FieldTitle = styled.div`
  display: flex;
  align-items: flex-start;

  height: 100%;
  color: ${(props) => props.theme.colors.textGray};
  font-family: "Raleway";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;
  max-width: 90px;

  @media screen and (max-width: 1169px) {
    font-size: 10px;
  }

  @media screen and (max-width: 680px) {
    font-size: 12px;
  }
`;
export const FieldValue = styled.div`
  display: flex;

  height: 100%;
  color: ${(props) => props.theme.colors.textGrayDark};
  font-family: "Raleway";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;
  max-width: 180px;

  @media screen and (max-width: 1169px) {
    font-size: 14px;
  }

  @media screen and (max-width: 680px) {
    font-size: 18px;
  }
`;
