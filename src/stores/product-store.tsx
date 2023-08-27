import { makeAutoObservable } from "mobx";
import { IProduct } from "../types/types";

class ProductStore {
  items: IProduct[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  addItems = (items: IProduct[]): void => {
    this.items = items;
  };

  getCount = (items: IProduct[]): number => {
    const selectedItems = items.filter((item) => item.isSelected === true);
    return selectedItems.reduce((acc, item) => item.count + acc, 0);
  };

  setCount = (item: IProduct, count: number): void => {
    const index = this.items.findIndex((i) => i.id === item.id);
    const updatedItem = { ...item, count: count };

    this.items.splice(index, 1, updatedItem);
  };

  getWeight = (items: IProduct[]): number => {
    const selectedItems = items.filter((item) => item.isSelected === true);
    const grams = selectedItems.reduce(
      (acc, item) => item.weight * item.count + acc,
      0
    );
    return grams / 1000;
  };

  getCost = (items: IProduct[]): number => {
    const selectedItems = items.filter((item) => item.isSelected === true);
    return selectedItems.reduce(
      (acc, item) => item.price * item.count + acc,
      0
    );
  };

  isItemSelected = (item: IProduct): boolean => {
    const index = this.items.findIndex((i) => i.id === item.id);

    return this.items[index] ? this.items[index].isSelected : false;
  };

  changeSelect = (item: IProduct, isSelected: boolean): void => {
    const index = this.items.findIndex((i) => i.id === item.id);
    this.items[index] = { ...this.items[index], isSelected: isSelected };
  };

  getItem = (id: string): IProduct => {
    const index = this.items.findIndex((i) => i.id === id);
    return this.items[index];
  };

  selectAll = (): void => {
    this.items = this.items.map((item) => ({ ...item, isSelected: true }));
  };

  isAllSelected = (): boolean => {
    let isAllSelected = true;
    this.items.forEach((item) => {
      if (!item.isSelected) {
        isAllSelected = false;
      }
    });
    return isAllSelected;
  };

  onSelectAllClick = () => {
    if (this.isAllSelected()) {
      this.items = this.items.map((item) => ({ ...item, isSelected: false }));
    } else {
      this.selectAll();
    }
  };

  clearItems = (): void => {
    this.items = [];
  };

  removeItem = (item: IProduct) => {
    this.items = this.items.filter((product) => product.id !== item.id);
  };
  removeSelected = () => {
    this.items = this.items.filter((product) => product.isSelected === false);
  };
}

const productStore = new ProductStore();

export default productStore;
