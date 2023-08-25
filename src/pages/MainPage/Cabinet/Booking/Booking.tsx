import LinkButton from "../../../../components/Buttons/LinkButton/LinkButton";
import { BookingList, StyledBooking, ToolBar } from "./Booking.style";
import booking from "../../../../testData/booking";
import BookingItem from "./BookingItem/BookingItem";

export default function Booking() {
  return (
    <StyledBooking>
      <ToolBar>
        <LinkButton to="mybooking">Мои бронирования</LinkButton>
      </ToolBar>
      <BookingList>
        {booking.map((item) => (
          <BookingItem key={item.inn} item={item} />
        ))}
      </BookingList>
    </StyledBooking>
  );
}
