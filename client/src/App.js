import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </Router>
  );
}
