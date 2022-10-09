import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AdminNavBar from "../Navbar/AdminNavBar";

export const AdminRoute = ({ children }) => {
  const { isAdmin } = useAuth();
  if (!isAdmin()) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <AdminNavBar />
      <div className="container mt-2">{children}</div>
    </>
  );
};
