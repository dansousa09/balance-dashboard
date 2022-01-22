import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./context/theme";
import { AuthProvider } from "./context/auth";
import { MenuProvider } from "./context/menu";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <MenuProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MenuProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
