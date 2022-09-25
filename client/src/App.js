import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavBar from "./components/AppNavBar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import CoursesPage from "./pages/CoursesPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <AppNavBar />
        <div className="container mt-2">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
              path="/"
            />
            <Route
              path="/courses"
              element={
                <ProtectedRoute>
                  <CoursesPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}
