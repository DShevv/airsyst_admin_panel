import { IBooking } from "../../../../../types/types";
import { useState } from "react";
import {
  HeaderField,
  InfoContainer,
  ItemHeader,
  ItemInfo,
  StyledBookingItem,
} from "./BookingItem.style";
import TiteledField from "../../../../../components/TiteledField/TiteledField";
import InfoField from "./InfoField/InfoField";

interface Props {
  item: IBooking;
}

export default function BookingItem({ item }: Props) {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <StyledBookingItem onClick={handleClick}>
      <ItemHeader>
        <TiteledField title="ИНН">{item.inn}</TiteledField>
        <TiteledField title="Конечный потребитель">{item.name}</TiteledField>
        <TiteledField title="Регион, Город потребителя">
          {item.address}
        </TiteledField>
        <TiteledField title="Дата бронирования">{item.date}</TiteledField>

        <button>sda</button>
      </ItemHeader>
      <ItemInfo style={{ display: isOpened ? "flex" : "none" }}>
        <InfoContainer>
          <InfoField title="Марка оборудования">{item.mark}</InfoField>
          <InfoField title="Количество">{item.count}</InfoField>
        </InfoContainer>
        <InfoContainer>
          <InfoField title="Дилер">{item.dealerName}</InfoField>
          <InfoField title="Контактные данные дилера">{item.phone}</InfoField>
        </InfoContainer>
        <InfoContainer>
          <InfoField title="Менеджер дилера">{item.dealerManager}</InfoField>

          <InfoField title="Менеджер AIRSYST">{item.manager}</InfoField>
        </InfoContainer>
        <InfoField title="Статус">{item.status}</InfoField>

        <HeaderField>{item.commentary}</HeaderField>
      </ItemInfo>
    </StyledBookingItem>
  );
}
