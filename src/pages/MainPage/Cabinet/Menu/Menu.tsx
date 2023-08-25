import MenuItem from "../../../../components/MenuItem/MenuItem";
import { StyledMenu } from "./Menu.style";

export default function Menu() {
  return (
    <StyledMenu>
      <MenuItem to="messages">Сообщения</MenuItem>
      <MenuItem to="store">Склад</MenuItem>
      <MenuItem to="documentation">Документация</MenuItem>
      <MenuItem to="booking">Бронирование</MenuItem>
      <MenuItem to="price">Прайсы</MenuItem>
      <MenuItem to="my">Моё оборудование</MenuItem>
      <MenuItem to="account">Учётная запись</MenuItem>
      <MenuItem to="history">История заказов</MenuItem>
    </StyledMenu>
  );
}
