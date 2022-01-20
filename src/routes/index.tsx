import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import App from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => (
  <Router>
    {/* <App /> */}
    <AuthRoutes />
  </Router>
);

export default Routes;
