import { styled } from "styled-components";

export const SummaryContainer = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  padding: 10px 14px;
  align-items: center;

  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.colors.primary};

  @media screen and (max-width: 1169px) {
    gap: 10px;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 680px) {
    align-self: center;
    width: 340px;
    background: ${(props) => props.theme.colors.textWhite};
    margin: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SummaryLabel = styled.div`
  color: ${(props) => props.theme.colors.textGrayDark};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;

  span:nth-child(1) {
    display: inline-block;
    white-space: normal;
  }

  span:nth-child(2) {
    color: ${(props) => props.theme.colors.text};
    font-weight: 700;
    white-space: nowrap;
    min-width: 49px;
  }

  @media screen and (max-width: 1169px) {
  }

  @media screen and (max-width: 680px) {
    width: 100%;
    display: flex;
    padding: 0 50px;
    gap: 20px;
    font-size: 14px;

    span:nth-child(1) {
      width: 130px;
    }
  }
`;

export const SummaryButton = styled.button`
  justify-self: end;
  width: 215px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  font-family: "Raleway";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 111.5%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textWhite};

  &:hover {
    background: #1245a9;
    box-shadow: 0px 21px 30px 0px rgba(81, 81, 81, 0.4);
  }

  &:active,
  &:focus {
    background: #1245a9;
    box-shadow: none;
  }

  @media screen and (max-width: 1169px) {
    font-size: 16px;
    width: 170px;
  }

  @media screen and (max-width: 680px) {
    margin-top: 20px;
    align-self: center;
    width: 240px;
  }
`;

export const SummaryTitle = styled.div`
  margin-bottom: 10px;
  display: none;
  color: ${(props) => props.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 130.5%;
  text-transform: uppercase;

  @media screen and (max-width: 680px) {
    display: block;
    text-align: center;
  }
`;
