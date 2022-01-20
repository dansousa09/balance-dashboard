import React, { createContext, useState, ReactNode, useContext } from "react";
import { DefaultTheme } from "styled-components";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

interface IThemeContext {
    toggleTheme: () => void;
    theme: DefaultTheme;
}

interface IThemeContextProps {
    children: ReactNode;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

const ThemeProvider: React.FC<IThemeContextProps> = ({ children }) => {
    const [theme, setTheme] = useState<DefaultTheme>(() => {
        const themeOnLocalStorage = localStorage.getItem('@balance-dashboard:theme')

        if (themeOnLocalStorage) {
            return JSON.parse(themeOnLocalStorage)
        } else {
            return dark
        }

    });

    const toggleTheme = () => {


        if (theme.title === 'dark') {
            setTheme(light)
            localStorage.setItem('@balance-dashboard:theme', JSON.stringify(light))
        } else {
            setTheme(dark)
            localStorage.setItem('@balance-dashboard:theme', JSON.stringify(dark))
        }

    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>{children}</ThemeContext.Provider>
    )
}

const useTheme = () => {
    const theme = useContext(ThemeContext);
    return theme;
}

export { ThemeProvider, useTheme };
