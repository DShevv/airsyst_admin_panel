import { makeAutoObservable } from "mobx";
import { IModal } from "../types/types";

class ModalStore {
  info: IModal = {
    isVisible: false,
    text: "",
    link: "",
    buttonText: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setInfo = (info: IModal) => {
    this.info = { ...info };
  };

  setVisible = (value: boolean) => {
    this.info = { ...this.info, isVisible: value };
  };
}

const modalStore = new ModalStore();

export default modalStore;
