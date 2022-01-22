import styled, { css } from "styled-components";
import Switch, { ReactSwitchProps } from "react-switch";

interface IContainerProps {
  menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
transition: all ease .5s;
  @media (max-width: 800px) {
    display: none;
    ${(props) =>
      props.menuIsOpen &&
      css`
      display: inherit;
        position: absolute;
        bottom: 25px;
        left: 25px;
        z-index: 120;
        @media (min-width: 768px) {
          left: 50px; 
        }
      `};
  }
`;

export const ToggleLabel = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.warning,
  })
)<ReactSwitchProps>`
  margin: 0 7px;
`;
