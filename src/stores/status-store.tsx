import { makeAutoObservable } from "mobx";
import { Discount } from "../types/types";

class StatusStore {
  current?: Discount;
  next?: Discount;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrent(current: Discount): void {
    this.current = current;
  }

  setNext(next: Discount): void {
    this.next = next;
  }
}

export const statusStore = new StatusStore();

statusStore.setCurrent({
  name: "Silver",
  percentage: 5,
  condition: undefined,
  labelColor: "#000000",
  labelBackgroundColor: "#F6F7FC",
  backgroundColor: "#FFFFFF",
});

statusStore.setNext({
  name: "GOLD",
  percentage: 20,
  condition: { percentage: 60, point: 150000 },
  labelColor: "#868686",
  labelBackgroundColor: "#FBF6E9",
  backgroundColor: "#FFFFFF",
});

statusStore.setCurrent({
  name: "Gold",
  percentage: 20,
  condition: undefined,
  labelColor: "#000000",
  labelBackgroundColor: "#FBF6E9",
  backgroundColor:
    "linear-gradient(114deg, #E9D8A6 0%, #E9DCB7 49.48%, #EAD9A7 100%)",
});

statusStore.setNext({
  name: "Black",
  percentage: 30,
  condition: { percentage: 60, point: 150000 },
  labelColor: "#A19D9D",
  labelBackgroundColor: "#181816",
  backgroundColor: "#FFFFFF",
});

export default statusStore;
