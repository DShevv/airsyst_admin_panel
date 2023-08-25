import { styled } from "styled-components";

export const StyledBooking = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: transparent;
`;

export const ToolBar = styled.div`
  width: 100%;
  padding: 10px 14px;
  display: grid;
  align-items: center;

  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary};
`;

export const BookingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 14px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.primary};
`;
