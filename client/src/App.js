import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppNavBar from "./components/AppNavBar";
import AppRouter from "./components/AppRouter";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <AppNavBar />
        <div className="container mt-2">
          <AppRouter />
        </div>
      </AuthProvider>
    </Router>
  );
}
