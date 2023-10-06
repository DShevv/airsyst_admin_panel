import styled from "styled-components";
import FormInput from "../../../../components/FormInput/FormInput";
import Hint from "../../../../components/Hint/Hint";

export const StyledSettings = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary};
`;

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
    flex-wrap: wrap;
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
    min-width: 190px;
    flex: 1 1 auto;
    width: fit-content;
  }

  @media screen and (max-width: 680px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 18px;

  @media screen and (max-width: 1169px) {
    padding: 9px;
  }

  @media screen and (max-width: 680px) {
    max-width: 340px;
  }
`;

export const SettingInput = styled(FormInput)`
  max-width: 270px;

  @media screen and (max-width: 1169px) {
    min-width: 190px;
    width: auto;
  }

  @media screen and (max-width: 680px) {
    max-width: 100%;
  }
`;

export const SettingHint = styled(Hint)`
  @media screen and (max-width: 680px) {
    font-size: 12px;
    display: inline-flex;
    justify-content: flex-start;
    gap: 3px;
  }
`;
