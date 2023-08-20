import { Outlet } from "react-router-dom";
import { CabinetContainer, Title } from "./Cabinet.style";
import Menu from "./Menu/Menu";

export default function Cabinet() {
  return (
    <div>
      <Title>Личный кабинет</Title>
      <CabinetContainer>
        <Menu />
        <Outlet />
      </CabinetContainer>
    </div>
  );
}
