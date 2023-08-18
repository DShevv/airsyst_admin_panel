import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1170px;
  margin: 0 auto;
  margin-top: 64px;
  margin-bottom: 142px;

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
    margin-top: 60px;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 680px) {
    width: auto;
    margin: 0 10px;
    padding: 0;
    margin-top: 27px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 680px) {
    display: flex;
    justify-content: center;
  }
`;
