import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./app.routes";
import AuthRoutes from "./auth.routes";

import { useAuth } from "../context/auth";

const Routes: React.FC = () => {
  const { logged } = useAuth()

  return (
    <Router>
      {logged ? <App /> : <AuthRoutes />}
    </Router>
  )
}

export default Routes;
