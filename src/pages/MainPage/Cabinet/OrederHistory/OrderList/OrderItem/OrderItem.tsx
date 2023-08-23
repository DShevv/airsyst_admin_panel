import { observer } from "mobx-react-lite";
import Checkbox from "../../../../../../components/Checkbox/Checkbox";
import productStore from "../../../../../../stores/product-store";
import { IProduct } from "../../../../../../types/types";
import {
  DeleteButton,
  OrderImage,
  OrderOldPrice,
  OrderPrice,
  OrderTitle,
  StyledItem,
} from "./OrderItem.style";
import { useCallback, useEffect } from "react";
import expired from "../../../../../../assets/noProduct.svg";
import Count from "../../../../../../components/Count/Count";

interface Props {
  item: IProduct;
}

export const OrderItem = observer(({ item }: Props) => {
  const { changeSelect, setCount } = productStore;

  const createCheckboxOnChange = useCallback(() => {
    return (value: boolean | string) => {
      changeSelect(item, value as boolean);
    };
  }, [changeSelect, item]);

  const createCountOnChange = useCallback(() => {
    return (value: number) => {
      setCount(item, value);
    };
  }, [setCount, item]);

  return (
    <StyledItem>
      <Checkbox
        key={`${item.id} ${item.isSelected}`}
        onChange={createCheckboxOnChange()}
        id={item.id}
        isChecked={item.isSelected}
      />
      <OrderImage src={expired} />
      <OrderTitle>{item.name}</OrderTitle>
      <OrderOldPrice>{item.oldPrice} BYN</OrderOldPrice>
      <Count
        key={item.toString()}
        count={item.count}
        onChange={createCountOnChange()}
      />
      <OrderPrice>{item.price} BYN</OrderPrice>
      <DeleteButton></DeleteButton>
    </StyledItem>
  );
});
