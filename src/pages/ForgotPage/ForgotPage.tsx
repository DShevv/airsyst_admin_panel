import { Container, Title, Form, Label } from "./ForgotPage.styles";
import FormInput from "../../components/FormInput/FormInput";
import { useCallback, useState } from "react";
import Submit from "../../components/Buttons/Submit/Submit";
import { ForgotForm, ValidationResult } from "../../types/types";
import { isForgotValid } from "../../utils/validation";
import { observer } from "mobx-react-lite";
import modalStore from "../../stores/modal-store";
import { Modal } from "../../components/Modal/Modal";

export const ForgotPage = observer(() => {
  const { setInfo } = modalStore;

  const [data, setData] = useState<ForgotForm>({
    email: "",
  });
  const [isCorrect, setIsCorrect] = useState<ValidationResult>({
    result: false,
    badFields: [],
  });

  const useCreateOnChange = (field: string) => {
    return useCallback(
      (value: string | boolean | number) => {
        setData({ ...data, [field]: value });
      },
      [field, data]
    );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationRes = isForgotValid(data);
    setIsCorrect(validationRes);
    if (validationRes.result) {
      console.log(validationRes, data);
      // ! -----------------------------------
      setInfo({
        text: `Вам на почту было отправлено сообщения для восстановления пароля`,
        link: "/",
        buttonText: "Понятно",
        isVisible: true,
      });
    }
  };

  return (
    <Container>
      <Modal />
      <Title>Забыли свой пароль?</Title>
      <Form onSubmit={onSubmit}>
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={useCreateOnChange("email")}
          required
          className={
            isCorrect.badFields.find((item) => item === "email") ? "error" : ""
          }
        />
        <Label>
          Контрольная строка для смены пароля, а также ваши регистрационные
          данные, будут высланы вам по Email
        </Label>
        <Submit value="Выслать" />
      </Form>
    </Container>
  );
});
