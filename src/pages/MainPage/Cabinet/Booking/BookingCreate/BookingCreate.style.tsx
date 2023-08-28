import { styled } from "styled-components";
import FormInput from "../../../../../components/FormInput/FormInput";
import Submit from "../../../../../components/Buttons/Submit/Submit";

export const StyledCreateForm = styled.div`
  padding: 20px 14px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary};
`;

export const BookingForm = styled.form`
  display: grid;
  grid-template-areas:
    "inn name address"
    "mark mark count"
    "dName dName dName"
    "dManager dManager phone"
    "manager manager manager"
    "commentary commentary commentary"
    "submit submit submit";
  grid-template-rows: 1fr;
  row-gap: 20px;
  column-gap: 30px;
`;

export const FullWidthInput = styled(FormInput)`
  max-width: 100%;
`;

interface CommentaryProps {
  area?: string;
}

export const CommentaryInput = styled.textarea<CommentaryProps>`
  width: 100%;
  height: 200px;
  grid-area: ${(props) => props.area};
  padding: 10px 17px 10px 17px;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.colors.secondaryDark};
  color: ${(props) => props.theme.colors.text};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "Raleway";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130.5%;
  outline-color: ${(props) => props.theme.colors.secondaryDark};
  resize: none;

  ::placeholder {
    color: ${(props) => props.theme.colors.textGrayLight};
  }
`;

export const BookingSubmit = styled(Submit)`
  grid-area: submit;
  justify-self: center;
`;
