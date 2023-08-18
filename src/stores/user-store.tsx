import { makeAutoObservable } from "mobx";
import { User } from "../types/types";

class UserStore {
  user?: User;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: User): void {
    this.user = user;
  }

  removeUser(): void {
    this.user = undefined;
  }
}

export default UserStore;
