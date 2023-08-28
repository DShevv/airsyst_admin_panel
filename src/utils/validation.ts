import { DataForm, IBooking, ValidationResult } from "../types/types";

export function isStartFormValid(data: DataForm): ValidationResult {
  const result: ValidationResult = {
    result: true,
    badFields: [],
  };

  if (data.name.length < 2) {
    result.result = false;
    result.badFields.push("name");
  }

  if (
    data.phone.match(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
    ) === null
  ) {
    result.result = false;
    result.badFields.push("phone");
  }

  if (data.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) === null) {
    result.result = false;
    result.badFields.push("email");
  }

  if (data.organization.length < 3) {
    result.result = false;
    result.badFields.push("organization");
  }

  if (data.uAddress.length < 4) {
    result.result = false;
    result.badFields.push("uAddress");
  }

  if (data.fAddress && data.fAddress.length < 4) {
    result.result = false;
    result.badFields.push("fAddress");
  }

  if (data.INN.length !== 8) {
    result.result = false;
    result.badFields.push("inn");
  }

  return result;
}

export function isBookingValid(data: IBooking): ValidationResult {
  const result: ValidationResult = {
    result: true,
    badFields: [],
  };

  if (data.inn.length !== 8) {
    result.result = false;
    result.badFields.push("inn");
  }

  if (data.name.length < 2) {
    result.result = false;
    result.badFields.push("name");
  }

  if (data.address.length < 4) {
    result.result = false;
    result.badFields.push("address");
  }

  if (data.mark.length < 2) {
    result.result = false;
    result.badFields.push("mark");
  }

  if (data.count <= 0) {
    result.result = false;
    result.badFields.push("count");
  }

  if (data.dealerManager.length < 2) {
    result.result = false;
    result.badFields.push("dealerManager");
  }

  if (data.dealerName.length < 2) {
    result.result = false;
    result.badFields.push("dealerName");
  }

  if (data.manager.length < 2) {
    result.result = false;
    result.badFields.push("manager");
  }

  if (
    data.phone.match(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
    ) === null
  ) {
    result.result = false;
    result.badFields.push("phone");
  }

  return result;
}
