import { styled } from "styled-components";

export const StyledField = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
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
`;
export const FieldValue = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${(props) => props.theme.colors.textGrayDark};
  font-family: "Raleway";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;
`;