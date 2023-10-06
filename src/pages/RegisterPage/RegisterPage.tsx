import { Container, Title, Form } from "./RegisterPage.styles";
import FormInput from "../../components/FormInput/FormInput";
import { useCallback, useState } from "react";
import Submit from "../../components/Buttons/Submit/Submit";
import { RegisterForm, ValidationResult } from "../../types/types";
import { isRegisterValid } from "../../utils/validation";
import { observer } from "mobx-react-lite";
import modalStore from "../../stores/modal-store";
import { Modal } from "../../components/Modal/Modal";

export const RegisterPage = observer(() => {
  const { setInfo } = modalStore;
  const [data, setData] = useState<RegisterForm>({
    email: "",
    password: "",
    repeatedPassword: "",
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
    const validationRes = isRegisterValid(data);
    setIsCorrect(validationRes);
    if (validationRes.result) {
      console.log(validationRes, data);
      // ! -----------------------------------
      setInfo({
        text: `Вам на почту было отправлено сообщения для завершения регистрации`,
        link: "/",
        buttonText: "Понятно",
        isVisible: true,
      });
    }
  };

  return (
    <Container>
      <Modal />
      <Title>Зарегистрироваться</Title>
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
        <FormInput
          type="password"
          name="password"
          placeholder="Пароль"
          value={data.password}
          onChange={useCreateOnChange("password")}
          required
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Пароль"
          value={data.repeatedPassword}
          onChange={useCreateOnChange("repeatedPassword")}
          required
          className={
            isCorrect.badFields.find((item) => item === "repeatedPassword")
              ? "error"
              : ""
          }
        />
        <Submit value="Зарегистрировтаься" />
      </Form>
    </Container>
  );
});
