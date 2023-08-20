import { User } from "../../types/types";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "./MainPage.style";
import StatusBar from "../../components/StatusBar/StatusBar";

interface Props {
  user: User | undefined;
}

export default function MainPage({ user }: Props) {
  const navigate = useNavigate();
  if (!user?.data) {
    navigate("/form");
  }

  return (
    <Container>
      <StatusBar></StatusBar>
      <Outlet />
    </Container>
  );
}
