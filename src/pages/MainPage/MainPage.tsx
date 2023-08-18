import { User } from "../../types/types";
import { useNavigate } from "react-router-dom";

interface Props {
  user: User | undefined;
}

export default function MainPage({ user }: Props) {
  const navigate = useNavigate();
  if (!user?.data) {
    navigate("/form");
  }

  return <div>MainPage</div>;
}
