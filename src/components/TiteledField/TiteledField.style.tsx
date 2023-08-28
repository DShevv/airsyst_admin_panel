import { styled } from "styled-components";

export const StyledField = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media screen and (max-width: 1169px) {
    flex-direction: column;
  }

  @media screen and (max-width: 680px) {
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
    align-items: flex-end;
    width: 100%;
    max-width: 100%;
    height: 26px;
  }

  @media screen and (max-width: 680px) {
    font-size: 12px;
  }
`;
export const FieldValue = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  color: ${(props) => props.theme.colors.textGrayDark};
  font-family: "Raleway";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;

  @media screen and (max-width: 1169px) {
    font-size: 14px;
  }

  @media screen and (max-width: 680px) {
    font-size: 16px;
  }
`;
