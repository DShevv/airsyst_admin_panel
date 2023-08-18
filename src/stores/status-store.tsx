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

export default StatusStore;
