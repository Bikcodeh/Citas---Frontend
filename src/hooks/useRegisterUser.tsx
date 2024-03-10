import { useMutation } from "react-query";
import uptaskApi from "../api/uptaskApi"
import { ApiResponse, RegisterFormData } from "../interfaces"

export const useRegisterUser = () => useMutation((userData: RegisterFormData) => uptaskApi.post<ApiResponse>('users', userData));