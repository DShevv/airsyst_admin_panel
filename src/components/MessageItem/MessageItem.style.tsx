import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Message = styled(Link)`
  display: flex;
  padding: 22px;
  gap: 22px;
  background-color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  color: inherit;

  @media screen and (max-width: 1169px) {
    gap: 10px;
    padding: 18px 14px;
  }

  @media screen and (max-width: 680px) {
    gap: 14px;
    padding: 6px;
    flex-direction: column;
  }
`;

export const Picture = styled.img`
  display: block;
  flex: 1 1 300px;
  object-fit: cover;
  object-position: center;
  max-width: 300px;
  min-width: 150px;

  @media screen and (max-width: 1169px) {
    flex: 1 1 270px;
  }

  @media screen and (max-width: 680px) {
    flex: none;
    max-width: 100%;
  }
`;

export const MessageContent = styled.div`
  flex: 1 1 520px;

  @media screen and (max-width: 1169px) {
    flex: 1 1 470px;
  }

  @media screen and (max-width: 680px) {
    flex: none;
  }
`;

export const MessageTitle = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 17px;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.text};
  font-family: "Rubik";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;

  @media screen and (max-width: 1169px) {
    font-size: 16px;
  }

  @media screen and (max-width: 680px) {
    font-size: 15px;
  }
`;

export const MessageText = styled.p`
  margin-bottom: 13px;
  color: ${(props) => props.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media screen and (max-width: 1169px) {
    font-size: 15px;
  }
`;

export const MessageDate = styled.time`
  color: ${(props) => props.theme.colors.text};
  font-family: "Rubik";
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: 130%;

  @media screen and (max-width: 1169px) {
    font-size: 15px;
  }
`;
