import { useCallback, useEffect, useState } from "react";
import Checkbox from "../../components/Checkbox/Checkbox";
import FormInput from "../../components/FormInput/FormInput";
import Hint from "../../components/Hint/Hint";
import InlineLink from "../../components/InlineLink/InlineLink";
import { Cell, Form, Row, Title } from "./FormPage.style";
import { DataForm } from "../../types/types";
import Submit from "../../components/Buttons/Submit/Submit";

export default function FormPage() {
  const [data, setData] = useState<DataForm>({} as DataForm);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const useCreateOnChange = (field: string) => {
    return useCallback(
      (value: string | boolean) => {
        setData({ ...data, [field]: value });
      },
      [field]
    );
  };

  const fAddressOnChange = useCreateOnChange("fAddress");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Title>Введите контактные данные</Title>
      <Hint>
        {" "}
        Уже покупаете у нас? Войдите в{" "}
        <InlineLink to="/login">личный кабинет</InlineLink>
      </Hint>
      <Row>
        <FormInput
          type="text"
          placeholder="Имя"
          name="firstName"
          required
          onChange={useCreateOnChange("name")}
        />
        <FormInput
          type="tel"
          placeholder="Телефон"
          name="phone"
          required
          onChange={useCreateOnChange("phone")}
        />
        <FormInput
          type="email"
          placeholder="Email"
          required
          onChange={useCreateOnChange("email")}
        />
      </Row>
      <Checkbox id="agent" onChange={useCreateOnChange("isAgent")}>
        Я представитель юридического лица или ИП
      </Checkbox>
      <Hint>
        Данной организации еше нет в нашей базе. Пожалуйста, введите по ней
        информацию.
      </Hint>
      <Row>
        <FormInput
          type="text"
          placeholder="Название организации*"
          name="organization"
          required
          onChange={useCreateOnChange("organization")}
        />
        <Cell>
          <FormInput
            type="text"
            placeholder="Юридический адрес*"
            name="address"
            required
            onChange={useCreateOnChange("uAddress")}
          />
          <Checkbox
            id="isAddressEquals"
            onChange={useCreateOnChange("isAddressEquals")}
          >
            Совпадает с физическим
          </Checkbox>
        </Cell>
        {!data.isAddressEquals ? (
          <FormInput
            type="text"
            placeholder="Физический адрес*"
            name="address"
            required
            onChange={fAddressOnChange}
          />
        ) : undefined}
      </Row>
      <Row>
        <FormInput
          type="number"
          placeholder="ИНН*"
          name="INN"
          required
          minLength={12}
          maxLength={12}
          onChange={useCreateOnChange("INN")}
        />
      </Row>

      <Submit value="Продолжить" />
    </Form>
  );
}
