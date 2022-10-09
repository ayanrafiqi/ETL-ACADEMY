import PublicNavBar from "../Navbar/PublicNavBar";

export const PublicRoute = ({ children }) => {
  return (
    <>
      <PublicNavBar />
      <div className="container mt-2">{children}</div>
    </>
  );
};
