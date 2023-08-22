import { styled } from "styled-components";

export const StyledMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;

  @media screen and (max-width: 1169px) {
    gap: 8px;
  }

  @media screen and (max-width: 680px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
`;
