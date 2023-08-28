import { observer } from "mobx-react-lite";
import FormInput from "../../../../../components/FormInput/FormInput";
import {
  BookingForm,
  BookingSubmit,
  CommentaryInput,
  FullWidthInput,
  StyledCreateForm,
} from "./BookingCreate.style";
import { useNavigate, useParams } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import bookingStore from "../../../../../stores/booking-store";
import { IBooking } from "../../../../../types/types";
import userStore from "../../../../../stores/user-store";
import { isBookingValid } from "../../../../../utils/validation";
import modalStore from "../../../../../stores/modal-store";

export const BookingCreate = observer(() => {
  const navigate = useNavigate();
  const { setInfo } = modalStore;
  const { id } = useParams();
  const { user } = userStore;
  const { getBookingById, list } = bookingStore;
  const [copiedBooking, setCopiedBooking] = useState<IBooking | undefined>();
  const [isInnValid, setIsInnValid] = useState(false);
  const [formData, setFormData] = useState<IBooking>({
    id: list.length + 1,
    userID: user ? user.id : 0,
    status: "pending",
    date: new Date().toISOString(),
    inn: "",
    name: "",
    address: "",
    mark: "",
    count: 0,
    dealerManager: "",
    dealerName: "",
    manager: "",
    commentary: "",
    phone: "",
  });

  useEffect(() => {
    if (id !== undefined) {
      setCopiedBooking(getBookingById(Number(id)));
    }
    console.log(1);
  }, []);

  useEffect(() => {
    if (copiedBooking) {
      setFormData({
        ...copiedBooking,
        id: formData.id,
        userID: formData.userID,
        status: formData.status,
        date: formData.date,
      } as IBooking);
    }
  }, [copiedBooking]);

  useEffect(() => {
    if (formData.inn.length === 8) {
      setIsInnValid(true);
    } else {
      setIsInnValid(false);
    }
    console.log(formData);
  }, [formData]);

  const crateChangeHandler = (fieldName: string) => {
    return (value: string | number | boolean) => {
      setFormData({ ...formData, [fieldName]: value });
    };
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = isBookingValid(formData);
    if (validationResult.result) {
      console.log("request to server", formData);
      setInfo({
        text: "Заявка на бронирование принята в обработку",
        link: "../booking",
        buttonText: "Продолжить",
        isVisible: true,
      });
    }
  };

  return (
    <StyledCreateForm>
      <BookingForm onSubmit={submit}>
        <FormInput
          type="number"
          minLength={8}
          maxLength={8}
          required
          placeholder="ИНН"
          area="inn"
          value={formData.inn}
          onChange={crateChangeHandler("inn")}
        />
        {isInnValid ? (
          <>
            <FormInput
              type="text"
              required
              placeholder="Конечный потребитель"
              name="company"
              area="name"
              onChange={crateChangeHandler("name")}
              value={formData.name}
            />
            <FormInput
              type="text"
              required
              placeholder="Регион, город потребителя"
              name="address"
              area="address"
              onChange={crateChangeHandler("address")}
              value={formData.address}
            />
          </>
        ) : (
          ""
        )}
        <FullWidthInput
          type="text"
          required
          placeholder="Марка оборудования"
          name="mark"
          area="mark"
          onChange={crateChangeHandler("mark")}
          value={formData.mark}
        />
        <FormInput
          type="number"
          required
          placeholder="Количество"
          name="count"
          area="count"
          onChange={crateChangeHandler("count")}
          value={formData.count.toString()}
        />
        <FullWidthInput
          type="text"
          required
          placeholder="Дилер"
          name="dName"
          area="dName"
          onChange={crateChangeHandler("dealerName")}
          value={formData.dealerName}
        />
        <FullWidthInput
          type="text"
          required
          placeholder="Отв. менеджер дилера"
          name="dManager"
          area="dManager"
          onChange={crateChangeHandler("dealerManager")}
          value={formData.dealerManager}
        />
        <FormInput
          type="tel"
          required
          placeholder="Номер телефона"
          name="phone"
          area="phone"
          onChange={crateChangeHandler("phone")}
          value={formData.phone}
        />
        <FullWidthInput
          type="text"
          required
          placeholder="Отв. менеджер AIRSYST"
          name="manager"
          area="manager"
          onChange={crateChangeHandler("manager")}
          value={formData.manager}
        />
        <CommentaryInput
          placeholder="Комментарий"
          area="commentary"
          value={formData.commentary}
          onChange={(e: FormEvent<HTMLTextAreaElement>) => {
            setFormData({ ...formData, commentary: e.currentTarget.value });
          }}
        ></CommentaryInput>

        <BookingSubmit />
      </BookingForm>
    </StyledCreateForm>
  );
});
