export interface Discount {
  name: string;
  percentage: number;
  condition: number;

  labelColor: string;
  labelBackgroundColor: string;
  backgroundColor: string;
}

export interface UserData {
  name: string;
  phone: string;
  companyName: string;
  legalAddress: string;
  physicalAddress: string;
  inn: string;
  isAgent: boolean;
}

export interface User {
  id: number;
  login: string;
  email: string;
  data: UserData | undefined;

  token: string;
}

export interface DataForm {
  name: string;
  phone: string;
  email: string;
  isAgent: boolean;
  organization: string;
  uAddress: string;
  isAddressEquals: boolean;
  fAddress: string | undefined;
  INN: string;
}
