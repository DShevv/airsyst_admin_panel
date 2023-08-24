import productStore from "../../../../../stores/product-store";
import { useEffect } from "react";
import {
  SummaryButton,
  SummaryContainer,
  SummaryLabel,
  SummaryTitle,
} from "./OrderSummary.style";

export default function OrderSummary() {
  const { getCount, getCost, getWeight, items } = productStore;

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <SummaryContainer>
      <SummaryTitle>ваш заказ</SummaryTitle>
      <SummaryLabel>
        <span>Выбрано товаров:</span> <span>{getCount(items)} шт.</span>
      </SummaryLabel>
      <SummaryLabel>
        <span>Вес заказа:</span> <span>{getWeight(items)} кг.</span>
      </SummaryLabel>
      <SummaryLabel>
        <span>Итого:</span> <span>{getCost(items)} BYN</span>
      </SummaryLabel>
      <SummaryButton>Выставить счёт</SummaryButton>
    </SummaryContainer>
  );
}
