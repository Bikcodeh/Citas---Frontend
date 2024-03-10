import { useQuery } from "react-query";
import uptaskApi from "../api/uptaskApi"
import { ApiResponse } from "../interfaces"

const validateTokenForPassword = async (token: string) => {
    const { data } = await uptaskApi.get<ApiResponse>(`auth/forgot-password/${token}`);
    return data;
}

export const usevalidateTokenForPassword = (token: string)  => {

    const validateTokenForPasswordQuery = useQuery({
        queryFn: () => validateTokenForPassword(token),
        queryKey: ['change-password'],
        retryOnMount: false,
        refetchOnWindowFocus: false,
        enabled: token !== ''
    });

    return {
        validateTokenForPasswordQuery
    }
}