import styled from "styled-components";
import ToggleSwitch from "../Toggle";

export const Container = styled.div`
  grid-area: MH;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secundary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: solid 1px ${(props) => props.theme.colors.gray};
`;

export const Toggle = styled(ToggleSwitch)`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Profile = styled.div``;

export const Welcome = styled.h3``;

export const Username = styled.span``;
