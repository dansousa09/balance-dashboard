import React, { useMemo } from "react";
import Toggle from "../Toggle";
import Emoji from "../../utils/emoji";
import { Container, Profile, Welcome, Username } from "./styles";

const MainHeader: React.FC = () => {
  const emoji = useMemo<string>(() => {
    const index: number = Math.floor(Math.random() * Emoji.length);
    return Emoji[index];
  }, []);

  return (
    <Container>
      <Toggle />
      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <Username>Danilo de Sousa</Username>
      </Profile>
    </Container>
  );
};

export default MainHeader;
