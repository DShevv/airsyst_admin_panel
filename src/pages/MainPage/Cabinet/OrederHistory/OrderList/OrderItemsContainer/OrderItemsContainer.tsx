import { IProduct } from "../../../../../../types/types";
import { OrderItem } from "../OrderItem/OrderItem";
import { ItemsContainer } from "./OrderItemsContainer.style";

interface Props {
  items: IProduct[];
}

export default function OrderItemsContainer({ items }: Props) {
  return (
    <ItemsContainer>
      {items.map((item) => (
        <OrderItem key={item.id} item={item} />
      ))}
    </ItemsContainer>
  );
}
