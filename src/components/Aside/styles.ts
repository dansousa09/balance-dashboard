import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secundary};
  border-right: solid 1px ${(props) => props.theme.colors.gray};
  padding: 20px; 

  position: relative;
`;

export const Header = styled.div`
  max-height: 70px;
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`;
export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
`;

export const MenuContainer = styled.nav`
  margin-top: 50px;
`;

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.info};
  margin: 7px 0;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 24px;
    margin-right: 8px;
  }
`;

export const MenuItemButton = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.info};
  background: none;
  margin: 7px 0;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 24px;
    margin-right: 8px;
  }
`;
