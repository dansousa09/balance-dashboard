import React from 'react';
import { useMenu } from '../../context/menu';

import * as C from './styles';

const MenuBackground: React.FC = () => {
    const {menuIsOpen, setMenuIsOpen} = useMenu()

    return (
        <C.Container menuIsOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)} />
    );
}

export default MenuBackground;