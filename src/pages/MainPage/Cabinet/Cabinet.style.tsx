import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.text};
  font-family: "Rubik";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130.5%;
  text-transform: uppercase;
`;

export const CabinetContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 18px;

  @media screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

export const CabinetContent = styled.div`
  width: 100%;
  height: fit-content;
`;
