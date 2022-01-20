import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../context/auth';

import * as C from './styles';

const Signin: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signIn } = useAuth();

  const handleSignIn = (e: React.FormEvent, email: string, password: string) => {
    e.preventDefault()
    signIn(email, password); 
  }

  return (
    <C.Container>
      <C.Logo>
        <img src={logoImg} alt="Balance Dashboard" />
        <h2>Balance Dashboard</h2>
      </C.Logo>

      <C.Form onSubmit={(event) => handleSignIn(event, email, password)}>
        <C.FormTitle>Entrar</C.FormTitle>
        <Input required type="email" placeholder="e-mail" onChange={(e) => setEmail(e.target.value)} />
        <Input required type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Entrar</Button>
      </C.Form>
    </C.Container>
  )
}

export default Signin;