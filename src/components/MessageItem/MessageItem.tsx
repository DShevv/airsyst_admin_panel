import { IMessage } from "../../types/types";
import {
  Message,
  MessageContent,
  MessageDate,
  MessageText,
  MessageTitle,
  Picture,
} from "./MessageItem.style";

interface Props {
  item: IMessage;
  to: string;
}

export default function MessageItem({ item, to }: Props) {
  return (
    <Message to={to}>
      <Picture src={item.image} alt="" />
      <MessageContent>
        <MessageTitle>{item.title}</MessageTitle>
        <MessageText>{item.text}</MessageText>
        <MessageDate dateTime={item.date}>
          {item.date.split("-").reverse().join(".")}
        </MessageDate>
      </MessageContent>
    </Message>
  );
}
