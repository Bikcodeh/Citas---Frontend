import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createContext } from "react";
import { ProfileResponse, UserResponse } from "../interfaces";
import uptaskApi from "../api/uptaskApi";
import { useNavigate } from "react-router-dom";

interface Props {
    children: React.ReactNode;
}

export type AuthContextType = {
    user?: UserResponse;
    loading: boolean;
    setUser: Dispatch<SetStateAction<UserResponse | undefined>>;
    doLogout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    user: undefined,
    loading: false,
    setUser: () => { },
    doLogout: () => {}
});

export const AuthProvider = ({ children }: Props) => {

    const [user, setUser] = useState<UserResponse>();
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    const checkLogin = async () => {

        const tokenStorage = localStorage.getItem('token');
        if (!tokenStorage) {
            setLoading(false)
            return;
        };

        try {
            const { data } = await uptaskApi.get<ProfileResponse>('users/profile', {
                headers: {
                    'Authorization': `Bearer ${tokenStorage}`,
                    'Content-Type': 'application/json'
                }
            })
            setUser(data.user)
        } catch (error) {
            console.log('Error Auth')
        }
        setLoading(false);
    }

    useEffect(() => {
        checkLogin()
    }, [])


    const doLogout = () => {
        setUser(undefined);
        localStorage.removeItem('token');
        navigate('/')
    }

    return (
        <AuthContext.Provider value={{ user, setUser, loading, doLogout }}>
            {children}
        </AuthContext.Provider>
    )
}