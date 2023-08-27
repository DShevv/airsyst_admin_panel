import LinkButton from "../../../../components/Buttons/LinkButton/LinkButton";
import { BookingList, StyledBooking, Title, ToolBar } from "./Booking.style";
import BookingItem from "./BookingItem/BookingItem";
import { observer } from "mobx-react-lite";
import bookingStore from "../../../../stores/booking-store";
import Path from "../../../../components/Path/Path";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import statusStore from "../../../../stores/status-store";
import modalStore from "../../../../stores/modal-store";

export const Booking = observer(() => {
  const { list } = bookingStore;
  const { current } = statusStore;
  const { setInfo } = modalStore;

  useEffect(() => {
    if (current?.name === "Silver") {
      setInfo({
        text: "Бронирование не доступно для текущего уровня. Необходимо повысить статус",
        link: "../",
        buttonText: "Понятно",
        isVisible: true,
      });
    }
  }, [current]);

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
