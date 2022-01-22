import React from "react";
import { Container, ToggleLabel, ToggleSelector } from "./styles";

import { useMenu } from "../../context/menu";

interface IToggleProps {
  leftLabel: string;
  rightLabel: string;
  checked: boolean;
  onChange: () => void;
}

const Toggle: React.FC<IToggleProps> = ({ leftLabel, rightLabel, checked, onChange }) => {

  const { menuIsOpen } = useMenu()

  return (
    <Container menuIsOpen={menuIsOpen} >
      <ToggleLabel>{leftLabel}</ToggleLabel>
      <ToggleSelector
        checked={checked}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={onChange}
      />
      <ToggleLabel>{rightLabel}</ToggleLabel>
    </Container>
  );
};

export default Toggle;
