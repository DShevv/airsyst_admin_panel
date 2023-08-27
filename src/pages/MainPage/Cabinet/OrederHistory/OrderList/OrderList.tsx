import { observer } from "mobx-react-lite";
import {
  DeleteIcon,
  HeaderRow,
  RemoveSelected,
  SelectAll,
  SelectMenu,
  StyledOrderList,
} from "./OrderList.style";
import productStore from "../../../../../stores/product-store";
import { useEffect } from "react";
import Checkbox from "../../../../../components/Checkbox/Checkbox";
import OrderItemsContainer from "./OrderItemsContainer/OrderItemsContainer";

export const OrderList = observer(() => {
  const { items, onSelectAllClick, isAllSelected, removeSelected } =
    productStore;

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <StyledOrderList>
      <SelectMenu>
        <SelectAll>
          <Checkbox
            id="selectAll"
            onChange={() => {
              onSelectAllClick();
            }}
            isChecked={isAllSelected()}
          >
            Выбрать все
          </Checkbox>
        </SelectAll>
        <RemoveSelected
          onClick={() => {
            removeSelected();
          }}
        >
          <DeleteIcon />
          Удалить выбранное
        </RemoveSelected>
      </SelectMenu>
      <HeaderRow>
        <span></span>
        <span></span>
        <span>Наименование</span>
        <span>Цена</span>
        <span>К-во</span>
        <span>Стоимость</span>
        <span></span>
      </HeaderRow>
      <OrderItemsContainer items={items} />
    </StyledOrderList>
  );
});
