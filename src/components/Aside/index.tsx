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
import { useMenu } from "../../context/menu";
import CloseMenu from "../CloseMenu";

const Aside: React.FC = () => {
  const { signOut } = useAuth()
  const { menuIsOpen } = useMenu()

  return (
    <Container menuIsOpen={menuIsOpen}>
      <Header menuIsOpen={menuIsOpen}>

        <div className="logoHeader">
          <LogoImg src={logoImg} />
          <Title>Minha Carteira</Title>
        </div>
        {menuIsOpen && <div className="closeBtnHeader"><CloseMenu /></div>}
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
