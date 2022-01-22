import React from 'react';
import { useMenu } from '../../context/menu';
import * as C from './styles';

const CloseMenu: React.FC = () => {
  const {setMenuIsOpen} = useMenu()
  
  return (
    <C.Container onClick={() => setMenuIsOpen(false)}>
      <C.CloseMenuIcon />
    </C.Container>
  );
}

export default CloseMenu;