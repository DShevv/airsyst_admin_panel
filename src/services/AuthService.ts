import api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../types/response";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("/token_json", {
      username: email,
      password: password,
    });
  }
}
