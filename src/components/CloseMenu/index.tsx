import React from 'react';
import { useMenu } from '../../context/menu';
import * as C from './styles';

const CloseMenu: React.FC = () => {
  const { menuIsOpen, setMenuIsOpen } = useMenu()

  return (
    <C.Container menuIsOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
      <C.CloseMenuIcon />
    </C.Container>
  );
}

export default CloseMenu;