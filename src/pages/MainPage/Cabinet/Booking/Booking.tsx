import LinkButton from "../../../../components/Buttons/LinkButton/LinkButton";
import { BookingList, StyledBooking, Title, ToolBar } from "./Booking.style";

import BookingItem from "./BookingItem/BookingItem";
import { observer } from "mobx-react-lite";
import bookingStore from "../../../../stores/booking-store";
import Path from "../../../../components/Path/Path";
import { Link } from "react-router-dom";

export const Booking = observer(() => {
  const { list } = bookingStore;

  return (
    <StyledBooking>
      <ToolBar>
        <Title>Бронирование</Title>
        <Path>
          <span>Все бронирования</span> /{" "}
          <Link to="mybooking" style={{ color: "#000", fontWeight: 700 }}>
            Мои бронирования
          </Link>
        </Path>
        <LinkButton to="create">Забронировать</LinkButton>
      </ToolBar>
      <BookingList>
        {list.map((item) => (
          <BookingItem pathToEdit="create" key={item.inn} item={item} />
        ))}
      </BookingList>
    </StyledBooking>
  );
});
