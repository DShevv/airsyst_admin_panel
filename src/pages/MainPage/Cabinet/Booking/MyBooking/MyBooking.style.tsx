import { styled } from "styled-components";

export const StyledBooking = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledBookingHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 14px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const StyledBookingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  background: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const BookingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 14px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-family: "Rubik";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130.5%;
`;
