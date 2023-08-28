import { IBooking } from "../../../../../types/types";
import { useState } from "react";
import {
  CommentContainer,
  Edit,
  InfoContainer,
  ItemHeader,
  ItemInfo,
  PhoneField,
  RegionField,
  StyledBookingItem,
} from "./BookingItem.style";
import TiteledField from "../../../../../components/TiteledField/TiteledField";
import InfoField from "./InfoField/InfoField";

interface Props {
  item: IBooking;
  pathToEdit: string;
}

export default function BookingItem({ item, pathToEdit }: Props) {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <StyledBookingItem onClick={handleClick}>
      <ItemHeader>
        <TiteledField title="ИНН">{item.inn}</TiteledField>
        <TiteledField title="Конечный потребитель">{item.name}</TiteledField>
        <RegionField title="Регион, Город потребителя">
          {item.address}
        </RegionField>
        <TiteledField title="Дата бронирования">{item.date}</TiteledField>

        <Edit to={`${pathToEdit}/${item.id}`}></Edit>
      </ItemHeader>
      <ItemInfo $isopened={isOpened}>
        <InfoContainer>
          <InfoField title="Марка оборудования">{item.mark}</InfoField>
          <InfoField title="Количество">{item.count}</InfoField>
        </InfoContainer>
        <InfoContainer>
          <InfoField title="Дилер">{item.dealerName}</InfoField>
          <PhoneField title="Контактные данные дилера">{item.phone}</PhoneField>
        </InfoContainer>
        <InfoContainer>
          <InfoField title="Менеджер дилера">{item.dealerManager}</InfoField>

          <InfoField title="Менеджер AIRSYST">{item.manager}</InfoField>
        </InfoContainer>
        <InfoField title="Статус">{item.status}</InfoField>

        {item.commentary.length > 0 && (
          <CommentContainer>{item.commentary}</CommentContainer>
        )}
      </ItemInfo>
    </StyledBookingItem>
  );
}
