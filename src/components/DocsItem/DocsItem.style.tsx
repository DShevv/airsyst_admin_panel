import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ItemContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 420px;
  height: 160px;
  max-width: 420px;

  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  font-family: "Rubik";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 130.5%;
  text-decoration: none;

  @media screen and (max-width: 1169px) {
    flex: 1 1 370px;
    max-width: 370px;
  }

  @media screen and (max-width: 680px) {
    flex: none;
    width: 100%;
    font-size: 15px;
  }
`;
