import { styled } from "styled-components";

export const StyledBar = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  margin-bottom: 46px;

  @media screen and (max-width: 1169px) {
    gap: 20px;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 680px) {
    align-items: center;
    gap: 6px;
    margin-bottom: 30px;
    flex-direction: column;
  }
`;
