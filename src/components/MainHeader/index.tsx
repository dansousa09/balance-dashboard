import React, { useMemo, useState } from "react";
import Emoji from "../../utils/emoji";
import { Container, Profile, Welcome, Username, Toggle } from "./styles";
import { useTheme } from "../../context/theme";
import { useMenu } from "../../context/menu";
import MenuHamburger from "../MenuHamburger";

const MainHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

  const { menuIsOpen } = useMenu()

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  }

  const emoji = useMemo<string>(() => {
    const index: number = Math.floor(Math.random() * Emoji.length);
    return Emoji[index];
  }, []);

  return (
    <Container>
      {!menuIsOpen && <MenuHamburger />}
      <Toggle leftLabel="Light" rightLabel="Dark" checked={darkTheme} onChange={handleChangeTheme} />

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <Username>Danilo de Sousa</Username>
      </Profile>
    </Container>
  );
};

export default MainHeader;
