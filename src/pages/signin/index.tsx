import React from 'react';
import logoImg from '../../assets/logo.svg'

import * as C from './styles';

const signin: React.FC = () => {
  return (
    <C.Container>
      <C.Logo>
        <img src={logoImg} alt="Balance Dashboard" />
        <h2>Balance Dashboard</h2>
      </C.Logo>

      <C.Form>
        <C.FormTitle>Entrar</C.FormTitle>
        <input type="text" />
        <input type="text" />
        <button type="submit">Entrar</button>
      </C.Form>
    </C.Container>
  )
}

export default signin;