import React from 'react';
import logoImg from '../../assets/logo.svg'
import Button from '../../components/Button';
import Input from '../../components/Input';

import * as C from './styles';

const signin: React.FC = () => {
  return (
    <C.Container>
      <C.Logo>
        <img src={logoImg} alt="Balance Dashboard" />
        <h2>Balance Dashboard</h2>
      </C.Logo>

      <C.Form onSubmit={() => { }}>
        <C.FormTitle>Entrar</C.FormTitle>
        <Input required type="email" placeholder="e-mail" />
        <Input required type="password" placeholder="senha" />
        <Button type="submit">Entrar</Button>
      </C.Form>
    </C.Container>
  )
}

export default signin;