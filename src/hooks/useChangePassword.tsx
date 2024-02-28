import { useMutation } from "react-query";
import { uptaskApi } from "../api/uptaskApi";
import { ApiResponse } from "../interfaces";

export const useChangePassword = () => {
    const changePasswordMutation = useMutation((data: { token: string, password: string }) =>
        uptaskApi.post<ApiResponse>(`auth/forgot-password/${data.token}`, { password: data.password })
    );

    return {
        changePasswordMutation
    };
};