import { StyledMessages, MessagesContainer } from "./Messages.style";
import { data } from "../../../../testData/messages";
import MessageItem from "../../../../components/MessageItem/MessageItem";
import More from "../../../../components/Buttons/More/More";

export default function Messages() {
  return (
    <MessagesContainer>
      <StyledMessages>
        {data.map((item, index) => (
          <MessageItem key={index} item={item} to="/message1" />
        ))}
      </StyledMessages>
      <More>Смотреть больше</More>
    </MessagesContainer>
  );
}
