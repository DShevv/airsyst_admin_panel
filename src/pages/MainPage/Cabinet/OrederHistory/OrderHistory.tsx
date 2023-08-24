import { observer } from "mobx-react-lite";
import { HistoryContainer } from "./OrderHistory.style";
import { OrderList } from "./OrderList/OrderList";
import { useEffect } from "react";
import productStore from "../../../../stores/product-store";
import OrderSummary from "./OrderSummary/OrderSummary";

export const OrderHistory = observer(() => {
  const { addItems, items } = productStore;

  useEffect(() => {
    addItems([
      {
        id: "1",
        image: "12321",
        name: "ВОЗДУШНЫЙ ФИЛЬТР ECO AE-704-22 ВОЗДУШНЫЙ ФИЛЬТР ECO AE-704-22",
        count: 1,
        price: 120,
        oldPrice: 110,
        weight: 500,
        isSelected: true,
      },
      {
        id: "2",
        image: "12321",
        name: "ВОЗДУШНЫЙ ФИЛЬТР ECO AE-704-22 ВОЗДУШНЫЙ ФИЛЬТР ECO AE-704-22",
        count: 2,
        price: 120,
        oldPrice: 110,
        weight: 500,
        isSelected: false,
      },
      {
        id: "3",
        image: "12321",
        name: "ВОЗДУШНЫЙ ФИЛЬТР ECO AE-704-22 ВОЗДУШНЫЙ ФИЛЬТР ECO AE-704-22",
        count: 2,
        price: 120,
        oldPrice: 110,
        weight: 500,
        isSelected: false,
      },
    ]);
  }, []);

  return (
    <HistoryContainer>
      <OrderSummary key={items.toString()} />
      <OrderList></OrderList>
    </HistoryContainer>
  );
});
