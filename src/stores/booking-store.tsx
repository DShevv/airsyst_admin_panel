import { makeAutoObservable } from "mobx";
import { IBooking } from "../types/types";
import booking from "../testData/booking";

class BookingStore {
  list: IBooking[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setBooking = (list: IBooking[]): void => {
    this.list = list;
  };

  clearBookings = (): void => {
    this.list = [];
  };

  getBookingById = (id: number): IBooking | undefined => {
    return this.list.find((elem) => elem.id == id);
  };

  getBookingsByUser = (id: number): IBooking[] => {
    const res = this.list.filter((elem) => elem.userID == id);
    return res;
  };
}

const bookingStore = new BookingStore();
bookingStore.setBooking(booking);

export default bookingStore;
