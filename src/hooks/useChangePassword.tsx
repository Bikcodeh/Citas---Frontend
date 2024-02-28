import { useQuery } from "react-query";
import { uptaskApi } from "../api/uptaskApi"
import { ApiResponse } from "../interfaces"

const changePassword = async (token: string) => {
    const { data } = await uptaskApi.get<ApiResponse>(`auth/forgot-password/${token}`);
    return data;
}

export const useChangePassword = (token: string)  => {

    const changePasswordQuery = useQuery({
        queryFn: () => changePassword(token),
        queryKey: ['change-password'],
        retryOnMount: false,
        refetchOnWindowFocus: false,
        enabled: token !== ''
    });

    return {
        changePasswordQuery
    }
}