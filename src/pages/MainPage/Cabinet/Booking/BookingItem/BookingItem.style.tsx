import { Link } from "react-router-dom";
import { styled } from "styled-components";
import edit from "../../../../../assets/edit.svg";

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
    bottom: -15px;
    background: ${(props) => props.theme.colors.secondaryDark};
  }

  &:last-child::after {
    display: none;
  }
`;

export const ItemHeader = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 2fr 2fr 1.7fr 0.3fr;
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

export const CommentContainer = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.textWhite};
`;

export const Edit = styled(Link)`
  width: 30px;
  height: 30px;
  background-image: url(${edit});
  background-size: contain;
  background-position: center;
  cursor: pointer;
`;
