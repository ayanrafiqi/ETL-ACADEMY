import { Route, Routes } from "react-router-dom";
import AllFeedbacksPage from "../pages/AllFeedbacksPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";
import CoursesPage from "../pages/CoursesPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MyFeedbackPage from "../pages/MyFeedbackPage";
import MySearchHistoryPage from "../pages/MySearchHistoryPage";
import PinnedCoursesPage from "../pages/PinnedCoursesPage";
import ProfilePage from "../pages/ProfilePage";
import SignupPage from "../pages/SignupPage";
import Temporary from "../pages/Temporary";
import UserDetailsPage from "../pages/UserDetailsPage";
import UsersPage from "../pages/UsersPage";
import { AdminRoute } from "./Route/AdminRoute";
import { ProtectedRoute } from "./Route/ProtectedRoute";
import { PublicRoute } from "./Route/PublicRoute";

const AppRouter = () => {
  return (
  
    <Routes>
    <Route path="/temp"element ={<Temporary/>}/>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignupPage />
          </PublicRoute>
        }
      />
      <Route
        element={
          <PublicRoute>
            <HomePage />
          </PublicRoute>
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
        <Route
        path="/mySearchHistory"
        element={
          <ProtectedRoute>
            <MySearchHistoryPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pinnedCourses"
        element={
          <ProtectedRoute>
            <PinnedCoursesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/courseDetails/:id"
        element={
          <ProtectedRoute>
            <CourseDetailsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/allfeedbacks"
        element={
          <AdminRoute>
            <AllFeedbacksPage />
          </AdminRoute>
        }
      />
      <Route
        path="/users"
        element={
          <AdminRoute>
            <UsersPage />
          </AdminRoute>
        }
      />
      <Route
        path="/userdetails/:id"
        element={
          <AdminRoute>
            <UserDetailsPage />
          </AdminRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
