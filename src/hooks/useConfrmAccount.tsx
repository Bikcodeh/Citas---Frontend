import { useQuery } from "react-query";
import uptaskApi from "../api/uptaskApi";
import { ApiResponse } from "../interfaces";

export const confirmAccount = async (token: string): Promise<ApiResponse> => {
    const { data } = await uptaskApi.get<ApiResponse>(`auth/confirm/${token}`)
    return data;
}


export const useConfirmAccount = (token: string) => {
    const confirmAccountQuery = useQuery({
        queryKey: ['confirm-account'],
        queryFn: () => confirmAccount(token)
    })

    return {
        confirmAccountQuery
    }
}