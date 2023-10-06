import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  margin-top: 23px;
  margin-bottom: 64px;
  padding: 25px;
  padding-bottom: 48px;
  width: 970px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background: #f6f7fc;

  color: ${(props) => props.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Raleway;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;

  @media screen and (max-width: 1169px) {
    width: 100%;
  }

  @media screen and (max-width: 470px) {
    width: 100%;
    padding: 27px 10px 28px 10px;
    background-color: transparent;
  }
`;

export const Title = styled.h1`
  font-family: "Rubik";
  margin-bottom: 23px;
  color: ${(props) => props.theme.colors.text};
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;

  @media screen and (max-width: 1169px) {
    font-style: 24px;
  }

  @media screen and (max-width: 470px) {
    font-style: 20px;
  }
`;

export const Caption = styled.p`
  margin-bottom: 18px;
`;

export const Forgot = styled(NavLink)`
  color: #195cdf;
  margin-bottom: 2px;
  text-align: center;
`;

export const Register = styled(NavLink)`
  color: #195cdf;
  text-transform: uppercase;
  text-align: center;
`;

export const Form = styled.form`
  width: 370px;
  display: flex;
  flex-direction: column;
  gap: 9px;

  @media screen and (max-width: 470px) {
    width: 100%;
    max-width: 370px;
  }
`;
