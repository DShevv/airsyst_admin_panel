import { styled } from "styled-components";

export const Container = styled.div`
  margin-bottom: 100px;

  @media screen and (max-width: 1169px) {
    width: 100%;

    margin-bottom: 46px;
  }

  @media screen and (max-width: 680px) {
    margin-bottom: 46px;
  }
`;
