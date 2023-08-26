import LinkButton from "../../../../../components/Buttons/LinkButton/LinkButton";
import {
  BookingList,
  StyledBooking,
  StyledBookingContent,
  StyledBookingHeader,
  Title,
} from "./MyBooking.style";
import BookingItem from "../BookingItem/BookingItem";
import Path from "../../../../../components/Path/Path";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import bookingStore from "../../../../../stores/booking-store";
import userStore from "../../../../../stores/user-store";
import { useState, useEffect } from "react";
import { IBooking } from "../../../../../types/types";

export const MyBooking = observer(() => {
  const [myBookings, setMyBookings] = useState<IBooking[]>([]);
  const { getBookingsByUser } = bookingStore;
  const { user } = userStore;

  useEffect(() => {
    const bookings = getBookingsByUser(user?.id as number);
    setMyBookings(bookings);
  }, []);

  return (
    <StyledBooking>
      <StyledBookingHeader>
        <Title>Мои бронирования</Title>
        <Path>
          <Link to="../../booking" style={{ color: "#000", fontWeight: 700 }}>
            Все бронирования
          </Link>{" "}
          / <span>Мои бронирования</span>
        </Path>
        <LinkButton to="../../booking/create">Забронировать</LinkButton>
      </StyledBookingHeader>
      <StyledBookingContent>
        <BookingList>
          {myBookings.map((item) => (
            <BookingItem pathToEdit="../create" key={item.inn} item={item} />
          ))}
        </BookingList>
      </StyledBookingContent>
    </StyledBooking>
  );
});
