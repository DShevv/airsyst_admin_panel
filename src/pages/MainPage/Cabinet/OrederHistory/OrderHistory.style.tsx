import { styled } from "styled-components";

export const HistoryContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-direction: column;
  border-radius: ${(props) => props.theme.borderRadius};

  @media screen and (max-width: 1169px) {
  }

  @media screen and (max-width: 680px) {
    background-color: ${(props) => props.theme.colors.primary};
    flex-direction: column-reverse;
  }
`;
