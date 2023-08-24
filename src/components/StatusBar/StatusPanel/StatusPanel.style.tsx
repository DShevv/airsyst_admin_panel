import { styled } from "styled-components";

interface SideProps {
  bgcolor: string;
  color: string;
}

interface MiddleProps {
  percentage: number;
}

export const StyledPanel = styled.div<SideProps>`
  max-width: 370px;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
  font-family: "Rubik";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 1169px) {
    max-width: 300px;
    height: 58px;
    font-size: 20px;
  }

  @media screen and (max-width: 680px) {
    max-width: 340px;
    height: 38px;
    font-size: 15px;
    width: 100%;
  }
`;

export const StyledMiddlePanel = styled.div<MiddleProps>`
  max-width: 370px;
  height: 76px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;

  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  overflow: hidden;

  @media screen and (max-width: 1169px) {
    max-width: 300px;
    width: 100%;
    height: 58px;
  }

  @media screen and (max-width: 680px) {
    max-width: 340px;
    height: 38px;
  }

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 5px;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.primaryDark};
    z-index: 2;

    @media screen and (max-width: 1169px) {
      height: 3px;
    }

    @media screen and (max-width: 680px) {
      height: 2px;
    }
  }
  &::after {
    position: absolute;
    align-self: flex-start;
    content: "";
    width: ${(props) => props.percentage}%;
    height: 5px;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.secondary};
    z-index: 3;

    @media screen and (max-width: 1169px) {
      height: 3px;
    }

    @media screen and (max-width: 680px) {
      height: 2px;
    }
  }
`;

export const MiddleText = styled.div`
  display: block;
  text-align: center;
  font-family: "Rubik";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;

  @media screen and (max-width: 1169px) {
    font-size: 15px;
  }

  @media screen and (max-width: 720px) {
    font-size: 12px;
  }

  @media screen and (max-width: 680px) {
    font-size: 10px;
  }
`;

export const MiddlePercentage = styled.div`
  display: block;
  font-family: "Rubik";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;

  @media screen and (max-width: 1169px) {
    font-size: 22px;
  }

  @media screen and (max-width: 680px) {
    font-size: 18px;
  }

  span {
    font-size: 18px;

    @media screen and (max-width: 1169px) {
      font-size: 16px;
    }

    @media screen and (max-width: 680px) {
      font-size: 12px;
    }
  }
`;
