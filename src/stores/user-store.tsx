import { makeAutoObservable } from "mobx";
import { User, UserData } from "../types/types";

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

const userStore = new UserStore();
userStore.setUser({ id: 1, data: {} as UserData } as User);

export default userStore;
