import { styled } from "styled-components";

export const StyledExcel = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ExcelIcon = styled.img`
  margin-bottom: 11px;
  width: 94px;
  height: 94px;
  object-fit: contain;
  object-position: center;
`;

export const ExcelCaption = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-family: "Rubik";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 130.5%;
`;

export const Download = styled.a`
  text-decoration: underline;
  color: inherit;
`;
