import { makeAutoObservable } from "mobx";
import { User, UserData } from "../types/types";

class UserStore {
  user?: User;
  isAuthorized: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (user: User): void => {
    this.user = { ...user };
    localStorage.setItem("user", JSON.stringify(user));
  };

  removeUser = (): void => {
    this.user = undefined;
  };

  setUserData = (data: UserData, email: string): void => {
    if (this.user) {
      this.user = { ...this.user, data: data, email: email };
      localStorage.setItem("user", JSON.stringify(this.user));
    }
  };
}

const userStore = new UserStore();

export default userStore;
