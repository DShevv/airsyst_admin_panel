import { Outlet } from "react-router-dom";
import { CabinetContainer, CabinetContent, Title } from "./Cabinet.style";
import Menu from "./Menu/Menu";

export default function Cabinet() {
  return (
    <div>
      <Title>Личный кабинет</Title>
      <CabinetContainer>
        <Menu />
        <CabinetContent>
          <Outlet />
        </CabinetContent>
      </CabinetContainer>
    </div>
  );
}
