import { styled } from "styled-components";

export const StyledDocumentation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 30px;
  justify-content: space-between;

  @media screen and (max-width: 1169px) {
    gap: 20px;
  }

  @media screen and (max-width: 680px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;
