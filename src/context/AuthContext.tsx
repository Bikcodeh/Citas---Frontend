import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createContext } from "react";
import { ProfileResponse, UserResponse } from "../interfaces";
import { useCheckLogin } from "../hooks";
import { uptaskApi } from "../api/uptaskApi";

interface Props {
    children: React.ReactNode;
}

export type AuthContextType = {
    user?: UserResponse;
    setUser: Dispatch<SetStateAction<UserResponse | undefined>>;
}

export const AuthContext = createContext<AuthContextType>({
    user: undefined,
    setUser: () => { }
});

export const AuthProvider = ({ children }: Props) => {

    const checkLogin = async () => {
        const tokenStorage = localStorage.getItem('token');
        if (!tokenStorage) return;

        const { data } = await uptaskApi.get<ProfileResponse>('users/profile', {
            headers: {
                'Authorization': `Bearer ${tokenStorage}`,
                'Content-Type': 'application/json'
            }
        })
        setUser(data.user)
    }

    const [user, setUser] = useState<UserResponse>();
    useEffect(() => {
        checkLogin()
    }, [])


    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}