import React, { useState, createContext, useContext, ReactNode } from 'react';

interface IMenuContext {
    menuIsOpen: boolean;
    setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface IMenuProviderProps {
    children: ReactNode;
}

const MenuContext = createContext<IMenuContext>({} as IMenuContext)

const MenuProvider: React.FC<IMenuProviderProps> = ({ children }) => {

    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(true)

    return (
        <MenuContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>{children}</MenuContext.Provider>
    )
}

const useMenu = () => {
    const menu = useContext(MenuContext);
    return menu;
}

export { MenuProvider, useMenu }
