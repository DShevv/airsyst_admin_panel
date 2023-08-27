import styled from "styled-components";

interface Props {
  bgcolor: string | undefined;
}

export const RootWrapper = styled.div<Props>`
  width: 100%;
  height: 100%;
  background: ${(props) => props.bgcolor};
  position: relative;
`;

export const Wrapper = styled.div<Props>`
  width: 1170px;
  margin: 0 auto;
  padding-top: 47px;
  padding-bottom: 100px;

  background: ${(props) => props.bgcolor};
  color: ${(props) => props.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;

  @media screen and (max-width: 1169px) {
    width: auto;
    max-width: 970px;
    margin: auto;
    padding: 0 10px;
    padding-top: 25px;
    padding-bottom: 46px;
  }

  @media screen and (max-width: 680px) {
    width: auto;
    margin: 0 10px;
    padding: 0;
    margin-top: 27px;
    padding-bottom: 46px;
    padding-top: 12px;
    display: flex;
    justify-content: center;
  }
`;
