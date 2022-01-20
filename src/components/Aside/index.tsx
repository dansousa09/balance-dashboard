import React from "react";
import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdExitToApp,
} from "react-icons/md";
import logoImg from "../../assets/logo.svg";
import {
  Container,
  Header,
  LogoImg,
  Title,
  MenuContainer,
  MenuItemLink, 
  MenuItemButton
} from "./styles";

import { useAuth } from "../../context/auth";

const Aside: React.FC = () => {
  const { signOut } = useAuth()

  return (
    <Container>
      <Header>
        <LogoImg src={logoImg} />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/">
          <MdDashboard />
          Dashboard
        </MenuItemLink>
      </MenuContainer>
      <MenuContainer>
        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>
      </MenuContainer>
      <MenuContainer>
        <MenuItemLink href="/list/exit-balance">
          <MdArrowDownward />
          Saídas
        </MenuItemLink>
      </MenuContainer>
      <MenuContainer>
        <MenuItemButton onClick={() => signOut()} type="submit">
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
