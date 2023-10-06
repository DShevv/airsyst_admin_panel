import {
  Container,
  Title,
  Caption,
  Form,
  Forgot,
  Register,
} from "./AuthPage.styles";
import FormInput from "../../components/FormInput/FormInput";
import { useCallback, useState } from "react";
import Checkbox from "../../components/Checkbox/Checkbox";
import Submit from "../../components/Buttons/Submit/Submit";
import { AuthForm, ValidationResult } from "../../types/types";
import { isLoginValid } from "../../utils/validation";
import { observer } from "mobx-react-lite";
import userStore from "../../stores/user-store";

export const AuthPage = observer(() => {
  const { setUser } = userStore;
  const [data, setData] = useState<AuthForm>({
    email: "",
    password: "",
    rememberMe: false,
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
    const validationRes = isLoginValid(data);
    setIsCorrect(validationRes);
    if (validationRes.result) {
      console.log(validationRes, data);
      // ! -----------------------------------
      setUser({
        id: 1,
        login: "admin",
        email: data.email,
        data: undefined,
        token: "1",
      });
    }
  };

  return (
    <Container>
      <Title>Авторизация</Title>
      <Caption>Пожалуйста, авторизуйтесь</Caption>
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
        <Checkbox
          id="rememberMe"
          isChecked={data.rememberMe}
          onChange={useCreateOnChange("rememberMe")}
        >
          Запомнить меня на этом компьютере
        </Checkbox>
        <Submit value="Войти" />
        <Forgot to={"forgot"}>Забыли пароль?</Forgot>
        <Register to={"register"}>Зарегистрироваться</Register>
      </Form>
    </Container>
  );
});
