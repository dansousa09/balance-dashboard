import React from 'react';
import { useMenu } from '../../context/menu';
import * as C from './styles';

const MenuHamburger: React.FC = () => {
  const { menuIsOpen, setMenuIsOpen } = useMenu()

  return (
    <C.Container menuIsOpen={menuIsOpen} onClick={() => setMenuIsOpen(true)}>
      <C.HamburgerMenuIcon />
    </C.Container>
  );
}

export default MenuHamburger;