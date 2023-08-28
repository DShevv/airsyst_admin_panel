import { useCallback, useEffect, useState } from "react";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import InlineLink from "../../../../components/InlineLink/InlineLink";
import {
  Cell,
  Form,
  Row,
  SettingHint,
  SettingInput,
  StyledSettings,
  Title,
} from "./UserSettings.style";
import { DataForm, ValidationResult } from "../../../../types/types";
import Submit from "../../../../components/Buttons/Submit/Submit";
import { isStartFormValid } from "../../../../utils/validation";
import userStore from "../../../../stores/user-store";

export default function UserSettings() {
  const { user, setUserData } = userStore;
  const [data, setData] = useState<DataForm>({
    name: "",
    phone: "",
    email: "",
    isAgent: false,
    organization: "",
    uAddress: "",
    isAddressEquals: false,
    fAddress: "",
    INN: "",
  });
  const [isCorrect, setIsCorrect] = useState<ValidationResult>({
    result: false,
    badFields: [],
  });

  useEffect(() => {
    if (user && user.data) {
      setData({
        name: user.data.name,
        phone: user.data.phone,
        email: user.email,
        isAgent: user.data.isAgent,
        organization: user.data.companyName,
        uAddress: user.data.legalAddress,
        isAddressEquals: user.data.legalAddress === user.data.physicalAddress,
        fAddress: user.data.physicalAddress,
        INN: user.data.inn,
      });
    }
  }, []);

  useEffect(() => {
    if (data.isAddressEquals) {
      if (data.fAddress) {
        data.fAddress = null;
      }
    }
    console.log(data);
  }, [data]);

  const useCreateOnChange = (field: string) => {
    return useCallback(
      (value: string | boolean | number) => {
        setData({ ...data, [field]: value });
      },
      [field, data]
    );
  };

  const fAddressOnChange = useCreateOnChange("fAddress");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationRes = isStartFormValid(data);
    setIsCorrect(validationRes);
    if (validationRes.result) {
      console.log("push to server");
      setUserData(
        {
          name: data.name,
          phone: data.phone,
          companyName: data.organization,
          legalAddress: data.uAddress,
          physicalAddress:
            data.fAddress !== null ? data.fAddress : data.uAddress,
          inn: data.INN,
          isAgent: data.isAgent,
        },
        data.email
      );
    }
  };

  return (
    <StyledSettings>
      <Form onSubmit={onSubmit}>
        <Title>Введите контактные данные</Title>
        <SettingHint>
          {" "}
          Уже покупаете у нас? Войдите в{" "}
          <InlineLink to="/login">личный кабинет</InlineLink>
        </SettingHint>
        <Row>
          <SettingInput
            type="text"
            placeholder="Имя"
            name="firstName"
            required
            onChange={useCreateOnChange("name")}
            className={
              isCorrect.badFields.find((item) => item === "name") ? "error" : ""
            }
            value={data.name}
          />
          <SettingInput
            type="tel"
            placeholder="Телефон"
            name="phone"
            required
            onChange={useCreateOnChange("phone")}
            className={
              isCorrect.badFields.find((item) => item === "phone")
                ? "error"
                : ""
            }
            value={data.phone}
          />
          <SettingInput
            type="email"
            placeholder="Email"
            required
            onChange={useCreateOnChange("email")}
            className={
              isCorrect.badFields.find((item) => item === "email")
                ? "error"
                : ""
            }
            value={data.email}
          />
        </Row>
        <Checkbox
          id="agent"
          onChange={useCreateOnChange("isAgent")}
          isChecked={data.isAgent}
        >
          Я представитель юридического лица или ИП
        </Checkbox>
        <SettingHint>
          Данной организации еше нет в нашей базе. Пожалуйста, введите по ней
          информацию.
        </SettingHint>
        <Row>
          <SettingInput
            type="text"
            placeholder="Название организации*"
            name="organization"
            required
            onChange={useCreateOnChange("organization")}
            className={
              isCorrect.badFields.find((item) => item === "organization")
                ? "error"
                : ""
            }
            value={data.organization}
          />
          <Cell>
            <SettingInput
              type="text"
              placeholder="Юридический адрес*"
              name="address"
              required
              onChange={useCreateOnChange("uAddress")}
              className={
                isCorrect.badFields.find((item) => item === "uAddress")
                  ? "error"
                  : ""
              }
              value={data.uAddress}
            />
            <Checkbox
              id="isAddressEquals"
              onChange={useCreateOnChange("isAddressEquals")}
              isChecked={data.isAddressEquals}
            >
              Совпадает с физическим
            </Checkbox>
          </Cell>
          {!data.isAddressEquals ? (
            <SettingInput
              type="text"
              placeholder="Физический адрес*"
              name="address"
              required
              onChange={fAddressOnChange}
              className={
                isCorrect.badFields.find((item) => item === "fAddress")
                  ? "error"
                  : ""
              }
              value={data.fAddress !== null ? data.fAddress : ""}
            />
          ) : undefined}
        </Row>
        <Row>
          <SettingInput
            type="number"
            placeholder="ИНН*"
            name="INN"
            required
            minLength={8}
            maxLength={8}
            onChange={useCreateOnChange("INN")}
            className={
              isCorrect.badFields.find((item) => item === "inn") ? "error" : ""
            }
            value={data.INN}
          />
        </Row>

        <Submit value="Изменить" />
      </Form>
    </StyledSettings>
  );
}
