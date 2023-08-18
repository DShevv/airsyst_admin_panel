import styled from "styled-components";

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: flex;
  gap: 30px;

  margin-bottom: 20px;

  @media screen and (max-width: 1169px) {
    gap: 10px;
  }

  @media screen and (max-width: 680px) {
    flex-direction: column;
    max-width: 370px;
  }
`;

export const Cell = styled.div`
  display: flex;
  gap: 9px;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;

  @media screen and (max-width: 1169px) {
    max-width: 300px;
    min-width: 215px;
    flex: 1 1 auto;
  }

  @media screen and (max-width: 680px) {
    max-width: 370px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 680px) {
    max-width: 340px;
  }
`;
