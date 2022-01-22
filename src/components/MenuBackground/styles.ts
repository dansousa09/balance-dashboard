import styled, { css } from "styled-components";

interface IMenuIsOpen {
  menuIsOpen: boolean;
}

export const Container = styled.div<IMenuIsOpen>`
  transition: all ease 0.5s;
  @media (max-width: 800px) {
    ${(props) =>
      props.menuIsOpen &&
      css`
        width: 100%;
        height: 100vh;
        background-color: ${(props) => props.theme.colors.primary};
        /* background-color: red; */
        opacity: 0.6;
        z-index: 85;
        position: fixed;
      `}
  }
`;
