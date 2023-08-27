import { User } from "../../types/types";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "./MainPage.style";
import StatusBar from "../../components/StatusBar/StatusBar";
import { Modal } from "../../components/Modal/Modal";
import modalStore from "../../stores/modal-store";
import { observer } from "mobx-react-lite";

interface Props {
  user: User | undefined;
}

export const MainPage = observer(({ user }: Props) => {
  const { info } = modalStore;
  const navigate = useNavigate();
  if (!user?.data) {
    navigate("/form");
  }

  return (
    <Container>
      <Modal />
      <StatusBar></StatusBar>
      <Outlet />
    </Container>
  );
});
