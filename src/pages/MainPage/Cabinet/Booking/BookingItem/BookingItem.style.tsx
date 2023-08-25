import { styled } from "styled-components";

export const StyledBookingItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &::after {
    content: "";
    position: absolute;
    width: 80%;
    transform: translateX(-50%);
    left: 50%;
    height: 2px;
    bottom: -10px;
    background: ${(props) => props.theme.colors.secondaryDark};
  }

  &:last-child::after {
    display: none;
  }
`;

export const ItemHeader = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 2fr 2fr 1fr 1fr;
`;

export const ItemInfo = styled.div`
  display: grid;
  flex-wrap: wrap;
  gap: 10px;
`;

export const HeaderField = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
