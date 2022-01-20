import React, { createContext, useState, useContext } from 'react';

interface IAuthContext {
    logged: boolean;
    signIn: (email: string, password: string) => void;
    signOut: () => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC = ({ children }) => {

    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem("@balance-dashboard/logged");

        return !!isLogged;
    })

    const signIn = (email: string, password: string) => {
        if (email === 'dan@dan' && password === '123') {
            localStorage.setItem("@balance-dashboard/logged", JSON.stringify(true))
            setLogged(true)

        } else {
            alert('E-mail ou senha inválido');
        }
    }

    const signOut = () => {
        localStorage.removeItem("@balance-dashboard/logged");
        setLogged(false)
    }

    return (
        <AuthContext.Provider value={{ logged, signIn, signOut }}>{children}</AuthContext.Provider>
    );
}

const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth }