import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Routes from "./routes";
import { useTheme } from "./context/theme";

import MenuBackground from "./components/MenuBackground";

const App: React.FC = () => {

  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <MenuBackground/>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
