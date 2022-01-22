import styled from "styled-components";

interface IProps {
  menuIsOpen: boolean;
}

export const Container = styled.div<IProps>`
  grid-area: AS;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secundary};
  border-right: solid 1px ${(props) => props.theme.colors.gray};
  padding: 20px;

  transition: left ease 0.5s;
  position: relative;

  @media (max-width: 812px) {
    padding-left: 7px;
    position: fixed;
    z-index: 101;
    height: ${(props) => (props.menuIsOpen ? "100vh" : "70px")};
    left: ${(props) => (props.menuIsOpen ? "0" : "-200px")};
    overflow: hidden;

    @media (min-width: 768px) {
      width: 45vw;
      left: ${(props) => (props.menuIsOpen ? "0" : "-45vh")};
      padding-left: 50px;
    }
  }
`;

export const Header = styled.div<IProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .closeBtnHeader {
    display: flex;

    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
    @media (max-width: 760px) {
    }
  }

  > .logoHeader {
    max-height: 70px;
    display: flex;
    align-items: center;
  }
`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
  @media(max-width: 760px) {
    margin-right: 4px;

}
`;
export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white}; 

  @media(max-width: 760px) {
    font-size: 16px;
    margin-right: 24px;
}
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
