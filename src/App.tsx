import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Routes from "./routes";
import { useTheme } from "./context/theme";

const App: React.FC = () => {

  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
