import { useMutation } from "react-query";
import uptaskApi from "../api/uptaskApi";
import { UserResponse } from "../interfaces";

export const useLogin = () => useMutation((data: { email: string, password: string }) => uptaskApi.post<UserResponse>('auth/login', { email: data.email, password: data.password }))