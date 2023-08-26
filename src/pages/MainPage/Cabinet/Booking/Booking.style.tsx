import { styled } from "styled-components";

export const StyledBooking = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: transparent;
`;

export const Title = styled.h1`
  width: 100%;
  color: ${(props) => props.theme.colors.text};
  font-family: "Rubik";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130.5%;
`;

export const ToolBar = styled.div`
  width: 100%;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-template-columns: 1fr 1fr;

  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary};
`;

export const BookingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 14px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary};
`;
