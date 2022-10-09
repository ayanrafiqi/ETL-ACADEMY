import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import ProtectedNavBar from "../Navbar/ProtectedNavBar";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <ProtectedNavBar />
      <div className="container mt-2">{children}</div>
    </>
  );
};
