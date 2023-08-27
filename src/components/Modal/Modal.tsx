import { observer } from "mobx-react-lite";
import modalStore from "../../stores/modal-store";
import LinkButton from "../Buttons/LinkButton/LinkButton";
import {
  ModalCaption,
  ModalClose,
  ModalContainer,
  ModalWindow,
} from "./Modal.style";
import { useEffect } from "react";
import { MouseEvent } from "react";

export const Modal = observer(() => {
  const { info, setInfo } = modalStore;

  const closeHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    setInfo({ isVisible: false, text: "", link: "", buttonText: "" });
  };

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <ModalContainer $visible={info.isVisible}>
      <ModalWindow>
        <ModalCaption>{info.text}</ModalCaption>
        <LinkButton to={info.link} onClick={closeHandler}>
          {info.buttonText}
        </LinkButton>
        <ModalClose to={info.link} onClick={closeHandler} />
      </ModalWindow>
    </ModalContainer>
  );
});
