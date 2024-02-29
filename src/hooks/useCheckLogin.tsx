import { useQuery } from "react-query"
import { uptaskApi } from "../api/uptaskApi"
import { ProfileResponse } from "../interfaces"

const checkLogin = async (token: string) => {
    const { data } = await uptaskApi.get<ProfileResponse>('users/profile', {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    return data
}

export const useCheckLogin = (token: string) => {
    const checkLoginQuery = useQuery({
        queryKey: ['check-login'],
        queryFn: () => checkLogin(token),
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: token != ''
    })

    return {
        checkLoginQuery
    }
}