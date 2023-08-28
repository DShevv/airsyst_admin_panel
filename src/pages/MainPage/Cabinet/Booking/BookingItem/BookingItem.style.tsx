import { Link } from "react-router-dom";
import { styled } from "styled-components";
import edit from "../../../../../assets/edit.svg";
import TiteledField from "../../../../../components/TiteledField/TiteledField";
import InfoField from "./InfoField/InfoField";

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

  @media screen and (max-width: 1169px) {
    gap: 5px;
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: 1fr 2fr 0.3fr;
  }
`;

interface ItemInfoProps {
  $isopened: boolean;
}

export const ItemInfo = styled.div<ItemInfoProps>`
  display: ${(props) => (props.$isopened ? "flex" : "none")};
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (max-width: 1169px) {
    display: ${(props) => (props.$isopened ? "grid" : "none")};
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 680px) {
    display: ${(props) => (props.$isopened ? "flex" : "none")};
    flex-direction: column;
  }
`;

export const HeaderField = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 1169px) {
    gap: 5px;
  }

  @media screen and (max-width: 680px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const CommentContainer = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.textWhite};

  @media screen and (max-width: 1169px) {
    display: flex;
    grid-row-start: 3;
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

export const Edit = styled(Link)`
  width: 30px;
  height: 30px;
  background-image: url(${edit});
  background-size: contain;
  background-position: center;
  cursor: pointer;

  @media screen and (max-width: 1169px) {
  }

  @media screen and (max-width: 680px) {
    grid-row-start: 1;
    grid-column-start: 3;
  }
`;

export const RegionField = styled(TiteledField)`
  @media screen and (max-width: 680px) {
    grid-row-start: 2;
    grid-column-start: 2;
  }
`;

export const PhoneField = styled(InfoField)`
  @media screen and (max-width: 680px) {
    word-break: break-all;
  }
`;
