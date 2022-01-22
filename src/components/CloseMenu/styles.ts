import styled, { css } from 'styled-components';
import { BsBoxArrowRight } from 'react-icons/bs'
import { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  menuIsOpen: boolean;
}

export const Container = styled.button<IProps>`
  display: none;

  @media (max-width: 800px) {
    ${(props) =>
      !props.menuIsOpen &&
      css`
        display: inherit;

        width: 35px;
        height: 35px;
        border-radius: 4px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${(props) => props.theme.colors.tertiary};
        color: ${(props) => props.theme.colors.white};
      `}
  }
`;

export const CloseMenuIcon = styled(BsBoxArrowRight)`
    width: 70%;
    height: 70%;
    font-weight: bold;
`
