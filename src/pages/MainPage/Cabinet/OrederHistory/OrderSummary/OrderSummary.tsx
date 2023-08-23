import productStore from "../../../../../stores/product-store";
import { useEffect } from "react";
import {
  SummaryButton,
  SummaryContainer,
  SummaryLabel,
} from "./OrderSummary.style";

export default function OrderSummary() {
  const { getCount, getCost, getWeight, items } = productStore;

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <SummaryContainer>
      <SummaryLabel>
        Выбрано товаров <span>{getCount(items)} шт.</span>
      </SummaryLabel>
      <SummaryLabel>
        Вес заказа <span>{getWeight(items)} кг.</span>
      </SummaryLabel>
      <SummaryLabel>
        Выбрано товаров <span>{getCost(items)} BYN</span>
      </SummaryLabel>
      <SummaryButton>Выставить счёт</SummaryButton>
    </SummaryContainer>
  );
}
