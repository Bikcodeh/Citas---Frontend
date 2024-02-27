import { useMutation } from "react-query";
import { uptaskApi } from "../api/uptaskApi";
import { ApiResponse } from "../interfaces";

export const useForgotPassword = () => useMutation((email: string) => uptaskApi.post<ApiResponse>('auth/forgot-password', {email}));