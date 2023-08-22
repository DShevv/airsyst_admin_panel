import { styled } from "styled-components";

export const Path = styled.div`
  margin-bottom: 28px;

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

export const FilesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px 23px;

  @media screen and (max-width: 1169px) {
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 680px) {
    gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
`;
