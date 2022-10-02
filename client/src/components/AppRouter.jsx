import { Route, Routes } from "react-router-dom";
import CoursesPage from "../pages/CoursesPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MyFeedbackPage from "../pages/MyFeedbackPage";
import ProfilePage from "../pages/ProfilePage";
import SignupPage from "../pages/SignupPage";
import { ProtectedRoute } from "./ProtectedRoute";

const AppRouter = () => {
  return (
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

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/myfeedback"
        element={
          <ProtectedRoute>
            <MyFeedbackPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;