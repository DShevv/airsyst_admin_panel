import styled from "styled-components";

export const StyledSubmit = styled.input`
  align-self: center;
  width: 370px;
  height: 47px;
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

  &:disabled {
    opacity: 0.7;
  }

  &:disabled:active,
  &:disabled:focus,
  &:disabled:hover {
    box-shadow: none;
    cursor: default;
    background-color: ${(props) => props.theme.colors.secondary};
  }

  @media screen and (max-width: 1169px) {
    width: 300px;
  }

  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;
