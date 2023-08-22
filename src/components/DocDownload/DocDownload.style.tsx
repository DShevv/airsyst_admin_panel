import { styled } from "styled-components";

export const DocContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 17px 15px 10px 15px;
  height: 130px;

  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary};

  color: ${(props) => props.theme.colors.text};
  font-family: "Rubik";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;
  text-decoration: none;

  @media screen and (max-width: 1169px) {
    height: 160px;
  }

  @media screen and (max-width: 680px) {
    height: 125px;
  }
`;

export const DownloadIcon = styled.img`
  width: 15px;
  height: 15px;
  object-fit: contain;
  object-position: center;
`;
